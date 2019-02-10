import React, { Component } from 'react'
import { Drawer, IconButton, Divider, ListItemText, List, ListItemIcon, ListItem, Collapse, Avatar, Typography, Button, Slide } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconDashboard from '@material-ui/icons/Dashboard';
import IconEmployees from '@material-ui/icons/SupervisorAccount';
import IconAeronave from '@material-ui/icons/AirplanemodeActive';
import IconFolder from '@material-ui/icons/Folder';
import { NavLink, Link } from 'react-router-dom'

import { LibraryBooks, ExpandLess, ExpandMore, CollectionsBookmark, EventNote, CreditCard, ContactPhone, Notifications, People } from '@material-ui/icons'
window.mobilecheck = function () {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

const drawerWidth = 240;

const styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        // backgroundColor: "#1b1b1b",
        // backgroundColor: "rgba(27, 27, 27, 1)",
        // backgroundImage: "url(https://biznology.com/wp-content/uploads/2016/04/social_media_strategy111.jpg)",        
        backgroundSize: "cover",
        backgroundPosition: "center",
        // opacity: 0.4,
        borderRight: "0px solid rgba(0, 0, 0, 0.12)",
        height: "100vh"
        // height: "100%"
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // backgroundColor: "#007360",
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        textAlign: "center"
    },
    listSelected: {
        backgroundColor: "rgba(255,255,255,0.2)"
    },
    iconsOpen: {
        color: "gray"
    },
    iconsClose: {
        // color: "white"
        color: "#3f51b5"
    },
    nested: {
        paddingLeft: theme.spacing.unit * 8,
    },
    subMenu_selected: {
        // color: "#3f51b5",
        color: "#FFFF",
        fontWeight: "bold",                
    },
    subMenu_noselected: {
        // color: "black",
        color: "#FFFF",        
    },
    avatar: {
        margin: 10,
        width: 100,
        height: 100,

        borderColor: "#3f51b5"
    },
    chevronleft: {
        color: "white"
    },
    profileButtons: {
        padding: "1px 8px 16px"
    },
    infoButton: {
        
    },
    drawerPrueba: {
        backgroundColor: "rgba(27, 27, 27, 0.7)",
        height: "100%"
    },
    link: {
        textDecoration: "none"
    }
})

class Login extends Component {
    state =
        {
            menu: { personal: false, aeronave:false, corrective_actions:false, documentos: false, inicio: false }
        }

    RedirectToPage(page) {
        let { menu } = this.state;
        menu.personal = false;
        this.setState({ menu }, () => {
            this.props.toPage(page);
            // this.props.closeDrawer();
        })
    }

    expandPersonal = () => {
        const { actualPage } = this.props;
        // alert(actualPage)
        switch (actualPage) {
            case "administrativo": return true;
        }
    }
    
    expandInfluencers = () => {
        const { actualPage } = this.props;
        // alert(actualPage)
        switch (actualPage) {
            case "influencers": return true;
            case "experimentos": return true;
            case "sociales": return true;
            case "comedia": return true;
            case "maquillaje": return true;
        }
    }
    
    handleExpand = (sub) => {
        let { menu } = this.state;
        // menu[sub] = true;
        menu[sub] = !menu[sub];
        this.setState({ menu }, () => {
            if (menu[sub]) {
                this.props.openDrawer()
            }
        })
    }

    render() {
        const { classes, open, theme, closeDrawer, toPage, actualPage, unlog } = this.props;
        const { menu } = this.state;
        const displayItems = window.mobilecheck()?"":"none"
        return (
            <Drawer variant="permanent" 
                className={classNames(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: classNames({
                        [classes.drawerOpen]: open,
                        [classes.drawerPrueba]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}                
                >
                <div className={classes.drawerPrueba}>
                <div className={classes.toolbar} >                    
                    {open && window.mobilecheck() && <Typography variant="headline">Publigram</Typography>}                    
                    <p style={{margin: 30}} >
                    {!window.mobilecheck() && <Typography style={{color: "white", opacity: 1}} variant="display1">Publigram</Typography>}
                    {/* {!window.mobilecheck() && <img src="https://i.imgur.com/BpCdqjx.png" width={150} />} */}
                    </p>
                    <IconButton style={{display:displayItems}} onClick={() => closeDrawer()}>
                        <ChevronLeftIcon className={classes.chevronleft} />
                    </IconButton>
                </div>
                <Divider />
                <List >
                    {/* Inicio */}
                    <Link to="/" className={classes.link}>
                        <ListItem button className={classNames({ [classes.listSelected]: (actualPage == "inicio"), [classes.listNoSelected]: !(actualPage == "inicio") })}  onClick={() => this.RedirectToPage("inicio")}>
                            <ListItemIcon button>
                                <IconDashboard className={classNames({ [classes.iconsOpen]: open, [classes.iconsClose]: !open })} />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: (actualPage == "inicio") ? classes.subMenu_selected : classes.subMenu_noselected }} primary="Home" />
                        </ListItem>
                    </Link>
                    {/* Historial */}
                    <Link to="/historial" className={classes.link}>
                        <ListItem button className={classNames({ [classes.listSelected]: (actualPage == "historial"), [classes.listNoSelected]: !(actualPage == "historial") })}  onClick={() => this.RedirectToPage("historial")}>
                            <ListItemIcon button>
                                <IconDashboard className={classNames({ [classes.iconsOpen]: open, [classes.iconsClose]: !open })} />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: (actualPage == "historial") ? classes.subMenu_selected : classes.subMenu_noselected }} primary="Historial" />
                        </ListItem>
                    </Link>                              
                    {/* Influencers */}
                    <ListItem button className={classNames({ [classes.listSelected]: (this.expandInfluencers()), [classes.listNoSelected]: !(this.expandInfluencers()) })} onClick={() => this.handleExpand("influencers")}>
                        <ListItemIcon button>
                            <IconEmployees className={classNames({ [classes.iconsOpen]: open, [classes.iconsClose]: !open })} />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: (this.expandInfluencers()) ? classes.subMenu_selected : classes.subMenu_noselected }} primary="Influencers" />
                        {menu.influencers ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={menu.influencers} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to="/influencers/sociales" className={classes.link}>
                                <ListItem button className={classes.nested} onClick={() => this.RedirectToPage("sociales")}>
                                    <ListItemText classes={{ primary: actualPage == "sociales" ? classes.subMenu_selected : classes.subMenu_noselected }} primary="Sociales" />
                                </ListItem>
                            </Link>                            
                        </List>
                    </Collapse>                                        
                </List>
                </div>
            </Drawer>
        )
    }
}

export default withStyles(styles)(Login);
// export default Login;