'use strict';

//TODO
// - introduce X-Secret-Key header for security
// - introduce payload validation

var moment = require('moment');
var contactsStore = require('../persistence/contacts.store');

exports.listAll = function(req, res) {
	_logRequest("LIST ALL", req);

  	contactsStore.loadAll(
  		function(docs){
  			res.send(docs);
    	},
		function(err){
            res.status(500);
            res.send( null );
		}
    );
};

exports.insert = function(req, res){
	_logRequest("INSERT", req);

    contactsStore.insertOne(
    	req.body,
        function(){
            res.send(null);
        },
        function(err){
            res.status(500);
            res.send(null);
        }
    );

}

exports.update = function(req, res){
	_logRequest("UPDATE", req);

    contactsStore.updateOne(
        req.body,
        function(){
            res.send(null);
        },
        function(err){
            res.status(500);
            res.send(null);
        }
    );
}

exports.delete = function(req, res){
	_logRequest("DELETE", req);

    contactsStore.deleteOne(
        req.params.id,
        function(){
            res.send(null);
        },
        function(err){
            res.status(500);
            res.send(null);
        }
    );
}


function _logRequest(operation, req){
	let m = moment();
	let ts = m.format();
	console.log("[---");
	console.log(ts + " " + operation);
	console.log("HEADERS >");
	console.log(req.headers);
	console.log("BODY >");
	console.log(req.body);
	console.log("---]");
}