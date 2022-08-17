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


export default function Private_equity_global_pandamic() {



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
    Private Equity - Navigating <br/> the Global Pandemic Environment 
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    April 30, 2020
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>The current COVID-19 crisis is causing economic as well as social disruptions, and businesses are no exception. Though central banks worldwide have announced various multi-billion-dollar stimulus packages to contain the economic impact, it has still failed to boost investor confidence.</Typography>

    <Typography variant='h6' className='black jst'>The business leaders today are facing a multitude of challenges in order to control the ramifications of the pandemic. Every business, whether small or large, is facing challenges related to business continuity, risk mitigation, and workforce management. The same is true for PE firms as well, irrespective of the size of the business, whether small firms or global buyout behemoths. It has become difficult for companies to gauge the extent of the impact of the coronavirus outbreak along with ongoing financial uncertainty. Though for many experienced investors economic challenges are not completely uncharted territory, the COVID-19 crisis has put forward a unique scenario for businesses. Therefore, PE firms must monitor the health of their portfolio companies</Typography>

    <br/>

    <Typography variant='h4' className='blue jst'> Global pandemic environment..., there is no escaping the impact… </Typography>

    <Typography variant='h6' className='black jst'>The emerging economic conditions following the spread of the disease has affected all sections of the economy. The threat is more prominent for companies which operate in the sectors such as travel, entertainment, hospitality and similar businesses. It is becoming more and more evident that the companies which have witnessed the most disruption are the ones with global supply chains and specifically the non-essential areas that are directly affected by the strict lockdown measures. As nobody knows how long this dire situation may last, most companies are proactively taking measures to maintain the cash levels.</Typography>

    <Typography variant='h6' className='black jst'>For now, most PE firms have set up teams and have implemented necessary measures to keep their employees safe. Further, they are focusing on ensuring continuity of critical processes, determining the impact of the pandemic on their portfolio companies and figuring out a plan to mitigate damages, assess investment strategy and asset allocation and support limited partners.</Typography>

    <br/>

    <Typography variant='h4' className='blue jst'> Private Equity firms need to formulate their action plans, quickly...</Typography>

    <Typography variant='h6' className='black jst'>This pandemic is significantly different from that of the other disruptive situations the world has seen so far. Therefore, each of PE’s portfolio companies may encounter its effects differently, making it necessary to formulate a unique action plan for each company. For doing so, sponsors may start by assessing specific risks associated with every portfolio company and prioritizing them according to their potential to affect the overall fund performance.</Typography>
        
    < Typography variant='h6' className='black jst'> Limited Partners are looking for insights now from their fund managers more than ever. They want credible information about the health of the portfolio companies and fund performance. The market scenario is changing very rapidly so LPs want to be cued into GP’s game plan for helping these portfolio companies.</ Typography>
        
    <br/>

    <Typography variant='h4' className='blue jst'>Working with Portfolio Companies..</Typography>

    <Typography variant='h6' className='black jst'>Each portfolio company will have different areas of challenges. These can be operational or financial, or both. However, GPs are limited by resources in terms of executive leadership bandwidth and liquidity. This makes it necessary to closely monitor the performance of portfolio companies so as to make this crucial financial decision. It would also be useful to do a competitive benchmarking analysis. It is also important to have shorter turnaround time for these analyses otherwise they risk missing opportunities due to delayed decision making. </Typography>
        
    < Typography variant='h6' className='black jst'>In order to address these challenges, Sponsors are investing in a portfolio monitoring system that will ensure the latest information is available at their fingertips. These systems will help them perform granular analysis as well as aid in reporting back to LPs. Such systems will help PE’s act decisively and shorten the response time which is very valuable during such uncertain scenarios. </ Typography>
        


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
