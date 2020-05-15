const sql = require('../../static/db-conn');
const User = (user) => {
  this.NAME = user.NAME;
  this.Email = user.Email;
  this.Telephone  = user.Telephone;
  this.FatherId = user.FatherId;
  this.MotherId = user.MotherId;
  this.ParentId = user.ParentId;
  this.Role = user.Role;
  this.UserType = user.UserType;
  this.Residence = user.Residence;
  
};

// get all user details
User.getAllUsers = (result) => {
  
  sql.query('SELECT * FROM users', (err, res) => {
    if(err) {
      console.log('Error encountered', err);
      result (null, err);
    }
    else {
      // const rowResults = JSON.parse(JSON.stringify(res));
      const data = [];
        let a = res.length;
        let i = 0;
        
        for(i = 0; i < a ; i++) {
          const v = res[i];
          data.push(v);
        }
        Promise.all(data)
          .then(console.log(data))
          .then(result(null, data));
        
        
    }
  })
};

User.createUser = (newUser, result) => {
  sql.query('INSERT INTO users set ?', newUser, (err, res) => {
    if(err) {
      console.log('Error encountered', err);
      result (null, err);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
module.exports = User;
