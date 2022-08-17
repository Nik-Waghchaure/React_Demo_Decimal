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


export default function Forging_ahead() {



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
    Forging Ahead in <br/> Troubled Times
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    April 14, 2020
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>The world is in the midst of the COVID-19 pandemic trying to control the social and financial fallout. The already struggling financial markets have nose-dived due to the world economy coming to a grinding halt. Social distancing is being practiced across the world to flatten the infection curve and give the government and administration a fighting chance. Pharma companies are working tirelessly to develop the vaccine, which is estimated to take about 18 months for it to hit the markets.</Typography>

    <Typography variant='h6' className='black jst'>History shows us that humans have been through multiple pandemics and every time we emerge stronger we adapt to the new environment and find a way out to tackle the new challenge.</Typography>

    <Typography variant='h6' className='black jst'>We are going to come out of this situation in the due course of time. The normal that we knew pre COVID-19 will change for sure. This might be a good time for business leaders to think about how the post COVID-19 world would look like. Businesses especially the financial services industry have shown tremendous resilience. Banks, stock markets, and other financial services are still functioning.</Typography>

    <br/>

    <Typography variant='h4' className='blue jst'> Operational Efficiencies</Typography>

    <Typography variant='h6' className='black jst'>These businesses are using technology, resourcefulness, and creativity to ensure they keep moving. The current business structures have unconsciously replicated the factory model of the industrial revolution. Even though the proliferation of internet and telecommunication has challenged the existing model, we have let the factory hangover continue. We still witness inefficiencies and rigidity in the business processes.</Typography>

    <Typography variant='h6' className='black jst'>Today it is not necessary to assemble a large group of people in one place for them to work. Work is becoming more fluid and physical presence is not required to get things done in the digital world. Remote working, Telecommuting, web-conferencing, offshoring, and outsourcing should become the new norm. The required technology to enable it already available and the leaders should actively push to make these mainstream. Imagine the amount of time that can be saved and the reduction in pollution and the reduced stress on an average employee. The organization holds on to the idea of physical offices as a proxy for Data Security and privacy protection. The current crisis has proved otherwise.</Typography>

    <br/>

    <Typography variant='h4' className='blue jst'> Process Optimization and Automation</Typography>

    <Typography variant='h6' className='black jst'>The current downtime should be used to strategize on how to become a more efficient organization. It is a good time to identify repetitive tasks and redundant processes and look for areas where automation can be deployed. The focus should be to make the organization more resilient and use technology to reduce busywork and let the employees focus on more value-adding activities.</Typography>
        

    <br/>

    <Typography variant='h4' className='blue jst'>Change is here – be ready</Typography>

    <Typography variant='h6' className='black jst'>The traditional mindset will change. It has already become clear, those companies that have adopted the digital modes of business, would have continued to serve their customers without much disruption. Going forward leaders will have to drive digitalization and this might be a good time to start as any. </Typography>
           


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
