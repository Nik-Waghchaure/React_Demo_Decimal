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
import indexbanner from "../../asset/images/innovation/researchsbanner.svg";

import ic1 from "../../asset/images/innovation/rs1.svg";
import ic2 from "../../asset/images/innovation/rs2.svg";
import ic3 from "../../asset/images/innovation/rs3.svg";
import ic4 from "../../asset/images/innovation/rs4.svg";

import banenr2 from "../../asset/images/innovation/ds_banner2.svg";

import ds1 from "../../asset/images/innovation/ds1.svg";
import ds2 from "../../asset/images/innovation/ds2.svg";
import ds3 from "../../asset/images/innovation/ds3.svg";
import ds4 from "../../asset/images/innovation/ds4.svg";

// images end


export default function Researchsolution() {



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
    Research Solution
    </Typography>

    <Typography variant='h4' className='black'>
    Augment your resources, Bespoke Research for all your needs
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
    Solution
    </Typography>
    <Typography variant='h2' className='black'>
    Research Solution
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
    Decimal Point Analytics offers a variety of services to broad spectrum of clients in financial services industry, including buy-side, sell-side, and data providers. Use of algorithms and technology takes productivity and efficacy of many of our services to levels usually unseen in traditional research setups.
    </Typography>
    </Box>

    </Grid> 
    </Grid>
    </Container>
    </Box>



    <Box className='section' component='section'>
    <Container maxWidth='lg' className='bdr'>
    <Grid container spacing={3} alignItems="center">
    
    <Grid item lg={3} md={3} sm={12} xs={12}>
    <Grid container spacing={3} alignItems="center">
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className='boxbg'>
                <Box className='al_center'>
                <img src={ ic1 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h4' className='black al_center'>Company Analysis and Modeling</Typography>
                <Typography variant='h6' className='black al_center'>Methodical and detailed valuation models updated in real-time basis </Typography>
                </Box>
            </Box>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className='boxbg'>
                <Box className='al_center'>
                <img src={ ic2 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h4' className='black al_center'>Sector Study and Intelligence</Typography>
                <Typography variant='h6' className='black al_center'>Succinct, updated industry research and gleaning insights customized to your requirements </Typography>
                </Box>
            </Box>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className='boxbg'>
                <Box className='al_center'>
                <img src={ ic2 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h4' className='black al_center'>Risk Analysis</Typography>
                <Typography variant='h6' className='black al_center'>Carry out risk and attribution analysis of your portfolio on daily basis </Typography>
                </Box>
            </Box>
        </Grid>


    </Grid>

    </Grid>
   
    <Grid item lg={6} md={6} sm={12} xs={12}>
    <Box className='al_center'>
    <img src={ banenr2 } className='topbanner2'/>
    </Box>
    </Grid>

    <Grid item lg={3} md={3} sm={12} xs={12}>
    <Grid container spacing={3} alignItems="center">
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className='boxbg'>
                <Box className='al_center'>
                <img src={ ic3 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h4' className='black al_center'>Portfolio Valuation</Typography>
                <Typography variant='h6' className='black al_center'>We take away drudgery from your daily reconciliation and valuation activity</Typography>
                </Box>
            </Box>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className='boxbg'>
                <Box className='al_center'>
                <img src={ ic4 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h4' className='black al_center'>Structured Product Pricing</Typography>
                <Typography variant='h6' className='black al_center'>We use advanced quants and artificial Intelligence techniques to value structured products</Typography>
                </Box>
            </Box>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className='boxbg'>
                <Box className='al_center'>
                <img src={ ic4 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h4' className='black al_center'>Market Monitor</Typography>
                <Typography variant='h6' className='black al_center'>Daily coverage and analysis of Global markets for Equity, Fixed Income, Commodity, Forex and M&A </Typography>
                </Box>
            </Box>
        </Grid>


    </Grid>
    </Grid>

    </Grid>
    </Container>
    </Box>



<Box className='section sec_bg ourstrength ' component='section'>
<Box className='over'></Box>
<Container maxWidth='lg' className='bdr' style={{position:'relative',}}>

<Box mt={3}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={3} md={3} sm={6} xs={12}>
<Box className='str_bg mnhg4'>
<Box mb={2}>
<img src={ ds1 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Technical<br/>Alerts</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_center'>
Tailor-made technical reports generated and disseminated through our automation programs
</Typography>
</Box>
</Box>
</Grid>

<Grid item lg={3} md={3} sm={6} xs={12}>
<Box className='str_bg mnhg4'>
<Box mb={2}>
<img src={ ds2 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Company<br/>Reports</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_center'>
Professional study on companies to create initiation reports 
</Typography>
</Box>
</Box>
</Grid>

<Grid item lg={3} md={3} sm={6} xs={12}>
<Box className='str_bg mnhg4'>
<Box mb={2}>
<img src={ ds3 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Market Strategy<br/>Reports</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_center'>
Detailed market strategy covering multiple asset classes 
</Typography>
</Box>
</Box>
</Grid>

<Grid item lg={3} md={3} sm={6} xs={12}>
<Box className='str_bg mnhg4'>
<Box mb={2}>
<img src={ ds4 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Monthly Macro<br/>Economic Analysis</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_center'>
Comprehensive coverage and update on economies around the world
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
Solution
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
