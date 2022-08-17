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


// images end


export default function India_heading_toward_deflation() {



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
    India Heading <br/>  Towards Deflation
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    July 21, 2017
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>The latest reading of Indian CPI came in at 1.54% for June 2017. This is the first time the inflation has breached RBI band of 2% to 6%. I am sure there would be a lot of soul searching going on at offices of many authorities as to what it means.</Typography>

    <Typography variant='h6' className='black jst'>At Decimal Point Analytics, our analysis shows that India is heading for deflation as measured by CPI and probably also as measured by WPI in next two to three quarters, as long as Doha does not burn in the Arab fraternal spitfire. Our analysis is based on three premises, as discussed below.</Typography>

    <Typography variant='h4' className='blue jst'>GST Impact</Typography>

    <Typography variant='h6' className='black jst'>First premise is that, the positive shock to the logistics efficiency due to successful launch of GST has reduced the interstate road transportation times by 30% to 50% as per reports in the initial three weeks.</Typography>

    <Typography variant='h6' className='black jst'>The first order effect of this shrinkage in transportation times itself will lead to one to two percentage (of final sale price of goods transported) cost efficiency gains in next one quarter.</Typography>

    <Typography variant='h6' className='black jst'>The second order effect of this is that now, suddenly there are 45% to 100% more long-distance trucks available in the country as compared to the demand. Which means a large portion of long-distance trucks will be junked in next two to three quarters. Economics demands that those junked trucks will be the oldest and the most inefficient ones, which means suddenly, the efficiency and speed of trucks actually operating on Indian roads will increase, reducing the transport costs even further, by quarter to half percentage (of final sale price of goods transported) pretty soon.</Typography>
    
    <Typography variant='h6' className='black jst'>The third order effect of the decrease in transportation time is the reduction in working capital required by 10% or so for corporates, as fewer goods will be stuck in trucks waiting at the state check points, and also now firms can map and plan their deliveries with more certainty. The interest cost of gain will be around quarter percentage point of the final sale price. This interest cost gain will come both due to reduction in volume of credit required, and also due to resultant increase in credit profile of the borrower leading to lower interest rates faced.</Typography>

    <Typography variant='h4' className='blue jst'>Digital India</Typography>

    <Typography variant='h6' className='black jst'>A significant part of India is adopting mobile technologies for conduct of business. Many are repurposing technologies created for consumer recreation for enhancing their businesses.</Typography>


    <Typography variant='h6' className='black jst'>For example, it is not uncommon to now-a-days see plumbers, carpenters, contractors, and builders using image sharing of WhatsApp to convey exactly what they are seeing to their clients or colleagues or bosses, reducing significant unnecessary trips and meetings, increasing efficiency and lowering costs.</Typography>

    
    <Typography variant='h6' className='black jst'>Other well-known technologies, specifically developed for promoting ease of business with final consumers in myriad different ways and well-funded by large VC groups, have got their fair share of PR – deserved or otherwise, and hence we will not discuss those further here, apart from noting that those are as well, on the whole, contributing to increasing efficiency of Indian economy. Some of these technologies are getting repurposed from B2C to B2B model, such as announcement of Uber Freight last year.</Typography>

    <Typography variant='h4' className='blue jst'>Better Measurement</Typography>
    
    <Typography variant='h6' className='black jst'>We had been believing that for last two-three years the Inflation in India is measured systematically higher. The data on revamped WPI published in April 2017 confirmed our suspicion. The headline WPI for last three years is lower by a cumulative figure of 4 percentage points over 2014-17 period in the new series as compared to the old series. Even when we remove the fuel component of WPI, as due to change in taxes and methodology of accounting for taxes this component cannot be compared on old-series to new-series basis; the cumulative overestimation of inflation in the old series of WPI for primary articles and manufactured articles only is two percentage points as compared to the new series during 2014-17 period. In other words, at least the WPI measurement confirms that we were measuring inflation too high by 65 basis point per year till recently. We think that a bias of similar direction but unknown quantity exists in CPI series as well.</Typography>

    <Typography variant='h6' className='black jst'>Based on the above three premises, we believe that India will soon enter a period deflation. What it means for monetary policy, for final consumer demand and for corporate health are topics of discussion for another day.</Typography>


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
