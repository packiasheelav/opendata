import React from "react";
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  makeStyles,
  Avatar,
  Button

} from "@material-ui/core";
import profilepic from '../static/images/sheela2.jpg'
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import {Link} from 'react-router-dom'; 

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  img: {
    marginRight: ".5rem",
  },
  appBar: {
    backgroundColor: "#fafafa",
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  buttonContainer:{
    display:'inline-flex',
    alignItems:'center',
    color:"#18405C",
  },

  button:{
    color:"#18405C",
    fontSize:'.875rem',
    fontWeight:"bold"
  }
}));

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{justifyContent: 'space-between'}}>
          <div className={classes.buttonContainer}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <DashboardIcon className={classes.img} />
          <Button className={classes.button}component={Link} to='/' >
            Sensor Data
          </Button>
          </div>
          <Button>
        <Avatar alt="S" src={profilepic}/>
        </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
