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

import CRM1 from "../../../asset/images/insight/case_studies/crm_1.jpg";
import CRM2 from "../../../asset/images/insight/case_studies/crm_2.jpg";

// images end


export default function Response_management_system() {



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
    Response Management System <br/> for Fund Raising
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
Learn how technology can be used to reduce TAT <br/> and improve the quality of DDQ responses, <br/> thereby improving conversion on <br/> fundraising opportunities
</Typography>
</Box>
</Grid>
</Grid>
<Box className='whitebx' mt={5}>
    <Typography variant='h4' className='blue'>Summary  </Typography>

    <Typography variant='h6' className='black jst'>A leading credit focussed Alternative Asset management firm which manages funds for Institutions and HNI’s was looking to improve its proposal win rates.  </Typography>

    <Typography variant='h6' className='black jst'>Most large institutions before appointing any asset managers always perform a due diligence exercise.  </Typography>

    <Typography variant='h6' className='black jst'>These Institutions request for information from asset management firms in form of a DDQ (Due Diligence Questionnaire) for qualification / shortlisting based on the institution’s interest, outlook, and compliance requirement etc.   </Typography>

    <Typography variant='h6' className='black jst'>Hence filling the DDQ with the latest and accurate information is very crucial and it is timebound as well. Our client’s business development team was responsible to handle this activity.   </Typography>

</Box>

<Box className='whitebx' mt={1}>
<Grid container spacing={3} alignItems="top">
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+CRM1+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
    <Typography variant='h4' className='blue'> Challenges</Typography>

    <Typography variant='h6' className='black jst'>
    DDQ’s are not standard documents which means the team must fill a lot of details of which some might be repetitive but there might be few details which will have to be sourced from subject matter experts within the organisation. This makes this process tedious and time consuming for the sales team who might be busy closing the deals. 
    </Typography>

    <Typography variant='h6' className='black jst'>
    Our client was using Qvidian proposal management software, which helps you keep track of DDQs submitted earlier. It has a library function which allows you to query from the past responses and answer the new DDQs. However, the client’s team was facing challenges in keeping the library up to date and there was a backlog of DDQs which had to be uploaded in Qvidian. 
    </Typography>


    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}


<Box className='whitebx' mt={1}  >
    
<Grid container spacing={3} alignItems="top">
   
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+CRM2+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
    <Box mb={2}>
        <Link to='/Analystpulse'>
        <Typography variant='h4' className='blue' > Know More About Our Product on Analytics – AnalystPulse</Typography>
        </Link>
    </Box>
    <Typography variant='h4' className='blue'> Solution </Typography>

    <Typography variant='h6' className='black jst'>
    Our first engagement with the client was to reduce the backlog of DDQs which was not uploaded in Qvidian. We uploaded all the completed questionnaires in the proposal management system. We also helped in creating a structure of tagging the questions and creating a folder structure within the software which would help in easy retrieval of information when needed. Once we were through with the backlog, we started helping the client in filling new questionnaires. 
    </Typography>

    <Typography variant='h6' className='black jst'>
    We have setup a process and use the proposal management software to create the first draft of the response to the Questionnaire. Post this the clients team reviews the draft and then suggests the changes required or makes the required changes before submitting to the institutions / investors. 
    </Typography>

    <Typography variant='h6' className='black jst'>
    This process has been very effective, and we also have regular feedback call with the client to know how well we are doing. On these calls we compare and contrast the first draft with the final draft submitted. 
    </Typography>

    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}


<Box className='whitebx' mt={1} >
<Typography variant='h4' className='blue'> Results </Typography>

<Typography variant='h6' className='black jst'> Our team has achieved a TAT of 3-5 hours for DDQ first draft with a maker-checker process in place. We have been able to achieve as high as 70% hit rate with the response accuracy on the first draft. This means the clients business development team can be more productive with their calls to close investment rounds. They spend less time in reviewing the DDQ and only update the pending questions.  </Typography>

<Typography variant='h6' className='black jst'> With the assistance of DPA in the DDQ process, the client is able to turn around more questionnaires and their team can focus on more advanced discussions which gets created due to these submissions. This has improved the number of DDQ submitted, accuracy of the responses and also the win rate for the client.</Typography>



</Box>




<Box className='graybbx' mt={1} >
<Grid container spacing={1} alignItems="top" >
<Grid item lg={12} md={12} sm={12} xs={12} >
<Box className='al_left'>
<Typography variant='h4' className='black'>
Explore More:
</Typography>

<Link to='/portfolio_monitoring'>
<Typography variant='h6' className='black jst'  style={{marginBottom:'0px'}}>
Next Case Study: Automated Portfolio Monitoring System for a Private Equity firm
</Typography>
</Link>

<Link to='/way_forward_for_asset_management'>
<Typography variant='h6' className='black jst'>
Insights: Way forward for Asset Managers!
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
