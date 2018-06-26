import React from 'react';
import ReactDOM from 'react-dom';
import ContactStore from '../mobx/contact.store.js';
import ContactList from "./contact.list.jsx";
import AddContact from "./contact.add.form.jsx";
import Toggle from "./toggle.jsx";

class App extends React.Component{
	constructor (props) {
	    super(props);
	    this.state = {loading : false};
	    this.toggleLoader = this.toggleLoader.bind(this);
  	}

  	toggleLoader(){
        this.setState((prevState, props) => ({
            loading: !prevState.loading
        }));
    }

    render(){
	    var loaderClass = !this.state.loading ? "hidden" : "";
        return (
            <div>
                <div id="loader" className={loaderClass}></div>
                <Toggle key={1} css="oi oi-plus" icon="plus" component={<AddContact store={this.props.store} toggleLoaderHandler={this.toggleLoader}/>} />
                <ContactList store={this.props.store} toggleLoaderHandler={this.toggleLoader}/>
            </div>
        );
    }
};

const store = new ContactStore();

ReactDOM.render(<App store={store} />, document.getElementById("container"));
