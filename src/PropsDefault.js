import React, { Component } from "react";

class PropsDefault extends Component {
    render () {
        let {
            ReactString,
            ReactNumber
        } = this.props
        return (
            <div style={{paddig: "0px"}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }
}

export default PropsDefault;