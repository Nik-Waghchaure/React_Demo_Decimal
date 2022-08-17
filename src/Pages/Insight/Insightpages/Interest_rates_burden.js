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

import ic1 from "../../../asset/images/innovation/rs1.svg";
import ic2 from "../../../asset/images/innovation/rs2.svg";
import ic3 from "../../../asset/images/innovation/rs3.svg";
import ic4 from "../../../asset/images/innovation/rs4.svg";

import banenr2 from "../../../asset/images/innovation/ds_banner2.svg";

import ds1 from "../../../asset/images/innovation/ds1.svg";
import ds2 from "../../../asset/images/innovation/ds2.svg";
import ds3 from "../../../asset/images/innovation/ds3.svg";
import ds4 from "../../../asset/images/innovation/ds4.svg";

import interest_rates1 from "../../../asset/images/insight/insight_pages/Interest_rates_burden/1interest_r.png";
// images end


export default function Interest_rates_burden() {



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
    Insight
    </Typography>
    <Typography variant='h1' className='blue al_center'>
    Real Interest Rates Burden <br/> On Indian Businesses
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
 
    <Typography variant='h6' className='black jst'>In recent months there has been a spate of news of stress in Indian businesses, both financial and non-financial businesses. Commentators are assigning various causes for the same.</Typography>

    <Typography variant='h6' className='black jst'>However, in our view, the main cause of this stress is the unbearable burden of astronomically high real interest rates charged by the Indian banking industry, especially private sector banks, to Indian businesses.</Typography>

    <Typography variant='h6' className='black jst'>The chart below shows real interest rate burden on Indian businesses. The real interest rate for each month is computed as average bank lending rates for the previous twelve months minus average CPI inflation for the same previous twelve months. The numbers are percentages per annum.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Chart 1: Real Interest Rates Burden on Indian businesses</Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ interest_rates1 } className='topbanner2'/>
    </Box> 

    <Typography variant='h6' className='black jst'>Source: Decimal Point Analytics</Typography>

    <Divider/>
    <br/>

    <Typography variant='h6' className='black jst'>The real rates have moved from about 2% pa in 2013 to about 7% pa in 2019. These usurious rates will kill off Indian businesses and in the process destroy any growth potential that the country has unless fast corrective action is taken soon.</Typography>

    <br/>
    <Divider/>


    <Box>
    <Box className='insightmidbg'>
    <img src={ dpaic } className='bxicon2'/>

    <Typography variant='h4' className='blue'>Decimal Point Analytics</Typography>

    <Tooltip title="Facebook">
    <a href='https://www.facebook.com/decimalpointanalyticspl' target='_blank'>
    <IconButton aria-label="Facebook" className='icbg'>
    <FacebookIcon className='icbl' fontSize="small" />
    </IconButton>
    </a>
    </Tooltip>

    <Tooltip title="Linkedin">
    <a href='https://www.linkedin.com/company-beta/523783/?pathWildcard=523783' target='_blank'>
    <IconButton aria-label="Linkedin" className='icbg'>
    <LinkedInIcon className='icbl' fontSize="small" />
    </IconButton>
    </a>
    </Tooltip>


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
    Back to Insight
    </Button>
    </Link>
    </Box>


    </Container>
    </Box>



                   



        </>
    );
}
