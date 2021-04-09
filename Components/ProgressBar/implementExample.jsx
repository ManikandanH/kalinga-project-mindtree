import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import startProgressBar from '../../NewActions/ProgressBar/startProgressBarAction.js'
import stopProgressBar from '../../NewActions/ProgressBar/stopProgressBarAction'

class App extends Component {
    handleClick = () => {
      this.props.startProgressBar();
      setTimeout(() => {
        this.props.stopProgressBar()
      }, 3000)
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
    return bindActionCreators({ startProgressBar, stopProgressBar }, dispatch)
  }
  
  export default connect(null, mapDispatchToProps)(App);
  
