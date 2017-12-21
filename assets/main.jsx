var React = require("react");
var ReactDOM = require("react-dom");
var Contact = require("./contact.jsx");
                
function render(){
    ReactDOM.render(<Contact />, document.getElementById("container"));    
}
render();