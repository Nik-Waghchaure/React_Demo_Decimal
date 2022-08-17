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

import ic1 from "../../../asset/images/innovation/rs1.svg";
import ic2 from "../../../asset/images/innovation/rs2.svg";
import ic3 from "../../../asset/images/innovation/rs3.svg";
import ic4 from "../../../asset/images/innovation/rs4.svg";

import banenr2 from "../../../asset/images/innovation/ds_banner2.svg";

import ds1 from "../../../asset/images/innovation/ds1.svg";
import ds2 from "../../../asset/images/innovation/ds2.svg";
import ds3 from "../../../asset/images/innovation/ds3.svg";
import ds4 from "../../../asset/images/innovation/ds4.svg";


import data_analytics1 from "../../../asset/images/insight/insight_pages/data_analytics_in_asset/1data_analytics.jpg";
import data_analytics2 from "../../../asset/images/insight/insight_pages/data_analytics_in_asset/2data_analytics.jpg";
import data_analytics3 from "../../../asset/images/insight/insight_pages/data_analytics_in_asset/3data_analytics.jpg";


// images end


export default function Data_analytics_in_asset() {



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
    Insight
    </Typography>
    <Typography variant='h1' className='blue al_center'>
    Data Analytics in <br/> Asset-Backed Securities (ABS) 
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
    
    <Typography variant='h6' className='black jst'>Asset-backed securities (ABS) and Mortgage-backed securities (MBS) are two important types of asset classes within the fixed-income sector. ABS is created from the pooling of non-mortgage assets while MBS is created from the pooling of mortgages that are sold to interested investors. </Typography>

    <Typography variant='h6' className='black jst'>MBS can be further bifurcated to Commercial Mortgage-Backed Security (CMBS) and Residential Mortgage-Backed Security (RMBS) </Typography>

    <Typography variant='h6' className='black jst'>The CMBS is a type of fixed-income security collateralized by commercial real estate loans. These loans are given typically for income-generating real estates such as office buildings, hotels, malls, apartment complexes and factories. A CMBS provides liquidity to real estate investors and commercial lenders alike. CMBS aren't standardized, so there are a lot of details associated with them that make their valuation difficult.  </Typography>

    <Typography variant='h6' className='black jst'>RMBS is a type of mortgage-backed debt securities where the cash flows are derived from residential mortgages. </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>The Risks of Mortgage-Backed Security MBS </Typography>

    <Typography variant='h6' className='black jst'>A mortgage-backed security is created when the bank takes a group of loans on its books, bundles them together, then sells them in securitized form as a series of bonds. Each series is organized in "tranches" from the highest-rated, lowest-risk MBS or "Senior tranche" to the highest-risk, lowest-rated MBS called Equity tranche.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'> Different Risk and Return for Different Investors </Typography>
 
    <Box className='al_left' mt={4} mb={4}>
    <img src={ data_analytics1 } className='topbanner2'/>
    </Box> 
 
    <Typography variant='h6' className='black jst'>Source: www.wallstreetmojo.com</Typography>

     <Typography variant='h6' className='black jst'>As is the case with corporate bonds, commercial mortgage-backed securities are at risk of default. If the underlying borrowers fail to make their principal and interest payments, CMBS investors can experience a loss. The risk of individual issues can vary based on the strength of the property market in the specific area where the loan was originated, as well as by the date of issuance.</Typography>

    <Typography variant='h6' className='black jst'>Unlike commercial mortgages, apart from the <strong> risk of default on the loans</strong>, residential mortgages also <strong>pose a risk of pre-payment of the loan. </strong></Typography>
    

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Risk Management using Data analytics</Typography>

    <Typography variant='h6' className='black jst'>Mortgage-backed securities (MBS) can play an important role for Investors as a fixed income asset class that offers several benefits. In addition to historically attractive yields compared to Treasuries and low volatility, these highly liquid assets provide diversification, which can lower portfolio risk. </Typography>

    <Typography variant='h6' className='black jst'>Currently, investors depend on credit ratings and default probabilities to identify the risk associated with these instruments. The investors would be keeping an eye on the various elements of their pool of loans based on various characteristics. They tap on updated information available on these pools, that can be viewed and analyzed for emerging signs of distress.</Typography>

    <Typography variant='h6' className='black jst'>However, at times they fall short when it comes to risk assessment and mitigation. This has forced investors to seek other means of managing the risk. There is a lot of data available that can be mined to generate insights about the underlying assets. </Typography>

    <Typography variant='h6' className='black jst'>The technically savvy investors are monitoring the financial health of the tenants of the commercial property to get a better perspective on the default risk of CMBS. The tenant’s financial status has a direct correlation to the borrower’s potential cash flow. These investors are also looking at performance with their peers, the Impact of recent news, search trends, interest rates, etc.</Typography>

    <Typography variant='h6' className='black jst'>Similarly, for RMBS investors are monitoring the metropolitan areas to understand how the rental markets are performing, looking at the vacancy rates, asking rent, population growth rates, unemployment rates, etc. </Typography>

    <Typography variant='h6' className='black jst'>These data points help investors get a good idea about how the market is doing and how it will affect the default risk of the borrower.</Typography>


 
    <Box className='al_left' mt={4} mb={4}>
    <img src={ data_analytics2 } className='topbanner2'/>
    </Box> 

    <Typography variant='h4' className='blue'>Decimal Point Analytics: Metropolitan Statistical Area Snapshot </Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ data_analytics3 } className='topbanner2'/>
    </Box> 

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'> Decimal Point Analytics: Economic Indicators of Metropolitan Statistical Area</Typography>

    <Typography variant='h6' className='black jst'>The above analysis will help the investor get a clear picture of the factors affecting the underlying assets and its default possibilities. It not only shows the current status but also shows the trend. </Typography>

    <Typography variant='h6' className='black jst'>Such analysis will help the investor get unbiased information which will help him/her from being blindsided. The current level of technology and availability of data is allowing investors in this market to be on top of changes in the portfolio risk profile, and helping them make better pricing and risk mitigation strategies.</Typography>


    <Divider/>


    <Box>
    <Box className='insightmidbg'>
    <img src={ dpaic } className='bxicon2'/>

    <Typography variant='h4' className='blue'>Decimal Point Analytics</Typography>

    <Tooltip title="Facebook">
    <a href='https://www.facebook.com/decimalpointanalyticspl' target='_blank'>
    <IconButton aria-label="Facebook" className='icbg'>
    <FacebookIcon className='icbl' fontSize="small" />
    </IconButton>
    </a>
    </Tooltip>

    <Tooltip title="Linkedin">
    <a href='https://www.linkedin.com/company-beta/523783/?pathWildcard=523783' target='_blank'>
    <IconButton aria-label="Linkedin" className='icbg'>
    <LinkedInIcon className='icbl' fontSize="small" />
    </IconButton>
    </a>
    </Tooltip>


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
    Back to Insight
    </Button>
    </Link>
    </Box>


    </Container>
    </Box>



                   



        </>
    );
}
