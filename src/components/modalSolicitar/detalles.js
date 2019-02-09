import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";

// core components
import GridItem from "../Grid/GridItem.jsx";

import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardFooter from "../Card/CardFooter.jsx";

import {
    emailsSubscriptionChart,
    completedTasksChart,
    dailySalesChart
} from "../../variables/charts";

import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class CardChart extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div style={{overflowX: "hidden"}}>
            <Grid container spacing={24}  >
                <Grid item xs={12}>
                    <Grid container spacing={40}>
                        <Grid item xs={6} >
                            <Card chart>
                                <CardHeader color="warning">
                                    <ChartistGraph
                                        className="ct-chart"
                                        data={emailsSubscriptionChart.data}
                                        type="Bar"
                                        options={emailsSubscriptionChart.options}
                                        responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                                        listener={emailsSubscriptionChart.animation}
                                    />
                                </CardHeader>
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Youtube</h4>
                                    <p className={classes.cardCategory}>
                                        Promedio de views
                                    </p>
                                </CardBody>
                                <CardFooter chart>
                                    <div className={classes.stats}>
                                        <AccessTime /> Actualizado hace 10 minutos
                                    </div>
                                </CardFooter>
                            </Card>
                        </Grid>                        
                        <Grid item xs={6}>
                            <Card chart>
                                <CardHeader color="danger">
                                    <ChartistGraph
                                        className="ct-chart"
                                        data={dailySalesChart.data}
                                        type="Line"
                                        options={dailySalesChart.options}
                                        listener={dailySalesChart.animation}
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
            </div>
        );
    }
}

export default withStyles(dashboardStyle)(CardChart);