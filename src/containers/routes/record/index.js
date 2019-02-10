import React, { Component } from 'react'
import { Fab, Dialog, DialogActions, DialogTitle, DialogContent, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Add } from '@material-ui/icons'

import Loading from '../../../components/loading'
import MaterialTable from 'material-table'
import Card from "../../../components/Card/Card.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";


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
            data: [
                {
                    influencer: "Carlos Duran",
                    red: "Instagram",
                    alcanceActual: "105,323",
                    fecha: "10/01/2019"
                },
                {
                    influencer: "Killadamente",
                    red: "Instagram",
                    alcanceActual: "225, 140",
                    fecha: "10/01/2019"
                },
                
                {
                    influencer: "Carlos Montesquieu",
                    red: "Youtube",
                    alcanceActual: "89, 432",
                    fecha: "10/01/2019"
                },
                
            ],
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
                        <h4 className={classes.cardTitle}>Histórico</h4>
                    </CardHeader>
                    <CardBody>
                    <MaterialTable
                            className={classes.table}
                            title=""
                            options={{ exportButton: true, filtering: true }}
                            columns={[
                                { title: 'Influencer', field: 'influencer' },
                                { title: 'Red', field: 'red' },
                                { title: 'Alcance actual', field: 'alcanceActual' },
                                { title: 'Fecha ', field: 'fecha' },
                            ]}                            
                            data={data}                            
                        />
                    </CardBody>
                </Card>
                <br />

                <Loading open={loading} />
            </div>
        )
    }
}

export default withStyles(styles)(Main);