import React, { Component } from "react";
import { Button, ButtonGroup } from 'reactstrap';

class ReactstrapButtonGroup extends Component {
    constructor(prop) {
        super(prop);
        this.state = { number: 10 }
    }

    move = (type, e) => {
        if(type === 'Left'){
            this.setState({number: this.state.number - 1})
        }else if(type === 'Right')(
            this.setState({number: this.state.number + 1})
        )
    }

    render () {        
        return (
            <div style={{padding: "0px"}}>
                <ButtonGroup style={{padding: "0px"}}>
                    <Button onClick={e => this.move('Left')}>Left</Button>
                    <Button onClick={e => this.move('Right')}>Right</Button>
                </ButtonGroup>
                <br/>{this.number}
            </div>
        )
    }
}

export default ReactstrapButtonGroup;