const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require('../middleware/multer-config');

const stuffController = require('../controllers/stuff');

router.post('/', auth, multer, stuffController.createThing);
router.get('/:id', auth, stuffController.readOneThing);
router.get('/', auth, stuffController.readAllThings);
router.put('/:id', auth, multer, stuffController.updateThing);
router.delete('/:id', auth, stuffController.deleteThing);

module.exports = router;
