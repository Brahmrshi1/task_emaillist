import React, { Component } from 'react'
import {getData}from '../action/index'
import { connect } from 'react-redux';

 class Button extends Component {
      render() {
    
    return (
      <div>
        <button onClick={this.props.getData}>
            Click Me!    
        </button>
      </div>
    )
  }
}   
const mapDispatchToProps = {
    getData: getData,
  };

  Button = connect(
  null,
  mapDispatchToProps,
  )(Button)
  export default Button;