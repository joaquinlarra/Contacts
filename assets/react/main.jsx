import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact.jsx';
import AddContact from "./contact.add.form.jsx";
import {observer} from 'mobx-react';
import ContactStore from '../mobx/contact.store.js';

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
            components = <span>No contacts found.</span>;
        } else {
            components = this.state.data.map(function(item) {
                return (
                    <Contact key={item.id} json={item} />
                );
            });
        }

        return (
            <div>
                <AddContact store={this.props.store}/>
                <ul className="list-group text-center contacts-list">
                    {components}
                </ul>
            </div>
        );
    }
};

const store = new ContactStore();

ReactDOM.render(<App store={store} />, document.getElementById("container"));
