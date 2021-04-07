const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

const { customer, order } = db;

customer.hasMany(order, {
  foreignKey: "cust_id",
});
order.belongsTo(customer, {
  foreignKey: {
    allowNull: false,
  },
});

//ADDING IN TABLE
app.post("/addcustomer", (req, res) => {
  customer
    .create({
      name: req.body.name,
      number: req.body.number,
      email: req.body.email,
      house: req.body.house,
      street: req.body.street,
      pCode: req.body.pCode,
    })
    .then((newCust) => res.send(newCust))
    .catch((err) => console.log(err));
});

app.post("/addorder", (req, res) => {
  order
    .create({
      price: req.body.price,
      paymentMethod: req.body.paymentMethod,
      customerId: req.body.customerId,
    })
    .then((newOrder) => res.send(newOrder))
    .catch((err) => console.log(err));
});

//READING FROM TABLE
app.get("/read", (req, res) => {
  customer
    .findAll() //no arguments to read all { where: { name: "faizan" } }
    .then((users) => res.send(users))
    .catch((err) => console.log(err));
});

//DELETING FROM TABLE
app.get("/delete", (req, res) => {
  customer.destroy({ where: { name: "faizan" } });
  res.send("DELETED1!");
});

app.get("/", (req, res) => {
  res.send("SERVER!");
});

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Listening on port 5000!");
  });
});
