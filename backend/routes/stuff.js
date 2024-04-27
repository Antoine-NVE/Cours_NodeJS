const express = require('express');
const router = express.Router();

const stuffController = require('../controllers/stuff');

router.post('/', stuffController.createThing);
router.get('/:id', stuffController.readOneThing);
router.get('/', stuffController.readAllThings);
router.put('/:id', stuffController.updateThing);
router.delete('/:id', stuffController.deleteThing);

module.exports = router;
