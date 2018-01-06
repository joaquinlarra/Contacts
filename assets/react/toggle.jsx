import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        this.setState((prevState, props) => ({
            show: !prevState.show
        }));
    }

    //TODO fix min-height and margin right for icon
    render(){
        var isComponentHidden = !this.state.show ? "hidden" : "";
        return(
            <div className="clearfix">
                <div className="pull-left">
                    <span onClick={this.handleClick} className={this.props.css} data-glyph={this.props.icon}></span>
                </div>
                <div className={isComponentHidden}>{this.props.component}</div>
            </div>
        )
    }
}

export default Toggle;