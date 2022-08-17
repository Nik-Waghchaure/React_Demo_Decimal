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

import auto_portfolio1 from "../../../asset/images/insight/case_studies/automated_portfolio1.png";
import CRM2 from "../../../asset/images/insight/case_studies/crm_2.jpg";

// images end


export default function Portfolio_monitoring() {



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
    Automated Portfolio Monitoring <br/> System for a Private Equity firm
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
Learn how DPA solved the key challenge of <br/> unstructured data formats for Private Equity firms' investment portfolio performance analysis 
</Typography>
</Box>
</Grid>
</Grid>
<Box className='whitebx' mt={5}>
    <Typography variant='h4' className='blue'>Summary  </Typography>

    <Typography variant='h6' className='black jst'>Our client, a large private equity firm was spending an inordinate amount of time while analyzing the performance of their investment portfolio. The operations team was tasked to gather financial data from their portfolio companies spread globally and generate insights for the management team. The primary challenge was that these portfolio companies would send their financial data in varied formats and file types. The team also had to generate peer analysis for these companies. The operations team used to create individual excel sheets for each company and then convert that data into charts to create presentations for analysis.  </Typography>

    <Typography variant='h6' className='black jst'>Decimal Point Analytics created a data template that could be used by any portfolio company and created a central data repository. The client could now generate comparative analysis by using the data from this repository. We also added a presentation layer for easy interaction with the underlying data. </Typography>
</Box>

<Box className='whitebx' mt={1}>
    <Typography variant='h4' className='blue'>Data Collection Challenge - Multiple Data Formats and Filetypes  </Typography>
    
    <Typography variant='h6' className='black jst'>The data gathering process from individual companies was time-consuming. Every company had a different format for the financial statements that made it difficult to compile the data into one place. The data collected was stored in multiple excel files and this did not allow the financial comparison of these companies. The data gathering process was also very time-consuming and resource-heavy, requiring a lot of man-hours to be utilized on segregation and compilation of the data. Individual dashboards for all the companies were developed in excel, which limited the scope of cross-portfolio analytics. The data collection and input process were done manually, and the analysis was exclusive for single companies. Peer analysis from the existing structure was not possible as the structure limited data insertion.</Typography>

    <Typography variant='h6' className='black jst'>The challenge faced by the firm was to reduce the time consumed for data collection and structuring all the data in a standard format to draw out analysis between companies. They also required interactive dashboards for a better analysis of the data and quicker update times.  </Typography>

</Box>

<Box className='whitebx' mt={1}>
<Grid container spacing={3} alignItems="top">
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+auto_portfolio1+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
    <Typography variant='h4' className='blue'> Centralized Data Repository and a Common Data Structure </Typography>

    <Typography variant='h6' className='black jst'>
    Decimal Point Analytics provided them with a data template that can be used for all the companies together. This allowed to compile the entire data in one place and made it possible to draw out a comparative analysis between companies. Multiple templates for individual companies were provided for quick data insertion and less update time. We created ETL processes that allowed quicker data updates from the templates to the data repository where all the data is stored. Automated data validations were established for ensuring data accuracy of the data that was updated. The new data architecture allowed us to ingest external data to generate comparative peer analysis dashboards. 
    </Typography>

    <Typography variant='h6' className='black jst'>
    The interactive dashboards were built from the repository that allowed them to quickly slice and dice the data based on their requirements and provided a deeper analysis of their investments. Furthermore, single source of data, quick data updates, interactive analytical dashboards, and peer analysis were all achieved. 
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
        <Link to='/Robopulse'>
        <Typography variant='h4' className='blue' >Know More About Our Product on Analytics – RoboPulse</Typography>
        </Link>
    </Box>
    <Typography variant='h4' className='blue'> Reduced Turnaround Time and Portfolio Dashboard </Typography>

    <Typography variant='h6' className='black jst'>
    The updated data architecture helped our client in collating all the data in a central repository. The standardized data templates, along with this repository and automation tools, helped in reducing the monthly update time from days to hours. Automation of the data update process and automated validations helped virtually eliminating errors. The interactive dashboards also helped them to slice and dice the data better, and to quickly do custom analysis. Analysis on a portfolio level was done by the newer data structure, which was not possible before as they had to go through multiple excel files to gather data and built the required file. Multiple dashboards including individual companies, specialized peer analysis dashboards, and portfolio dashboards were delivered as part of the project. 
    </Typography>


    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}


<Box className='whitebx' mt={1} >
<Typography variant='h4' className='blue'> Sample dashboard for representation purpose </Typography>

<Typography variant='h6' className='black jst'> Auto Play Image Carousel Here  </Typography>


</Box>




<Box className='graybbx' mt={1} >
<Grid container spacing={1} alignItems="top" >
<Grid item lg={12} md={12} sm={12} xs={12} >
<Box className='al_left'>
<Typography variant='h4' className='black'>
Explore More:
</Typography>

<Link to='/robotic_process_automation'>
<Typography variant='h6' className='black jst'  style={{marginBottom:'0px'}}>
Next Case Study: Robotics Process Automation (RPA) for Credit Funds
</Typography>
</Link>

<Link to='/roadmap_to_institutional'>
<Typography variant='h6' className='black jst'>
Insights: Roadmap to Data Analytics in Investment Research
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
