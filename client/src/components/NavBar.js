import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Hidden,
  Drawer,
  Divider,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
// import sections from '../nav';

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontSize: ".875rem",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    backgroundColor: "white",
    width: drawerWidth,
    color: "#18405C",
  },
  icon: {marginRight:'.6rem'},
}));

function NavBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem component={Link}className={classes.listItem} button to="/">
          <HomeIcon className={classes.icon} />
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem component={Link} className={classes.listItem} button to="/lists">
          <ListIcon className={classes.icon} />
          <ListItemText primary={"Data"} />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default NavBar;
