import React from 'react';
import Contact from './contact.jsx';
import SearchContact from "./contact.search.form.jsx";
import {observer} from 'mobx-react';

@observer
class ContactList extends React.Component{
    constructor (props) {
        super(props);
        this.state = {data : []};
        this.filterContacts = this.filterContacts.bind(this);
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

    filterContacts(text){
        const filteredData = [];

        if ( text.length > 0 ) {
            this.props.store.contacts.map(
                function (item) {
                    if (item.name.indexOf(text) > -1 || item.number.indexOf(text) > -1) {
                        filteredData.push(item);
                    }
                }
            );

            this.setState(
                {data : filteredData}
            );
        } else {
            this.setState(
                {data : this.props.store.contacts}
            );
        }
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

        // i've chosen to not expose a search operation from BE
        return (
            <div>
                <SearchContact filterContactListHandler={this.filterContacts} />
                <ul className="list-group text-center contacts-list">
                    {components}
                </ul>
            </div>
        );
    }
}

export default ContactList;