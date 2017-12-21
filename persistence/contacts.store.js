'use strict';

var hashGenerator = require("../utils/identifier.utils");
var contacts = [];

exports.loadAll = function() {
	return contacts;
}

exports.insertOne = function(contact){
	//some kind of validation on contact
	contact.id = hashGenerator.generateHash(contact.name);
	contacts.push(contact);
	console.log("inserted contact with ID " + contact.id);
}

exports.updateOne = function(contact){
	//some kind of validation on contact
	for(var i = 0; i < contacts.length; i++){
		let contactToUpdate = contacts[i];
		if ( contact.id == contactToUpdate.id ){
			contacts[i] = contact;
			console.log("updated contact with ID " + contact.id);
		}
	}
}

exports.deleteOne = function(id){
	for(var i = 0; i < contacts.length; i++){
		let contact = contacts[i];
		if ( id == contact.id ){
			console.log("found to remove in position " + i);
			contacts.splice(i, 1);
			break;
		}
	}
}

//TODO delete