import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles'
import { Typography, FormGroup, FormControl, MenuItem, Button, Slide, FormLabel} from '@material-ui/core';
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
})

const FormPartOne = (props) => {
    const { handleformData, form, handleDate, classes, data, sendData, errors, loading } = props;
    return <Slide in>
        {/* <FormControl style={{textAlign: "left", alignContent: "left", marginLeft: -800}} > */}
        <FormControl style={{textAlign: "left", alignContent: "left", marginLeft: -500}} >
            {/* Parte 2 */}
            <FormGroup row >
                {/* style={{marginBottom: 12}} */}
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend"></FormLabel>
                    <TextField select required error={errors.companyId} className={classes.textField} value={form.companyId} onChange={(e) => handleformData(e, "companyId")}>
                        <MenuItem value={0} disabled>Select the company name</MenuItem>
                        {data.companies.map((v, i) => <MenuItem value={v.id}>{v.name}</MenuItem>)}
                    </TextField>
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" ></FormLabel>
                    <TextField required error={errors.locationId} select className={classes.textField}  value={form.locationId} onChange={(e) => handleformData(e, "locationId")}>
                        <MenuItem value={0} disabled>Select a location</MenuItem>
                        {data.locations.map((v, i) => <MenuItem value={v.id}>{v.description}</MenuItem>)}
                    </TextField>
                </FormControl>
            </FormGroup>
            <FormGroup row>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend"></FormLabel>
                    <TextField select required error={errors.departmentId} className={classes.textField} value={form.departmentId} onChange={(e) => handleformData(e, "departmentId")}>
                        <MenuItem value={0} disabled>Select a department</MenuItem>
                        {data.departments.map((v, i) => <MenuItem value={v.id}>{v.description}</MenuItem>)}
                    </TextField>
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" ></FormLabel>
                    <TextField required error={errors.positionId} select className={classes.textField} value={form.positionId} onChange={(e) => handleformData(e, "positionId")}>
                        <MenuItem value={0} disabled>Select a job position</MenuItem>
                        {data.positions.map((v, i) => <MenuItem value={v.id}>{v.description}</MenuItem>)}
                    </TextField>
                </FormControl>                
            </FormGroup>
            <FormGroup row>
            <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend"></FormLabel>
                    <TextField select error={errors.positionId} className={classes.textField} value={form.guildId}  onChange={(e) => handleformData(e, "guildId")}>
                        <MenuItem value={0} disabled>Select a guild</MenuItem>
                        {data.guilds.map((v, i) => <MenuItem value={v.id}>{v.description}</MenuItem>)}
                    </TextField>
                </FormControl>
                {/* <FormControl component="fieldset" className={classes.formControl}>
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
                </FormControl> */}
                {/* style={{width: "140%"}} */}
                <FormControl style={{width: "64%", marginTop: 28, paddingLeft: 10}} component="fieldset" className={classes.formControl}>
                    <FormLabel  component="legend" ></FormLabel>
                <div >
                <CustomAutoComplete required placeholder="Select the supervisor" error={errors.supervisorId} suggestions={data.employees} formName="supervisorId" handleformData={handleformData} value={form.supervisorId}  />
                </div>
                </FormControl>
            </FormGroup>
            <br />
            {/* <SelectAutoComplete
                value={form.supervisorId}
                onChange={(v) => handleformData(v, "supervisorId")}
                options={data.employees}
                placeholder="Supervisor"
            /> */}
            {/* <div className={classes.textField} style={{width: 870}}> */}
                    {/* <CustomAutoComplete required placeholder="Select the supervisor" error={errors.supervisorId} suggestions={data.employees} formName="supervisorId" handleformData={handleformData} value={form.supervisorId}  /> */}
                    {/* </div> */}
            {/* <Button className={classes.nextButton} variant="contained" color="primary" onClick={sendData} >
                {loading ? <CircularProgress color="white" /> : "Save and next"}
            </Button> */}
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
        this.getData("departments");
        this.getData("companies");
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


    render() {
        const { classes, handleformData, handleDate, form, sendData, errors, loading } = this.props;
        const { data, steps, buttons_name } = this.state;
        return (
            // <Paper>
            <div>
                <Typography variant="display1">Job personal information</Typography>
                {/* <HandleForms classes={classes} data={data} form={form} steps={steps} form={form} handleformData={handleformData} handleformData={handleformData} sendData={sendData} /> */}
                <FormPartOne loading={loading} errors={errors} classes={classes} data={data} form={form} handleformData={handleformData} handleDate={handleDate} sendData={sendData} />
                <SaveButton sendData={sendData} steps={steps} />
            </div>
            // </Paper>

        )
    }

}

export default withStyles(styles)(formData);