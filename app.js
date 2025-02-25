const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5120;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('======= MongoDB Connected =======');

        const { BillModel } = require('./models');

        await BillModel.collection.dropIndexes();
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
    }
};

connectDB();

const routes = require('./routes');
routes(app);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`======= Server is running on port ${PORT} =======`);
});
