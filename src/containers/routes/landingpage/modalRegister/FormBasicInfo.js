import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles'
import { DatePicker } from 'material-ui-pickers';
import { Typography, FormGroup, FormControl, Select, MenuItem, Button, Slide, Radio, FormLabel, RadioGroup, FormControlLabel, Input, InputLabel, CircularProgress } from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import SelectAutoComplete from 'react-select';
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
    mainFormControl: {
        textAlign: "left",
        padding: 10,        
    }
})

const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'red' }),
    input: styles => ({ ...styles, backgroundColor: 'red' }),
    placeholder: styles => ({ ...styles, backgroundColor: 'red' }),
    // singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};
//'(1  )    -    '

const FormPartOne = (props) => {
    const { handleformData, form, handleDate, classes, data, sendData, errors, loading } = props;
    return <Slide in>
        <FormControl className={classes.mainFormControl} >
            <FormGroup >

                <TextField autoFocus required error={errors.name} value={form.name} label="Nombres" margin="normal" className={[classes.textField, classes.textFieldDouble]}
                    onChange={(e) => handleformData(e, "name")} />
                <TextField required error={errors.lastName}  value={form.lastName} label="Apellidos" margin="normal" className={[classes.textField, classes.textFieldDouble]}
                    onChange={(e) => handleformData(e, "lastName")} />
                <TextField required error={errors.cedula}  value={form.cedula} label="Cédula" margin="normal" className={[classes.textField, classes.textFieldDouble]}
                    onChange={(e) => handleformData(e, "cedula")} />
                <TextField required error={errors.email}  value={form.email} label="Correo electrónico" margin="normal" className={[classes.textField, classes.textFieldDouble]}
                    onChange={(e) => handleformData(e, "email")} />
                <FormControl className={classes.formControl} component="fieldset" >
                    <FormLabel component="legend" ></FormLabel>
                    <TextField required error={errors.address} className={classes.textField} value={form.address} label="Address" onChange={(e) => handleformData(e, "address")} />
                </FormControl>

                {/* </FormGroup>
            <FormGroup row> */}
            </FormGroup>

            <FormGroup row>
                <FormControl className={classes.formControl} component="fieldset" >
                    <FormLabel component="legend" style={{ marginBottom: 12 }} ></FormLabel>
                    <div className={classes.textField} style={{ width: 400 }}>
                        <CustomAutoComplete required error={errors.nationalityId} placeholder="Select a country" formName="nationalityId" suggestions={[{ value: "x", label: "x" }]} handleformData={handleformData} value={form.nationalityId} />
                    </div>
                </FormControl>
            </FormGroup>
        </FormControl>
    </Slide>
}


class formData extends Component {

    render() {
        const { classes, handleformData, handleDate, form, sendData, errors, loading } = this.props;

        return (
            // <Paper>
            <div style={{overflowX: "hidden"}} >
                <Typography variant="display1">Basic personal information</Typography>
                {/* <HandleForms classes={classes} data={data} form={form} steps={steps} form={form} handleformData={handleformData} handleformData={handleformData} sendData={sendData} /> */}
                <FormPartOne loading={loading} errors={errors} classes={classes} form={form} handleformData={handleformData} handleDate={handleDate} sendData={sendData} />

            </div>
            // </Paper>

        )
    }

}

export default withStyles(styles)(formData);