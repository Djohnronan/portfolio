import React from 'react';
import { Fade } from 'react-awesome-reveal'
import { Link } from "react-router-dom";
import { Box, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './home.css'

import resume from '../media/resume.pdf'
export default function Home() {

  return (
    <>
      <Box style={{ marginTop: '15vh', marginLeft: '10vh' }}>
        <Fade duration={2000}>
          <Typography style={{ fontSize: 45 }}>Hello, I'm</Typography>
        </Fade>
      </Box>
      <Box style={{ marginTop: '5vh', marginLeft: '25vh' }}>
        <Fade delay={1000} duration={2000}>
          <Typography style={{ fontWeight: 600 }} variant='h2' color='primary'>Dalton Ronan</Typography>
        </Fade>
      </Box>
      <Fade delay={2000} duration={2000}>
        <Typography style={{ fontSize: 45,  marginTop: '5vh', marginLeft: '35vh', marginRight: '10vh'}}>undergraduate Computing Science student at the University of Alberta in Edmonton, Canada.</Typography>
      </Fade>
      <Fade delay={3000} duration={2000} style={{ display: 'flex' }}>
        <Box className="homeButtons">
          <Button aria-label="Learn More" variant="outlined" color="primary" component={Link} to="/about">Learn More</Button>
          <a style={{textDecoration: 'none'}} href={resume} rel="noopener noreferrer" target="_blank">
          <Button aria-label="Rèsumè" variant="outlined" color="primary">Resume</Button>
          </a>
        </Box>
      </Fade>
    </>
  )
}