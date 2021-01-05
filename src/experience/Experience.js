import React from 'react';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { Container, Typography } from '@material-ui/core';

import './experience.css'

import report from '../media/blazar_txs0506+056_report.pdf'
import presentation from '../media/presentation.pdf'
import VLAImages from './VLAImages.js'

import GG1 from '../media/GG/GG1.png'
import GG2 from '../media/GG/GG2.png'
import GG3 from '../media/GG/GG3.png'
import GG4 from '../media/GG/GG4.png'
import GG5 from '../media/GG/GG5.png'
import GG6 from '../media/GG/GG6.png'
import GG7 from '../media/GG/GG7.png'
import GG8 from '../media/GG/GG8.png'
import GG9 from '../media/GG/GG9.png'
import GG10 from '../media/GG/GG10.png'
import GG11 from '../media/GG/GG11.png'
import GG12 from '../media/GG/GG12.png'
import GG13 from '../media/GG/GG13.png'
import GG14 from '../media/GG/GG14.png'
import GG15 from '../media/GG/GG15.png'
import GG16 from '../media/GG/GG16.png'
import GG17 from '../media/GG/GG17.png'
import GG18 from '../media/GG/GG18.png'
import GG19 from '../media/GG/GG19.png'
import GG20 from '../media/GG/GG20.png'


const ggImg = [GG1, GG2, GG3, GG4, GG5, GG6, GG7, GG8, GG9, GG10, GG11, GG12, GG13, GG14, GG15, GG16, GG17, GG18, GG19, GG20]

