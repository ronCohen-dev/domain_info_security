'use strict'
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sequelize = require("./configs/sql.config");

const forensicRouter = require("./routes/forensic.route.js");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/forensic", forensicRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "dev" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

const retryLimit = 15;
let retryCount = 0;

const connectWithRetry = async () => {
    try {
        await sequelize.sync();
        console.log('Successfully connected to MySQL database');
    } catch (err) {
        console.error(`Error connecting to MySQL database, retrying...(${retryCount + 1}/${retryLimit})`);
        if (retryCount >= retryLimit) {
            console.error(`Exceeded retry limit of ${retryLimit}. Aborting...`);
            return;
        }
        retryCount++;
        setTimeout(connectWithRetry, 5000);
    }
};

connectWithRetry();
module.exports = app;
