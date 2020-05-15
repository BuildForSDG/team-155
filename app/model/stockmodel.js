const sql = require('../../static/db-conn');
const Stock = (stock) => {};
// Get all drug details
Stock.getAllStock = (result) => {
  const finalData = {};
  sql.query ('SELECT * FROM stock', (err, res) => {
    if(err) {
      console.log('Error encountered', err);
      result (null, err);
    }
    else {
      const rowResults = JSON.parse(JSON.stringify(res));
      const jsonResults = rowResults[0];
      finalData.Id = jsonResults.Id;
      finalData.DrugId = jsonResults.DrugId;
      finalData.DrugName = jsonResults.DrugName;
      finalData.DrugType = jsonResults.DrugType;
      finalData.MarketPrice = jsonResults.MarketPrice;
      finalData.SellingPrice = jsonResults.SellingPrice;
      finalData.AvailableStock = jsonResults.AvailableStock;
      finalData.SideEffects = jsonResults.SideEffects;

      console.log({ 'StockData' : finalData });
      // userData.Id = res.Id
      result (null, finalData);
    }
  })
}


module.exports = Stock;
