const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = []; 
app.post('/api/register', (req, res) => {
  const { nombre, email, password } = req.body;

 
  if (!nombre || !email || !password) {
    return res.status(400).json({ mensaje: 'Faltan campos' });
  }

  const existe = usuarios.find(u => u.email === email);
  if (existe) return res.status(409).json({ mensaje: 'Ya existe el usuario' });

  const hash = bcrypt.hashSync(password, 8);
  usuarios.push({ nombre, email, password: hash });
  res.json({ mensaje: 'Usuario registrado correctamente' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
