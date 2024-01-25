const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//getting all the contacts
const getAll = async (req, res) => {
    // .find finds everything in there
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists); // we just need the first one (the only one)
  });
};

//getting single one
const getOne= async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

//create route
const newContact = async (req, res) => {
  // contact ={
  //   firstname: req.body.firstName,
  //   lastname: req.body.lastName,
  //   email: req.body.email,
  //   favoriteColor: req.body.favoriteColor,
  //   birthday: req.body.birthday
  // }
  contact ={
    firstname: "JJ",
    lastname: "wat",
    email: "jjwat123@gmail.com",
    favoriteColor: "Gray",
    birthday: "04/19/1981"
  }
  const response = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .insertOne(contact);

  if (response.acknowledged) {
    res.status(201).json('new contact has been created' + response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

// put route. update
const modifyId = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // updateContact ={
  //   firstname: req.body.firstName,
  //   lastname: req.body.lastName,
  //   email: req.body.email,
  //   favoriteColor: req.body.favoriteColor,
  //   birthday: req.body.birthday
  // }
  updateContact ={
    firstname: "JJ",
    lastname: "Tooler",
    email: "jjtooler123@gmail.com",
    favoriteColor: "Gray",
    birthday: "04/19/1981"
  }
  const response = await mongodb
    .getDb()
    .db()
    .collection('contacts').replaceOne({_id: userId}, updateContact);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while changing the contact.');
  }
};

// put route. delete
const deleteId = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection('contacts').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = {
  getAll,
  getOne,
  newContact,
  modifyId,
  deleteId };