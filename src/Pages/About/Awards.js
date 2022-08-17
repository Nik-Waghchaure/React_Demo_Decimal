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
import indexbanner from "../../asset/images/aboutus/awardsbanner.svg";
import trophy from "../../asset/images/aboutus/trophy.svg";
import award1 from "../../asset/images/aboutus/about_us_award1.svg";
import award2 from "../../asset/images/aboutus/about_us_award2.svg";

import dash1 from "../../asset/images/index/dash01.svg";
import dash2 from "../../asset/images/index/dash02.svg";
import dash3 from "../../asset/images/index/dash03.svg";
import why1 from "../../asset/images/index/homei01.svg";
import why2 from "../../asset/images/index/homei02.svg";
import why3 from "../../asset/images/index/homei03.svg";
import why4 from "../../asset/images/index/homei04.svg";
import why5 from "../../asset/images/index/homei05.svg";
import why6 from "../../asset/images/index/homei06.svg";
import why7 from "../../asset/images/index/homei07.svg";
import why8 from "../../asset/images/index/homei08.svg";

import pro1 from "../../asset/images/index/productskills/p1.png";
import pro2 from "../../asset/images/index/productskills/p2.png";
import pro3 from "../../asset/images/index/productskills/p3.png";
import pro4 from "../../asset/images/index/productskills/p4.png";
import pro5 from "../../asset/images/index/productskills/p5.png";
import pro6 from "../../asset/images/index/productskills/p6.png";
import pro7 from "../../asset/images/index/productskills/p7.png";
import pro8 from "../../asset/images/index/productskills/p8.png";

import ski1 from "../../asset/images/index/productskills/s1.svg";
import ski2 from "../../asset/images/index/productskills/s2.svg";
import ski3 from "../../asset/images/index/productskills/s3.svg";
import ski4 from "../../asset/images/index/productskills/s4.svg";
import ski5 from "../../asset/images/index/productskills/s5.svg";
import ski6 from "../../asset/images/index/productskills/s6.svg";
import ski7 from "../../asset/images/index/productskills/s7.svg";
import ski8 from "../../asset/images/index/productskills/s8.svg";

// images end


