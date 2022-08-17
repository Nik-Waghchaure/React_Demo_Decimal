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


export default function Analyzing_GDP_nos() {



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
    Analyzing The GDP Numbers
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    September 01, 2017
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>The Indian GDP growth rate came significantly below expectation at 5.7% in the Q1FY18 (Apr-June 2017).</Typography>

    <Typography variant='h6' className='black jst'>The table below shows the contribution to the GDP growth by type of expenditure.</Typography>

    <Typography variant='h4' className='blue jst'>Table 1: Expenditure Analysis of GDP Q1FY18 Growth</Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ ana_GDP } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'>Source: Decimal Point Analytics</Typography>

    <Typography variant='h6' className='black jst'>The above table shows that 3.6% of 5.7% growth was accounted by increase in private consumption expenditure in Q1FY18. Similarly, 1.9% of 5.7% was accounted by increase in government expenditure. In other words, nearly 35% of the GDP growth can be accounted by increase in government expenditure. It is interesting to note that government expenditure accounted for only 11.3% of GDP in the base period of Q1FY17, which increased to 12.6% in the latest quarter as government expenditure jumped. This indicates that if the government expenditure were to grow at the same speed as remaining economy to maintain its 11.3% share of GDP, the GDP growth would have been lower at 4.3% to 4.4%.</Typography>

    <Typography variant='h6' className='black jst'>Also noteworthy is the fact that capital formation has accounted for only 0.5% out of 5.7% growth, a contribution of 9% to the incremental GDP, as against 31% share of capital formation in the base quarter GDP of Q1FY17.</Typography>


    <Typography variant='h6' className='black jst'>Finally, Valuables + Net Imports are contributing to (2.4%-2.6%)=-0.2% of 5.7% growth. This underscores, yet again, the fact that for recent years net imports are mostly accounted by Gold, in spite of emphasis on financial assets given by government.</Typography>

    <Typography variant='h6' className='black jst'>Now that nearly 90% of fiscal deficit headroom is used in April-June period, the government expenditure is going to contract significantly in next quarters, giving significant headwinds to the GDP growth rate unless capital formation picks up in earnest at private sector, which looks doubtful. We should be ready for sub 5 percent GDP growth readings in next few quarters.
    </Typography>




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
