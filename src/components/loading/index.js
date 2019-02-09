import React, { Component } from 'react'
import { Dialog, DialogContent,CircularProgress } from '@material-ui/core'

class My_Dialog extends Component {

    render() {
        const { open, } = this.props;
        return (<Dialog open={open}>
            <DialogContent>
                <CircularProgress/>
            </DialogContent>
        </Dialog>)
    }
}

export default My_Dialog;