export default function Awards() {



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
    Recognition Received Along Our Journey
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



    <Box className='section' component='section'>
    <Container maxWidth='lg' className='bdr'>
    <Grid container spacing={3} alignItems="center">
    <Grid item lg={5} md={6} sm={6} xs={12}>
    <Box className='al_left'>
    <img src={ trophy } className='topbanner'/>
    </Box>
    </Grid>
    <Grid item lg={7} md={6} sm={6} xs={12}>
    <Box>
    <Typography variant='h3' className='skblue'>
    About
    </Typography>
    <Typography variant='h2' className='black'>
    Heading Pending
    </Typography>
    <Typography variant='h6' className='black jst'>
    We at Decimal Point Analytics continuously strive to deliver excellence to our clients through our technologically advanced products and services. We are an organization where every decimal contributes towards cultivating innovation in our culture. 
    </Typography>




    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>
    <Grid container spacing={1} alignItems="center">
    <Grid item lg={2} md={2} sm={2} xs={12}>
    <Box className='al_left'>
    <img src={ award1 } className='topbanner'/>
    </Box>
    </Grid> 
    <Grid item lg={10} md={10} sm={10} xs={12}>
    <Box>
    <Typography variant='h5' className='black'>
    Recognized as the Top Innovative Company in the 12th Graham Bell Awards
    </Typography>
    </Box> 
    </Grid>
    </Grid>

    <Divider className='div1'/>
    
    <Grid container spacing={3} alignItems="top">
    <Grid item lg={12} md={12} sm={12} xs={12}>
    <Box>
    
    <Typography variant='h6' className='black jst'>
    <strong>Decimal Point Analytics (DPA)</strong> feels proud and humbled to be declared the winner of the prestigious Aegis Graham Bell Awards for <strong>"Innovation in Analytics". India’s top innovation award is supported by the Ministry of Electronics and Information Technology, Government of India. </strong>
    </Typography>

    <Typography variant='h6' className='black jst'>
    We won this award for our innovative product in real-time fraud analytics “FidelityPulse”. 
    </Typography>

    <Typography variant='h6' className='black jst'>
    Decimal Point’s ability to innovate has allowed us to gain the trust of our demanding client base of leading global asset managers, financial data providers, banks, and insurance companies. Going forward, DPA will redouble its efforts to deliver innovation, reliability, and efficiencies in our client engagements.
    </Typography>

    <Typography variant='h6' className='black jst'>
    Decimal Point was selected as India’s Top Analytics Innovator by a <strong>high profile cross border jury</strong> comprising, among others: <strong>Dr. Abhijit Gangopadhyay,</strong> dean, Aegis School of Data Science & Cyber Security; <strong>Mr. Abdullah AlSalem,</strong> IT Director at Ministry of Health Saudi Arabia, Kingdom of Saudi Arabia; <strong>Dr Adriano Barbosa da Silva,</strong> UKRI Rutherford Fund Innovation Fellow / Lecturer, Queen Mary University of London; <strong>Mr Alex Fiddes, </strong> Head of Digital Operations Driver and Vehicle Standards Agency of the UK Department for Transport. 
    </Typography>

    <Typography variant='h6' className='black jst'>
    Our <strong>CEO, Shailesh Dhuri,</strong> was felicitated in a virtual ceremony chaired by <strong>Union Minister of State for External Affairs, Dr Rajkumar Ranjan Singh.</strong>  
    </Typography>

    <Typography variant='h6' className='black jst'>
    Mr. Shailesh Dhuri Said “At DPA, the passion for solving problems by customers is driving force and for me personally, I am driven by solving problems faced by society. These rewards are pleasant after-effects of that passion. Even now, “हमअपनी एक धुन मैं होते है | उस धुन के पीछें लगे रहे हैं |” we will continue to be driven by our passion. That is un-ending.  
    </Typography>


    </Box>
    </Grid>

    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>
    <Grid container spacing={1} alignItems="center">
    <Grid item lg={2} md={2} sm={2} xs={12}>
    <Box className='al_left'>
    <img src={ award2 } className='topbanner'/>
    </Box>
    </Grid> 
    <Grid item lg={10} md={10} sm={10} xs={12}>
    <Box>
    <Typography variant='h5' className='black'>
    Acknowledged as Indian SME of the Year -2021
    </Typography>
    </Box> 
    </Grid>
    </Grid>

    <Divider className='div1'/>
    
    <Grid container spacing={3} alignItems="top">
    <Grid item lg={12} md={12} sm={12} xs={12}>
    <Box>
    
    <Typography variant='h6' className='black jst'>
    We are a proud to be the “Indian SME of the Year”, an award with which we were honoured by in the Third Edition of the prestigious “Indo French Business Awards 2021”. IFBA is organized by the Indo-French Chamber of Commerce and Industry (IFCCI) every year and this year it was held in March 2021. The Indo French Business Awards aims to recognize and appreciate the performance of IFCCI’s member companies i.e. Indian and French companies that have been operating in France and India respectively.
    </Typography>

    <Typography variant='h6' className='black jst'>
    After receiving the award in presence of the French Ambassador to India and Union minister Mr. Nitin Gadkari, the CEO of Decimal Point Analytics, Mr. Shailesh Dhuri said, “Since its inception Decimal Point Analytics Pvt. Ltd. has been continuously working towards achieving excellence in financial research and consulting. We are glad that our efforts have been recognized by the industry.”
    </Typography>

    <Typography variant='h6' className='black jst'>
    We not only view this recognition as a moment of pride but also of motivation and encouragement to reach new heights in our quest to generate alpha for our clients and the society at large. 
    </Typography>

    </Box>
    </Grid>

    </Grid>
    </Container>
    </Box>





        </>
    );
}
