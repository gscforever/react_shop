import React, {Component} from 'react';
import { connect } from 'react-redux';
import StrAddButton from './StrAddButton'
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import StrapDropdown from './StrapDropdown';
// import StrapAlert from './StrapAlert'
// import ImportComponent from './ImportConpoent';
// import Life from './Life';
// import Lifecycle from './Lifecycle';
import Lifecycleex from './Lifecycleex';
// import Jquery from './Jquery';
// import Card from './Card';
import Es6 from './Es6'
import Variable from './Variable';
import SperadOperator from './SperadOperator';
import ClassProtoytpe from './Class&prototype';
import ArrowFunction from './ArrowFunction';
import ForEach from './ForEach';
import Map from './Map';
import Jquery from './Jquery';
import Props from './Props';
import PropsDatatype from './PropsDatatype';
import PropsBoolean from './PropsBoolean';
import PropsRequired from './PropsRequired';
import PropsDefault from './PropsDefault';
import PropsNode from './PropsNode';
import ReactState from './ReactState';
import SetState from './SetState';
import ForceUpdate from './ForceUpdate';
import ComponentClass from './ComponentClass';
import PureComponentClass from './PureComponentClass';
import ShallowEqual from './ShallowEqual';
import ReactStrapBadge from './ReactStrapBadge';
import ReactstrapBreadcrumbs from './ReactstrapBreadcrumbs';
import ReactstrapButtonGroup from './ReactstrapButtonGroup';
import ReactstrapButtons from './ReactstrapButtons';
import ReactstrapCard from './ReactstrapCard';

class App extends Component {  
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        <span>{this.props.str}</span><br/>
        <StrAddButton AppProp="200"/>
      </div>
    );
  }
}

let mapStateToProps = (state, props) => {
  console.log('props from indes.js : ' + props.indexProp)
  return {
    str: state.data.str,
  };
};

App = connect(mapStateToProps, null)(App);

export default App;