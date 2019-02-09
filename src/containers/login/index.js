import React, { Component } from 'react'
import { FormControl, Button, Paper, Grid, TextField, Typography, CircularProgress, Slide, Fade, Zoom } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import MyDialog from '../../components/modal_error'

const styles = theme => ({
    root: {
        flex: 1,
        backgroundColor: "#bgLogin"
    },
    demo: {
        height: 500,
    },
    loginPaper: {
        // margin: theme.spacing.unit * 5
        marginLeft: -250,
        marginRight: -250,
        paddingBottom: 25,
        paddingTop: 25,
        // paddingTop: 200
    },
    textfields: {
        width: 200
    }
})

class Login extends Component {
    state =
        {
            form: { user: "", pass: "" },
            dialog: { open: false, title: "", message: "" },
            loading: false
        }

    handleForm = (e, name) => {
        let { form } = this.state;
        form[name] = e.target.value;
        this.setState({ form })
    }

    // requestLogin = async () => {
    //     const { form } = this.state;
    //     this.setState({loading: true})
    //     const res = await fetch(`/login?user=${form.user}&pass=${form.pass}`)
    //     const body = res.json();
    //     if (res.status != 200) throw Error(body.message)
    //     return body;
    // }

    // login = () => {        
    //     this.requestLogin()
    //         .then(res => {
    //             if (!res.error) {
    //                 // window.localStorage.setItem("logged", "true");
    //                 this.props.accessMain();
    //             } else {
    //                 this.setState({loading: false})
    //                 this.openDialog("Usuario o clave incorrectos")
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             alert("Error en el servidor");
    //         })
    // }

    login = () => {
        this.setState({ loading: false }, () => this.props.accesMain())
    }

    closeDialog = () => {
        let { dialog } = this.state;
        dialog.open = false;
        this.setState({ dialog });
    }

    openDialog = (message) => {
        let { dialog } = this.state;
        dialog.open = true;
        dialog.title = message;
        this.setState({ dialog })
    }
    //BackgroundColor: #3f51b5
    render() {
        const { classes, accessMain } = this.props;
        const { form, dialog, loading } = this.state;
        return (
            <Slide in timeout={2000} >
            <div style={{ backgroundColor: "#353535", height: "100vh" }} >
                <Grid container className={classes.root} style={{ backgroundColor: "#353535", paddingTop: 100 }} >
                    <Grid item xs={12}>
                        <Grid
                            container
                            spacing={16}
                            className={classes.demo}
                            alignItems={"center"}
                            direction={"row"}
                            justify={"center"}
                        >
                            <Grid item>
                            <Zoom in timeout={3500} >
                                <Paper className={classes.loginPaper} style={{ textAlign: "center" }} >
                                    {/* <div style={{backgroundColor: "gray"}} > */}
                                    Image
                                    {/* </div> */}
                                    <br />
                                    <FormControl className={classes.formControl} >
                                        <TextField autoComplete="off" fullWidth variant="outlined" label="User" value={form.user} onChange={(e) => this.handleForm(e, "user")} />
                                        <br />
                                        <TextField autoComplete="off" fullWidth variant="outlined" label="Password" type="password" value={form.pass} onChange={(e) => this.handleForm(e, "pass")} />
                                        <br />
                                        <Button id="primaryButton" variant="contained" onClick={accessMain} >
                                            {loading ? <CircularProgress style={{ color: "white" }} /> :
                                                <Typography style={{ color: "white" }}>Log in</Typography>
                                            }
                                        </Button>
                                    </FormControl>
                                    <MyDialog open={dialog.open} title={dialog.title} onClose={this.closeDialog} />
                                </Paper>
                            </Zoom>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid >
                <footer style={{backgroundColor: "#2f2f2f", height: "100vh", color: "white", textAlign: "center"}}>
                <br/>                
                <p >
                    Footer
                </p>
                </footer>
            </div>
            </Slide>


        )
    }
}

export default withStyles(styles)(Login);
// export default Login;