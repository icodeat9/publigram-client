import React, { Component } from 'react'
import { Dialog, DialogActions, DialogTitle, Button, } from '@material-ui/core'

class My_Dialog extends Component {

    render() {
        const { open, title, onClose } = this.props;
        return (<Dialog open={open} onBackdropClick={() => onClose()} >
            <DialogTitle>{title}</DialogTitle>
            <DialogActions>
                <Button onClick={() => onClose()}>Close</Button>
            </DialogActions>
        </Dialog>)
    }
}

export default My_Dialog;