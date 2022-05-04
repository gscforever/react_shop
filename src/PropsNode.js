import React, { Component } from "react";

class PropsNode extends Component {
    render () {        
        return (
            <div style={{paddig: "0px"}}>
                {this.props.children}
            </div>
        )
    }
}

export default PropsNode;