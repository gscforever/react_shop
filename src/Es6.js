import React, { Component} from "react";

class Es6 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var jsString1 = '자바스크립트';
        var jsString2 = '입니다/n다음 줄 입니다.';
        console.log(jsString1+' 문자열'+jsString2+'~');

        var Es6String1 = 'Es6';
        var Es6String2 = '입니다';
        console.log(`${Es6String1} 문자열${Es6String2}________다음 줄 입니다`);
    }

    render() {
        return (
            <h2>[THIS IS ES6 STRING ]</h2>
        )
    }

}

export default Es6;