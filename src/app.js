const express = require('express');
const mongoose = require('mongoose');
const eventsRouter = require('./domain/events');
const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://admin:admin@cluster0.wkjhpyu.mongodb.net/');

app.use(express.json());
app.use('/events', eventsRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));