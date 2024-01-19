const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

//getting all the contacts
const getAll = async (req, res, next) => {
    // .find finds everything in there
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists); // we just need the first one (the only one)
  });
};

//getting single one
const getOne= async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  console.log(userId);
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


module.exports = { getAll, getOne };