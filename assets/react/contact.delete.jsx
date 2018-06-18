import React from 'react';

class DeleteContact extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.defaultState();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        console.log("react contact.delete " + this.state._id);
        const STORE = this.props.store;
        STORE.delete(this.state._id,
            function(){
                console.log("react contact.delete - reload");
                STORE.load();
            },
            function(err){
                alert(err);
            }
        );
    }

    defaultState(){
        return {
            _id : this.props._id
        };
    }

    render(){
        return <span onClick={this.handleClick} className="oi oi-delete pointer" data-glyph="delete"></span>;
    }
}

export default DeleteContact;