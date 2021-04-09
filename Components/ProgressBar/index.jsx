import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, LinearProgress } from '@material-ui/core';


import stopProgressBar from '../../NewActions/ProgressBar/startProgressBarAction.js'

class ProgressBar extends React.Component {

    render() {
        return (
            <Modal open={this.props.progressBar.startProgressBar} onClose={this.stopProgressBar}>
                <LinearProgress />
            </Modal>
        )
    }

}

function mapStateToProps(state) {
    return {
        progressBar: state.progressBarReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ stopProgressBar }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);