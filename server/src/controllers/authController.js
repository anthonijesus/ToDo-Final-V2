const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
const User = require('../models/users');

const { generateToken } = require('../db/jwt'); // Asumimos que tienes una función para generar el token

// Login Controller
const loginUserController = async (req, res) => {
    
    const { username, password } = req.body;

    // Validaciones básicas
    if (!username || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    
    try {
        // Verificar si el usuario existe en MongoDB
        const user = await User.findOne({ username });
        
        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }
        
        // Verificar contraseña
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        
        // Generar un token JWT
        const token = generateToken(user._id, user.username);

        res.status(200).json({
            user_id: user._id,
            username: user.username,
            email: user.email,
            name: user.name,
            token
        });
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', details: error.message });
    }
};

// Create User Controller
const createUserController = async (req, res) => {
    const { username, name, email, password } = req.body;

    // Validaciones básicas
    if (!username || !name || !password || !email) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    if (typeof username !== 'string' || typeof name !== 'string') {
        return res.status(400).json({ error: 'Los campos "username" y "name" deben ser cadenas de texto' });
    }

    try {
        // Verificar si el nombre de usuario o email ya existen
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        
        if (existingUser) {
            return res.status(400).json({ error: 'El nombre de usuario o email ya existen' });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el usuario
        const newUser = new User({
            username,
            name,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        // Generar un token JWT
        const token = generateToken(savedUser._id, savedUser.username);

        res.status(201).json({
            user_id: savedUser._id,
            username: savedUser.username,
            name: savedUser.name,
            email: savedUser.email,
            token
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al insertar el usuario en la base de datos', details: error.message });
    }
};

module.exports = { loginUserController, createUserController };
