import React from 'react';
import UpdateContact from "./contact.update.form.jsx";
import DeleteContact from "./contact.delete.jsx";

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.defaultState();

        this.toggleUpdateView = this.toggleUpdateView.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    toggleUpdateView(event){
        event.preventDefault();
        this.setState((prevState, props) => ({
            updateView: !prevState.updateView,
            showButtons: prevState.showButtons
        }));
    }

    handleMouseOver(event){
        event.preventDefault();
        /*
        this.setState((prevState, props) => ({
            updateView: prevState.updateView,
            showButtons: !prevState.showButtons
        }));
        */
    }

    defaultState(){
        return {
            showButtons: true,
            updateView : false
        };
    }

    render(){
        var options;
        if ( this.state.showButtons ){
            options =
                <div className="pull-left">
                    <span onClick={this.toggleUpdateView} className="oi oi-pencil adjust-margin pointer" data-glyph="pencil"></span>
                    &nbsp;
                    <DeleteContact _id={this.props.json._id}/>
                </div>;
        } else {
            options = <div className="pull-left"></div>;
        }

        if ( !this.state.updateView ){
            return(
                <li onMouseOver={this.handleMouseOver} className="list-group-item justify-content-between">
                    {options}
                    <h4>{this.props.json.name}</h4>
                    <span className="badge badge-default badge-pill">{this.props.json.number}</span>
                </li>
            )
        } else {
            return (<UpdateContact key={this.props.json._id + "_"} updateContactState={this.toggleUpdateView} json={this.props.json}/>)
        }
    }
}

export default Contact;