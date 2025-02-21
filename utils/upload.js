const path = require("path");
const fs = require("fs");
const multer = require("multer");
const { v4: uuidv4 } = require('uuid')

const uploadDirectory = path.join(__dirname, "../public/");

if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = (folder) => multer.diskStorage({
    destination: function (req, file, cb) {
        const folderPath = path.join(uploadDirectory, folder || 'default');

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        cb(null, folderPath);
    },
    filename: function (req, file, cb) {
        const prefix = folder ? folder[0].toUpperCase() : '';
        const uniqueSuffix = prefix + new Date().toISOString().slice(2, 10).replace(/-/g, '') + uuidv4() + path.extname(file.originalname);
        cb(null, uniqueSuffix);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only JPEG, PNG, GIF, and WEBP are allowed."), false);
    }
};

const upload = (folder) => multer({
    storage: storage(folder),
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }
});

module.exports = {
    storage,
    uploadSingle: (folder) => upload(folder).single("menu_img"),
    uploadMultiple: (folder) => upload(folder).array("menu_img", 5),

    removeFile: (filePath) => {
        const fileToDelete = path.join(__dirname, filePath);

        fs.access(fileToDelete, fs.constants.F_OK, (err) => {
            if (err) {
                console.log("File does not exist:", fileToDelete);
                return;
            }

            fs.unlink(fileToDelete, (err) => {
                if (err) {
                    console.log("Error deleting file:", err);
                } else {
                    console.log("File deleted successfully:", fileToDelete);
                }
            });
        });
    }
};
