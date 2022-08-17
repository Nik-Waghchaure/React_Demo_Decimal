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
import indexbanner from "../../asset/images/innovation/aibanner.svg";

import ai1 from "../../asset/images/innovation/ai1.svg";
import ai2 from "../../asset/images/innovation/ai2.svg";
import ai3 from "../../asset/images/innovation/ai3.svg";
import ai4 from "../../asset/images/innovation/ai4.svg";
import ai5 from "../../asset/images/innovation/ai5.svg";

import banenr2 from "../../asset/images/innovation/ai2banner.svg";

// images end


export default function Artificialintelligence() {



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
    Artificial Intelligence
    </Typography>

    <Typography variant='h4' className='black'>
    Stay Ahead on the AI Curve, Increase Productivity and Efficiency
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
    Artificial Intelligence
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
    Artificial Intelligence is becoming all pervasive and will soon be the new normal. The visionaries are already making investments and adapting their business models to seize the opportunities. Artificially Intelligent solutions allow you to harness the state of the art processing power and offers superior and unbiased output. 
    </Typography>
    <Typography variant='h6' className='black jst'>
    Artificial Intelligence can be used to glean insights from internal and external data, including both structured and unstructured sources.
    </Typography>
    </Box>

    </Grid> 
    </Grid>
    </Container>
    </Box>



    <Box className='section' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Grid container spacing={1} alignItems="top">
    <Grid item lg={12} md={12} sm={12} xs={12}>
    <Box className='al_center'>
    <Typography variant='h3' className='skblue'>
    Solution
    </Typography>
    <Typography variant='h2' className='black'>
    Creating Value Using AI
    </Typography>
    </Box>
    </Grid>
    </Grid>

    <Grid container spacing={3} alignItems="center">
    
    <Grid item lg={3} md={3} sm={12} xs={12}>
    <Grid container spacing={3} alignItems="center">
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className='boxbg'>
                <Box className='al_center'>
                <img src={ ai1 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h6' className='black al_center'> Faster decision making</Typography>
                </Box>
            </Box>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className='boxbg'>
                <Box className='al_center'>
                <img src={ ai2 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h6' className='black al_center'>Data supported intuition</Typography>
                </Box>
            </Box>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className='boxbg'>
                <Box className='al_center'>
                <img src={ ai3 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h6' className='black al_center'>Quicker course correction</Typography>
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
                <img src={ ai4 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h6' className='black al_center'> Changing market conditions</Typography>
                </Box>
            </Box>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className='boxbg'>
                <Box className='al_center'>
                <img src={ ai5 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h6' className='black al_center'>Regulatory environment </Typography>
                </Box>
            </Box>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className='boxbg'>
                <Box className='al_center'>
                <img src={ ai5 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h6' className='black al_center'>tt regulatory environment</Typography>
                </Box>
            </Box>
        </Grid>


    </Grid>
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
