import React, { Component } from "react";

class Variable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName1 : '+varName);
        varName = '200';
        console.log('varName2 : '+varName);

        let letName = 'react';
        console.log('letName1 : '+letName);
        letName = 'react200';
        console.log('letName2 : '+letName);

        const constName = 'react';
        console.log('constName : '+constName);
    }

    render() {
        return (
            <h2>[THIS IS Variable ]</h2>
        )
    }

}

export default Variable;