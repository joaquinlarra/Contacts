import React from 'react';
import ReactDOM from 'react-dom';
import ContactStore from '../mobx/contact.store.js';
import ContactList from "./contact.list.jsx";

class App extends React.Component{
	constructor (props) {
	    super(props);
  	}

    render(){
        return (
            <ContactList store={this.props.store}/>
        );
    }
};

const store = new ContactStore();

ReactDOM.render(<App store={store} />, document.getElementById("container"));
