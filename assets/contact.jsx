import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.contactJson.name}</p>
                <p>{this.props.contactJson.number}</p>
            </div>
        )
    }
}

export default Contact;

/*
var React = require("react");
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    displayName: 'Contact',
    render:function(){
        return(
            <div>
                <h1>Here will appear a contact info</h1>
                <p>{this.props.contactJson.name}</p>
                <p>{this.props.contactJson.number}</p>
            </div>
        )
    }
})
*/