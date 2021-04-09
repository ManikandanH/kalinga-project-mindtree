import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import showSnackBar from '../../NewActions/SnackBar/showSnackBarAction.js'

class App extends Component {
    handleClick = () => {
      this.props.showSnackBar({
          message:"OM NAMAH SIBAH",
          type:"error"
      });
      
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click here</button>
        </div>
  
      );
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ showSnackBar}, dispatch)
  }
  
  export default connect(null, mapDispatchToProps)(App);
  
