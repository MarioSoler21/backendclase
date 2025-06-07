const express = require('express');
const cors = require('cors'); 
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

//rut
app.use('/api/auth', require('./routes/authRoutes'));

// Puerto
const PORT = process.env.PORT || 3001;
app.listen(
    PORT, 
    () => console.log(`Servidor corriendo perra en el puerto ${PORT}`)
);
