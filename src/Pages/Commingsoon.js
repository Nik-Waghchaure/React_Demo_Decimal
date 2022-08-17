import { AppBar, Divider,  Button, Container, Grid, Tabs, Tab, Toolbar, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
// import dpalogo from "../../asset/images/dpa_cloud_logo.png";
import Aos from 'aos'
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';


// images end


export default function Commingsoon() {



useEffect(() => {
Aos.init({ duration:1000 });
}, []);
    

    
    

    return (
        <>


    <Box className='mainsection' component='section'>
    <Container maxWidth='lg'>
    <Grid container spacing={1} alignItems="center">
    <Grid item lg={12} md={12} sm={12} xs={12}>
    <Box>
    <Typography variant='h1' className='blue al_center'>
    Work in Progress!!
    </Typography>
    </Box>
    </Grid>
  
    </Grid>
    </Container>
    </Box>



        </>
    );
}
