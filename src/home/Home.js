import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './home.css'
import Box from '@material-ui/core/Box';
import headshot from "../media/headshot.jpg"

export default function Home() {

    return (
        <div className='homeBkg'>
            <Card className='cardHome' style={{ marginTop: '7vh', marginLeft: '10vh' }}>
                <CardMedia
                    className='cardMedia'
                    image={headshot}
                    title='headshot'
                />
                <CardContent className='cardContent'>
                    <Typography >
                        Hello! I'm
                    </Typography>
                    <Typography variant="h4" color="primary" style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}>
                        <Box fontWeight={600}>
                            Dalton Ronan,
                        </Box>
                    </Typography>
                    <Typography >
                        undergraduate Computing Science student at the University of Alberta in Edmonton, Canada.
                    </Typography>
                    <Typography style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}>
                        Learn more about me.
                    </Typography>
                </CardContent>
            </Card>
            <Card className='cardHome' style={{ marginTop: '7vh', marginRight: '10vh' }}>
                <CardContent>
                    <Typography variant="h5" color="primary" style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}>
                        "I'm still trying to figure it all out."
                    </Typography>
                    <Typography color="textSecondary" style={{ paddingLeft: '3em' }} >
                        <Box fontStyle="italic">--Me, 20 seconds ago</Box>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}