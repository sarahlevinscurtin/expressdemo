require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const eventsRouter = require('./domain/events');
const app = express();
const port = 3000;

const mongoDbUser = process.env.MONGO_DB_USER;
const mongoDbPassword = process.env.MONGO_DB_PASSWORD;
mongoose.connect(`mongodb+srv://${mongoDbUser}:${mongoDbPassword}@cluster0.wkjhpyu.mongodb.net/`);

app.use((req, res, next) => {
    const envApiKey = process.env.API_KEY;
    const reqApiKey = req.header('X-API-KEY');
    if (!reqApiKey) {
        res.status(401).send('Unauthorized');
        return;
    } else if (reqApiKey !== envApiKey) {
        res.status(403).send('Forbidden');
        return;
    } else {
        next();
    }
});

app.use(express.json());
app.use('/events', eventsRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));