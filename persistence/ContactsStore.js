'use strict';

var contacts = [{'id': '1', 'name':'Alex', 'number':'9876543210'}, {'id': '2', 'name':'Vincent', 'number':'0123456789'}];

exports.loadAll = function() {
	return contacts;
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

exports.insertOne = function(contact){
	contact.id = contacts.length+1;
	contacts.push(contact);
}

//TODO deleteOne

//TODO delete