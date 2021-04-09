import React from 'react'
import CustomDialogBox from './index'

class ImplementExample extends React.Component {
    state = {
        open: false
    }
    handleOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    handleConfirm = () => {
        this.setState({ open: false });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleOpen}>Click me </button>
                <CustomDialogBox open={this.state.open} title={"Confirmation"}
                    message={"Are you sure to delete??"} handleClose={this.handleClose}
                    handleConfirm={this.handleConfirm} />
            </div>
        )
    }

}
export default ImplementExample;