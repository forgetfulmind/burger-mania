const orm = require('../config/orm.js');

const burger = {
    all(cb) {
      orm.selectAll((res) => cb(res));
    },
    // The variables cols and vals are arrays.
    create(name, cb) {
      orm.insertOne(name, (res) => cb(res));
    },
    update(id, cb) {
      orm.updateOne(id, (res) => cb(res));
    },
  };





  //export db  functions
  module.exports = burger;