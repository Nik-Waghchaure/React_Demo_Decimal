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
import indexbanner from "../../asset/images/product/creditpulsebanner.svg";


import credit1 from "../../asset/images/product/credit1.svg";
import credit2 from "../../asset/images/product/credit2.svg";
import credit3 from "../../asset/images/product/credit3.svg";
import credit4 from "../../asset/images/product/credit4.svg";


import banenr2 from "../../asset/images/innovation/ds_banner2.svg";



import why1 from "../../asset/images/index/homei01.svg";


// images end


export default function Creditpulse() {



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
    Credit Pulse
    </Typography>

    <Typography variant='h4' className='black'>
    Real Time Credit Default Analytics
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
    What is CreditPulse ?
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
    CreditPulse is based on the underlying principle that textual analysis offers better insights over number crunching. We employ Machine Learning techniques to carry out textual analysis of recent SEC filings with those of bankrupt companies just before their bankruptcy filing.
    </Typography>

    <Typography variant='h6' className='black jst'>
    Our daily output then categorizes companies into either 'High Risk' or 'Low Risk' for the upcoming two to three quarters.
    </Typography>

    <Typography variant='h6' className='black jst'>
    CreditPulse has been built and tested on 10 years of real market data and our model has given 90% plus accuracy on the test datasets.
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


<Box className='section sec_bg ourstrength' component='section'>
<Container maxWidth='lg' className='bdr'>
<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography className='skblue' variant='h3'>
Product
</Typography>
<Typography className='black' variant='h2'>
Salient Features
</Typography>
</Box>
</Grid>
</Grid>

<Box mt={3}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={6} md={6} sm={6} xs={12}>
<Box className='str_bg mnhg2'>
<Box mb={2}>
<img src={ credit1 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='black jst' variant='h6'>CreditPulse can be customized as per clients’ specific requirements to track defined portfolio of Companies, along with deployment on specified indices such as S&P 500, Russell 2000, etc. </Typography>  
</Box>
</Box>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Box className='str_bg mnhg2'>
<Box mb={2}>
<img src={ credit2 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='black jst' variant='h6'>Appropriate thresholds can be applied based on your investment strategy</Typography>  
</Box>
</Box>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Box className='str_bg mnhg2'>
<Box mb={2}>
<img src={ credit3 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='black jst' variant='h6'>Access to real-time results based on processing of on-going filings</Typography>  
</Box>
</Box>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Box className='str_bg mnhg2'>
<Box mb={2}>
<img src={ credit4 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='black jst' variant='h6'>It is also available as a REST API, which provides data access by any programming language </Typography>  
</Box>
</Box>
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
