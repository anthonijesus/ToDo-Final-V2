const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Obtener el token del encabezado
    
    if (!token) {
        return res.status(403).json({ message: 'Token no suministrado' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET); // Verificar el token
        req.user = decoded; // Agregar información del usuario al objeto request
        next(); // Continuar con el siguiente middleware o controlador
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
};

module.exports = verifyToken;
