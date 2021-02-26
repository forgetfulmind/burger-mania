const connection = require('./connection.js');

const orm = {


selectAll(cb){
    const queryString = `SELECT * FROM burgers;`;
    connection.query(
        queryString,
        (err, result) => {
            if (err) {
                throw err;
               }
      cb(result);
    });
},

insertOne(name, cb){
    const queryString = `INSERT INTO burgers (burger_name) VALUES (?);`;
    connection.query(
        queryString,
        [name],

        (err, result) => {
            if (err) {
                throw err;
               }
      cb(result);
    });
},

updateOne(id, cb){
    //console.log(id)
    const queryString = `UPDATE burgers SET devoured=true WHERE id=?;`;
    connection.query(
        queryString,
        [id],
        (err, result) => {
            if (err) {
                throw err;
               }
      cb(result);
    });
},



};
module.exports = orm;