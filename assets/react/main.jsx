import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact.jsx';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import ContactStore from '../mobx/contact.store.js';
import moment from 'moment';

@observer
class App extends React.Component{
	constructor (props) {
	    super(props);
        this.state = {data : []};
  	}

	componentWillMount(){
        this.setState({
            data: this.props.store.contacts
        });
	}

	componentDidMount() {
	}

    componentDidUpdate(){
    }

    render(){
        var components;
        if (this.state.data.length == 0){
            components = <h1>Here will appear a contact info</h1>; 
        } else {
            components = this.state.data.map(function(item) {
                return (
                    <Contact key={item.id} json={item} />
                );
            });
        }

        return (
            <ul className="list-group">
                {components}
            </ul>
        );
    }
};

const store = new ContactStore();

ReactDOM.render(<App store={store} />, document.getElementById("container"));
