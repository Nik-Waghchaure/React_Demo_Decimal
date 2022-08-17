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

import Int_dash1 from "../../../asset/images/insight/case_studies/intelligent_dashboard_1.png";
import Int_dash2 from "../../../asset/images/insight/case_studies/intelligent_dashboard_2.png";
import Int_dash_t from "../../../asset/images/insight/case_studies/intelligent_dashboard_table.png";

// images end


export default function Intelligent_dashboard() {



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
    Intelligent Dashboard <br/> Solution for Banks
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
DPA developed a customized dashboard solution to provide comprehensive and latest insights for one of the largest banks in Africa
</Typography>
</Box>
</Grid>
</Grid>
<Box className='whitebx' mt={5}>
    <Typography variant='h4' className='blue'>Summary  </Typography>

    <Typography variant='h6' className='black jst'>One of the largest banks in the BRICS wanted to grow its business for which they required detailed insights into various sectors of a specific continent.  </Typography>

    <Typography variant='h6' className='black jst'>The bank would gather financial and economic data on different sectors from multiple sources which would be used to generate insights. This data was stored in individual excel sheets and a team would convert the data into charts and PPT for trend analysis. This data was used to help the sales and the research teams.   </Typography>

</Box>


<Box className='whitebx' mt={1}>
<Grid container spacing={3} alignItems="top">
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+Int_dash1+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
    <Typography variant='h4' className='blue'> Challenges</Typography>

    <Typography variant='h6' className='black jst'>
    The data they collected was stored in multiple excel sheets that made it difficult to compare multiple variables for their analysis. The data collection and input process was done manually and was prone to errors. Additionally, a large team was required to handle the process. This cost them a lot of time and effort. It was also observed that unstructured data was not captured, which limited the scope of analysis. The other issue faced by the bank was that the data was being updated only once a year. They did not have the latest data.  
    </Typography>

    <Typography variant='h6' className='black jst'>
    The challenge faced by the bank was to save time and effort by collecting and analyzing relevant data quickly and efficiently. 
    </Typography>

    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}


<Box className='whitebx' mt={1}>
<Grid container spacing={3} alignItems="top">
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+Int_dash2+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
    <Typography variant='h4' className='blue'> Solution - Intelligent Dashboard Solutions</Typography>

    <Typography variant='h6' className='black jst'>
    DPA created a central data repository where all the gathered data is stored. An automated data collection system was also created that helped in gathering the latest data. Alerts are set for the new information release. As soon as new data is released, the system automatically gathers it. Most importantly, the data is collected only from the source of origin, to ensure that the information collected is accurate.  
    </Typography>

    <Typography variant='h6' className='black jst'>
    After DPA created the system, the bank could easily view the data and are also able to slice and dice it to view the trends based on their requirements. This helps them to do a deeper analysis. 
    </Typography>

    <Typography variant='h6' className='black jst'>
    Other features- single sources of truth, multiple users can access the data across different locations, quick & easy to visualize, interactive, build history. 
    </Typography>


    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}

<Box className='whitebx' mt={1}  >
    <Box className='al_center'>
    <img src={ Int_dash_t } className='topbanner'/>
    </Box>
</Box>



<Box className='whitebx' mt={1}  >
     
    <Typography variant='h4' className='blue'> Results</Typography>

    <Typography variant='h6' className='black jst'>
    The implementation of the intelligent dashboards helped the bank generate better insights quickly. DPA helped automate the data acquisition process and assisted in capturing and analyzing unstructured data. The system allowed them to get the most updated information. The data could also be sliced and diced, which was not possible before as they had to go through multiple files to gather data and it could not be changed as per their requirements. It was now easier for them to compare and analyze multiple variables. They could also easily generate charts and PPT reports at a click of a button. Furthermore, specialized dashboards were created for various sectors that are being used by the different sector heads of the bank. 
    </Typography>

    <Box className='al_center' mt={3}>
        <Button variant="contained" className='dpabtn_1'>
        subscribe
        </Button>
    </Box>

</Box> {/*white box end here */}


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
