import React, { Component } from "react";

class SetState extends Component {
    constructor (props) {
        super(props);
        this.state = {
            StateString: 'react',
        }
    }

    StateChange = (flag) => {
        if(flag == 'direct') this.state.StateStrings = '리액트';
        if(flag == 'setstate') this.setState({StateString : '리액트'});
    }

    render () {        
        return (
            <div style={{paddig: "0px"}}>
                <button onClick={(e) => this.StateChange('direct', e)}>
                    state 직접 변경
                </button>
                <button onClick={(e) => this.StateChange('setstate', e)}>
                    setstate로 변경
                </button>
                <br/>
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default SetState;