const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5120;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('======= MongoDB Connected ======='))
    .catch(err => console.error('MongoDB Connection Error:', err));

const routes = require('./routes');
routes(app);

app.listen(PORT, () => {
    console.log(`======= Server is running on port ${PORT} =======`);
});
