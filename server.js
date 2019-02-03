"use strict";

/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

// Modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cors = require("cors");

/*
 |--------------------------------------
 | App
 |--------------------------------------
 */

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(cors());

// Set port
const port = process.env.PORT || "8081";
app.set("port", port);

// Set static path to Angular app in dist
// Don't run in dev
if (process.env.NODE_ENV !== "dev") {
  //app.use("/", express.static(path.join("/dist/all-about-hair")));
  app.use("/", express.static(path.join(__dirname, "/dist")));
}

/*
 |--------------------------------------
 | Routes
 |--------------------------------------
 */

global.appRoot = path.resolve(__dirname);


// Pass routing to Angular app
// Don't run in dev
if (process.env.NODE_ENV !== "dev") {
  app.get("/*", function(req, res) {
    //res.sendFile(path.join("/dist/all-about-hair/index.html"));
    res.sendFile(path.join(__dirname, "/dist/index.html"));
  });
}

/*
 |--------------------------------------
 | Server
 |--------------------------------------
 */

app.listen(port, () => console.log(`Server running on localhost:${port}`));
