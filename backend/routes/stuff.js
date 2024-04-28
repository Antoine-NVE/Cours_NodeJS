const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const stuffController = require('../controllers/stuff');

router.post('/', auth, stuffController.createThing);
router.get('/:id', auth, stuffController.readOneThing);
router.get('/', auth, stuffController.readAllThings);
router.put('/:id', auth, stuffController.updateThing);
router.delete('/:id', auth, stuffController.deleteThing);

module.exports = router;
