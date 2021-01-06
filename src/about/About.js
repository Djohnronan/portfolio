import React from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import { Fade } from 'react-awesome-reveal';
import headshot from "../media/headshot.jpg";
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, Button } from '@material-ui/core';

export default function About() {

  return (
    <>
      <Card style={{ maxWidth: 400, marginTop: 45, marginLeft: 55 }}>
        <CardMedia style={{ height: 400 }} image={headshot} />
      </Card>
      <Fade delay={500} duration={2000}>
        <Typography style={{ fontWeight: 600, marginLeft: 520, marginTop: -410, marginRight: 295 }} variant='h2' color='primary'>
          ...I’m still trying to figure it all out.
        </Typography>
      </Fade>
      <Typography style={{ fontSize: 16, marginLeft: 520, marginTop: 25, marginRight: 295}}>
        I’m an after degree student studying Computing Science at the University of Alberta in Edmonton, Canada. I’ve always had a passion for science, and approaching problems in a very methodical and analytical way, and enjoyed developing these skills throughout my first degree in Astrophysics.
        <br /><br />
        I wasn’t exposed to computing science until part way through my degree in Astrophysics, where I started coding with MatLab and Python for my lab courses. I enjoyed approaching problems and coming up with solutions through computational thinking. It was from this that I really became interested in the subject and decided to pursue an after degree.
        <br /><br />
        It wasn’t until I started studying computing science that I began to realize and appreciate the importance of a <b>well designed</b> solution that’s <b>accessible to everyone</b>, whatever that solution may be.
        <br /><br />
        I’m interested in using my degree as an opportunity to explore how and where I can use my skills to apply this statement. Most recently, I’ve been interested in and exploring how this applies through the role of front-end development, but I’m still trying to figure it all out.
      </Typography>
      <Button 
        style={{ marginLeft: 520, marginTop: 25 }}
        aria-label="Experience" 
        variant="outlined" 
        color="primary" 
        component={Link} 
        to={process.env.PUBLIC_URL + "/experience"}>
          Experience
      </Button>
    </>
  )
}