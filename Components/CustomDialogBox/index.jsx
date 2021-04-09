import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle }
    from '@material-ui/core/';

const customDialogBox = (props) => {
    return (<Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {props.message}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleConfirm} color="primary">
                Confirm
            </Button>
            <Button onClick={props.handleClose} color="primary" autoFocus>
                Cancel
      </Button>
        </DialogActions>
    </Dialog>)
}

export default customDialogBox;