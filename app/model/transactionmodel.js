const sql = require('../../static/db-conn');
const Transaction = (transaction) => {};


// Get all stored transactions

Transaction.getAllTransactions = (result) => {
  const finalData = {};
  sql.query('SELECT * FROM transactions', (err, res) => {
    if(err) {
      console.log('Error encountered', err);
      result (null, err);
    }
    else {
      const rowResults = JSON.parse(JSON.stringify(res));
      const jsonResults = rowResults[0];
      finalData.Id = jsonResults.Id;
      finalData.PatientId = jsonResults.PatientId;
      finalData.Diagnosis = jsonResults.Diagnosis;
      finalData.Prescription = JSON.parse(jsonResults.Prescription);
      finalData.Bill = jsonResults.Bill;
      finalData.InsuranceId = jsonResults.InsuranceId;
      finalData.InsuranceAmount = jsonResults.InsuranceAmount;
      finalData.ConditionSeverity = jsonResults.ConditionSeverity;

      console.log({ 'TransactionData' : finalData });
      // userData.Id = res.Id
      result (null, finalData);
    }
  })
};



// get billing information
Transaction.processPatient = (result) => {
  const qry = 'SELECT b.Id, a.NAME, a.Email, a.Telephone, a.UserType, a.Residence, b.Diagnosis, b.Prescription,c.DrugName, c.DrugType, JSON_EXTRACT(prescription, "$.quantity") as quantity, JSON_EXTRACT(prescription, "$.frequency") AS frequency,  b.Bill, b.InsuranceId, b.InsuranceAmount,b.ConditionSeverity FROM users a,  transactions b, stock c WHERE a.Id = b.PatientId AND JSON_EXTRACT(prescription, "$.DrugId") AND a.UserType = "Patient"';
  const finalData = {};
  sql.query(qry, (err, res) => {
    if(err) {
      console.log('Error encountered', err);
      result (null, err);
    }
    else {
      const rowResults = JSON.parse(JSON.stringify(res));
      const jsonResults = rowResults[0];
      finalData.Id = jsonResults.Id;
      finalData.Name = jsonResults.NAME;
      finalData.Email = jsonResults.Email;
      finalData.Telephone = jsonResults.Telephone;
      finalData.UserType = jsonResults.UserType;
      finalData.Residence = jsonResults.Residence;
      finalData.Diagnosis = jsonResults.Diagnosis;
      // finalData.Prescription = JSON.parse(jsonResults.Prescription);
      finalData.DrugName = jsonResults.DrugName;
      finalData.DrugType = jsonResults.DrugType;
      finalData.quantity = jsonResults.quantity;
      finalData.frequency = JSON.parse(jsonResults.frequency);
      finalData.Bill = jsonResults.Bill;
      finalData.InsuranceId = jsonResults.InsuranceId;
      finalData.InsuranceAmount = jsonResults.InsuranceAmount;
      finalData.ConditionSeverity = jsonResults.ConditionSeverity;

      console.log({ 'DetailedTransaction' : finalData });
      // userData.Id = res.Id
      result (null, finalData);
    }
  });
};

module.exports = Transaction;

