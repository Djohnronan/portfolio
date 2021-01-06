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
        <Typography style={{ fontSize: 45 }}>Hello, I'm</Typography>
      </Box>
      <Box style={{ marginTop: '5vh', marginLeft: '25vh' }}>
        <Typography style={{ fontWeight: 600 }} variant='h2' color='primary'>Dalton Ronan</Typography>
      </Box>
      <Fade delay={500} duration={1500} cascade>
        <Box style={{ marginTop: '5vh', marginLeft: '35vh', marginRight: '10vh' }}>
          <Typography style={{ fontSize: 45 }}>undergraduate Computing Science student at the University of Alberta in Edmonton, Canada.</Typography>
        </Box>
        <Box className="homeButtons">
          <Button aria-label="Learn More" variant="outlined" color="primary" component={Link} to={"/about"}>Learn More</Button>
          <a style={{ textDecoration: 'none' }} href={resume} rel="noopener noreferrer" target="_blank">
            <Button aria-label="Rèsumè" variant="outlined" color="primary">View Resume</Button>
          </a>
        </Box>
      </Fade>
    </>
  )
}