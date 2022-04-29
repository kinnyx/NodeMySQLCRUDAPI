var dbConn = require("../../config/db.config");

var Shirt = function (shirt) {
  this.shirt_boy_plain = shirt.shirt_boy_plain;
  this.shirt_boy_color = shirt.shirt_boy_color;
  this.shirt_boy_pattern = shirt.shirt_boy_pattern;
  this.shirt_boy_figure = shirt.shirt_boy_figure;
  this.shirt_boy_price = shirt.shirt_boy_price;
  this.shirt_boy_size = shirt.shirt_boy_size;
};

Shirt.getAllShirts = (result) => {
  dbConn.query("SELECT * FROM shirtboy", (err, res) => {
    if (err) {
      console.log("Error while fetching shirt", err);
      result(null, err);
    } else {
      console.log("Shirt fetched successfully");
      result(null, res);
    }
  });
};

Shirt.getShirtByID = (shirt_boy_id, result) => {
  dbConn.query(
    "SELECT * FROM shirtboy WHERE shirt_boy_id=?",
    shirt_boy_id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching shirt by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Shirt.createNewShirt = (shirtReqData, result) => {
  dbConn.query("INSERT INTO shirtboy SET ? ", shirtReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("Shirt created successfully");
      result(null, res);
    }
  });
};

Shirt.updateShirt = (shirt_boy_id, shirtReqData, result) => {
  dbConn.query(
    "UPDATE shirtboy SET shirt_boy_plain=?,shirt_boy_color=?,shirt_boy_pattern=?,shirt_boy_figure=?,shirt_boy_price=?,shirt_boy_size=? WHERE shirt_boy_id=?",
    [
      shirtReqData.shirt_boy_plain,
      shirtReqData.shirt_boy_color,
      shirtReqData.shirt_boy_pattern,
      shirtReqData.shirt_boy_figure,
      shirtReqData.shirt_boy_price,
      shirtReqData.shirt_boy_size,
      shirt_boy_id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updateing the employee");
        result(null, err);
      } else {
        console.log("Shirt updated successfully");
        result(null, res);
      }
    }
  );
};

Shirt.deleteShirt = (shirt_boy_id, result) => {
  dbConn.query(
    "DELETE FROM shirtboy WHERE shirt_boy_id=?",
    [shirt_boy_id],
    (err, res) => {
      if (err) {
        console.log("Error while deleting the shirt");
        result(null, err);
      } else {
          result(null, res)
      }
    }
  );
};

module.exports = Shirt;
