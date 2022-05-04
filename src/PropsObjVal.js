import React, { Component } from "react";
import datatype from 'prop-types';

class PropsObjVal extends Component {
    render () {
        let {
            Object Json
        } = this.props
        return (
            <div style={{paddig: "0px"}}>
                <p>ObjectProps: {JSON.stringify(Object Json)}</p>
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

export default PropsObjVal;