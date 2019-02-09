import React, { Component } from 'react'
import { Toolbar, Typography, CssBaseline, AppBar, IconButton, Grid, Zoom, Menu, MenuItem } from '@material-ui/core'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import classNames from 'classnames';
import MainDrawer from '../drawer'

import Inicio from "../../views/Dashboard/Dashboard"
import Perfil from '../routes/profile'
import Administrativo from '../routes/personal/administrativo'
import InfluencerSocial from '../routes/personal/social'



window.mobilecheck = function () {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};



const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    footer: {
        color: "gray",
        textAlign: "center"
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        color: "linear-gradient(60deg, #ef5350, #e53935)"
    },
    grow: {
        flexGrow: 1,
    },
    link: {
        textDecoration: "none"
    }
})

class Main extends Component {
    state = {
        open: !window.mobilecheck(),
        page: "inicio",
        columns: 8, appBarTitle: "Home"
    }

    componentDidMount() {
        let { appBarTitle } = this.state;
        let actualPage = this.props.location.pathname.split("/")[1];
        console.log(actualPage.length)
        if(actualPage.length>1)
        {
            actualPage = actualPage.charAt(0).toUpperCase() + actualPage.slice(1)
        } else
        {
            actualPage = "Home"
        }
    }
    

    toPage = (name) => {
        // alert("x")
        let { appBarTitle } = this.state;
        let actualPage = this.props.location.pathname.split("/")[1];
        console.log(actualPage.length)
        if(actualPage.length>1)
        {
            actualPage = actualPage.charAt(0).toUpperCase() + actualPage.slice(1);            
        } else
        {
            actualPage = "Home"
        }
        
        actualPage = actualPage.replace('_', ' ')
        this.setState({ page: name, appBarTitle: actualPage  })
        // this.setState({ page: name})
    }

    openDrawer = () => {
        this.setState({ open: true })
    }
    closeDrawer = () => {
        this.setState({ open: false })
    }

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };


    handleTitleAppBar = (appBarTitle) => {
        this.setState({ appBarTitle })
    }

    render() {
        const { classes, theme, unlog } = this.props;
        const { open, page, anchorEl, appBarTitle } = this.state;
        const displayItems = window.mobilecheck() ? "" : "none"
        const isMenuOpen = Boolean(anchorEl);
        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <Link to="/profile" className={classes.link}>
                    <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                </Link>
                <MenuItem onClick={unlog}>Log out</MenuItem>
            </Menu>
        );
        return (
            <Zoom in>
                <div className={classes.root} >
                    <CssBaseline />
                    <AppBar id="appBar" position="fixed" className={classNames(classes.appBar, { [classes.appBarShift]: open })} >
                        <Toolbar disableGutters={!open}>
                            <IconButton style={{ display: displayItems }} color="inherit" onClick={() => this.setState({ open: true })} className={classNames(classes.menuButton, {
                                [classes.hide]: open,
                            })}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
                                {appBarTitle}
                            </Typography>

                            
                                John Watson
                                <IconButton
                                className={classes.menuButton}
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            

                        </Toolbar>
                    </AppBar>
                    {renderMenu}
                    <MainDrawer unlog={unlog} actualPage={page} toPage={this.toPage} open={open} closeDrawer={this.closeDrawer} openDrawer={this.openDrawer} theme={theme} />
                    <Grid container style={{ overflowY: "scroll", height: "90vh", overflowX: "hidden" }}>
                        <Grid item xs={12}>
                            <br />
                            <Grid container justify="center" spacing={40} >
                                <Grid item sm={10} >
                                    <div className={classes.drawerHeader} />
                                    <Switch>
                                        <div>
                                            <Route exact path="/" component={Inicio} />
                                            <Route path="/personal/administrative" component={Administrativo} />
                                            <Route path="/profile" component={Perfil} />                                            
                                            <Route path="/influencers/sociales" component={InfluencerSocial} />
                                        </div>
                                    </Switch>
                                </Grid>

                            </Grid>
                        </Grid>
                        {/* <footer >
                            <p className={classes.footer} >
                                © 2019 Logaritmos SRL. All the rights reserved
                            </p>
                        </footer> */}
                    </Grid>
                </div >
            </Zoom>
        )
    }
}

// export default withStyles(styles)(Main);
export default withRouter(withStyles(styles)(Main));