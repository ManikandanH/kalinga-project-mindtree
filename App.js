import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer/footer'
//import UserProfile from './Containers/User/'
import UserAdminRouteHandler from './Containers/RouteHandler';
import 'typeface-roboto'
import ProgressBar from './Components/ProgressBar'
import SnackBar from './Components/CustomizedSnackBar' 
import history from './history.jsx'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import bestProducts from './NewActions/bestproducts/bestProducts'




class App extends Component {
    componentWillMount = () => {
    this.props.bestProducts();
}
  render() {
    return (
        <div style={{background: "#f0f0f0"}}>
        <Router history={history}>
        <div>
        <Header />
          <UserAdminRouteHandler />
          <footer >
        <Footer />
            </footer>
          </div>

        </Router>
        <ProgressBar />
        <SnackBar />
        </div>


    );
  }
}

function mapdispatchtoprops(dispatch) {
    return bindActionCreators({bestProducts},dispatch);
}
export default connect(null,mapdispatchtoprops)(App);