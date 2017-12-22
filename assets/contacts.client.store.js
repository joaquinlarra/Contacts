//import fetch from 'isomorphic-fetch';
import superagent from 'superagent';
import {observable, computed} from 'mobx';
 
//const apiHost = 'http://localhost:3000/contacts';
class Store {
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
                	console.log(results.text);
                    const data = JSON.parse(results.text);
                    for(var i = 0; i < data.length; i++){
                    	console.log(data);
                    	this.contacts.push(data[i]);
                    }
                }
            });
  }

}

export default Store;