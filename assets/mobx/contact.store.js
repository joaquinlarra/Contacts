import superagent from 'superagent';
import {observable, computed} from 'mobx';
 

class ContactStore {
  @observable contacts = [];

  constructor() {
  	this.load();
  }

  load(){
  	superagent
            .get('http://localhost:3000/contacts/all/')
            .set('Accept', 'application/json')
            .end(
            	(error, results) => {
                if (error)
                    console.error(error);
                else {
                	console.log("Server response body: " + results.text);
                    const data = JSON.parse(results.text);
                    for(var i = 0; i < data.length; i++){
                    	this.contacts.push(data[i]);
                    }
                }
            });
  }

}

export default ContactStore;