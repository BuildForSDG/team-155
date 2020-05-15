var User = require ('../model/usermodel');
var Stock = require ('../model/stockmodel');
var Transaction = require ('../model/transactionmodel');


exports.list_all_users = (err, res) => {
  User.getAllUsers((err, user) => {
    // console.log('controller')
    if(err){
      res.send(err);
      // console.log('Error', err);
    }
    else
    {
     res.send(JSON.parse(JSON.stringify(user)));
      // console.log(user);
    }
  });
};

// Create new User
exports.new_user = (req, res) => {
  const newUser = req.body;
  if(!newUser.Name || !newUser.Telephone) {
    res.send({"status" : 400, 'error' : true, 'message' : 'Please fill the name and telephone'});
  }
  else {
    User.createUser(newUser, (err, user) => {
      if(err) {
        res.send(err);
      }
      else {
        res.json(user);
      }
    });
  }
  
};


// List all stock data here
exports.list_all_stock = (err, res) => {
  Stock.getAllStock((err, user) => {
    console.log('controller')
    if(err){
      res.status('ok').send(err);
      console.log('Error', err);
    }
    else
    {
      res.send({"status": 200, "error": null, "stockData": JSON.parse(JSON.stringify(user))});
      console.log('res', user);
    }
  });
};

exports.list_all_transactions = (err, res) => {
  Transaction.getAllTransactions((err, user) => {
    console.log('controller')
    if(err){
      res.status('ok').send(err);
      console.log('Error', err);
    }
    else
    {
      res.send({"status": 200, "error": null, "transactionData": JSON.parse(JSON.stringify(user))});
      console.log('res', user);
    }
  });
};

exports.list_detailed_transacations = (err, res) => {
  Transaction.processPatient((err, user) => {
    console.log('controller')
    if(err){
      res.status('ok').send(err);
      console.log('Error', err);
    }
    else
    {
      res.send({"status": 200, "error": null, "transactionData": JSON.parse(JSON.stringify(user))});
      console.log('res', user);
    }
  });
};
