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


import ana_GDP from "../../../asset/images/insight/blog_pages/analysing_GDP.jpg";

// images end


export default function Does_RBI_need_to_revise() {



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
    Does RBI need to <br/> revise its models?
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    August 07, 2017
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>The low inflation print in recent months has raised some important methodological questions. RBI relies heavily on the internal models that it has developed for its inflation forecast and hence for making interest rate decisions.</Typography>

    <Typography variant='h6' className='black jst'>The table below shows some of the recent long-range forecast envelops and the actual inflation prints at the end of the forecast periods.</Typography>

    <Typography variant='h4' className='blue jst'>Table 1: Sample long-range RBI forecasts for inflation</Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ ana_GDP } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'>Source: Decimal Point Analytics</Typography>

    <Typography variant='h6' className='black jst'>The table shows that the long-range forecasts made till Feb 2016 were able to predict the inflation within the margin of error. However, since Sept 2016, the forecasts published by RBI are too high as compared to the actual reads. The actual readings are coming outside the 90 percentile range, and way below the median.</Typography>

    <Typography variant='h6' className='black jst'>It would be interesting to analyze this phenomenon in detail to study if this is a transient effect or as suggested by us previously a paradigm shift in the efficiency of Indian economy. The result of this analysis will have profound effect on the conduct of monetary policy and on the growth prospects of India.</Typography>



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
