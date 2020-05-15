const con = require('./db-conn')

// Fetch Patient Data
const fetchResults = (data) => {
  const patientData = {};
  const transactionData = {};
  const stockData = {};

  return {
    patientData,
    stockData,
    transactionData
  };
};

// const qry = 'SELECT * FROM ?', [qTable];
  
const userData = () => {con.query('SELECT * FROM users', (err, results, fields) => {
  if(err) { throw err};
  Object.keys(results).forEach((result)=>{
    const row = results[result];
    const daa = {
    'Id' : row.Id,
    'DrugId' : row.DrugId,
    'DrugName' : row.DrugName,
    'DrugType' : row.DrugType,
    'MarketPrice' : row.MarketPrice,
    'SellingPrice' : row.SellingPrice,
    'InitialStockLevel' : row.InitialStockLevel,
    'AvaialbleStock' : row.AvaialbleStock,
    'SideEffects' : row.SideEffects
    }
    // console.log(row.Id);
    return daa;
});
});
}

// qTable = 'stock';
const stockDetails = () => { con.query('SELECT * FROM stock', (err, results, fields) => {
  if(err) { throw err};
  Object.keys(results).forEach((result)=>{
    const row = results[result];
    const daa = 
    {
      'Id' : row.Id,
      'DrugId' : row.DrugId,
      'DrugName' : row.DrugName,
      'DrugType' : row.DrugType,
      'MarketPrice' : row.MarketPrice,
      'SellingPrice' : row.SellingPrice,
      'InitialStockLevel' : row.InitialStockLevel,
      'AvaialbleStock' : row.AvaialbleStock,
      'SideEffects' : row.SideEffects
    };
    return daa;
    
});
});
}
// qTable = 'transaction';
const transactionDetails = () => { 
  con.query('SELECT * FROM transaction', (err, results, fields) => {
  if(err) { throw err};
  Object.keys(results).forEach((result)=>{
    const row = results[result];
    const inf =  
      {
        'Id' : row.Id,
        'PatientId' : row.PatientId,
        'Prescription' : JSON.parse(row.Prescription),
        'Bill' : row.Bill,
        'InsuranceId' : row.InsuranceId,
        'InsuranceAmount' : row.InsuranceAmount,
        'PendingBill' : row.PendingBill,
        'ConditionSeverity' : row.ConditionSeverity
      };
      
    console.log(inf);
      
    // inf.Id =  row.Id;
    // inf.PatientId = row.PatientId;
    // inf.Prescription = JSON.parse(row.Prescription);
    // inf.Bill = row.Bill;
    // inf.InsuranceId = row.InsuranceId;
    // inf.InsuranceAmount = row.InsuranceAmount;
    // inf.PendingBill = row.PendingBill;
    // inf.ConditionSeverity = row.ConditionSeverit;
      
    
    // return {inf};
});
});
};
const tData = () => {
  con.query('SELECT * FROM transaction', (err, results, fields) => {
  if(err) { throw err};
  Object.keys(results).forEach((result)=>{
    const row = results[result];
    const inf =  
      {
        'Id' : row.Id,
        'PatientId' : row.PatientId,
        'Prescription' : JSON.parse(row.Prescription),
        'Bill' : row.Bill,
        'InsuranceId' : row.InsuranceId,
        'InsuranceAmount' : row.InsuranceAmount,
        'PendingBill' : row.PendingBill,
        'ConditionSeverity' : row.ConditionSeverity
      };
    return (inf);
    });  
  }) 
};
// console.log(tData());
/************************************************************** */
const me = (dd) => {
  return dd;
};

// return {resultt};
const dd = {
  '1':'2'
}   
const pData = () => {
  const dd = {};
  dd.name = 'b';
  return dd;
  
}
console.log(pData());
console.log(me(dd));

/***************************************************************** */

const qry = () => {
  const dResult = {};
  
return dResult;
};
  
  const qR = () => {
    const b =() =>{
      con.query('SELECT * FROM transaction', (err, results, fields) => {
      if(err) {throw err};
      return results;
    });
    return b;
  }
}
console.log(b(qR));

// console.log(qry());

    // inf.Id =  row.Id;
    // inf.PatientId = row.PatientId;
    // inf.Prescription = JSON.parse(row.Prescription);
    // inf.Bill = row.Bill;
    // inf.InsuranceId = row.InsuranceId;
    // inf.InsuranceAmount = row.InsuranceAmount;
    // inf.PendingBill = row.PendingBill;
    // inf.ConditionSeverity = row.ConditionSeverit;
      
    
    // return {inf};

// console.log(transactionDetails(infd));

const data = {
  patientData : 
  {
    userData
  },
  stockData :
  {
    stockDetails
  },
  transactionData :
  {
    transactionDetails
  }
}
module.exports = fetchResults;
