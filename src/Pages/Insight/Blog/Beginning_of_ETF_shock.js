import { AppBar, Divider,  Button, Container, Grid, Tabs, Tab, Toolbar, Typography, Tooltip, Box, List, Avatar, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
import React, {useEffect} from 'react';
// import dpalogo from "../../asset/images/dpa_cloud_logo.png";
import Aos from 'aos'
import "aos/dist/aos.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// images
import dpaic from "../../../asset/images/dpaicon.png";

import ETF1 from "../../../asset/images/insight/blog_pages/1ETF_shock.jpg";

// images end


export default function Beginning_of_ETF_shock() {



useEffect(() => {
Aos.init({ duration:1000 });
}, []);
    

    
    

    return (
        <>


    <Box className='mainsection' component='section' id='top'>
    <Container maxWidth='lg'>
    <Grid container spacing={1} alignItems="center">
    <Grid item lg={12} md={12} sm={12} xs={12}>
    <Box>
    <Typography variant='h3' className='skblue al_center'>
    Blog
    </Typography>
    <Typography variant='h1' className='blue al_center'>
    Beginning of <br/> ETF Shock
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    March 23, 2020
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>Last Monday I wrote about the issues that ETFs will face due to the disruptions to real economy. I did not expect the problems to surface at the short-end of ETFs and so fast.</Typography>

    <Typography variant='h6' className='black jst'>Last week some of the short duration ETFs had a 30 plus-standard deviation move in one day. A thirty standard deviation move in many different ETFs mathematically should not normally happen in our lifetime even if we assume we inhabit a multiverse with zillions of universes, each with trillions of galaxies with billions of stars in each galaxy and most stars having an advance life form with ETFs trading at the centre of their respective planetary financial capital, and all these planets are subject to one single multiversal pdf.</Typography>

    <Typography variant='h6' className='black jst'>A thirty standard deviation move in short ETFs only indicates the structural fallacy in construction of ETFs which I described in my earlier post.</Typography>


    <Typography variant='h6' className='black jst'>I post screenshot from website of one such ETF, just so that readers can visually see how a 30 SD move looks like.</Typography>
        
    <br/>
  

    <Typography variant='h4' className='blue jst'>Growth of Hypothetical $10,000</Typography>


    <Box className='al_left' mt={4} mb={4}>
    <img src={ ETF1 } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'>Source: ishares website</Typography>

    <Typography variant='h6' className='black jst'>What is worse, is that alongside this sharp downmove, many ETF providers have increased exit fees by 400% overnight. 1</Typography>

    <Typography variant='h6' className='black jst'>I repeat here that global central banks are busy stabilizing real economy and they will not be able to clear mess in the ETF market at the same time.</Typography>
        
    <br/>

    <Typography variant='h6' className='black jst'><a href=' https://www.wsj.com/articles/blackrock-vanguard-raise-price-of-cash-redemption-for-some-etfs-11584746900' target='_blank'> https://www.wsj.com/articles/blackrock-vanguard-raise-price-of-cash-redemption-for-some-etfs-11584746900</a></Typography>
           


<Box>
    <Box className='insightmidbg'>
    <Box className='al_center' mt={3}>
    <Button variant="contained" className='dpabtn_1'>
    subscribe
    </Button>
    </Box>
    </Box>
</Box>  



    </Box> {/*white box end here */}


    <Box className='al_center' mt={3}>
    <Link to='/insight'>
    <Button variant="contained" className='dpabtn_gr' startIcon={<ArrowBackIcon />}>
    Back to Blog
    </Button>
    </Link>
    </Box>


    </Container>
    </Box>



                   



        </>
    );
}
