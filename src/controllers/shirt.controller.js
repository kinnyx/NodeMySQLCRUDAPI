const ShirtModel = require("../models/shirt.model");

exports.getShirtList = (req, res) => {
  // console.log('all shirt');
  ShirtModel.getAllShirts((err, shirtboy) => {
    console.log("We are here");
    if (err) res.send(err);
    console.log("Shirt", shirtboy);
    res.send(shirtboy);
  });
};

exports.getShirtByID = (req, res) => {
  // console.log("get shirt by id");
  ShirtModel.getShirtByID(req.params.id, (err, shirtboy) => {
    if (err) res.send(err);
    console.log("single shirt data", shirtboy);
    res.send(shirtboy);
  });
};

exports.createNewShirt = (req, res) => {
  const shirtReqData = new ShirtModel(req.body);
  console.log("req data", shirtReqData);
  //check null
  if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    ShirtModel.createNewShirt(shirtReqData, (err, shirtboy) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Shirt Created Successfully",
        data: shirtboy.insertId,
      });
    });
  }
};

exports.updateShirt = (req, res) => {
  const shirtReqData = new ShirtModel(req.body);
  console.log("req data update", shirtReqData);
  //check null
  if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    ShirtModel.updateShirt(req.params.id, shirtReqData, (err, shirtboy) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Shirt Updated Successfully",
        data: shirtboy.insertId,
      });
    });
  }
};

exports.deleteShirt = (req, res) => {
    ShirtModel.deleteShirt(req.params.id, (err, shirtboy) => {
        if(err)
        res.send(err);
        res.json({success:true, message: 'Shirt deleted successully'})
    })
}
