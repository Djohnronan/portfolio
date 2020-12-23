import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia, Typography } from '@material-ui/core';
import headshot from "../media/headshot.jpg"
import fish from "../media/fish.jpg"

import './about.css'
import Carousel from 'react-material-ui-carousel'

export default function About() {
    var photos = [
        {
            name: "photo",
            description: "photo",
            image: headshot
        },
        {
            name: "photo2",
            description: "photo2",
            image: fish

        },
        {
            name: "photo3",
            description: "photo3",
            image: headshot

        },

    ]

    return (
        <div >
            <Card className='aboutPhotoCarousel' style={{ marginTop: '7vh', marginLeft: '10vh' }}>
                <Carousel>
                    {
                        photos.map((item, i) => <CardMedia
                            className='carouselPhoto'
                            key={i}
                            image={item.image}
                            title={item.name} />
                        )
                    }
                </Carousel>
            </Card>

            <Card className='aboutBlurb' style={{ marginTop: '7vh', marginRight: '10vh' }}>
                <CardContent>
                    <Typography>
                        I’m an after degree student studying Computing Science at the University of Alberta in Edmonton, Canada. I’ve always had a passion for science, and approaching problems in a very methodical and analytical way, and enjoyed developing these skills throughout my first degree in Astrophysics.
                        <br/><br/>
                        I wasn’t exposed to computing science until part way through my degree in Astrophysics, where I started coding with MatLab and Python for my lab courses. I enjoyed approaching problems and coming up with solutions through computational thinking. It was from this that I really became interested in the subject and decided to pursue an after degree.
                        <br/><br/>
                        It wasn’t until I started studying computing science that I began to realize and appreciate the importance of a <b>well designed</b> solution that’s <b>accessible to everyone</b>, whatever that solution may be.
                        <br/><br/>
                        I’m interested in using my degree as an opportunity to explore how and where I can use my skills to apply this statement. Most recently, I’ve been interested in and exploring how this applies through the role of front-end development, but I’m still trying to figure it all out.
                    </Typography>
                </CardContent>
            </Card>

            <Card className="aboutOther">
                <Typography>
                    sample
                </Typography>
            </Card>
        </div>
    )
}