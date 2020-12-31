import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, Button } from '@material-ui/core';
import headshot from "../media/headshot.jpg"
import './about.css'
import { Fade } from 'react-awesome-reveal'
import { Link } from "react-router-dom";


export default function About() {

  return (
    <>
      <Fade duration={1500} cascade>
        <Card style={{ maxWidth: 345, marginTop: 25, marginLeft: 35 }}>
          <CardMedia style={{ height: 345 }} image={headshot} />
        </Card>
        <Typography style={{ fontSize: 18, marginLeft: 415, marginTop: -200, marginRight: 35}}>
          I’m an after degree student studying Computing Science at the University of Alberta in Edmonton, Canada. I’ve always had a passion for science, and approaching problems in a very methodical and analytical way, and enjoyed developing these skills throughout my first degree in Astrophysics.
          <br /><br />
          I wasn’t exposed to computing science until part way through my degree in Astrophysics, where I started coding with MatLab and Python for my lab courses. I enjoyed approaching problems and coming up with solutions through computational thinking. It was from this that I really became interested in the subject and decided to pursue an after degree.
          <br /><br />
          It wasn’t until I started studying computing science that I began to realize and appreciate the importance of a <b>well designed</b> solution that’s <b>accessible to everyone</b>, whatever that solution may be.
          <br /><br />
          I’m interested in using my degree as an opportunity to explore how and where I can use my skills to apply this statement. Most recently, I’ve been interested in and exploring how this applies through the role of front-end development, but I’m still trying to figure it all out.
        </Typography>
        <Button 
          style={{ marginLeft: 415, marginTop: 15 }}
          aria-label="Experience" 
          variant="outlined" 
          color="primary" 
          component={Link} 
          to="/projects">
            Experience
        </Button>
      </Fade>
    </>
  )
}