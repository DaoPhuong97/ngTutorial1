const express = require('express');
const router = express.Router();

const User = require('../models/User');

//API post user
router.post('/user', async (req, res) => {
  let user = new User(req.body);
  user.save();
});

//API get alll new feed
router.get('/newfeed/all', async(req, res)=>{
    try{
        const user = await User.find();
        res.send(user);
    }catch(err){
      console.log(err);
    }
});

//API delete new feed by its ID
router.delete('/delete/newfeed/:id', async(req, res)=>{
  try{
    await User.remove({
      _id: req.params.id
    });
    res.status(200).json({
      message: "Delete new feed successfully!"
    });
  }catch (err){
    console.log("Can not delete this new feed!");
  }
});

//API delete all new feed of userID

module.exports = router;
