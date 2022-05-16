import React, { Component } from "react";
import { Badge, Button } from 'reactstrap';

class ReactStrapBadge extends Component {
    render () {        
        return (
            <div>
                <h1>PRODUCT NAME <Badge color="secondary">hit</Badge></h1>
                <button color="light" outline>
                    Accessor <Badge color="dark">4</Badge>
                </button>
                <Badge color="danger" pill>pill</Badge>
                <Badge href="http://naver.com" color="light">Go Link</Badge>
            </div>
        )
    }
}

export default ReactStrapBadge;