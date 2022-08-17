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


// images end


export default function Private_equity() {



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
    Private Equity - Adopting a <br/> Data First Approach
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
    
    <Typography variant='h6' className='black jst'>Big Data and Advanced Analytics have become a significant source of competitive advantage for many industries. However, a closer look shows that apart from few innovative private equity firms, most have been slow to adopt the big data approach when compared to hedge funds, banks and other financial market participants. </Typography>

    <Typography variant='h6' className='black jst'>We have observed that partners at private equity firms have a notion that these technologies are only helpful for high-frequency traders and quant funds. However, forward-looking PE firms have put data and advanced analytics to good use to derive competitive advantage.  </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>PE’s Primary Challenge </Typography>

    <Typography variant='h6' className='black jst'>Every Private Equity firm has two critical areas of work, identifying new investment opportunities and monitoring their existing portfolio performance. A few firms have demonstrated how they use data and analytics to carry out both these tasks. </Typography>

    <Typography variant='h6' className='black jst'>Most PE firm still uses an excel sheet to collate data from portfolio companies and then manually update charts and tables for analysis. Their existing legacy performance tracking systems are time-consuming, cumbersome, and error prone.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'> Tackling the Data and Analytics Solution</Typography>

    <Typography variant='h6' className='black jst'>To address the challenge of monitoring the existing portfolio, they start by building a <strong>database</strong> capable of ingesting financial data from all their portfolio companies using templates (without losing the differentiators of investee companies). A layer of the <strong>dashboard</strong>  is built on top of this database which helps them slice and dice data for more granular scrutiny. This simple approach reduces the turnaround time for monthly analysis from weeks to days. It also ensures they always have the latest figures.</Typography>

    <Typography variant='h6' className='black jst'>The above solution primarily consumes internal financial data for such analysis, these firms also bring in external data to this dashboard for more nuanced analysis.</Typography>

    <Typography variant='h6' className='black jst'>To analyze the relative performance of a portfolio company they bring in the financial performance of <strong> public peer groups</strong> . For <strong>private companies</strong> , where financial data is not publicly available, proxy data is used to get an indication of growth, profitability, solvency, etc. This is further enriched by using machine-learning based sentiment analysis on web-scrapped news and other data points about its operating environment and competitors.</Typography>

    <Typography variant='h6' className='black jst'>To incorporate the dimension of <strong> macro factors</strong> , they bring in country-level news, geographic risk indicators where the portfolio companies operate in. </Typography>

    <Typography variant='h6' className='black jst'> <strong> Competitor analysis</strong> is another important factor while assessing an investment opportunity and to enable that these funds web scrap data about competitors’ products and services, distribution, logistics, recruitment which gives visibility about their product width, depth, margin and business focus. </Typography>

    <Typography variant='h6' className='black jst'>They also web scrap <strong>  customer reviews </strong> to understand business performance. Even <strong> employee reviews  </strong> from sources like glassdoor.com are used to gain insight into how the employees feel about the company. Job posting data is used to gauge the financial health of the company and whether they are likely to go for expansion. </Typography>
     

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Working with Technology Partner </Typography>

    <Typography variant='h6' className='black jst'>To implement such projects, private equities partner with vendors who have deep domain knowledge, technology expertise and project experience. Such projects cannot be a technology outsourcing kind of a deal. They find vendors who understand their requirements and solve their problems while performing the role of consultant, fund manager, and technology implementor in one stroke.</Typography>
   
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
