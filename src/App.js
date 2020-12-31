import React, { useState } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Typography, IconButton, ThemeProvider, Box, Paper} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch as RouteSwitch, Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import './App.css'
import { lightTheme, darkTheme } from "./Themes"

function App() {
  const [theme, setTheme] = useState(true);
  const appliedTheme = createMuiTheme(theme ? lightTheme : darkTheme)
  const routes = ["/home", "/about", "/projects", "/contact"]

  return (
    <ThemeProvider theme={appliedTheme}>
      <Paper className="App" square>
          <BrowserRouter>
            <Route path="/" render={(history) => (
              <Box style={{ display: 'flex', alignItems: 'center'}}>
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
                  <Tab label="Projects" value={routes[2]} component={Link} to={routes[2]} />
                  <Tab label="Contact" value={routes[3]} component={Link} to={routes[3]} />
                </Tabs>
              </Box>)}
            />
            <RouteSwitch>
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/projects" component={Projects}></Route>
              <Route path="/contact" component={Contact}></Route>
            </RouteSwitch>
          </BrowserRouter>
        </Paper>
     </ThemeProvider>
  );
}

export default App;