import React from 'react';

/**
 * vincenzo.longo
 *
 * this child component is responsible for update the state of parent one,
 * as happens for contact search form with contact list
 */
class UpdateContact extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.defaultState();
        this.handleAnnullaClick = this.handleAnnullaClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAnnullaClick(event){
        event.preventDefault();
        this.props.updateContactState(event);
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("react contact.update " + this.state._id);
        //TODO contactStore.update call
    }

    defaultState(){
        // state is built and loaded starting from this.props.json
        return {_id : this.props.json._id, name : this.props.json.name, number : this.props.json.number};
    }

    render(){
        return(
            <li className="list-group-item justify-content-between">
                <div class="input-group col-lg-12">
                <form onSubmit={this.handleSubmit}>
                    <input type="hidden" name="_id" value={this.state._id}/>
                    <div class="col-lg-5">
                        <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1"
                               name="name" onChange={this.handleChange} value={this.state.name}/>
                    </div>
                    <div class="col-lg-5">
                        <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1"
                               name="number" onChange={this.handleChange} value={this.state.number}/>
                    </div>
                    <div class="col-lg-2">
                        <button className="btn btn-success oi oi-check" data-glyph="check"></button>
                        &nbsp;
                        <button onClick={this.handleAnnullaClick} class="btn btn-danger oi oi-action-undo" data-glyph="action-undo"></button>
                    </div>
                </form>
                </div>
            </li>
        )
    }
}

export default UpdateContact;