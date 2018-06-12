import React from 'react';

// this child component is responsible for update the state of parent one,
// as happens for contact search form with contact list
class UpdateContact extends React.Component{
    constructor(props) {
        super(props);

        this.state = this.defaultState();

        //TODO implement and bind handler
    }

    handleChange(event){

    }

    handleSubmit(event){

    }

    handleAnnullaClick(event){
        event.preventDefault();
        this.props.updateContactState(event);
    }

    defaultState(){
        return {

        };
    }

    render(){
        return(
            <li className="list-group-item justify-content-between">
                <form>
                    <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1" value={this.props.json.name}/>
                    <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1" value={this.props.json.number}/>
                    <button onClick={this.handleAnnullaClick}>Annulla</button>
                </form>
            </li>
        )
    }
}

export default UpdateContact;