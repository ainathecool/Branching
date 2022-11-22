const router = require('express').Router();
let User = require('../models/users.js');

router.route('/add').post((req, res) => {
    console.log("in route");
    const Name = req.body.Name;
   
    const newUser = new User({
      Name,
     
    });
  
    newUser.save()
    .then(() => res.status(200).send("User added "))
    .catch(err => res.status(400).json('Error: ' + err));
  });




  router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise Deleted.'))
    .catch(err => res.status(400).json('Error:' + err));
  });

  router.route('/:name').post((req,res) => {
    User.findById(req.params.Name)
    .then(() => res.json('Exercise Deleted.'))
    .catch(err => res.status(400).json('Error:' + err));
  });

 

  module.exports = router;