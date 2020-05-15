//import ('db-connn.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetchResults = require("../static/db-fetch");
const insertResults = require("../static/db-insert");

const app = express();
app.use(cors());
app.use(bodyParser.json())

const mhis = (data) => {
  const patientData = {};
  const stockData = {};
  const transactionData = {};

  // Start Raw Patient Data
  patientData.Id = data.patientData.Id;
  patientData.Name = data.patientData.Name;
  patientData.Email = data.patientData.Email;
  patientData.Telephone = data.patientData.Telephone;
  patientData.FatherId = data.patientData.FatherId;
  patientData.MotherId = data.patientData.MotherId;
  patientData.ParentId = data.patientData.ParentId;
  patientData.Role = data.patientData.Role;
  patientData.UserType = data.patientData.UserType;
  patientData.Residence = data.patientData.Residence;
  // End Raw Patient Data
  // Start Raw Stock Data
  stockData.Id = data.stockData.Id;
  stockData.DrugId = data.stockData.DrugId;
  stockData.DrugName = data.stockData.DrugName;
  stockData.DrugType = data.stockData.DrugType;
  stockData.MarketPrice = data.stockData.MarketPrice;
  stockData.SellingPrice = data.stockData.SellingPrice;
  stockData.InitialStockLevel = data.stockData.InitialStockLevel;
  stockData.AvailableStock = stockData.InitialStockLevel - data.transactionData.Prescription.quantity;
  stockData.SideEffects = data.stockData.SideEffects;
  // End Stock Data

  // Start Patient Processing
  transactionData.Id = data.transactionData.Id;
  transactionData.PatientId = data.transactionData.PatientId;
  transactionData.Prescription = data.transactionData.Prescription;
  transactionData.Bill = data.transactionData.Bill;
  transactionData.InsuranceId = data.transactionData.InsuranceId;
  transactionData.InsuranceAmount = data.transactionData.InsuranceAmount;
  transactionData.PendingBill = transactionData.Bill - data.transactionData.InsuranceAmount;
  transactionData.ConditionSeverity = data.transactionData.ConditionSeverity;

  // End Patient Processing
  return {
    patientData,
    stockData,
    transactionData
  };
};


const data = {
  patientData:
  {
    Id: '1', UserId: '1', Name: 'Huyu', Email: 'huyu@huyu.com', Telephone: '0712345678', FatherId: '100', MotherId: '200', ParentId: '', Role: 'User', UserType: 'Patient', Residence: 'Mbali', CreatedDt: '07/01/2020', UpdatedDt: '07/01/2020'
  },
  stockData: 
  {
      Id: '1', DrugId: 'P1', DrugName: 'Piriton', DrugType: 'Original', MarketPrice: 100, SellingPrice: 200, InitialStockLevel: 1200, SideEffects: 'Nausea, Diarrhoea, Headache, Suicadal Tendancies',  CreatedDt: '07/01/2020', UpdatedDt: '07/01/2020'
  },
  transactionData: 
  {
    Id: '1', PatientId: '1', Diagnosis: 'Dysnexia', Prescription: {DrugId: '1', quantity: 3, frequency: '1x3'}, Bill: 100, InsuranceId: '2', InsuranceAmount: 70 , ConditionSeverity: 'Severe',  CreatedDt: '07/01/2020', UpdatedDt: '07/01/2020'
  }
}
console.log(mhis(data));



app.get('/patients', (req,res)=> {
  patientData(req,res);
});
app.get('/stock', (req,res)=> {
  stockData(req,res);
});
app.get('/transaction', (req,res)=> {
  fetchResults();
  console.log(fetchResults());
});

app.get('/new', (req,res)=> {
  insertResults(insertTransactionData);
});
app.listen(3000);

module.exports = mhis;
// console.log(transactions);