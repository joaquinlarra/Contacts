import React from 'react';
import AddContact from "./contact.add.form.jsx";

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.defaultState();

        this.handleUpdateViewButtonClick = this.handleUpdateViewButtonClick.bind(this);
    }

    handleUpdateViewButtonClick(event){
        event.preventDefault();
        this.setState((prevState, props) => ({
            updateView: !prevState.updateView
        }));
    }

    defaultState(){
        return {
            updateView : false
        };
    }

    render(){
        if ( !this.state.updateView ){
            return(
                <li className="list-group-item justify-content-between">
                    <div class="pull-left">
                        <span onClick={this.handleUpdateViewButtonClick} class="oi oi-pencil adjust-margin" data-glyph="pencil"></span>
                        <span class="oi oi-delete" data-glyph="delete"></span>
                    </div>
                    <h4>{this.props.json.name}</h4>
                    <span className="badge badge-default badge-pill">{this.props.json.number}</span>
                </li>
            )
        } else {
            return (<AddContact/>) /* TODO updateContact component */
        }
    }
}

export default Contact;