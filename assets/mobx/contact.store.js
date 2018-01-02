import superagent from 'superagent';
import {observable} from 'mobx';
 

class ContactStore {
  @observable contacts = [];

  constructor() {
  	this.load();
  }

  load(){
  	superagent
            .get('http://localhost:3000/contacts/all')
            .set('Accept', 'application/json')
            .end(
            	(error, results) => {
                if (error)
                    console.error(error);
                else {
                	console.log("STORE > Server response body: " + results.text);
                    const data = JSON.parse(results.text);
                    this.contacts.splice(0,this.contacts.length);
                    for(var i = 0; i < data.length; i++){
                    	this.contacts.push(data[i]);
                    }
                }
            });
  }

  add(contact){
      console.log("STORE > Sending: " + contact);
        superagent
            .post('http://localhost:3000/contacts/add')
            .set('Accept', 'application/json')
            .send(contact)
            .end(
                (error, results) => {
                    if (error)
                        console.error(error);
                    else {
                        console.log("STORE > Server response body: " + results.text);
                    }
                });
  }

}

export default ContactStore;