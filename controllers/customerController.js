const db = require("../models");

//create main Model
const Customer = db.customers;
const Room = db.rooms;

//Main Work
// 1. adding new customer
const addCustomer = async (req, res) => {
  const data = {
    customerName: req.body.customerName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    govtidentityProof: req.body.govtidentityProof,
    room_id: req.body.room_id
  };

  const customer = await Customer.create(data);
  res.status(200).json("Customer added sucessfully");
};

//2.get all customers

const getAllCustomers = async (req, res) => {
  let allcustomers = await Customer.findAll({});
  res.status(200).send(allcustomers);
};

module.exports = {
  addCustomer,
  getAllCustomers,
};
