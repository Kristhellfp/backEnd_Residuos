const express = require('express');
const router = express.Router();
const Partida = require('../models/Partida');

router.post('/', async (req, res) => {
  try {
    const { codigo } = req.body;

    if (!codigo) {
      return res.status(400).json({ mensaje: 'El código es obligatorio' });
    }

    const nueva = await Partida.create({ codigo, activa: true });
    res.status(201).json(nueva);
  } catch (error) {
    console.error('❌ Error al crear partida:\n', error);
    res.status(500).json({ mensaje: 'Error al crear partida' });
  }
});

router.get('/:codigo', async (req, res) => {
  try {
    const partida = await Partida.findOne({ where: { codigo: req.params.codigo } });

    if (partida) {
      res.status(200).json(partida);
    } else {
      res.status(404).json({ mensaje: 'Código no encontrado' });
    }
  } catch (error) {
    console.error('❌ Error al verificar partida:\n', error);
    res.status(500).json({ mensaje: 'Error interno al verificar' });
  }
});

module.exports = router;
