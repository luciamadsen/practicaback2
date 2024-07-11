const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateJWT } = require('../middleware/authMiddleware');
const upload = require('../middleware/multerMiddleware');

router.post('/premium/:uid', authenticateJWT, userController.updateUserToPremium);
router.post('/:uid/documents', authenticateJWT, upload.array('documents'), userController.uploadUserDocuments);

module.exports = router;
