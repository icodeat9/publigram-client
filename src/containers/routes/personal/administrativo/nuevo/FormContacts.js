import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles'
import { FormGroup, FormControl, Card, Tab, Paper, Tabs, Typography, Button, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Slide, FormLabel } from '@material-ui/core';
import axios from 'axios'
import DialogMsj from '../../../../../components/modal_error'

const styles = theme => ({
    formControl: { marginTop: theme.spacing.unit * 4 },
    textField: { marginLeft: theme.spacing.unit },
    // textFieldDouble: { marginLeft: theme.spacing.unit*12, width: 320 },
    textFieldDouble: { marginLeft: theme.spacing.unit, width: 420 },
    textGenter: { width: 100 },
    paperDoc: { padding: theme.spacing.unit * 2 },
    button: { margin: theme.spacing.unit },
})

const ContactsFields = (props) => {
    const { actual_contact, form, handleForm, classes, contact_types } = props;
    let disabledForm = [];
    let textFieldtype;
    return form.map((v, i) => {
        disabledForm[i] = !(actual_contact == i);
        textFieldtype = actual_contact == i ? "outlined" : "filled";
        // alert(actual_contact == form.length-1)
        // alert(disabledForm[i])
        return <Slide in>
            <FormControl className={classes.formControl} style={{textAlign: "left"}} >
                <FormGroup row>
                    <TextField
                        disabled={disabledForm[i]}
                        select
                        className={[classes.textField, classes.textFieldDouble]}
                        
                        label="Select contact type"
                        placeholder="WhatsApp"
                        value={form[i].contactTypeId}
                        onChange={(e) => handleForm(e, "contactTypeId")}
                    >
                        {/* <MenuItem key={-1} disabled value={0}>Select</MenuItem> */}
                        {contact_types.map(option => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.description}
                            </MenuItem>
                        ))}
                    </TextField>
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" style={{marginBottom: -48}} ></FormLabel>
                    <TextField  disabled={disabledForm[i]} value={form[i].value} onChange={(e) => handleForm(e, "value")} label="Answer" margin="normal" placeholder="+1 999-999-999/ email@example.com" className={[classes.textField, classes.textFieldDouble]} />
                    </FormControl>
                </FormGroup>
            </FormControl>
        </Slide>
    })
}

class TabsExtraInfo extends Component {
    state =
        {
            form: [{ contactTypeId: 0, value: "" }],
            contact_types: [], actual_contact: 0,
            dialog: { title: "", open: "" }
        }

    componentDidMount() {
        this.getContactTypes()
    }

    getContactTypes = () => {
        axios.get("/company-management/api?tableName=contact-types")
            .then(res => this.setState({ contact_types: res.data }))
            .catch(err => alert("An error has ocurred"))
    }


    openDialog = (message) => {
        let { dialog } = this.state;
        dialog.open = !dialog.open;
        dialog.title = message;
        this.setState({ dialog })
    }

    closeDialog = () => {
        let { dialog } = this.state;
        dialog.open = false;
        this.setState({ dialog })
    }



    render() {
        const { dialog, contact_types } = this.state;
        const { classes, actual_id, handleFormContacts, actual_contact, form, saveData, newForm } = this.props;
        const show = actual_id != null ? "" : "none"
        return (
            <Slide in>
                <div style={{ display: show }} >
                    <Typography variant="display1">Job personal contacts</Typography>
                    <FormControl>
                        <ContactsFields contact_types={contact_types} form={form} actual_contact={actual_contact} handleForm={handleFormContacts} classes={classes} />
                        <FormGroup row>
                        <Button id="secondaryButton" variant="outlined" onClick={newForm}>Save or add more</Button>
                        <Button id="primaryButton" variant="contained" color="primary" onClick={saveData}>FINISH</Button>
                        </FormGroup>
                        <DialogMsj open={dialog.open} title={dialog.title} onClose={this.closeDialog} />
                    </FormControl>
                </div>
            </Slide>
        )
    }
}

export default withStyles(styles)(TabsExtraInfo)