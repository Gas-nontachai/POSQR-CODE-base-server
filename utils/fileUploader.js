const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const ensureDirectoryExistence = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const folderPath = req.body.folderPath ? path.resolve(__dirname, `../public/${req.body.folderPath}`) : path.resolve(__dirname, 'uploads/');

        ensureDirectoryExistence(folderPath);
        cb(null, folderPath);
    },
    filename: function (req, file, cb) {
        const uniqueName = uuidv4();
        const extension = path.extname(file.originalname);
        cb(null, `${uniqueName}${extension}`);
    }
});

const upload = multer({ storage: storage });

const removeFile = (filePath) => {
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
            } else {
                console.log('File deleted successfully');
            }
        });
    }
};

module.exports = { upload, removeFile };
