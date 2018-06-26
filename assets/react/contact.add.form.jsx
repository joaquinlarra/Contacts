import React from 'react';

class AddContact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name: '', number: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addCallback = this.addCallback.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("react contact.add : " + this.state.name + ", " + this.state.number);

        this.props.store.add(this.state, this.addCallback, function(err){
            alert(err);
        });
    }

    addCallback(){
        //TODO call this.props.toggleLoaderHandler();
        console.log("react contact.add : calling load for refresh");
        this.props.store.load();
        this.setState({name: '', number: ''});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} class="form-inline">
                <div class="form-group">
                    <input type="text" class="form-control col-sm-12 adjust-margin" name="name" placeholder="Name"
                           value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div class="form-group col-xs-offset-0">
                    <input type="text" class="form-control col-sm-12 adjust-margin" name="number" placeholder="Number"
                           value={this.state.number} onChange={this.handleChange}/>
                </div>
                <button type="submit" class="btn btn-primary adjust-margin">Save</button>
            </form>
        )
    }
}

export default AddContact;