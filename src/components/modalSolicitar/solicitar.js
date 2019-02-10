import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles'
import { Typography, FormGroup, FormControl, Select, MenuItem, Button, Slide, Radio, FormLabel, RadioGroup, FormControlLabel, Input, InputLabel, Checkbox, Grid } from '@material-ui/core';
import CustomAutoComplete from '../AutoComplete'
import { CheckBox } from '@material-ui/icons';
import iconYoutube from '../../assets/img/youtube.png'
import iconInstagram from '../../assets/img/instagram.png'

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
    const { handleformData, form, handleDate, classes, data, sendRequest, errors, loading } = props;
    return <Slide in>
        <FormControl className={classes.mainFormControl} >
            <Grid container>
                <Grid item  >
                    <FormControl style={{ marginLeft: -200 }} >
                        <FormGroup >
                            <TextField multiline rows={5} required error={errors.details} value={form.details} label="Detalles" margin="normal" className={[classes.textField, classes.textFieldDouble]}
                                onChange={(e) => handleformData(e, "details")} />
                            <TextField required error={errors.budget} value={form.budget} label="Presupuesto (USD)" margin="normal" className={[classes.textField, classes.textFieldDouble]}
                                onChange={(e) => handleformData(e, "budget")} />
                        </FormGroup>
                        <Button id="primaryButton" variant="contained" color="primary" onClick={sendRequest} >Finalizar</Button>
                    </FormControl>

                </Grid>
                <Grid item style={{ marginLeft: 100 }} >
                    <p>
                        <span  >
                            <img src={iconYoutube} style={{ marginBottom: -5 }} />
                        </span>{" "} Youtube | <span style={{ color: "#4caf50" }}>1,000 USD</span>
                        <Typography variant="overline">
                            Alcance estimado total:
                        <span id="primaryText">
                                5 MM
                        </span>
                        </Typography>
                        <Typography variant="overline">Alcance estimado por dia:
                        <span id="primaryText">
                                40 M
                        </span>
                        </Typography>
                    </p>
                    <p>
                        <span  >
                            <img src={iconInstagram} style={{ marginBottom: -5 }} />
                        </span> {" "} Instagram | <span style={{ color: "#4caf50" }}>200 USD</span>
                        <Typography variant="overline">
                            Alcance estimado total:
                        <span id="primaryText">
                                500 M
                        </span>
                        </Typography>
                        <Typography variant="overline">
                            Alcance estimado por dia:
                        <span id="primaryText">
                                17 M
                        </span>
                        </Typography>
                    </p>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={form.instagram}
                                    onChange={(e) => handleformData(e, 'instagram')}
                                    value={form.instagram}
                                />
                            }
                            label="Instagram"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={form.youtube}
                                    onChange={(e) => handleformData(e, 'youtube')}
                                    value={form.youtube}
                                />
                            }
                            label="Youtube"
                        />
                    </FormGroup>
                </Grid>
            </Grid>
        </FormControl>
    </Slide>
}


class formData extends Component {

    render() {
        const { classes, handleformData, handleDate, form, sendData, errors, loading, sendRequest } = this.props;

        return (
            // <Paper>
            <div style={{ overflowX: "hidden" }} >
                <Typography variant="display1">Solicitar influencer</Typography>
                {/* <HandleForms classes={classes} data={data} form={form} steps={steps} form={form} handleformData={handleformData} handleformData={handleformData} sendData={sendData} /> */}
                <FormPartOne sendRequest={sendRequest} loading={loading} errors={errors} classes={classes} form={form} handleformData={handleformData} handleDate={handleDate} sendData={sendData} />

            </div>
            // </Paper>

        )
    }

}

export default withStyles(styles)(formData);