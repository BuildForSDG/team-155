const con = require('./db-conn');

// Insert Transaction Data
const insertTransactionData = ((req, res) => {
  con.connect((err, conn) => {
    if(err) { 
      res.json({"code" : 100, 'status' : 'Error connecting to DB'});
      return;
    }
    const records = [
      [1, 'Pain in stomach', JSON.stringify({'DrugId': 1, 'quantity': 4, 'frequency': '1x1'}), 1200, 1, 1000, 'Simple']
    ];
    con.query("INSERT INTO transaction (PatientId, Diagnosis, Prescription, Bill, InsuranceId, InsuranceAmount, ConditionSeverity) VALUES ?", [records],  (err, results, fields) => {
      if (err) {
        throw err;
        // res.json({'code': 101, 'status' : 'Error saving table data'});
        // return;
      };
      console.log("Inserted row");
  })
});
});