export default function Projects() {
  return (
    <>
      <Container style={{ marginTop: 35 }}>
        <Typography style={{ fontWeight: 600, marginBottom: 35 }} variant='h4' color='primary'>Projects</Typography>
        <Typography style={{ fontWeight: 600 }} variant='h6'>Responsible AI Design Assistant (September - December 2020)</Typography>
        <Typography style={{ fontStyle: 'italic' }}>client based course project</Typography>
        <Typography className="projectDesc">
        This was a project of many firsts for me. It was my first work with web development, my first time working with an actual client, and my first time 
        developing a product for real-world use and deployment. Our development team of six students was tasked with 
        creating a product for our client, <a rel="noopener noreferrer" target="_blank" href="https://ai-global.org/">AI Global</a>. Our goal was to 
        redesign their existing application 
        - <a rel="noopener noreferrer" target="_blank" href="https://ai-global.org/design-assistant/">the Responsible AI Design Assistant</a> - into a 
        more flexible and robust product. The product itself is an online questionnaire that “helps you design, develop, and deploy your AI systems in a 
        responsible way” by scoring your responses to carefully researched questions developed by AI Global and their partners. 
        </Typography>
        <Typography className="projectDesc">
        Starting with their existing prototype, we moved the app over from a static backend to the MERN stack, and then implemented the clients 
        requirements. Some of the key features include:
        </Typography>
        <Typography component={'ul'}>
          <Typography component={'li'}>Ability to create an account and log in</Typography>
          <Typography component={'li'}>Ability to save progress and end edit existing surveys</Typography>
          <Typography component={'li'}>Navigate between survey dimensions and questions</Typography>
          <Typography component={'li'}>Implement hierarchy questions and slider responses</Typography>
          <Typography component={'li'}>Administration panel to intuitively manage database collections from the front-end</Typography>
          <Typography component={'ul'}>
            <Typography component={'li'}>Create/edit/delete survey questions</Typography>
            <Typography component={'li'}>Create hierarchy question relationships</Typography>
            <Typography component={'li'}>Manage users and responses</Typography>
            <Typography component={'li'}>View basic site analytics</Typography>
          </Typography>
        </Typography>
        <Typography className="projectDesc">Below is a short screencast demoing our final MVP.</Typography>
        <Container className="screencast">
          <iframe width="966"
            height="543"
            src="https://www.youtube.com/embed/pEHZ_M55MK8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title='Responsible AI Design Assistant Screencast' />
        </Container>
        <Typography className="projectDesc">
          My primary role for this project was a front-end developer, working mainly on moving the existing front-end code to the React framework, designing 
          the survey navigation controls, and the administrator functionality for question management. Although the front-end was my main responsibility, I 
          did get my feet wet with Node and Express, working closely with the back-end team, and writing some API endpoints myself. 
        </Typography>
        <Typography className="projectDesc">
          Aside from the hard skills gained from learning the MERN stack, the project was a valuable experience in developing my soft skills in 
          communication and team work as well. We worked very closely with our client, meeting weekly to further refine the requirements and get frequent 
          and valuable feedback. 
        </Typography>

        <Divider />
        <Typography style={{ fontWeight: 600 }} variant='h6'>GufyGuber (January - April 2020) </Typography>
        <Typography style={{ fontStyle: 'italic' }}>course project</Typography>
        <Typography className="projectDesc">
          My first venture into Java and software development. This was a semester long project to design and implement a simple, attractive, and 
          easy-to-use ride-sharing application for Android. As a group of six developers, we were given 24 partial user stories to start with. From there, 
          we completed the requirement elicitation, outlined and modeled the object oriented design with UML, mocked the UI/UX with storyboards, and 
          implemented our design in Android Studio. The result, GufyGuber:
        </Typography >
        <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', paddingTop: '1em', overflow: 'hidden' }}>
          <GridList style={{ flexWrap: 'nowrap', transform: 'translateZ(0)' }} spacing={20}>
            {ggImg.map((image, index) => (
              <img className="ggScreenshot" key={index} src={image} alt='GufyGuber screenshot'></img>
            ))}
          </GridList>
        </Container>
        <Typography className="projectDesc">
          I worked closely with other members of the team to implement various features of the app, including: the Google Sign-In and Firebase integration, 
          the communication and progression of the ride story between the rider and the driver, and elements of the user interface design. 
          For a more detailed description of the project, documentation, and the codebase, you can check out 
          the <a rel="noopener noreferrer" target="_blank" href="https://github.com/CMPUT301W20T12/GufyGuber">github repo</a>.
        </Typography>
        <Typography className="projectDesc">
          This project was a new experience for me. Before working on it, I had never really considered pursuing any sort of software 
          development or front-end work. But, I found myself very interested in the challenge of not only finding a solution from a programming 
          perspective, but from a design perspective as well - finding a balance between logic and creativity. I quickly realized the challenges
          and amount of work that goes into a well designed product, and became very interested in exploring this more.
        </Typography>
        <Divider />
        <Typography style={{ fontWeight: 600 }} variant='h6'>VLA Radio Observations of Blazar TXS 0506+056 (January - April 2018)</Typography>
        <Typography style={{ fontStyle: 'italic' }}>undergraduate physics research project</Typography>
        <Typography className="projectDesc">
          This was my undergraduate research project for my astrophysics degree. Working under the supervision of Associate Professor Gregory Sivakoff, 
          my project involved reducing and analyzing radio observation data gathered from 
          the <a rel="noopener noreferrer" target="_blank" href="https://science.nrao.edu/facilities/vla">Karl G. Jansky Very Large Array (VLA)</a>.
          The radio observations were of the 
          blazar <a rel="noopener noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/TXS_0506%2B056">TXS 0506+056</a>, 
          which was associated with an extremely high energy astrophysical neutrino detection event, making it a prime candidate for studying the 
          physics behind the generation of these events.
        </Typography>
        <Typography className="projectDesc">
          The project involved me reducing the raw observation data with 
          the <a rel="noopener noreferrer" target="_blank" href="https://casa.nrao.edu/">Common Astronomy Software Applications (CASA)</a> software to 
          image the blazar and determine its flux density over the seven observation epochs. The next step was to plot, fit, and analyze the resulting 
          spectral energy distributions to examine how the spectrum evolved over the observations. I also resolved the flux densities into light curves 
          to examine the variability of the flux density throughout the observation period. The final step was to discuss my results and compare them 
          to the different models for astrophysical jets and neutrino acceleration events. You can check out 
          the <a rel="noopener noreferrer" target="_blank" href={report}>final paper</a> or 
          the <a rel="noopener noreferrer" target="_blank" href={presentation}>presentation slides</a> for more details.
        </Typography>
          <Container className="cardScroller">
            {VLAImages.map((tile, index) => (
              <Card key ={index} style={{ margin: 10, width: 350, flex: '0 0 auto'}} >
                <CardMedia component='img' image={tile.img} title={tile.title}/>
                <CardContent>
                  <Typography>{tile.caption}</Typography>
                </CardContent>
              </Card>
            ))}
          </Container>
          <Typography className="projectDesc">
            I found my experience on this project to be a very valuable one, even though I'm no longer actively studying physics. Not only did I learn a new 
            software package in CASA and improve my skills in Python through writing the scripts for the data reduction and analysis, but I learned a lot 
            about working on a more large scale, long term project. A lot of the work was self-directed, since it wasn't a scheduled course, which really 
            emphasized the importance of time management skills. There was also ample opportunity for me to proceed  through the project independently, 
            learning about the new software, and radio astronomy in general, through textbooks, online documentation, and  peer reviewed articles. Whenever 
            I did reach a point where I needed more guidance or clarification, I had an excellent supervisor I could turn to. This helped me realize the 
            benefit and importance of seeking help from a more experienced mentor or team memeber when necessary. All of these skills have translated into 
            my computing science degree.
          </Typography>
      </Container>
      <Container style={{ marginTop: 35 }}>
        <Typography style={{ fontWeight: 600, marginBottom: 35 }} variant='h4' color='primary'>Skills</Typography>
        
      </Container>
    </>
  )
}