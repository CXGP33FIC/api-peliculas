const express = require('express');
const router = express.Router();
const service = require('../services/peliculaService');
const validarApiKey = require('../middleware/auth');

router.get('/', async (req, res) => res.json(await service.listar()));
router.get('/:id', async (req, res) => {
    const peli = await service.buscarPorId(req.params.id);
    peli ? res.json(peli) : res.status(404).json({ error: "No encontrada" });
});

router.post('/', validarApiKey, async (req, res) => res.status(201).json(await service.crear(req.body)));
router.put('/:id', validarApiKey, async (req, res) => res.json(await service.actualizar(req.params.id, req.body)));
router.delete('/:id', validarApiKey, async (req, res) => {
    await service.eliminar(req.params.id);
    res.status(204).send();
});

module.exports = router;
