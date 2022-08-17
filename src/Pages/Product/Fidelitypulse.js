import { AppBar, Divider,  Button, Container, Grid, Tabs, Tab, Toolbar, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
// import dpalogo from "../../asset/images/dpa_cloud_logo.png";
import Aos from 'aos'
import "aos/dist/aos.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';


// images
import indexbanner from "../../asset/images/product/fidelitypulsebanner.svg";
import banenr2 from "../../asset/images/product/fidelityimg.svg";
// images end


export default function Fidelitypulse() {



useEffect(() => {
Aos.init({ duration:1000 });
}, []);
    

    
    

    return (
        <>


    <Box className='mainsection' component='section'>
    <Container maxWidth='lg'>
    <Grid container spacing={1} alignItems="center">
    <Grid item lg={5} md={6} sm={6} xs={12}>
    <Box>
    <Typography variant='h1' className='blue'>
    Fidelity Pulse
    </Typography>

    <Typography variant='h4' className='black'>
    Fraud Detection Algorithm
    </Typography>

    </Box>
    </Grid>
    <Grid item lg={7} md={6} sm={6} xs={12}>
    <Box className='al_right'>
    <img src={ indexbanner } className='topbanner'/>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>



    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Grid container spacing={1} alignItems="top">
    <Grid item lg={12} md={12} sm={12} xs={12}>
    <Box className='al_center'>
    <Typography variant='h3' className='skblue'>
    Product
    </Typography>
    <Typography variant='h2' className='black'>
    What is FidelityPulse ?
    </Typography>
    </Box>
    </Grid>
    </Grid>


    <Grid container direction="row"
    justifyContent="center"
    alignItems="center">
    <Grid item lg={12} md={12} sm={12} xs={12}>
    <Box mt={4}>
    <Typography variant='h6' className='black jst'>
    Financial organizations lose a significant percentage of annual revenue to fraud every year. Undetected frauds also lead to loss of productivity and eroding customer confidence. 
    </Typography>

    <Typography variant='h6' className='black jst'>
    FidelityPulse is a fraud detection system which employs machine learning to help identify and flag potential financial frauds. 
    </Typography>

    <Typography variant='h6' className='black jst'>
    We have designed a model which can ingest multiple forms of financial data to identify discrepancies and outliers. 
    </Typography>

    <Typography variant='h6' className='black jst'>
    The resulting Fidelity Score which lies between (0 to 1000) helps you identify the frauds and make pre-emptive decision. 
    </Typography>

    <Typography variant='h6' className='black jst'>
    The score is calculated based on the financial details fed to the system. 
    </Typography>

    </Box>

    </Grid> 
    </Grid>
    </Container>
    </Box>




<Box className='section' component='section'>
<Container maxWidth='lg' className='bdr'>
<Grid container spacing={0} alignItems="center">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<img src={ banenr2 } className='topbanner2'/>
</Box>
</Grid>
</Grid>
</Container>
</Box>


                   
<Box className='section ourstrength' component='section'>
<Container maxWidth='lg' className='bdr'>

<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography className='skblue' variant='h3'>
Product
</Typography>
<Typography className='black' variant='h2'>
For More Details Connect Us
</Typography>
</Box>

<Box className='al_center' mt={3}>
<Button variant="contained" className='dpabtn_1'>
  Write a Message
</Button>
</Box>

</Grid>
</Grid>

</Container>
</Box>


        </>
    );
}
