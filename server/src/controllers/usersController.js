const usersSchema = require("../models/users");
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");

const getAllUsersController = async (req, res) => {
  try {
    const data = await usersSchema.find();
    if (data.length === 0) {
      return res.status(400).json({ message: "No hay usuarios en la BD" });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err);
  }
};

const getUsersByIdController = async (req, res) => {
  try {
    const data = await usersSchema.findById(req.params._id);
    if (!data) {
      return res.status(404).json({ message: "No se encontró el usuario" });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUsersController = async (req, res) => {
  const { username, name, email, password } = req.body;

  // Validación de campos vacíos
  if (!username?.trim() || !name?.trim() || !email?.trim()) {
    return res
      .status(400)
      .json({ error: "Hay campos vacíos en el formulario" });
  }

  try {
    // Verificar si el username o email ya existen en otro usuario
    const existingUser = await usersSchema.findOne({
      $or: [{ username }, { email }],
      _id: { $ne: req.params._id }, // Excluir al usuario actual
    });

    if (existingUser) {
      return res.status(400).json({
        error: "El username o email ya están en uso por otro usuario",
      });
    }

    // Actualizar usuario
    let updateFields = { username, name, email };

    // Si se proporciona una contraseña válida, hashearla
    if (password && password.trim() !== "") {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateFields.password = hashedPassword;
    }

    // Actualizar usuario en la base de datos
    const updatedUser = await usersSchema.findByIdAndUpdate(
      req.params._id,
      updateFields,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "No se encontró el usuario" });
    }

    // Respuesta exitosa
    res.status(200).json({
      user_id: updatedUser._id,
      username: updatedUser.username,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err);
  }
};


const deleteUsersController = async (req, res) => {
  try {
    const data = await usersSchema.findByIdAndDelete(req.params._id);
    if (!data) {
      return res.status(404).json({ message: "No se encontró el usuario" });
    }
    res
      .status(201)
      .json({ message: `Usuario con ID ${data._id} eliminado con exito` });
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.error(err);
  }
};

module.exports = {
  getAllUsersController,
  getUsersByIdController,
  updateUsersController,
  deleteUsersController,
};
