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
import indexbanner from "../../asset/images/innovation/ds_banner.gif";

import ic1 from "../../asset/images/innovation/ds_ic_1.svg";
import ic2 from "../../asset/images/innovation/ds_ic_2.svg";
import ic3 from "../../asset/images/innovation/ds_ic_3.svg";
import ic4 from "../../asset/images/innovation/ds_ic_4.svg";
import banenr2 from "../../asset/images/innovation/ds_banner2.gif";

import ds1 from "../../asset/images/innovation/ds1.svg";
import ds2 from "../../asset/images/innovation/ds2.svg";
import ds3 from "../../asset/images/innovation/ds3.svg";
import ds4 from "../../asset/images/innovation/ds4.svg";
import ds5 from "../../asset/images/innovation/ds5.svg";
import ds6 from "../../asset/images/innovation/ds6.svg";
import ds7 from "../../asset/images/innovation/ds7.svg";
import ds8 from "../../asset/images/innovation/ds8.svg";



import analyst1 from "../../asset/images/product/analyst1.svg";
import analyst2 from "../../asset/images/product/analyst2.svg";
import analyst3 from "../../asset/images/product/analyst3.svg";




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
    Data Solution
    </Typography>

    <Typography variant='h4' className='black'>
    Customized, Optimized and Enhanced research operations
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
    Data Solution
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
                <Typography variant='h4' className='black al_center'>Master Data<br/>Management</Typography>
                <Typography variant='h6' className='black al_center'>Regular upkeep of master data across the world </Typography>
                </Box>
            </Box>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className='boxbg'>
                <Box className='al_center'>
                <img src={ ic2 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h4' className='black al_center'>Transaction Data Management</Typography>
                <Typography variant='h6' className='black al_center'>Hourly or Daily updates of global market and other data </Typography>
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
                <Typography variant='h4' className='black al_center'>Real-time Feed Development</Typography>
                <Typography variant='h6' className='black al_center'>Scrapping the web for your exacting needs </Typography>
                </Box>
            </Box>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className='boxbg'>
                <Box className='al_center'>
                <img src={ ic4 } className='allic'/>
                </Box>
                <Box>
                <Typography variant='h4' className='black al_center'>Unstructured Data Management</Typography>
                <Typography variant='h6' className='black al_center'>Data gleaned from text </Typography>
                </Box>
            </Box>
        </Grid>


    </Grid>
    </Grid>

    </Grid>
    </Container>
    </Box>



<Box className='section whydecimal ds_bg_1 ourstrength ' component='section'>
<Box className='over'></Box>
<Container maxWidth='lg' className='bdr' style={{position:'relative',}}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography variant='h3' className='white'>
Solution
</Typography>
<Typography variant='h2' className='white'>
Investment Managers
</Typography>
</Box>
</Grid>
</Grid>


<Box mt={3}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={3} md={3} sm={6} xs={12}>
<Box className='str_bg mnhg4'>
<Box mb={2}>
<img src={ ds1 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Data</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_left'>
<ul>
<li>Access to specialized and unique data</li>
<li>Data Management and Updates</li>
</ul>
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
<Typography className='blue' variant='h4'>Information</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_left'>
<ul>
<li>Extraction of critical information</li>
<li>Aggregation</li>
<li>Summary</li>
</ul>
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
<Typography className='blue' variant='h4'>Analysis</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_left'>
<ul>
<li>Financial Modeling</li>
<li>Company / Industry notes</li>
<li>Macro economic Studies</li>
</ul>
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
<Typography className='blue' variant='h4'>Technology</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_left'>
<ul>
<li>Automating Research and Reporting</li>
<li>ML Credit Risk Models</li>
<li>Web scraping for gathering information</li>
</ul>
</Typography>
</Box>
</Box>
</Grid>








</Grid>
</Box>


{/* <Grid container spacing={0} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>

<Box className="owl-carousel loop al_left">

<Box className='al_left'>
<img src={ why2 } className='caroic al_left'/>
<Typography variant='h4' className='black'>Data</Typography>
<Typography variant='h6' className='black al_left'>
<ul>
<li>Access to specialized and unique data</li>
<li>Data Management and Updates</li>
</ul>
</Typography>
</Box>

<Box className='al_left'>
<img src={ why2 } className='caroic al_left'/>
<Typography variant='h4' className='black'>Information</Typography>
<Typography variant='h6' className='black al_left'>
<ul>
<li>Extraction of critical information</li>
<li>Aggregation</li>
<li>Summary</li>
</ul>
</Typography>
</Box>

<Box className='al_left'>
<img src={ why2 } className='caroic al_left'/>
<Typography variant='h4' className='black'>Analysis</Typography>
<Typography variant='h6' className='black al_left'>
<ul>
<li>Financial Modeling</li>
<li>Company / Industry notes</li>
<li>Macro economic Studies</li>
</ul>
</Typography>
</Box>

<Box className='al_left'>
<img src={ why2 } className='caroic al_left'/>
<Typography variant='h4' className='black'>Technology</Typography>
<Typography variant='h6' className='black al_left'>
<ul>
<li>Automating Research and Reporting</li>
<li>ML Credit Risk Models</li>
<li>Web scraping for gathering information</li>
</ul>
</Typography>
</Box>

<Box className='al_left'>
<img src={ why2 } className='caroic al_left'/>
<Typography variant='h4' className='black'>Technology</Typography>
<Typography variant='h6' className='black al_left'>
<ul>
<li>Automating Research and Reporting</li>
<li>ML Credit Risk Models</li>
<li>Web scraping for gathering information</li>
</ul>
</Typography>
</Box>


</Box>

</Grid>
</Grid> */}


</Container>

</Box>



<Box className='section whydecimal ds_bg_2 ourstrength ' component='section'>
<Box className='over'></Box>
<Container maxWidth='lg' className='bdr' style={{position:'relative',}}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography variant='h3' className='white'>
Solution
</Typography>
<Typography variant='h2' className='white'>
Financial Intermediaries
</Typography>
</Box>
</Grid>
</Grid>


<Box mt={3}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={3} md={3} sm={6} xs={12}>
<Box className='str_bg mnhg3'>
<Box mb={2}>
<img src={ ds1 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Data</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_left'>
<ul>
<li>	Building proprietary data sets	</li>
<li>	Events / Indicators	</li>
</ul>
</Typography>
</Box>
</Box>
</Grid>

<Grid item lg={3} md={3} sm={6} xs={12}>
<Box className='str_bg mnhg3'>
<Box mb={2}>
<img src={ ds2 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Information</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_left'>
<ul>
<li>	Daily Market Bulletins	</li>
<li>	Weekly Market Bulletins	</li>

</ul>
</Typography>
</Box>
</Box>
</Grid>

<Grid item lg={3} md={3} sm={6} xs={12}>
<Box className='str_bg mnhg3'>
<Box mb={2}>
<img src={ ds3 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Analysis</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_left'>
<ul>
<li>	Market Commentary	</li>
<li>	Technical Analysis	</li>
<li>	Primary and Secondary Research	</li>

</ul>
</Typography>
</Box>
</Box>
</Grid>

<Grid item lg={3} md={3} sm={6} xs={12}>
<Box className='str_bg mnhg3'>
<Box mb={2}>
<img src={ ds4 } className='bxicon'/>
</Box>
<Box mt={2}>
<Typography className='blue' variant='h4'>Technology</Typography>  
</Box>
<Box mt={2}>
<Typography variant='h6' className='black al_left'>
<ul>
<li>	Business Intelligence and MIS	</li>
<li>	Real-Time News Tickers	</li>

</ul>
</Typography>
</Box>
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
