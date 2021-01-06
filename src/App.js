import React, { useState } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Zoom from '@material-ui/core/Zoom';
import Tooltip from '@material-ui/core/Tooltip';
import { createMuiTheme } from '@material-ui/core/styles'
import { HashRouter, Route, Switch as RouteSwitch, Link } from "react-router-dom";
import { Typography, IconButton, ThemeProvider, Box, Paper} from '@material-ui/core';

import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Experience from './experience/Experience';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import './App.css'
import { lightTheme, darkTheme } from "./Themes"

function App() {
  const [theme, setTheme] = useState(true);
  const appliedTheme = createMuiTheme(theme ? lightTheme : darkTheme)
  const routes = [process.env.PUBLIC_URL + "/home", process.env.PUBLIC_URL + "/about", process.env.PUBLIC_URL + "/experience", process.env.PUBLIC_URL + "/contact"]

  return (
    <ThemeProvider theme={appliedTheme}>
      <Paper className="App" square>
          <HashRouter>
            <Route path="/" render={(history) => (
              <Box className="navBar" style={{ display: 'flex', alignItems: 'center'}}>
                <Typography style={{ fontWeight: 600, paddingLeft: '1em', paddingRight: '1em' }}>Dalton Ronan</Typography>
                <Tooltip title="Toggle light/dark theme" placement="right" TransitionComponent={Zoom}>
                <IconButton size='small' onClick={() => setTheme(!theme)}>
                  { theme ? 
                  <Brightness3Icon aria-label="Toggle light/dark theme" title="Toggle light/dark theme" /> : 
                  <Brightness7Icon aria-label="Toggle light/dark theme" title="Toggle light/dark theme" />
                }
                </IconButton>
                </Tooltip>
                <Tabs
                  value={history.location.pathname !== "/" ? history.location.pathname : false}
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label="Home" value={routes[0]} component={Link} to={routes[0]}/>
                  <Tab label="About Me" value={routes[1]} component={Link} to={routes[1]} />
                  <Tab label="Experience" value={routes[2]} component={Link} to={routes[2]} />
                  <Tab label="Contact" value={routes[3]} component={Link} to={routes[3]} />
                </Tabs>
              </Box>)}
            />
            <RouteSwitch>
              <Route path={process.env.PUBLIC_URL + "/home"} component={Home}></Route>
              <Route path={process.env.PUBLIC_URL + "/about"} component={About}></Route>
              <Route path={process.env.PUBLIC_URL + "/experience"} component={Experience}></Route>
              <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact}></Route>
            </RouteSwitch>
          </HashRouter>
        </Paper>
     </ThemeProvider>
  );
}

export default App;