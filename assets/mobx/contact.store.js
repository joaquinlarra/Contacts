import superagent from 'superagent';
import {observable} from 'mobx';

class ContactStore {
  @observable contacts = [];

  constructor() {
  	this.load();
  }

  load(){
    console.log("CLIENT SIDE env: " + process.env.NODE_ENV);
    console.log("CLIENT SIDE api: " + process.env.API_HOST);

    const ALL = "http://" + process.env.API_HOST + '/contacts/all';
    console.log(ALL);

    superagent
            .get(ALL)
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
            .post("http://" + process.env.API_HOST + '/contacts/add')
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