import { AppBar, Divider, Button, TextField, Container, Grid, Toolbar, Typography, Box, } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link} from 'react-router-dom';


export default function Footer() {
    

    
    

    return (
        <div>
            <Box className='footer' component="section" style={{ backgroundColor: '#fff' }}>
                <Container maxWidth='lg'>
                <Box className='foottop'>
                <Grid container spacing={1} alignItems="center">
                <Grid item lg={6} md={6} sm={5} xs={12}>
                <Typography className='stay'>Stay up to Date with Our Newsletter!</Typography>
                </Grid>

                <Grid item lg={6} md={6} sm={7} xs={12}>
                <ul id='foot_newsletter'>
                    <li>
                    <Box className='alltxfieldlg '>
                    <TextField id="filled-basic" label="Enter Email Address..." variant="filled" fullWidth />
                    </Box>
                    </li>

                    <li>
                    <Box className='al_center'>
                    <Button variant="contained" className='dpabtn_1'>
                    Subscribe
                    </Button>
                    </Box>
                    </li>
                </ul>
                </Grid>


                </Grid>
                </Box>

                <Divider/>

                <Box className='foottop2'>
                <Grid   container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                >
                
                <Grid item lg={3} md={3} sm={6} xs={12}>
                <Typography variant='h4' className='black'>Social Media</Typography>
                <Box className='line'></Box>
                <Box mt={3}>
                <ul class="list-unstyled footerlink">
                <li><Link to='/datasolution'><Button startIcon={<LinkedInIcon/>} disableRipple className="menutt">LinkedIn</Button></Link></li>
                <li><Button startIcon={<FacebookIcon/>} disableRipple className="menutt">FaceBook</Button></li>
                <li><Button startIcon={<TwitterIcon/>} disableRipple className="menutt">Twitter</Button></li>
                {/* <li><a href="#"><FacebookIcon/> Facebook</a></li>
                <li><a href="#"></> Twitter</a></li> */}
                </ul>
                </Box>
                </Grid>

                <Grid item lg={3} md={3} sm={6} xs={12}>
                <Typography variant='h4' className='black'>Newsletter</Typography>
                <Box className='line'></Box>
                <Box mt={3}>
                <ul class="list-unstyled footerlink">
                <li><Link to='/marketweekly'><Button disableRipple className="menutt">Market Weekly</Button></Link></li>
                <li><Link to='/singularity'><Button disableRipple className="menutt">Singularity Pulse</Button></Link></li>
                <li><Link to='/paisapulse'><Button disableRipple className="menutt">Paisa Pulse</Button></Link></li>
                <li><Link to='/samplereport'><Button disableRipple className="menutt">Sample Report</Button></Link></li>
                </ul>
                </Box>
                </Grid>

                <Grid item lg={3} md={3} sm={6} xs={12}>
                <Typography variant='h4' className='black'>Media & Event</Typography>
                <Box className='line'></Box>
                <Box mt={3}>
                <ul class="list-unstyled footerlink">
                <li><Link to='/commingsoon'><Button disableRipple className="menutt">Press Release</Button></Link></li>
                <li><Link to='/commingsoon'><Button disableRipple className="menutt">Events</Button></Link></li>
                <li><Link to='/commingsoon'><Button disableRipple className="menutt">Decimal News</Button></Link></li>
                <li><Link to='/commingsoon'><Button disableRipple className="menutt">Webinar</Button></Link></li>

                </ul>
                </Box>
                </Grid>


                </Grid>
                </Box>

                <Divider/>

                <Box className='foottop'>
                    <Typography variant='h6' className='black al_center'>Copyright 2022 Decimal Point Analytics Private. All Rights Reserved. <Link to=''>Privacy</Link> and <Link to=''>Terms</Link></Typography>
                </Box>

                </Container>
            </Box>


        


        




        </div>
    );
}
