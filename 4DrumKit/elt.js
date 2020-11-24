'use strict';
const elt = (name, attributes) => {
    let node = document.createElement(name);
    if(attributes){
        for(let attr in attributes){
            if(attributes.hasOwnProperty(attr)){
                node.setAttribute(attr, attributes[attr]);
            }
        }
    }
    for(let i = 2; i < arguments.length; i++){
        let child = arguments[i];
        if(typeof child == "string"){
            child = document.createTextNode(child);
        }
        node.appenchild(child);
    }
    return node;
}