import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './home.css'
import Box from '@material-ui/core/Box';


export default function Home() {

    return (
        <div className='homeBkg'>
            <Card className='cardHome' style={{ marginTop: '7vh', marginLeft: '10vh' }}>
                <CardMedia
                    className='cardMedia'
                // image={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'}
                />
                <CardContent className='cardContent'>
                    <Typography >
                        Hello! I'm
                    </Typography>
                    <Typography variant="h4" color="primary" style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}>
                        Dalton Ronan,
                </Typography>
                    <Typography >
                        undergraduate Computing Science student at the University of Alberta.
                    </Typography>
                </CardContent>
            </Card>
            <Card className='cardHome' style={{ marginTop: '7vh', marginRight: '10vh' }}>
                <CardContent>
                    <Typography variant="h4" color="primary" style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}>
                        "I'm still trying to figure it out."
                    </Typography>
                    <Typography color="textSecondary" style={{ paddingLeft: '3em' }} >
                        <Box fontStyle="italic">--Me, 20 seconds ago</Box>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}