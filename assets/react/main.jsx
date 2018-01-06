import React from 'react';
import ReactDOM from 'react-dom';
import ContactStore from '../mobx/contact.store.js';
import ContactList from "./contact.list.jsx";
import AddContact from "./contact.add.form.jsx";
import Toggle from "./toggle.jsx";

class App extends React.Component{
	constructor (props) {
	    super(props);
  	}

    render(){
        return (
            <div>
                <Toggle key={1} css="oi oi-plus" icon="plus" component={<AddContact store={this.props.store}/>} />
                <ContactList store={this.props.store}/>
            </div>
        );
    }
};

const store = new ContactStore();

ReactDOM.render(<App store={store} />, document.getElementById("container"));
