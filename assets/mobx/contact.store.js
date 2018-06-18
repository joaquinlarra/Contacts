import superagent from 'superagent';
import {observable} from 'mobx';

class ContactStore {
  @observable contacts = [];

  constructor() {
      console.log("mobx contact.store - node_env:" + process.env.NODE_ENV);
      console.log("mobx contact.store - api: " + process.env.API_HOST);
      this.load();
  }

  load(){
    const ALL = "http://" + process.env.API_HOST + '/contacts/all';
    console.log("mobx contact.store - load: " + ALL);

    superagent
            .get(ALL)
            .set('Accept', 'application/json')
            .end(
            	(error, results) => {
                if (error)
                    console.error(error);
                else {
                	console.log("mobx contact.store - load response: " + results.text);
                    const data = JSON.parse(results.text);
                    this.contacts.splice(0,this.contacts.length);
                    for(var i = 0; i < data.length; i++){
                    	this.contacts.push(data[i]);
                    }
                }
            });
  }

  add(contact, callback, callbackError){
      console.log("mobx contact.store - add: " + contact);
      superagent
          .post("http://" + process.env.API_HOST + '/contacts/add')
          .set('Accept', 'application/json')
          .send(contact)
          .end(
              (error, results) => {
                  if (error) {
                      console.error(error);
                      callbackError(error);
                  } else {
                      console.log("mobx contact.store - add response: " + results.statusText);
                      callback();
                  }
                });
  }

  update(contact, callback, callbackError){
      console.log("mobx contact.store - update: " + contact);
      superagent
          .put("http://" + process.env.API_HOST + '/contacts/update')
          .set('Accept', 'application/json')
          .send(contact)
          .end(
              (error, results) => {
                  if (error) {
                      console.error(error);
                      callbackError(error);
                  } else {
                      console.log("mobx contact.store - update response: " + results.statusText);
                      callback();
                  }
              });
    }

    delete(id, callback, callbackError){
        console.log("mobx contact.store - delete: " + id);
        superagent
            .delete("http://" + process.env.API_HOST + '/contacts/delete/'+ id)
            .set('Accept', 'application/json')
            .end(
                (error, results) => {
                    if (error) {
                        console.error(error);
                        callbackError(error);
                    } else {
                        console.log("mobx contact.store - delete response: " + results.statusText);
                        callback();
                    }
                });
    }

}

export default ContactStore;