const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRouter = require('./routes/authRoutes');
const tasksRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');
const verifyToken = require('./middlewares/auth.middlewares');

const app = express();

const port = process.env.PORT || 3001;

// Middlewares
app.use(cors()); // Configurar CORS para permitir solicitudes desde el frontend
app.use(express.json());

app.use('/api/auth', authRouter);
app.use(verifyToken); // Verifica el token de autenticación
app.use('/api', tasksRouter);
app.use('/api', usersRouter);



mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB')).catch(error => console.error(error));
    
app.listen(port, () => console.log(`Server running on port ${port}`));