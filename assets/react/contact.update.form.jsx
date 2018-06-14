import React from 'react';

// this child component is responsible for update the state of parent one,
// as happens for contact search form with contact list
class UpdateContact extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.defaultState();
        this.handleAnnullaClick = this.handleAnnullaClick.bind(this);
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
                <div class="input-group col-lg-12">
                <form>
                    <div class="col-lg-5">
                        <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1" value={this.props.json.name}/>
                    </div>
                    <div class="col-lg-5">
                        <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1" value={this.props.json.number}/>
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