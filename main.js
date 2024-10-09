//require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const port = process.env.APP_PORT;
const database_url = process.env.DATABASE_URL;
console.log(database_url);
mongoose.connect(database_url).then(() => {

    const app = express();
    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }))

    const conversionRoute = require('./routes/conversion.route');
    const currencyRoute = require('./routes/currency.route');
    const userRoute = require('./routes/user.route');

    app.use('/api/conversion', conversionRoute);
    app.use('/api/currency', currencyRoute);
    app.use('/api/user', userRoute);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}).catch((error) => {
    console.log(error);
})

