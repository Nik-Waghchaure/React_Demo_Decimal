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

import rpa1 from "../../../asset/images/insight/case_studies/rpa1.png";
import rpa2 from "../../../asset/images/insight/case_studies/rpa2.png";

// images end


export default function Customized_credit_platform() {



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
    Customized Credit Platform <br/> for Financial Institution
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
Learn how DPA helped make the Loan and <br/> Collateral Management process simpler and seamless <br/> by developing a cloud-based custom credit platform 
</Typography>
</Box>
</Grid>
</Grid>
<Box className='whitebx' mt={5}>
    <Typography variant='h4' className='blue'>Summary  </Typography>

    <Typography variant='h6' className='black jst'>Our client, an Investment management company, extends credit finance lines to businesses for their working capital and trade related requirements. The client wanted to create a platform that will help to make the Loan and Collateral Management process simpler and seamless.  </Typography>

</Box>


<Box className='whitebx' mt={1}>
<Grid container spacing={3} alignItems="top">
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+rpa1+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
    <Typography variant='h4' className='blue'> Challenge - Inefficient and Risky Business Operation</Typography>

    <Typography variant='h6' className='black jst'>
    The current system was heavily reliant on excel and email exchanges which essentially meant that there was duplication of work and manual data entry which led to errors and omissions. The data was also in departmental silos and there was no single source of truth within the system. The inefficient method of data management resulted in the loss of productive time for senior management. The system lacked transparency which led to systemic risk for the whole operation. 
    </Typography>

    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}


<Box className='whitebx' mt={1}  >
    
<Grid container spacing={3} alignItems="top">
   
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+rpa2+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
    <Box mb={2}>
        <Link to='/Researchsolution'>
        <Typography variant='h4' className='blue' >Know More About Our Research Solution </Typography>
        </Link>
    </Box>
    <Typography variant='h4' className='blue'> Solution - Private Credit Platform designed for the Client </Typography>

    <Typography variant='h6' className='black jst'>
    Decimal Point Analytics developed a fully integrated platform for the Investment Management company to track each fund managed by it. The stakeholders viz. Investment Managers, Investors, Borrowers can connect to this portal through a customized user interface based on their roles and requirements.  
    </Typography>


    </Box>
    </Grid>
</Grid>
</Box> {/*white box end here */}


<Box className='whitebx' mt={1} >
<Typography variant='h4' className='blue'> Private Credit Platform by Decimal Point Analytics </Typography>

<Typography variant='h6' className='black jst'>The portal tracks all upcoming payments, receivables, receipt confirmations. It also has a provision to upload KYC documents which helped in managing the borrowers’ and investors’ KYC requirements. 
</Typography>

<Typography variant='h6' className='black jst'>This allowed to check and verify the loan creditworthiness of the company or the person at any time. The portal also helps in keeping track of loan calculations, loan payments, costs, reports related to funding, borrowers' loans, collateral receipts, and shipping documents. It also allows users to generate reports and download them effortlessly from the portal. 
</Typography>

<Typography variant='h6' className='black jst'>The portal also provides updates about the latest collateral positions which are crucial for business. It also provides visibility amongst all the stakeholders. 
</Typography>

<Typography variant='h6' className='black jst'>Every stakeholder gets the latest information from the system. Reports can be generated and downloaded as and when required. The system has also ensured that there is a reduction in duplication of work and errors. 
</Typography>
</Box>


<Box className='graybbx' mt={1} >
<Grid container spacing={1} alignItems="top" >
<Grid item lg={12} md={12} sm={12} xs={12} >
<Box className='al_left'>
<Typography variant='h4' className='black'>
Explore More:
</Typography>

<Link to='/intelligent_dashboard'>
<Typography variant='h6' className='black jst'  style={{marginBottom:'0px'}}>
Next Case Study: Intelligent Dashboard Solution for Banks
</Typography>
</Link>

<Link to='/data_analytics_in_asset'>
<Typography variant='h6' className='black jst'>
Insights: Data Analytics in Asset-Backed Securities
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
