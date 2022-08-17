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

import Funding_Stress from "../../../asset/images/insight/blog_pages/funding_stress.jpg";

// images end


export default function Extreme_funding_stress() {



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
    Extreme Funding Stress <br/> in Dollar Market
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    March 18, 2020
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>One measure of funding stress in dollar markets is how much liquidity is demanded by banks from NY Fed. The chart below shows the net liquidity demand / supply amanaged by NY Fed from 7th July 2000 till 17th March 2020. Positive numbers indicate that banks are short of liquidity; while negative numbers indicate that banks have excess liquidity.</Typography>


    <Typography variant='h4' className='blue jst'>Chart 1: Net Funding by NY Fed</Typography>


    <Box className='al_left' mt={4} mb={4}>
    <img src={ Funding_Stress } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'>Source: NY Fed, Decimal Point Analytics calculations</Typography>

    <Typography variant='h6' className='black jst'>The chart clearly shows that even during the stress of 2008 crisis, banks faced liquidity shortfall to the tune of $200 billion. However, now, as of yesterday, banks have faced liquidity shortfall to the tune of $500 billion. Meaning, the current funding stress in dollars is far higher than it was ever experienced. This is after nearly $4000 billion of QE programs, which have injected liquidity in the market at the start of 2010s. This is just first week of global forced shutdown, and we do not know how long it is going to last. My guess is that Fed will be racing against time every evening to meet the global dollar demands. As an aside, BIS estimates that non-US entities have borrowed $14 trillion on-balance-sheet in USD terms (and it can be easily assumed that similar amount in USD is borrowed off-balance-sheet by non-US entities). Fed is not legally responsible for ensuring that dollars reach these non-US entities to repay their dollars when they come due. How that sector manages the dollar liquidity shortage will be an interesting item to watch in coming weeks. Be prepared for interesting times.</Typography>


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
