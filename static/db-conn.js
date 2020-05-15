const mysql = require('mysql');
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const port = process.env.PORT || 3000;
// const app = express();
// app.use(express());
// app.use(cors());
// app.use(bodyParser.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kitalale@2010",
  database: "mhis",
  port: 3306 
});
con.connect((err) => {
  if(err) throw err;
});

// app.listen(port);

// console.log('API server started on: ' + port);

// const routes = require ('../app/route/approutes');
// routes(app);
module.exports = con;


/* CREATE TABLE users(Id INT auto_increment, UserId int, NAME VARCHAR(30) , 
Email VARCHAR(100), Telephone VARCHAR(100), FatherId int, MotherId int, ParentId int, Role
VARCHAR(100), UserType VARCHAR(100), Residence VARCHAR(100), CreatedDt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, UpdatedDt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (Id));

INSERT INTO users (USERid, NAME, email, telephone, fatherid, motherid,  role, usertype, residence)
 VALUES (1,'Huyu',  'huyu@huyu.com', '0712345678', '100', '200', 'User',  'Patient', 'Mbali');


CREATE TABLE stock(Id int auto_increment, DrugId varchar(12), DrugName varchar(50), DrugType varchar(50), MarketPrice int, SellingPrice int, InitialStockLevel int, SideEffects text,  CreatedDt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, UpdatedDt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (Id));

INSERT INTO stock ( DrugId, DrugName, DrugType, MarketPrice, SellingPrice, InitialStockLevel, SideEffects) VALUES ( 'P1','Piriton','Original',  100,  200,  1200,  'Nausea, Diarrhoea, Headache, Suicadal Tendancies');

CREATE TABLE transaction(Id int auto_increment, PatientId int, Diagnosis text, Prescription varchar(255), Bill int, InsuranceId varchar(100), InsuranceAmount int , ConditionSeverity varchar(100),  CreatedDt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, UpdatedDt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (Id));

INSERT INTO transactions(PatientId, Diagnosis, Prescription, Bill, InsuranceId, InsuranceAmount, ConditionSeverity)
VALUES('1', 'Dysnexia',  {DrugId:'1', quantity:3, frequency:'1x3'},  100, '2',  70 , 'Severe');


CREATE TABLE transaction_prescription (int id auto_increment, t_id int, drug_id varchar(10), quantity int, frequency varchar(10), primary key (id));
insert into transaction_prescription(t_id, drug_id, quantity, frequency) values (1, 'DrugId')

*/


/*
const patientData = ((req, res) => {
    con.connect((err, conn) => {
      if(err) { 
        res.json({"code" : 100, 'status' : 'Error connecting to DB'});
        return;
      }
      const query = 'SELECT * FROM users';
      con.query( query,  (err, results, fields) => {
        if (err) {
          res.json({'code': 101, 'status' : 'Error fetching table data'});
          return;
        };
        Object.keys(results).forEach((result)=>{
          const row = results[result];
          const data = { 
            'patientData' : 
            {
              'Id' : row.Id,
              'Name' : row.Name,
              'Email' : row.Email,
              'Telephone' : row.Telephone,
              'FatherId' : row.FatherId,
              'MotherId' : row.MotherId,
              'ParentId' : row.ParentId,
              'Role' : row.Role,
              'UserType' : row.UserType,
              'Residence' : row.Residence
            }
          };
          res.json(data);
          console.log(data);
        })
        
    })
  });
  });
  
  // Fetch Stock Data
  const stockData = ((req, res) => {
    con.connect((err, conn) => {
      if(err) { 
        res.json({"code" : 100, 'status' : 'Error connecting to DB'});
        return;
      }
      con.query("SELECT * FROM stock",  (err, results, fields) => {
        if (err) {
          res.json({'code': 101, 'status' : 'Error fetching table data'});
          return;
        };
        Object.keys(results).forEach((result)=>{
          const row = results[result];
          const data = { 
            'stockData' : 
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
            }
          };
          res.json(data);
          console.log(data);
        })
    })
  });
  });
  
  // Fetch Transaction Data
  const transactionData = ((req, res) => {
    con.connect((err, conn) => {
      if(err) { 
        res.json({"code" : 100, 'status' : 'Error connecting to DB'});
        return;
      }
      con.query("SELECT * FROM transaction",  (err, results, fields) => {
        if (err) {
          res.json({'code': 101, 'status' : 'Error fetching table data'});
          return;
        };
        Object.keys(results).forEach((result)=>{
          const row = results[result];
          const data = { 
            'transactionData' : 
            {
              'Id' : row.Id,
              'PatientId' : row.PatientId,
              'Prescription' : JSON.parse(row.Prescription),
              'Bill' : row.Bill,
              'InsuranceId' : row.InsuranceId,
              'InsuranceAmount' : row.InsuranceAmount,
              'PendingBill' : row.PendingBill,
              'ConditionSeverity' : row.ConditionSeverity
            }
          };
          // res.json(data);
          console.log(data);
        })
    })
  });
  });
  */