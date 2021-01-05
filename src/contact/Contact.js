import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './contact.css'

export default function Contact() {

  return (
    <>
      <Grid container style={{ paddingTop: 200, paddingLeft: 100, paddingRight: 100 }} className="message-container">
        <Grid item md={6} sm={12} xs={12} className="message">
          <Typography style={{ fontWeight: 600 }} variant='h4'>Any questions?</Typography>&nbsp;&nbsp;&nbsp;
          <Typography style={{ fontWeight: 600 }} variant='h4' color='primary' id="contact-me" >Contact me.</Typography>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Box>
            <Typography style={{ fontSize: 20 }}>dronan@ualberta.ca</Typography>
            <Typography style={{ fontSize: 20 }}>403.363.7393</Typography>
          </Box>
          <Box style={{ paddingTop: 24 }}>
            <a style={{ color: 'inherit' }} rel="noopener noreferrer" target="_blank" href="https://github.com/Djohnronan/">
              <FontAwesomeIcon style={{ padding: 4, paddingRight: 20 }} icon={faGithub} size="3x" onClick={() => console.log('github')} />
            </a>
            <a style={{ color: 'inherit' }} rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dalton-ronan-bb6084135/">
              <FontAwesomeIcon style={{ padding: 4 }} icon={faLinkedin} size="3x" />
            </a>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}