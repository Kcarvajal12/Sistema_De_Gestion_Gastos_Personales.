require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Transaccion = require('./models/Transaccion');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB conectado');

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Servidor en http://localhost:${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.log('Error conectando a MongoDB:', err.message);
  });

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.post('/api/transacciones', async (req, res) => {
  try {
    const nuevaTransaccion = new Transaccion(req.body);
    const transaccionGuardada = await nuevaTransaccion.save();
    res.status(201).json(transaccionGuardada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/transacciones', async (req, res) => {
  try {
    const transacciones = await Transaccion.find().sort({ fecha: -1 });
    res.json(transacciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/transacciones/:id', async (req, res) => {
  try {
    const transaccion = await Transaccion.findById(req.params.id);

    if (!transaccion) {
      return res.status(404).json({ mensaje: 'Transacción no encontrada' });
    }

    res.json(transaccion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/transacciones/:id', async (req, res) => {
  try {
    const transaccionActualizada = await Transaccion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!transaccionActualizada) {
      return res.status(404).json({ mensaje: 'Transacción no encontrada' });
    }

    res.json(transaccionActualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/api/transacciones/:id', async (req, res) => {
  try {
    const transaccionEliminada = await Transaccion.findByIdAndDelete(req.params.id);

    if (!transaccionEliminada) {
      return res.status(404).json({ mensaje: 'Transacción no encontrada' });
    }

    res.json({ mensaje: 'Transacción eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});