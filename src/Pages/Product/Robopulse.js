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
import banenr2 from "../../asset/images/innovation/researchsbanner.svg";

import credit1 from "../../asset/images/product/credit1.svg";
import credit2 from "../../asset/images/product/credit2.svg";
import credit3 from "../../asset/images/product/credit3.svg";
import credit4 from "../../asset/images/product/credit4.svg";


// images end


export default function Robopulse() {



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
    Robo Pulse
    </Typography>

    <Typography variant='h4' className='black'>
    A Robo Advisory platform for all your needs
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
<Grid item lg={8} md={8} sm={12} xs={12}>
<Box mt={4}>
<Typography variant='h6' className='black jst'>
RoboPulse is a digital platform which provides automated, algorithm-driven financial planning services with no human supervision. It is a dynamic tool, recommending Individual and Institutional investors with sophisticated and customized investment portfolio to achieve set target amount. This algorithm renders precise, quick and inexpensive investment recommendations across the asset classes, risk profiles, countries, and regions. It also reviews the progress periodically and suggests changes just like a human advisor.
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


<Box className='section sec_bg' component='section'>
<Container maxWidth='lg' className='bdr'>

<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography variant='h3' className='skblue'>
Product
</Typography>
<Typography variant='h2' className='black'>
RoboPulse platform can help with:
</Typography>
</Box>
</Grid>
</Grid>


<Grid container direction="row"
justifyContent="center"
alignItems="center">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box mt={4}>
<Typography variant='h6' className='black al_left'>
<ul>
<li>The right mix asset of classes</li>
<li>Automated Portfolio construction and eliminating the bias in investment advice</li>
<li>Schemes recommendations based on the historical performance</li>
<li>Customised asset allocation based on inputs received from the investor</li>
<li>Review recommended portfolio’s past performances (1 year, 3 years, and 5 years) with an apt benchmark, subject to data availability</li>
<li>Handling the volatility in the market by automatically rebalancing according to goals and risk appetite</li>
<li>Manage and tracking portfolio frequently without meeting financial advisors</li>
<li>Updating your investors regarding their goals through emails and SMS notifications/alerts</li>
</ul>
</Typography>
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
