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

import Nav_cal1 from "../../../asset/images/insight/case_studies/nav_calculations_1.png";
import Nav_cal2 from "../../../asset/images/insight/case_studies/nav_calculations_2.png";

// images end


export default function Nav_calculations() {



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
    Case Studies
    </Typography>
    <Typography variant='h1' className='blue al_center'>
    NAV Calculations for <br/> Portfolio Management
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


<Box className='section sec_bg' component='section'>
<Container maxWidth='lg' className='bdr'>

<Grid container spacing={3} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography variant='h2' className='black'>
How we helped an Insurance Company in<br/>NAV Calculations for Portfolio Management 
</Typography>
</Box>
</Grid>
</Grid>




<Box className='whitebx' mt={5}>
<Grid container spacing={3} alignItems="top">
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+Nav_cal1+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
    <Typography variant='h6' className='black jst'>
    On a bright Monday morning in March 2018, John Harris, the senior fund manager of one of the largest insurance companies in Qatar, was discussing their process of evaluating portfolio performance with his team. John’s team used to examine thousands of transactions for several portfolios held by the company daily. The Net Asset Value (NAV) calculations involved in the process required weeks or even months to complete when done manually. The lack of a simple and structured process for NAV calculations made it difficult for John’s team to manage the portfolios. Jane, one of his fund managers, shared with the team details of the portfolio management solutions provided by DPA, which she had come across on LinkedIn. Observing the interest of his team members, John decided to consult DPA for a suitable solution that could mitigate his team’s challenges. 
    </Typography>

    <Typography variant='h6' className='black jst'>On discussions with John, we scrutinized his situation and crafted an automation solution for him through which his team could avoid the cumbersome work of handling portfolio data manually and focus on their core responsibilities - launching new funds and increasing their client base. </Typography>


    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}


<Box className='whitebx' mt={1}  >
    
<Grid container spacing={3} alignItems="top">
   
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+Nav_cal2+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
    <Box mb={2}>
        <Link to='/Datasolution'>
        <Typography variant='h4' className='blue' >Learn More About DPA’s Data Solutions</Typography>
        </Link>
    </Box>
    <Typography variant='h6' className='black jst'>
    The solution offered by us benefited John in numerous ways. At the outset, we helped John develop an automated process to manage the equity and fixed income portfolios. Further, we provided him a consolidated model for all the portfolios which gives a gist of all the investments, such as the thresholds, performance of the fund, the targets set, etc. The end report for the equity portfolio contained historical records of the trades made and the NAV summary to date. For the fixed income portfolios, we provided factsheets, which displayed the performance as compared to its benchmark and also included credit rating details, sector allocation, and risk ratios.
    </Typography>

    <Typography variant='h6' className='black jst'>The automation solution reduced the time taken by John and his team for NAV calculations to between 3 and 24 hours depending on the portfolio. The systematic and standardized files gave John and his team a lucid vision of the holdings they carry which helps them in better portfolio evaluation and decision making. Also, they presented the analysis provided by us to their potential investors and have been able to attract more investments. Now John’s team handles twice the number of portfolios than before and have been successful in increasing their client base. John commended our team’s efforts, and we are proud to have another happy client with us. </Typography>


    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}


<Box className='graybbx' mt={1} >
<Grid container spacing={1} alignItems="top" >
<Grid item lg={12} md={12} sm={12} xs={12} >
<Box className='al_left'>
<Typography variant='h4' className='black'>
Explore More:
</Typography>

<Link to='/intelligent_doc_processing'>
<Typography variant='h6' className='black jst'  style={{marginBottom:'0px'}}>
Next Case Study: Intelligent Document Processing of Rent Rolls For An AMC
</Typography>
</Link>

<Link to='/data_visualization'>
<Typography variant='h6' className='black jst'>
Insights: Data Visualization and the Art of Effective Storytelling
</Typography>
</Link>

</Box>
</Grid>
</Grid>

    <Box className='al_center' mt={3}>
        <Button variant="contained" className='dpabtn_1'>
        subscribe
        </Button>
    </Box>
</Box>


<Box className='al_center' mt={3}>
    <Link to='/insight'>
    <Button variant="contained" className='dpabtn_gr' startIcon={<ArrowBackIcon />}>
    Back to Case Studies
    </Button>
    </Link>
</Box>




</Container>
</Box>


        </>
    );
}
