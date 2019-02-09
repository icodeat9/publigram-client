import React, { Component } from 'react'
import { Fab, Dialog, DialogActions, DialogTitle, DialogContent, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Add } from '@material-ui/icons'
import ModalNewEmployee from './nuevo'
import Loading from '../../../../components/loading'
import MaterialTable from 'material-table'
import Card from "../../../../components/Card/Card.jsx";
import CardHeader from "../../../../components/Card/CardHeader.jsx";
import CardBody from "../../../../components/Card/CardBody.jsx";
import CardFooter from "../../../../components/Card/CardFooter.jsx";


const styles = theme =>
    ({
        fab: {
            position: "absolute",
            right: 10,
            bottom: 10,
        },
        table: {
            paddingBottom: 100
        },
        cardTitle: {
            marginTop: "0",
            minHeight: "auto",
            fontWeight: "bold",
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            marginBottom: "3px",
            textDecoration: "none",
            fontSize: 24
        }
    })


class Main extends Component {
    state =
        {
            data: [],
            open: false, loading: false
        }


    handleModal = () => {
        this.setState({ open: !this.state.open })
    }
    render() {
        const { data, open, loading } = this.state;
        const { classes } = this.props;
        console.log(data)
        return (
            <div >
                <Card profile>
                    <CardHeader color="danger">
                        <h4 className={classes.cardTitle}>Title</h4>
                    </CardHeader>
                    <CardBody>
                        <Typography variant="display1">Content</Typography>
                    </CardBody>
                </Card>
                <br />
                <ModalNewEmployee handleModal={this.handleModal} open={open} />

                <Fab className={classes.fab} id="primaryButton" onClick={this.handleModal} color="primary" >
                    <Add />
                </Fab>
                <Loading open={loading} />
            </div>
        )
    }
}

export default withStyles(styles)(Main);