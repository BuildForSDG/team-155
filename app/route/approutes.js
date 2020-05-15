module.exports = function(app) {
  var todoList = require('../controller/appcontroller');

  // todoList Routes
  app.route('/patients')
    .get(todoList.list_all_users);
  
  app.route('/stock')
    .get(todoList.list_all_stock);
  
  app.route('/transactions')
    .get(todoList.list_all_transactions);

  app.route('/process')
    .get(todoList.list_detailed_transacations);

  app.route('/user/new')
    .post(todoList.new_user);
};