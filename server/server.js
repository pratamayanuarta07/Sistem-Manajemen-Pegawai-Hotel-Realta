require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3400;
app.use(express.json());
app.use( express.urlencoded({extended: true,}));
app.use(express.static('public'));
app.use(cors());
const routes = require("./route");
app.use(routes);
app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
  });
