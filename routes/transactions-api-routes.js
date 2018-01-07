var db = require("../models");

module.exports = function(app){

//-------- list all transactions
  app.get("/api/transactions/:id", function(req, res){
    var userId = req.params.id;
    db.Transaction.findAll({
      where:{
        UserId: userId
      }
    }).then(function(dbTransaction){
      res.json(dbTransaction);
    });
  });

}