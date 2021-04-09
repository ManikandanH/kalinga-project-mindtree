import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

import signInWithGoogleAction from '../../../../NewActions/SignInWithGoogle/signInWithGoogle.js'


class SignInWithGoogle extends React.Component {
    render() {
        return (

            <img style={{ width: "80%", maxHeight: "75%", padding: "0" }} onClick={this.props.signInWithGoogleAction}
                src={`https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/btn_google_signin_light_normal_web%402x.png?alt=media&token=86f99929-45a5-4275-9c2a-6b945f4c7c8f`}
                alt="Sign In with google" />

        )
    }
}
function mapdispatchtoprops(dispatch) {
    return bindActionCreators({ signInWithGoogleAction }, dispatch)

}
export default connect(null, mapdispatchtoprops)(SignInWithGoogle)    