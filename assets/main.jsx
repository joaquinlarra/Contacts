import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact.jsx';

function render(){
    ReactDOM.render(<Contact contactJson={{'name':'USE MOBX', 'number':'0123456789'}} />, document.getElementById("container"));    
}
render();

/*
var React = require("react");
var ReactDOM = require("react-dom");
var Contact = require("./contact.jsx");
                
function render(){
    ReactDOM.render(<Contact contactJson={{'name':'USE MOBX', 'number':'0123456789'}} />, document.getElementById("container"));    
}
render();
*/

