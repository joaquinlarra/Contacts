import React from 'react';

class SearchContact extends React.Component{

    constructor(props) {
        super(props);
        this.state = {textSearch: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const START_SEARCH_FROM = 3;
        const value = event.target.value;

        this.setState({
            textSearch: value
        });

        if ( value.length == 0 || value.length >= START_SEARCH_FROM ) {
            this.props.filterContactListHandler(value);
        }
    }

    render(){
        return(
            <form class="form-inline">
                <div class="form-group">
                    <input type="text" class="form-control col-sm-12 adjust-margin" name="search" placeholder="Search..."
                           value={this.state.textSearch} onChange={this.handleChange}/>
                </div>
            </form>
        )
    }
}

export default SearchContact;