import React, { Component } from "react";
import datatype from 'prop-types';

class PropsDatatype extends Component {
    render () {
        let {
            String, Number, Boolean, Array, Object, Json, Function
        } = this.props
        return (
            <div style={{paddig: "0px"}}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString()}</p>
                <p>ObjectProps: {JSON.stringify(Object)}</p>
                <p>FunctionProps: {Function}</p>
            </div>
        )
    }
}

PropsDatatype.propTypes = {
    String: datatype.number,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    Object: datatype.object,
    Function: datatype.func,
}

export default PropsDatatype;