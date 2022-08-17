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


export default function Independant_research() {



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
    Here is our analysis of <br/>#JPMorgan reversing its assessment of #Indonesian stock market following row, highlighting the advantage of an independent third-party research provider
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
   

    <Typography variant='h6' className='black jst'>JPMorgan Chase & Co. reversing and upgrading its investment recommendation on the Indonesian stock market has again brought forth the issue of arm twisting of the investment banks by the emerging economies’ government. On January 16th 2017, the analysts at the investment bank raised their “tactical” view of the Indonesian equities by one level to “Neutral” in a research report, citing subsiding volatility in emerging-market bonds after the US presidential elections in November. The report indicated that “Indonesia’s macro fundamentals are strong, with high potential growth rate and low debt-to-GDP with economic reform.” However, it remained cautious about the volatility in the first half of 2017.</Typography>

    <Typography variant='h6' className='black jst'>In November last year, JPMorgan had slashed its recommendation on the nation’s equity by two levels to “Underweight” from “Overweight”. The upgrade came just weeks after Indonesia's government decided to terminate the bank's services as a primary dealer for domestic sovereign bonds and as an underwriter for bonds sold to global markets.</Typography>

    <Typography variant='h6' className='black jst'>JPMorgan denied any link between Indonesia’s decision to penalize the bank and the change in its current outlook on the country. The bank stated that all its research is based on extensive and objective analysis. Meanwhile, other research analysts from various other institutions have also expressed support for their peer as often Governments in Asia have tried to pressure banks. Earlier too, investment banks have revoked their negative stance, lost lucrative deals or bid analysts a “goodbye” as their negative views provoked controversies. Back in August 2015, Indonesia’s then Finance Minister Bambang Brodjonegoro had announced that they have “sanctioned” JPMorgan for a negative report recommending smaller exposure to Indonesian government bonds. Another such incident took place in October 2006, where Morgan Stanley chief Asia-Pacific economist Andy Xie had to leave abruptly. This was following the leak of his internal email, where he ridiculed Singapore as a “money laundering centre” for Indonesia, and the ASEAN group of nations as a failure. In July 2014, Banco Santander fired an analyst and other employees involved in the publication of a critical note, which suggested that the then Brazilian President Dilma Rousseff’s policies would hurt the country’s economy.</Typography>

    <Typography variant='h6' className='black jst'>These incidents also highlight the porous wall between the investment banking deal-making function and the research function within the banking groups. It seems that research is somewhat biased to favour the some of the deal making side of the business which generates most of the revenues in fees.</Typography>

    <Typography variant='h6' className='black jst'>This brings in focus the advantage of engaging with a neutral, unbiased & independent third-party research provider which is not influenced by any such action and the findings are entirely based on the fundamentals and the audited figures </Typography>

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
