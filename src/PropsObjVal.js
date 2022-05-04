import React, { Component } from "react";
import datatype from 'prop-types';

class PropsObjVal extends Component {
    render () {
        let {
            Object
        } = this.props
        return (
            <div style={{paddig: "0px"}}>
                <p>ObjectProps: {JSON.stringify(Object)}</p>
            </div>
        )
    }
}

export default PropsObjVal;