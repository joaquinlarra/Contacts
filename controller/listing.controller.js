'use strict';

var contactsStore = require('../persistence/ContactsStore');

exports.listAll = function(req, res) {
	_logRequest("LIST ALL", req);
	
  	res.send( contactsStore.loadAll() );
};

exports.update = function(req, res){
	_logRequest("UPDATE", req);

	//some kind of validation
	contactsStore.updateOne(req.body);
	res.send( null );
}

exports.insert = function(req, res){
	_logRequest("INSERT", req);

	contactsStore.insertOne(req.body);
	res.send( null );
}

function _logRequest(operation, req){
	console.log(operation);
	console.log("HEADERS >");
	console.log(req.headers);
	console.log("BODY >");
	console.log(req.body);
}