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


export default function Data_managment_for_CRM() {



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
    Data Management for <br/> Efficient CRM Usage
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
Explore more about How we helped an <br/> investment management company derive better <br/> value from their existing CRM
</Typography>
</Box>
</Grid>
</Grid>
<Box className='whitebx' mt={5}>
    <Typography variant='h6' className='black jst'>In the year 2019, Mr. Malik from an investment management company reached out to us for assistance in managing all data related to their investor interactions and details under their fundraising processes. They were facing various challenges due to their incomplete and unstructured data on their CRM. 
    </Typography>
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
    <Typography variant='h6' className='black jst'>
    As a first step, both parties decided to resolve the incomplete historical data i.e. to analyse the data and update unfilled areas as well as scrape data from various sources related to investors and their consultants. To address this problem, DPA team utilized programming solutions such as Natural Language Toolkit (NLTK) programming and VBA macros to gather and clean the majority of the data. The whole process of cleaning ~3000 investors and ~16000 interactions were covered in ~2 months period. 
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
        <Link to='/Creditpulse'>
        <Typography variant='h4' className='blue' >Know More About Our Product on Analytics – CreditPulse</Typography>
        </Link>
    </Box>
    <Typography variant='h6' className='black jst'>
    The next step was to manage the vast amount of new data that is updated on daily basis. DPA team set up a systematic process using best practices such as SOPs, checklists, and weekly reviews with Mr. Malik’s team. The team further worked on automating these processes via standard format templates for Mr. Malik’s team to fill, implementing various CRM-related programs as well as automating data fields. With this, the team was able to achieve a total reduction in time spent in updating the daily interactions from 34% to 13% despite the increase in the number of interactions. The standard format templates also helped in reducing any data omission errors. 
    </Typography>

    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}


<Box className='whitebx' mt={1} >
<Typography variant='h6' className='black jst'> Under data maintenance, a lot of time was being spent in tracking and updating any incomplete data on daily basis with an increase in the number of data fields and sources. Hence, DPA team introduced check/sanity reports. These reports were created on the CRM system based on logic of each data field. Any unfilled data point automatically appeared on these reports which would then be resolved by the DPA team in coordination with Mr. Malik’s team. As a result, these check reports helped to ensure that information such as investor AUM, typical investment size, investor interactions, next steps, documents sent, etc. are maintained up to date. Over time, new data fields kept emerging, and today the number of reports have increased from ~35 to 70.  </Typography>

<Typography variant='h6' className='black jst'> With data being maintained on daily basis, DPA team further helped in designing various pipeline reports for several funds as well as develop dashboards in getting a visual representation of the data. </Typography>

<Typography variant='h6' className='black jst'>All this was part of the CRM system provided by DPA which helped Mr. Malik & his team to improve their business and keeping track of their clients and the funds that they were managing. In this project, DPA team shares all the deployed resources data in a transparent manner via MIS reports. These reports help the client to understand the activities covered by the team, challenges faced, suggestions shared, any errors along with their corrective actions, and minutes of the conversation between them and Mr. Malik’s team. </Typography>

</Box>




<Box className='graybbx' mt={1} >
<Grid container spacing={1} alignItems="top" >
<Grid item lg={12} md={12} sm={12} xs={12} >
<Box className='al_left'>
<Typography variant='h4' className='black'>
Explore More:
</Typography>

<Link to='/Response_management_system'>
<Typography variant='h6' className='black jst'  style={{marginBottom:'0px'}}>
Next Case Study: Response Management System for Fund Raising
</Typography>
</Link>

<Link to='/challenges_in_ESG'>
<Typography variant='h6' className='black jst'>
Insights: Challenges in Operationalizing ESG Norms in Asset Management
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
