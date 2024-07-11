const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = '';
        if (file.mimetype.startsWith('image')) {
            folder = 'profiles';
        } else if (file.mimetype.startsWith('application')) {
            folder = 'documents';
        } else if (file.mimetype.startsWith('product')) {
            folder = 'products';
        }
        cb(null, path.join(__dirname, `../uploads/${folder}`));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
