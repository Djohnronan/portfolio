import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <>
        <Grid container style={{ paddingTop: 200, paddingLeft: 100, paddingRight: 100}}>
            <Grid item md={6} xs={12} style={{ display: 'flex' }} >
                <Typography style={{ fontWeight: 600 }} variant='h5'>Any questions?</Typography>&nbsp;
                <Typography style={{ fontWeight: 600 }} variant='h5' color='primary'>Contact me.</Typography>
            </Grid>
            <Grid item md={6} xs={12} >
                {/* <Typography style={{ fontWeight: 600 }} variant='h5'>Contact Me</Typography> */}
                <TextField 
                    id="form-name" 
                    label="Name" 
                    variant="outlined"
                    size="small" 
                    autoFocus 
                    fullWidth
                    margin="normal"
                    required />
                <TextField 
                    id="form-email" 
                    label="Email" 
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="normal"
                    required />
                <TextField 
                    id="form-subject" 
                    label="Subject (optional)" 
                    variant="outlined" 
                    fullWidth
                    margin="normal"
                    size="small" />
                <TextField 
                    id="form-message" 
                    label="Message" 
                    variant="outlined" 
                    required 
                    multiline 
                    fullWidth
                    margin="normal"
                    size="small"
                    rows={10} />
                <Button variant="contained" color="primary">Send</Button>
            </Grid>
            <FontAwesomeIcon style={{ padding: 4, marginTop: -35 }} icon={faGithub} size="2x"/>
            <FontAwesomeIcon style={{ padding: 4, marginTop: -35 }} icon={faLinkedin} size="2x"/>
        </Grid>
        </>
    )
}