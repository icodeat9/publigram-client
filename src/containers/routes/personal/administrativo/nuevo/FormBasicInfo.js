import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles'
import { DatePicker } from 'material-ui-pickers';
import { Typography, FormGroup, FormControl, Select, MenuItem, Button, Slide, Radio, FormLabel, RadioGroup, FormControlLabel, Input, InputLabel, CircularProgress } from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import SelectAutoComplete from 'react-select';
import CustomAutoComplete from '../../../../../components/AutoComplete'

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
        textAlign: "left"
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
            <FormGroup row >
            
                <TextField autoFocus required error={errors.name} value={form.name} label="Name" margin="normal" className={[classes.textField, classes.textFieldDouble]}
                    onChange={(e) => handleformData(e, "name")} />
                <TextField required error={errors.lastName} style={{ width: "57%" }} value={form.lastName} label="Lastname" margin="normal" className={[classes.textField, classes.textFieldDouble]}
                    onChange={(e) => handleformData(e, "lastName")} />

                {/* </FormGroup>
            <FormGroup row> */}
            </FormGroup>
            <FormGroup row >
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel required error={errors.genderId} component="legend">Gender</FormLabel>
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={form.genderId}
                        // onChange={(e) => handleformData(e, "genderId")}
                        onClick={(e) => handleformData(e.target.value, "genderId")}
                        // onClick={(e) => alert(e.target.value)}
                    >
                        <FormGroup row>
                        <FormControlLabel value={'1'} control={<Radio checked={form.genderId == '1'} color="primary" />} label="Male" />
                        <FormControlLabel value={'2'} control={<Radio checked={form.genderId == '2'} color="secondary" />} label="Female" />
                        </FormGroup>

                    </RadioGroup>
                </FormControl>
                
                
                <FormControl className={classes.formControl} component="fieldset" >
                    <FormLabel  component="legend" ></FormLabel>
                    <TextField required error={errors.address} className={classes.textField} style={{ width: 870 }} value={form.address} label="Address" onChange={(e) => handleformData(e, "address")} />
                </FormControl>

            </FormGroup>
            <FormGroup row>
            <FormControl className={classes.formControl} component="fieldset" >
                    <FormLabel required error={errors.birthDate} component="legend" >Birthday date</FormLabel>
                    <TextField
                        id="date"
                        // label="Birthday"
                        type="date"
                    
                        // defaultValue="2017-05-24"
                        value={form.birthDate}
                        error={errors.birthDate}
                        onChange={(e) => handleformData(e, "birthDate")}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel required error={errors.hireDate} component="legend" >Hire date</FormLabel>
                    <TextField
                        id="date"
                        required error={errors.hireDate}
                        type="date"
                        defaultValue="2017-05-24"
                        value={form.hireDate}
                        onChange={(e) => handleformData(e, "hireDate")}
                        error={errors.hireDate}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                <FormControl className={classes.formControl} component="fieldset" >
                    <FormLabel component="legend" style={{marginBottom: 12}} ></FormLabel>
                    {/* <div className={classes.textField} style={{ width: 870 }} >
                        <SelectAutoComplete
                            value={form.nationalityId}
                            onChange={(v) => handleformData(v, "nationalityId")}
                            options={data.nationalities}
                            placeholder="Ej: Dominican"
                        />
                    </div> */}
                    <div className={classes.textField} style={{width: 700}}>
                    <CustomAutoComplete required error={errors.nationalityId} placeholder="Select a country" formName="nationalityId" suggestions={data.nationalities} handleformData={handleformData} value={form.nationalityId}  />
                    </div>
                </FormControl>
            </FormGroup>

            {/* <TextField required error={errors.address} style={{ width: "100%" }} label="Address" margin="normal" className={[classes.textField, classes.textFieldDouble]}
                onChange={(e) => handleformData(e, "address")} value={form.address} /> */}

            <FormGroup row placeholder="Identity document" >
                <FormControl className={classes.formControl} component="fieldset">
                    <FormLabel component="legend" style={{marginBottom: 16}}></FormLabel>
                    <TextField select required error={errors.identityDocumentDocumentTypeId} style={{ width: 250 }} value={form.identityDocumentDocumentTypeId} className={[classes.textField]} onChange={(e) => handleformData(e, "identityDocumentDocumentTypeId")}>
                        <MenuItem value={0} disabled >Select a document type</MenuItem>
                        {data.documentTypes.map((v, i) => <MenuItem value={v.id}>{v.type}</MenuItem>)}
                    </TextField>
                </FormControl>
                <FormControl className={classes.formControl} component="fieldset">
                    <FormLabel component="legend"  ></FormLabel>
                    <TextField style={{ width: 440 }} label="Ej: 18293192379" required error={errors.identityDocumentValue} value={form.identityDocumentValue} className={classes.textField} onChange={(e) => handleformData(e, "identityDocumentValue")} />
                </FormControl>
                <FormControl className={classes.formControl} component="fieldset" >
                    <FormLabel error={errors.issueDate} component="legend" >Issue date</FormLabel>
                    <TextField
                        id="date"
                    
                        type="date"
                        defaultValue="2017-05-24"
                        value={form.issueDate}
                        error={errors.issueDate}
                        onChange={(e) => handleformData(e, "issueDate")}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                <FormControl className={classes.formControl} component="fieldset" >
                    <FormLabel error={errors.expirationDate} component="legend" >Expiration date</FormLabel>
                    <TextField
                        id="date"
                    
                        type="date"
                        defaultValue="2017-05-24"
                        value={form.expirationDate}
                        error={errors.expirationDate}
                        onChange={(e) => handleformData(e, "expirationDate")}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                {/* <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker error={errors.issueDate} style={{ width: 250 }} label="Issue date *" margin="normal" value={form.issueDate} onChange={(date) => handleformData(date, "issueDate")} className={[classes.textField, classes.textFieldDouble]} />
                </MuiPickersUtilsProvider> */}
            </FormGroup>
            
        </FormControl>
    </Slide>
}



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

    state =
        {
            data: { nationalities: [], positions: [], departments: [], companies: [], locations: [], documentTypes: [], guilds: [], employees: [] },
            steps: 0, buttons_name: ["Next", "Back"]
        }
    componentDidMount() {
        this.getData("nationalities");
        this.getData("departments");
        this.getData("companies");
        this.getData("documentTypes");
        this.getData("guilds");
        this.getData("employees");
        this.getData("positions");
        this.getLocations(1);
    }

    requestData = async (type) => {
        const res = await fetch(`/company-management/api?tableName=${type}`);
        const body = res.json();
        if (res.status != 200) throw Error(body.message)
        return body;
    }

    requestLocations = async (id) => {
        const res = await fetch(`/company-management/api/locations?id=${id}`);
        const body = res.json();
        if (res.status != 200) throw Error(body.message)
        return body;
    }

    getLocations = (id) => {
        let { data } = this.state;
        this.requestLocations(id)
            .then(res => data.locations = res)
            .catch(err => {
                alert("Error obteniendo data")
                console.log(err)
            })
    }

    getData = (type) => {
        this.requestData(type)
            .then(res => {
                let { data } = this.state;
                console.log(type)
                data[type] = [...res];
                if (type == "positions") {
                    // console.log(res)
                    data[type] = res.filter(emp => emp.description.includes("ADMIN"))
                }
                if (type == "employees") {
                    data.employees = [];
                    res.forEach((v, i) => {
                        data.employees.push({ label: `${v.name} ${v.lastname}`, value: v.id })
                    })
                }
                if (type == "nationalities") {
                    data.nationalities = []
                    res.forEach((v, i) => {
                        data.nationalities.push({ label: `${v.name}`, value: v.id })
                    })
                }
                console.log("Size is: ", data.employees.length)
                this.setState({ data })
            })
            .catch(err => {
                alert("Error obteniendo data");
                console.log(err)
            })
    }

    MoveForward = () => {
        let { steps } = this.state;
        steps++;
        if (steps > 1) {
            steps = 1;
        }
        this.setState({ steps })
    }

    MoveBack = () => {
        let { steps } = this.state;
        steps--;
        if (steps < 0) {
            steps = 0;
        }
        this.setState({ steps })
    }


    render() {
        const { classes, handleformData, handleDate, form, sendData, errors,loading } = this.props;
        const { data, steps, buttons_name } = this.state;
        const handleMove = steps == 0 ? this.MoveForward : this.MoveBack;
        return (
            // <Paper>
            <div>
                <Typography variant="display1">Basic personal information</Typography>
                {/* <HandleForms classes={classes} data={data} form={form} steps={steps} form={form} handleformData={handleformData} handleformData={handleformData} sendData={sendData} /> */}
                <FormPartOne loading={loading} errors={errors} classes={classes} data={data} form={form} handleformData={handleformData} handleDate={handleDate} sendData={sendData} />
                <SaveButton sendData={sendData} steps={steps} />
            </div>
            // </Paper>

        )
    }

}

export default withStyles(styles)(formData);