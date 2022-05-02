import React, { Component } from "react";

class SperadOperator extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varArray1 = ['num1', 'num2'];
        var varArray2 = ['num3', 'num4'];
        var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
        console.log('1. sunVarArr: '+sumVarArr);

        let sumLetArr = [...varArray1, ...varArray2];
        console.log('2. sumLetArr : '+sumLetArr);

        const [sum1, sum2, ...remain] = sumLetArr;
        console.log('3. sum : '+sum1+', sum2 : '+sum2+', remain : '+remain);

        let varObj1 = { key1 : 'val1', key2 : 'val2'};
        let varObj2 = { key3 : 'val3', key4 : 'val4'};
        var sumVarObj = Object.assign({}, varObj1, varObj2);
        console.log('4. sumVarObj : '+JSON.stringify(sumVarObj));
        
        var sumLetObj = {...varObj1, ...varObj2};
        console.log('5. sumLetObj : '+JSON.stringify(sumLetObj));

        var {key1, key3, ...others} = sumLetObj;
        console.log('6. key1 : '+key1+', key3 : '+key3+', others : '+JSON.stringify(others));        
    }

    render() {
        return (
            <h2>[THIS IS SperadOperator ]</h2>
        )
    }

}

export default SperadOperator;