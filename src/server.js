import express from "express";

const app = express();

const PORT = 3000;

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const handleHome = (req, res) => {
    return res.send("Hello from home");
}

app.get("/", logger, handleHome );

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);