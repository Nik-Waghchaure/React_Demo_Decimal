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

import Int_doc1 from "../../../asset/images/insight/case_studies/intelligent_document_processing1.png";
import Int_doc2 from "../../../asset/images/insight/case_studies/intelligent_document_processing2.png";

// images end


export default function Intelligent_doc_processing() {



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
    Intelligent document <br/> processing  of Rent Rolls <br/> for an Asset Manager
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
Read about our Intelligent Document Processing (IDP)  <br/>  solution to create a proprietary database from <br/> Rent Roll Receipts for a US-based <br/> Asset Management Company 
</Typography>
</Box>
</Grid>
</Grid>




<Box className='whitebx' mt={5}>
<Grid container spacing={3} alignItems="top">
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+Int_doc1+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
    <Typography variant='h6' className='black jst'>
    On an unusually sunny afternoon in November 2018, Mr. Roy, the surveillance team manager of a US-based asset management company, called for an urgent meeting with his team in his office. Roy’s company deals in structured credit, asset-backed securities and loan investments across multiple sectors and his team was responsible for analyzing hundreds and thousands of rent roll receipts received on a periodic basis. Rent rolls are property rental receipts containing attributes such as building ID, tenant names, leased area, etc. This information helps Roy’s team to assess the risk profile of their investments and make informed decisions. 
    </Typography>

    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}


<Box className='whitebx' mt={1}  >

<Grid container spacing={3} alignItems="top">
   
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+Int_doc2+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>

    <Box mb={2}>
        <Link to='/Businessintelligence'>
        <Typography variant='h4' className='blue' >Learn More About DPA’s Busines Intelligence Solution</Typography>
        </Link>
    </Box>
    
    <Typography variant='h6' className='black jst'>
    Roy had called for the meeting to discuss the process of gathering data from these rent rolls. One of the biggest challenges that the team was facing was that these rent rolls were in multiple formats such as text PDFs, scanned copies of handwritten documents, and encrypted documents which were difficult to copy. The lack of specific file formats and complex manual work made it impossible to gather all requisite data. Roy was stressed and desperately wanted to explore any alternative solution that would reduce the burden on his team and help them better analyse data. Roy approached DPA after he learnt about our data management solutions from one of his team members, who had previously worked with us. 
    </Typography>


    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}


<Box className='whitebx' mt={1} >
<Typography variant='h6' className='black jst'> We provided a demo of our platform to ease some of Roy’s apprehensions and he was convinced that the solution would be a perfect fit for him and his team. He further suggested few specific requirements which the DPA team promised to incorporate in the solution. The project took-off and the data provided by us got uploaded on the analytics platform at Roy’s company which enabled detailed analysis by his team.  </Typography>

<Typography variant='h6' className='black jst'> Roy and his team were free from the cumbersome manual work of acquiring and processing data and were able to focus on strategic aspects such as tracking performance of the underlying assets to assess risk. The process speeded-up significantly and resulted in time and cost efficiencies for Roy and he was applauded by the senior management for this remarkable turnaround.  </Typography>
</Box>

<Box className='graybbx' mt={1} >
<Grid container spacing={1} alignItems="top" >
<Grid item lg={12} md={12} sm={12} xs={12} >
<Box className='al_left'>
<Typography variant='h4' className='black'>
Explore More:
</Typography>

<Link to='/data_managment_for_CRM'>
<Typography variant='h6' className='black jst' style={{marginBottom:'0px'}}>
Next Case Study: Data Management for Efficient CRM Usage
</Typography>
</Link>

<Link to='/nlp_technique'>
<Typography variant='h6' className='black jst'>
Insights: How Asset Managers are Leveraging Natural Language Processing Technique
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
