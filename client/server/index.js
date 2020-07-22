const express = require("express");
const server = express();

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = 4000;


server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});