import React from 'react';
import { Fade } from 'react-awesome-reveal'
import Typography from '@material-ui/core/Typography';
import './home.css'

export default function Home() {

  return (
    <>
      <Fade direction='down' duration={2000}>
        <Typography style={{ fontSize: 45 }}>Hello, I'm</Typography>
      </Fade>
      <Fade direction='left' delay={1000} duration={2000}>
        <Typography variant='h2' color='primary'>Dalton Ronan</Typography>
      </Fade>
      <Fade direction='right' delay={3000} duration={2000}>
        <Typography style={{ fontSize: 45 }}>undergraduate Computing Science student at the University of Alberta in Edmonton, Canada.</Typography>
      </Fade>
    </>
  )
}