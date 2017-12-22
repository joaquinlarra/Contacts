import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <li class="list-group-item justify-content-between">
                {this.props.json.name}
                <span class="badge badge-default badge-pill">{this.props.json.number}</span>
            </li>
        )
    }
}

export default Contact;