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
import indexbanner from "../../asset/images/product/coffeepulsebanner.svg";
import ecoreport from "../../asset/images/product/ecopulse1.jpg";



import eco3 from "../../asset/images/product/eco3.svg";
import eco4 from "../../asset/images/product/eco4.svg";
import coffee1 from "../../asset/images/product/coffee1.svg";


import banenr2 from "../../asset/images/innovation/ds_banner2.svg";



import why1 from "../../asset/images/index/homei01.svg";


// images end


export default function Coffeepulse() {



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
    Coffee Pulse
    </Typography>

    <Typography variant='h4' className='black'>
    The real-time actionable intelligence portal on coffee
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
    What is CoffeePulse ?
    </Typography>
    </Box>
    </Grid>
    </Grid>


    <Grid container direction="row"
    justifyContent="center"
    alignItems="center">
    <Grid item lg={7} md={12} sm={12} xs={12}>
    <Box mt={4}>
    <Typography variant='h6' className='black jst'>
    CoffeePulse is designed to deliver the most relevant and in-depth coverage on coffee commodity market; through a web-based portal. You can make informed decisions with easy to consume and analyze market updates delivered real-time at your doorstep. With more impact factor mapping at nascent stages, you stay ahead of your competition and never miss an important update across the globe, in your busy schedule. With CoffeePulse, you get the news before it actually impacts prices, rather than some post-mortem report on price fluctuations.
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
Delivery Model
</Typography>
</Box>
</Grid>
</Grid>

<Box mt={3}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={4} md={4} sm={6} xs={12}>
<Box className='str_bg mnhg1'>
<Box mb={2}>
<img src={ eco3 } className='bxicon'/>
</Box>
<Typography className='blue' variant='h4'>Real-time ‘Sentiment’ monitoring</Typography>
<Box mt={2}>
<Typography className='black jst' variant='h6'>Based on defined parameters and happenings in the market, we classify market news as positive or negative - presenting a cumulative perspective on price trends.</Typography>  
</Box>
</Box>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/'>
<Box className='str_bg mnhg1'>
<Box mb={2}>
<img src={ eco4 } className='bxicon'/>
</Box>
<Typography className='blue' variant='h4'>Processing news at a nascent stage’</Typography>
<Box mt={2}>
<Typography className='black jst' variant='h6'>Catching the news early to help in capturing ‘trigger events’, continuously tracking developments before it actually becomes big enough to impact prices! </Typography>  
</Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/'>
<Box className='str_bg mnhg1'>
<Box mb={2}>
<img src={ coffee1 } className='bxicon'/>
</Box>
<Typography className='blue' variant='h4'>500+ sources, 11 countries,</Typography>
<Box mt={2}>
<Typography className='black jst' variant='h6'>Coverage of local news magnifies insights into more market factors; supplementing detailed coverage across all the major coffee producing countries </Typography>  
</Box>
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
