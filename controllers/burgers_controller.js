const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

const cat = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      //console.log(hbsObject);
      res.render('index', (hbsObject));
    });
  });

  router.post('/api/burgers', (req, res) => {
    burger.create(req.body.name, (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.id });
    });
  });

  router.put('/api/burgers/:id', (req, res) => {
    const id = req.params.id;
    //console.log(id)
    burger.update(
      id,
      (result) => {
        // if (result.changedRows == 0) {
        //   // If no rows were changed, then the ID must not exist, so 404
        //   return res.status(404).end();
        // }
        res.json({ id: result.id });
      }
    );
  });
  









//export routes
module.exports = router;