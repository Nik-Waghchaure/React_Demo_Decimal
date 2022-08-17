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
import indexbanner from "../../asset/images/product/analystpulsebanner.svg";


import analyst1 from "../../asset/images/product/analyst1.svg";
import analyst2 from "../../asset/images/product/analyst2.svg";
import analyst3 from "../../asset/images/product/analyst3.svg";
import analyst4 from "../../asset/images/product/analyst4.svg";
import analyst5 from "../../asset/images/product/analyst5.svg";
import analyst6 from "../../asset/images/product/analyst6.svg";
import analyst7 from "../../asset/images/product/analyst7.svg";
import analyst8 from "../../asset/images/product/analyst8.svg";


import banenr2 from "../../asset/images/innovation/ds_banner2.svg";



// images end


export default function Analystpulse() {



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
    Analyst Pulse
    </Typography>

    <Typography variant='h4' className='black'>
    Research Solution for Investor Relations Team
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
AnalystPulse
</Typography>

<Box mt={3}>
<Typography variant='h6' className='black'>Market Intelligence reports that discover early signals of analyst, investor and shareholder expectations.</Typography>
</Box>

</Box>
</Grid>
</Grid>

<Box mt={3}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={4} md={4} sm={6} xs={12}>
<Box className='str_bg mnhg3'>
<Box mb={2}>
<img src={ analyst1 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Addressing Stakeholder Demands</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_left'>
<ul>
<li>Understand market expectations</li>
<li>Better Prepared for likely queries</li>
<li>Address shareholder activism</li>
</ul>
</Typography>
</Box>
</Box>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Box className='str_bg mnhg3'>
<Box mb={2}>
<img src={ analyst2 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Input to Management</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_left'>
<ul>
<li>Clear concise picture to leadership</li>
<li>Positions to better deal with regulatory scrutiny</li>
</ul>
</Typography>
</Box>
</Box>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Box className='str_bg mnhg3'>
<Box mb={2}>
<img src={ analyst3 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Unlocking True Value</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_left'>
<ul>
<li>Maintain smooth relationship with investment community</li>
<li>Help build a stellar reputation as an investor friendly corporation</li>
</ul>
</Typography>
</Box>
</Box>
</Grid>






</Grid>
</Box>


</Container>
</Box>




<Box className='section' component='section'>
<Container maxWidth='lg' className='bdr'>

<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography className='skblue' variant='h3'>
Product
</Typography>
<Typography className='black' variant='h2'>
AnalystPulse Solutions
</Typography>

<Box mt={3}>
<Typography variant='h6' className='black'>Bridging the Value Gap</Typography>
</Box>

</Box>
</Grid>
</Grid>

<Box mt={5}>
<Grid container spacing={0} alignItems="center">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<img src={ banenr2 } className='topbanner2'/>
</Box>
</Grid>
</Grid>
</Box>
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
AnalystPulse Solutions
</Typography>
<Box mt={3}>
<Typography variant='h6' className='black'>Bringing a Financial Analyst to your Team</Typography>
</Box>
</Box>
</Grid>
</Grid>

<Box mt={3}>
<Grid container spacing={1} alignItems="top">

<Grid item lg={4} md={4} sm={6} xs={12}>
<Box className='str_bg mnhg3'>
<Box mb={2}>
<img src={ analyst4 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>News Tracker</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_center'>
Weekly news summary regarding the Company and its five closest peers along with News Sentiment Analysis
</Typography>
</Box>
</Box>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Box className='str_bg mnhg3'>
<Box mb={2}>
<img src={ analyst5 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Consensus Valuation Model</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_center'>
Quarterly update of consensus valuation model and assist the IR team prepare for potential questions from investors on an ongoing basis
</Typography>
</Box>
</Box>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Box className='str_bg mnhg3'>
<Box mb={2}>
<img src={ analyst6 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Peer Comparisons</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_center'>
Monthly analysis of Companies in the sector on Financial Performance, Credit Profile, Consensus Estimates, Valuation and Shareholders Returns
</Typography>
</Box>
</Box>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Box className='str_bg mnhg2'>
<Box mb={2}>
<img src={ analyst7 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Street View Monitor</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_center'>
Tracking trends in the broker recommendations on the company and its comparable peers on a fortnightly basis. Analyst outlook summaries
</Typography>
</Box>
</Box>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Box className='str_bg mnhg2'>
<Box mb={2}>
<img src={ analyst8 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Investor Conference Calendar</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_center'>
Monthly compilation of investor conferences scheduled globally during the coming months
</Typography>
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
<a onClick={() => {window.location.href="/datasolution"}}>Something</a>
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
