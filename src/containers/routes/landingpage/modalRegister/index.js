import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles'
import { Typography, FormControl, Icon, Fab, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, CircularProgress } from '@material-ui/core';
import IconClose from '@material-ui/icons/Close'
import { AccountCircle, AccountCircleOutlined, Face, FaceOutlined, Work, WorkOutline, FolderSharedOutlined, AttachFileOutlined } from '@material-ui/icons'
import DialogError from '../../../../components/modal_error'

import FormInfluencer from './FormInfluencer.js'
import FormCliente from './FormCliente'
import NavPills from '../../../../components/NavPills/NavPills'
import moment from 'moment'
import axios from 'axios'


const styles = theme => ({
    formControl: { marginTop: theme.spacing.unit * 4 },
    textField: { marginLeft: theme.spacing.unit },
    // textFieldDouble: { marginLeft: theme.spacing.unit*12, width: 320 },
    textFieldDouble: { marginLeft: theme.spacing.unit, width: 420 },
    textGenter: { width: 100 },
    paperDoc: { padding: theme.spacing.unit * 2 },
    button: { margin: theme.spacing.unit },
    fabButton: {
        background: "linear-gradient(60deg, #ef5350, #e53935)",
    }

})

class Window extends Component {
    state =
        {
            form: {
                name: "",
                lastName: "",
                address: "",
                birthDate: new Date(),
                cedula: "",
                email: "",
                instagram: "",
                youtube: "",
                country: "República Dominicana",
                contenido: 0,


            },
            dialog: { open: false, title: "" },
            errors: {
                name: false,
                lastName: false,
                address: false,
                birthDate: false,
                cedula: false,
                email: false,
                instagram: false,
                youtube: false,
                country: false,
                contenido: false,
            },
            loading: false
        }

    handleformData = (event, type) => {
        let { form } = this.state;
        // console.log(`Event: ${event.value} Type: ${type}`)
        form[type] = (type == "country" || type == "tags") ? event : event.target.value;
        console.log(event)
        this.setState({ form })
    }

    handleDialog = (message) => {
        let { dialog } = this.state;
        dialog.open = !dialog.open;
        dialog.title = message;
        this.setState({ dialog })
    }

    checkForm = () => {
        const titles_noselect = ["name", "lastName", "address", "someField"];
        const titles_select = ["someField"];
        let { form, errors } = this.state;
        let error = false;
        //Hacer esto mas optimizado
        errors.birthDate = false;
        var BreakException = {};
        try {
            titles_noselect.forEach((v, i) => {
                if (form[v] == "" || form[v] == undefined) {
                    errors[v] = true;
                    error = true;
                    this.handleDialog(`The field '${v}' is required`);
                    throw BreakException;
                } else {
                    errors[v] = false;
                }
            })
            titles_select.forEach((v, i) => {
                if (form[v] == 0) {//Verificando los selects
                    errors[v] = true;
                    error = true;
                    this.handleDialog(`The field '${v}' is required`);
                    throw BreakException;
                } else {
                    errors[v] = false;
                }
            })

            if (moment(form.birthDate).year() >= new Date().getFullYear()) {
                errors.birthDate = true;
                error = true;
                this.handleDialog(`The field 'birth date' is wrong`);
                throw BreakException;
            }
        } catch (e) {
            if (e !== BreakException) throw e;
        }

        console.log(form)
        console.log(errors)
        this.setState({ errors })
        return error;
    }

    clearFields = () => {
        let { form } = this.state;
        form = {
            name: "",
            lastName: "",
            address: "",
            birthDate: new Date(),
            //Blabla
        }
        this.setState({ form })
    }


    closeMessageDialog = () => {
        let { dialog } = this.state;
        dialog.open = false;
        this.setState({ dialog })
    }

    render() {
        const { form, dialog, errors, actual_id, loading, actual_contact, form_contacts, contact_types, data_contacts } = this.state;
        const { classes, open, handleModal } = this.props;
        // alert(moment("1997-12-16").format("YYYY-MM-DD HH:mm:ss"))
        return (
            <Dialog open={open} onBackdropClick={handleModal} fullWidth >
                {/* <DialogTitle>New employee</DialogTitle> */}
                <DialogContent style={{ textAlign: "center" }} >
                    <NavPills
                        color="danger"
                        horizontal={{
                            tabsGrid: { xs: 12, sm: 12, md: 2 },
                            contentGrid: { xs: 12, sm: 12, md: 10 }
                        }}
                        active={0}
                        tabs={[
                            {
                                tabButton: "Influencer",
                                tabIcon: FaceOutlined,
                                tabContent: (
                                    // {/* Datos de la persona */}
                                    <FormInfluencer loading={loading} errors={errors} sendData={this.sendData} classes={classes} handleformData={this.handleformData} handleDates={this.handleDates}
                                        form={form} />
                                )
                            },
                            {
                                tabButton: "Cliente",
                                tabIcon: WorkOutline,
                                tabContent: (
                                    <FormCliente loading={loading} errors={errors} sendData={this.sendData} classes={classes} handleformData={this.handleformData} handleDates={this.handleDates}
                                        form={form} />
                                )
                            },

                        ]}
                    />
                </DialogContent>
                <DialogActions>
                    {/* <Button color="secondary" onClick={handleModal} >Close</Button> */}
                    <Fab color="primary" id="primaryButton" onClick={handleModal}>
                        <IconClose />
                    </Fab>
                </DialogActions>
                <DialogError open={dialog.open} title={dialog.title} onClose={this.closeMessageDialog} />
            </Dialog>

        )
    }
}

export default withStyles(styles)(Window)