import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact.jsx';
import {observer} from 'mobx-react';
import Store from './contacts.client.store.js';

@observer
class App extends React.Component{
	constructor (props) {
	    super(props);
	    this.items = this.props.store.fetch.bind(this);
  	}

	componentWillMount(){
		console.log("willMount ...");
		this.props.store.fetch();
	}

	componentDidMount() {
		console.log("didMount ...");
		//this.props.store.fetch();
	}

    render(){
        return(
        	<div>
        	{
        		this.items.map(
        			(item, key) => { <Contact contactJson={item} /> }
        		)
        	}
        	</div>
        );
    }
};

const store = new Store();

ReactDOM.render(<App store={store} />, document.getElementById("container"));
