const User = require('../models/User');
const fs = require('fs');
const path = require('path');

exports.updateUserToPremium = async (req, res) => {
    const userId = req.params.uid;

    try {
        const user = await User.findById(userId);

        const requiredDocuments = ['Identificación', 'Comprobante de domicilio', 'Comprobante de estado de cuenta'];
        const hasAllDocuments = requiredDocuments.every(doc => 
            user.documents.some(userDoc => userDoc.name === doc)
        );

        if (!hasAllDocuments) {
            return res.status(400).json({ message: 'El usuario no ha terminado de procesar su documentación.' });
        }

        user.role = 'premium';
        await user.save();

        res.status(200).json({ message: 'Usuario actualizado a premium.' });
    } catch (error) {
        res.status(500).json({ message: 'Error actualizando el usuario a premium.', error });
    }
};

exports.uploadUserDocuments = async (req, res) => {
    const userId = req.params.uid;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        const files = req.files;

        files.forEach(file => {
            const doc = {
                name: file.originalname,
                reference: file.path
            };
            user.documents.push(doc);
        });

        await user.save();
        res.status(200).json({ message: 'Documentos subidos con éxito.', documents: user.documents });
    } catch (error) {
        res.status(500).json({ message: 'Error subiendo los documentos.', error });
    }
};
