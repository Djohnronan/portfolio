import React, { useState } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Typography, Switch, ThemeProvider, Box} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch as RouteSwitch, Link } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';

import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Projects from './projects/Projects';

import './App.css'
import { lightTheme, darkTheme } from "./Themes"

function App() {
  const [theme, setTheme] = useState(true);
  const appliedTheme = createMuiTheme(theme ? lightTheme : darkTheme)
  const routes = ["/home", "/about", "/projects", "/contact"]

  return (
    <ThemeProvider theme={appliedTheme}>
      <ParallaxProvider>
        <div className="App">
          <BrowserRouter>
            <Route path="/" render={(history) => (
              <Box style={{ display: 'flex', alignItems: 'center'}}>
                <Typography style={{ fontWeight: 600, paddingLeft: '1em', paddingRight: '1em' }}>Dalton Ronan</Typography>
                <Switch size='small' onClick={() => setTheme(!theme)} />
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
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;