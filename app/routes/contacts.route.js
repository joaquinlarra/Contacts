'use strict';

module.exports = function(app) {
  var adviceController = require('../controller/advice.controller');
  var listingController = require('../controller/contacts.controller');

  app.route('/contacts/all')
    .get(listingController.listAll)
    .post(adviceController.error404);

  app.route('/contacts/add')
  	.get(adviceController.error404)
  	.post(listingController.insert);

  app.route('/contacts/update')
  	.get(adviceController.error404)
  	.post(listingController.update);

  app.route('/contacts/delete/:id')
  	.get(adviceController.error404)
  	.post(listingController.delete);
};
