'use strict';

/**
 * vincenzo.longo
 *
 * Contact Rest API layer defined through an Express app instance.
 */

module.exports = function(app) {
  var adviceController = require('../controller/advice.controller');
  var contactsController = require('../controller/contacts.controller');

  app.route('/contacts/all')
      .post(adviceController.error404) // example on wrong method error management
      .get(contactsController.listAll);

  app.route('/contacts/add')
      .post(contactsController.insert);

  app.route('/contacts/update')
      .put(contactsController.update);

  app.route('/contacts/delete/:id')
      .delete(contactsController.delete);
};
