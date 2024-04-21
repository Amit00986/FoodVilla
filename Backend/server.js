
const express = require('express');

const app = express();

const { default: mongoose } = require('mongoose');

const PORT = 8000

app.use(express.json());

const apiRoute = require('./src/apis/routes/index');

app.use('/', apiRoute);

const dbConnect = async() => {
    const db = await mongoose.connect('mongodb://localhost:27017/ResturantList')
    if(db) {
        console.log('mongodb is connected');
    }
};

dbConnect();

const server = app.listen(PORT, () => {
    console.log(`Server is Started on ${PORT}`)
});
