import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles'
import { Typography, FormGroup, FormControl, MenuItem, Button, Slide, FormLabel} from '@material-ui/core';
import CustomAutoComplete from '../../../../components/AutoComplete'

const styles = theme => ({
    formControl: { marginTop: theme.spacing.unit * 4 },
    textField: { marginLeft: theme.spacing.unit },
    // textFieldDouble: { marginLeft: theme.spacing.unit*12, width: 320 },
    textFieldDouble: { marginLeft: theme.spacing.unit, width: 420 },
    textGenter: { width: 350 },
    paperDoc: { padding: theme.spacing.unit * 2 },
    button: { margin: theme.spacing.unit },
    nextButton: {
        background: "linear-gradient(60deg, #ef5350, #e53935)",
        marginTop: 10
    },
    checkbox: {
        color: "green",
        '&$checked': {
            color: "red",
        },
    },
    checked: {},
})



const SaveButton = (props) => {
    const { sendData, steps } = props;
    return <div>
        <br />
        {steps == 1 && <Button fullWidth variant="contained" color="primary" style={{ backgroundColor: "#4caf50" }} onClick={sendData} >
            Save
                </Button>}
    </div>
}


class formData extends Component {


    render() {
        const { classes, handleformData, handleDate, form, sendData, errors, loading } = this.props;
        return (
            // <Paper>
            <div>
                <Typography variant="display1">Cliente</Typography>
            </div>
            // </Paper>

        )
    }

}

export default withStyles(styles)(formData);