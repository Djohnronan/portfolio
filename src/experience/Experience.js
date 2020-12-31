import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import './experience.css'


export default function Projects() {
  return (
    <>
      <Container style={{ marginTop: 35 }}>
        <Typography style={{ fontWeight: 600, marginBottom: 35 }} variant='h4' color='primary'>Projects</Typography>
          <Typography style={{ fontWeight: 600 }} variant='h6'>Responsible AI Design Assistant (September - December 2020)</Typography>
            <Typography style={{fontStyle: 'italic' }}>client based course project</Typography>
            <Typography className="projectDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Divider/>
          <Typography style={{ fontWeight: 600 }} variant='h6'>GufyGuber (January - April 2020) </Typography>
          <Typography style={{fontStyle: 'italic' }}>course project</Typography>
            <Typography className="projectDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography >
            <Divider/>
          <Typography style={{ fontWeight: 600 }} variant='h6'>VLA Radio Observations of Blazar TXS 0506+056 (January - April 2018)</Typography>
          <Typography style={{fontStyle: 'italic' }}>undergraduate research project</Typography>
            <Typography className="projectDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
    </Container>
    <Container style={{ marginTop: 35 }}>
      <Typography style={{ fontWeight: 600, marginBottom: 35 }} variant='h4' color='primary'>Skills</Typography>
    </Container>
        </>
    )
}