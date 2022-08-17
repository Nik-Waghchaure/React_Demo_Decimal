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

import RPA1 from "../../../asset/images/insight/case_studies/rpa1.png";
import RPA2 from "../../../asset/images/insight/case_studies/rpa2.png";

// images end


export default function Robotic_process_automation() {



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
    Robotics Process Automation <br/> (RPA) for Credit Funds
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
Learn how DPA deployed RPA on Approval Process for a leading credit-focused alternative asset management company to help them with document and email management 
</Typography>
</Box>
</Grid>
</Grid>
<Box className='whitebx' mt={5}>
    <Typography variant='h4' className='blue'>Our Client  </Typography>

    <Typography variant='h6' className='black jst'>A leading credit-focused alternative asset management that invests via various strategies: private/opportunistic debt, liquid loans, high yield, special situations, and commercial real estate debt. The client employs around 200 employees, split equally between investments and operations. </Typography>

</Box>

<Box className='whitebx' mt={1}>
    <Typography variant='h4' className='blue'>Existing Business Process</Typography>
    
    <Typography variant='h6' className='black jst'> The client runs leveraged portfolios, backed by pre-approved limits from several lenders. When any of these portfolios purchase new security or require additional advance from the lender, approval has to be obtained from the lender. This process needs to be done in a timebound manner, and with total accuracy so that the investment desks are not impeded in their work. </Typography>

</Box>

<Box className='whitebx' mt={1}>
<Grid container spacing={3} alignItems="top">
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+RPA1+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
    <Typography variant='h4' className='blue'> Key Process Outcomes </Typography>

    <Typography variant='h6' className='black jst'>
        <ul>
            <li>The available purchase limits from the lenders should not be breached.</li>
            <li>For every new purchase, the instrument needs to be approved by the lender.</li>
            <li>Multiple processes need to be triggered based on whether the request is approved or not by the lender.</li>
        </ul>
    </Typography>

    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}


<Box className='whitebx' mt={1}  >
    
<Grid container spacing={3} alignItems="top">
   
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+RPA2+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
    <Box mb={2}>
        <Link to='/Fidelitypulse'>
        <Typography variant='h4' className='blue' > Know More About Our Product on Analytics – FidelityPulse </Typography>
        </Link>
    </Box>
    <Typography variant='h4' className='blue'> Problem Statement </Typography>

    <Typography variant='h6' className='black jst'>
    The objective of the project was to automate the daily trade-triggered processes between the client and the lenders, this involved securing the lender approval for new purchases and updating the available limit information for the client's investment desk. The client sought to improve process efficiency and accuracy. 
    </Typography>


    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}


<Box className='whitebx' mt={1} >
<Typography variant='h4' className='blue'> Solution Delivered </Typography>

<Typography variant='h6' className='black jst'> <strong> DPA Automated the Following Processes </strong>
        <ul>
            <li> Picking Information from Client’s Security Master and Data Management System to Check Outstanding Security Positions Across Funds After Daily Trades.  </li>
            <li>Created Outlook Template with Pre-defined Email Body to Automatically Send Mail to the Lender, Post QC Check.  </li>
            <li> Running checks on lender’s approval terms to see if newly bought securities qualify for approval. Also, Check Available Limits. </li>
            <li> Auto-Populate the Lenders Template for Updating New Securities and/or Taking Approval for the Same. </li>
            <li> Adding an event-based trigger, whenever any trade happens it will trigger the data update and notification alert. </li>
        </ul>
</Typography>


</Box>

<Box className='whitebx' mt={1} >
<Typography variant='h4' className='blue'> Benefits Delivered </Typography>

<Typography variant='h6' className='black jst'>This is a core process for our client’s fund operations. So we removed the dependency of the client’s financial analyst on their data management team to provide them with reports and then run the process. 
</Typography>

<Typography variant='h6' className='black jst'> We also provided the capability to generate automated PDF reports which were earlier prepared by the analyst by filling the loan application forms with security information, then mail and later update lender response, all manually. The existing process used to take 120-150 minutes approximately at the client’s end, post using the automation this was crunched to under 10 minutes while maintaining accuracy. 
</Typography>

</Box>



<Box className='graybbx' mt={1} >
<Grid container spacing={1} alignItems="top" >
<Grid item lg={12} md={12} sm={12} xs={12} >
<Box className='al_left'>
<Typography variant='h4' className='black'>
Explore More:
</Typography>

<Link to='/customized_credit_platform'>
<Typography variant='h6' className='black jst'  style={{marginBottom:'0px'}}>
Next Case Study: Customized Credit Platform for Financial Institution
</Typography>
</Link>

<Link to='/role_of_advanced_analytics'>
<Typography variant='h6' className='black jst'>
Insights: Role of Advanced Analytics in Redefining Retail Banking
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
