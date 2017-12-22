var React = require("react");
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    displayName: 'Contact',
    render:function(){
        return(
            <div>
                <p>{this.props.contactJson.name}</p>
                <p>{this.props.contactJson.number}</p>
            </div>
        )
    }
})