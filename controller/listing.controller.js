'use strict';

var moment = require('moment');
var contactsStore = require('../persistence/contacts.store');

exports.listAll = function(req, res) {
	_logRequest("LIST ALL", req);
	
  	res.send( contactsStore.loadAll() );
};

exports.insert = function(req, res){
	_logRequest("INSERT", req);

	//some kind of validation
	contactsStore.insertOne(req.body);
	res.send( null );
}

exports.update = function(req, res){
	_logRequest("UPDATE", req);

	//some kind of validation
	contactsStore.updateOne(req.body);
	res.send( null );
}

exports.delete = function(req, res){
	_logRequest("DELETE", req);

	contactsStore.deleteOne(req.params.id);
	res.send( null );
}


function _logRequest(operation, req){
	let m = moment();
	let ts = m.format();
	console.log(ts + " " + operation);
	console.log("HEADERS >");
	console.log(req.headers);
	console.log("BODY >");
	console.log(req.body);
}