import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Typography } from "@material-ui/core";

// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
// core components
import GridItem from "../Grid/GridItem.jsx";

import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardFooter from "../Card/CardFooter.jsx";
import CardAvatar from "../Card/CardAvatar.jsx";

import {
    emailsSubscriptionChart,
    completedTasksChart,
    dailySalesChart,
    dailySalesChart2,
} from "../../variables/charts";

import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class CardChart extends React.Component {
    render() {
        const { classes, influencer } = this.props;
        return (
            <div style={{ overflow: "hidden" }}>
                <br />
                <br />
                <br />
                <Grid container>
                    <Grid item>
                        <CardAvatar profile>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img src={influencer.foto} alt="..." />
                            </a>
                        </CardAvatar>
                        <CardBody profile>
                            {/* <h4 className={classes.cardTitle}>{v.nombre}</h4> */}
                            <Typography variant="h5">{influencer.nombre}</Typography>
                            <Typography variant="inherit">{influencer.contenido}</Typography>
                        </CardBody>
                    </Grid>
                    <Grid item>
                        <p  style={{textAlign: "left"}} >
                            Promedio de views en los últimos 10 post en Youtube
                            
                            {" "}<span className={classes.successText}>
                                <ArrowUpward className={classes.upArrowCardCategory} /> 92,312
                            </span>
                        </p>
                        <p  style={{textAlign: "left"}}>
                            Promedio de views en los últimos 10 post en Instagram                            
                            {" "}<span className={classes.successText}>
                                <ArrowUpward className={classes.upArrowCardCategory} /> 325,638
                            </span>
                        </p>
                    </Grid>
                </Grid>
                <Grid container spacing={24}  >
                    <Grid item xs={12}>
                        <Grid container spacing={40}>
                            <Grid item xs={6} >
                                <Card chart>
                                    <CardHeader color="success">
                                        <ChartistGraph
                                            className="ct-chart"
                                            data={dailySalesChart.data}
                                            type="Line"
                                            options={dailySalesChart.options}
                                            listener={dailySalesChart.animation}
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <h4 className={classes.cardTitle}>Youtube</h4>
                                        <p className={classes.cardCategory}>
                                            <span className={classes.successText}>
                                                <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                                             </span>{" "}
                                            mas views.
                                        </p>
                                    </CardBody>
                                    <CardFooter chart>
                                        <div className={classes.stats}>
                                            <AccessTime /> Actualizado hace 4 minutos
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card chart>
                                    <CardHeader color="danger">
                                        <ChartistGraph
                                            className="ct-chart"
                                            data={dailySalesChart2.data}
                                            type="Line"
                                            options={dailySalesChart2.options}
                                            listener={dailySalesChart2.animation}
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <h4 className={classes.cardTitle}>Instagram</h4>
                                        <p className={classes.cardCategory}>
                                            Promedio de views
                                    </p>
                                    </CardBody>
                                    <CardFooter chart>
                                        <div className={classes.stats}>
                                            <AccessTime /> Actualizado hace 2 minutos
                                    </div>
                                    </CardFooter>
                                </Card>
                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default withStyles(dashboardStyle)(CardChart);