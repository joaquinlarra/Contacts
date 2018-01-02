import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <li className="list-group-item justify-content-between">
                {this.props.json.name}
                <span className="badge badge-default badge-pill">{this.props.json.number}</span>
            </li>
        )
    }
}

export default Contact;