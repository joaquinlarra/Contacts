'use strict';

/**
 * vincenzo.longo
 *
 * MongoDb persistence layer. It works on Contact model mapped to
 * related collection.
 */

const DB = require('monk')(process.env.DB_HOST);
const contacts = DB.get('contact');
console.log("Connection to DB "  +process.env.DB_HOST+ " alive.");

exports.loadAll = function(callback, callbackError){
    contacts.find().then((docs) => {
        console.log("contacts.store - loaded " + docs.length + " docs.");
        callback(docs);
    }).catch((err) => {
        console.log("contacts.store - error : " + err);
        callbackError(err);
    }).then(() => DB.close());
}

exports.insertOne = function(contact, callback, callbackError){
    contacts.insert([contact])
		.then(() => {
		    console.log("contacts.store - inserted new contact");
		    callback();
		})
        .catch((err) => {
            console.log("contacts.store - error : " + err);
            callbackError(err);
        })
		.then(() => DB.close());
}

exports.updateOne = function(contact, callback, callbackError){
    contacts.updateOne({_id : ObjectId(contact.id)}, {$set : {name : contcat.name, number : contact.number}})
		.then(() => {
		    console.log("contacts.store - updated contact with id " + contact.id);
		    callback();
        })
        .catch((err) => {
            console.log("contacts.store - error : " + err);
            callbackError(err);
        })
		.then(() => DB.close());
}

exports.deleteOne = function(id, callback, callbackError){
    contacts.remove({ _id: ObjectId(id)})
		.then(() => {
		    console.log("contacts.store - deleted contact with id " + id);
		    callback();
        })
        .catch((err) => {
            console.log("contacts.store - error : " + err);
            callbackError(err);
        })
		.then(() => DB.close());
}
