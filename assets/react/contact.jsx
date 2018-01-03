import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <li className="list-group-item justify-content-between">
                <h4>{this.props.json.name}</h4>
                <span className="badge badge-default badge-pill">{this.props.json.number}</span>
            </li>
        )
    }
}

export default Contact;