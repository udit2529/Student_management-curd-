const express = require('express');
const studentController  = require('../controllers/studentController');
const router = express.Router();



router.get('/',studentController.getAllDoc)
router.post('/',studentController.createDoc)
router.get('/edit/:id',studentController.editDoc)
router.post('/update/:id',studentController.updateDocById)
router.post('/delete/:id',studentController.deleteDocById )
module.exports = router;