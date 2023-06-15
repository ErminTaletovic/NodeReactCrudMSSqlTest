const express = require("express");
const cors = require("cors");

const app = express();

//Drop and re-sync db => force: true
const db = require("./app/models");
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
  });


var corsOptions = {
  origin: "http://192.168.0.200:8081"
  //origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to react-node-js-crud-sql-server-git App by Tale." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});