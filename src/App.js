import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from './home/Home'
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import About from './about/About';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#202e32', },
  },
});

function App() {
  const routes = ["/home", "/about", "/projects", "/contact"]

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Route path="/" render={(history) => (
            <Paper>
              <Tabs
                value={history.location.pathname !== "/" ? history.location.pathname : false}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Home" value={routes[0]} component={Link} to={routes[0]} />
                <Tab label="About" value={routes[1]} component={Link} to={routes[1]} />
                <Tab label="Projects" value={routes[2]} component={Link} to={routes[2]} />
                <Tab label="Contact" value={routes[3]} component={Link} to={routes[3]} />
              </Tabs>
            </Paper>)}
          />
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;