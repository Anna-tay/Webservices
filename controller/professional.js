const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
    // .find finds everything in there
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]); // we just need the first one (the only one)
  });
};

module.exports = { getData };