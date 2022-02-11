const db = require("../models");

//create main Model
const Room = db.rooms;

//Main Work
// 1. get single room by id
const getSingleRoom = async (req, res) => {
    let id=req.params.id
    let singleroom = await Room.findOne({
        where: {id: id}
    })
    res.status(200).send(singleroom);
};

//2.get all rooms
const getAllRooms = async (req, res) => {
  let allrooms = await Room.findAll({});
  res.status(200).send(allrooms);
};

//3.adding new room
const addRoom = async (req, res) => {
    
    const data = {
        roomtype: req.body.roomtype,
      rooms: req.body.rooms,
      beds: req.body.beds,
      utilitise: req.body.utilitise,
      price: req.body.price,
      image: req.body.image,
      description: req.body.description,
    };
  
    const room = await Customer.create(data);
    res.status(200).json("Room added sucessfully");
  };

module.exports = {
    getSingleRoom,
    getAllRooms,
    addRoom
};
