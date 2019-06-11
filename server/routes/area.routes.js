const express = require('express');
const asyncHandler = require('express-async-handler');
const areaCtr = require('../controllers/area.controller');

const router = express.Router();

router.get('/', asyncHandler(areaCtr.getAreas));
router.get('/:id', asyncHandler(areaCtr.getArea));

router.post('/', asyncHandler(areaCtr.createArea));

router.delete('/:id', asyncHandler(areaCtr.deleteArea));

module.exports = router;