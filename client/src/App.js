import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import routes from './routes';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));
const App = () => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.root}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <NavBar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <Switch>
        {routes.map((route) => (
          <Route key={route.path?.toString()} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default App;
