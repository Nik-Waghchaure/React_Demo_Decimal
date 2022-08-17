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
import indexbanner from "../../asset/images/innovation/ds_banner.gif";
import ecoreport from "../../asset/images/product/ecopulse1.jpg";


import eco1 from "../../asset/images/product/eco1.svg";
import eco2 from "../../asset/images/product/eco2.svg";
import eco3 from "../../asset/images/product/eco3.svg";
import eco4 from "../../asset/images/product/eco4.svg";
import eco5 from "../../asset/images/product/eco5.svg";
import eco6 from "../../asset/images/product/eco6.svg";

import banenr2 from "../../asset/images/innovation/ds_banner2.svg";



import why1 from "../../asset/images/index/homei01.svg";


// images end


export default function Ecopulse() {



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
    EcoPulse
    </Typography>

    <Typography variant='h4' className='black'>
    Make your clients Trade Big
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



    

<Box className='section sec_bg ourstrength' component='section'>
<Container maxWidth='lg' className='bdr'>

<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography className='skblue' variant='h3'>
Product
</Typography>
<Typography className='black' variant='h2'>
Eco Pulse
</Typography>

<Box mt={3}>
<Typography variant='h6' className='black'>EcoPulse is a technology enabled platform created<br/> to deliver professional financial market content to financial intermediaries across currency, commodity and other markets</Typography>
</Box>

</Box>
</Grid>
</Grid>

<Box mt={3}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={6} md={6} sm={6} xs={12}>
<Box className='str_bg'>
<Box mb={2}>
<img src={ eco1 } className='bxicon'/>
</Box>
<Typography className='black' variant='h4'>Quick access to all economic and<br/> market moving news updates</Typography>
</Box>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Box className='str_bg'>
<Box mb={2}>
<img src={ eco2 } className='bxicon'/>
</Box>
<Typography className='black' variant='h4'>Facilitates trading by reducing <br/>time-lag of information flow</Typography>
</Box>
</Grid>

</Grid>
</Box>


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


<Box className='section sec_bg ourstrength' component='section'>
<Container maxWidth='lg' className='bdr'>
<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography className='skblue' variant='h3'>
Product
</Typography>
<Typography className='black' variant='h2'>
Delivery Model
</Typography>
</Box>
</Grid>
</Grid>

<Box mt={3}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={3} md={3} sm={6} xs={12}>
<Box className='str_bg mnhg1'>
<Box mb={2}>
<img src={ eco3 } className='bxicon'/>
</Box>
<Typography className='black' variant='h4'>Feed to customer Website with Customized Branding</Typography>
</Box>
</Grid>

<Grid item lg={3} md={3} sm={6} xs={12}>
<Link to='/'>
<Box className='str_bg mnhg1'>
<Box mb={2}>
<img src={ eco4 } className='bxicon'/>
</Box>
<Typography className='black' variant='h4'>Desktop ticker updates</Typography>
</Box>
</Link>
</Grid>

<Grid item lg={3} md={3} sm={6} xs={12}>
<Link to='/'>
<Box className='str_bg mnhg1'>
<Box mb={2}>
<img src={ eco5 } className='bxicon'/>
</Box>
<Typography className='black' variant='h4'>Automatic Feed to Social Media accounts Twitter Facebook, etc..</Typography>
</Box>
</Link>
</Grid>

<Grid item lg={3} md={3} sm={6} xs={12}>
<Link to='/'>
<Box className='str_bg mnhg1'>
<Box mb={2}>
<img src={ eco6 } className='bxicon'/>
</Box>
<Typography className='black' variant='h4'>Mobile App Integration</Typography>
</Box>
</Link>
</Grid>

</Grid>
</Box>


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
Product Coverage
</Typography>
</Box>
</Grid>
</Grid>

<Box mt={3}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={3} md={6} sm={6} xs={6}>
<Box className='str_bg'>
<Box className='numcircle' mb={2}>
1600
<Box className='pulse'>
+
</Box>
</Box>
<Typography className='black' variant='h4'>Monthly Indicators across 35 countries</Typography>
</Box>
</Grid>

<Grid item lg={3} md={6} sm={6} xs={6}>
<Box className='str_bg'>
<Box className='numcircle' mb={2}>
500
<Box className='pulse'>
+
</Box>
</Box>
<Typography className='black' variant='h4'>Quarterly Indicators across 34 countries</Typography>
</Box>
</Grid>

<Grid item lg={3} md={6} sm={6} xs={6}>
<Box className='str_bg'>
<Box className='numcircle' mb={2}>
75
<Box className='pulse'>
+
</Box>
</Box>
<Typography className='black' variant='h4'>Weekly Indicators across 7 Countries</Typography>
</Box>
</Grid>

<Grid item lg={3} md={6} sm={6} xs={6}>
<Box className='str_bg'>
<Box className='numcircle' mb={2}>
G20
</Box>
<Typography className='black' variant='h4'>& Few Other Central Banks</Typography>
</Box>
</Grid>

</Grid>
</Box>


</Container>
</Box>



<Box className='section sec_bg' component='section' style={{paddingTop:'3%',}}>
<Container maxWidth='lg' className='bdr'>

<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography variant='h3' className='skblue'>
Product
</Typography>
<Typography variant='h2' className='black'>
Download Report
</Typography>
</Box>
</Grid>
</Grid>

<Box className='reportinfo'>
<Grid container spacing={1} alignItems="top">

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/insight'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ecoreport+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
South Africa
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Economy Dashboard
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/insight'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ecoreport+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
India
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Economy Dashboard
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</Link>
</Grid>




</Grid>   
</Box>




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
