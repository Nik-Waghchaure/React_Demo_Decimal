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


export default function Indian_budget_17_18() {



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
    Impact of India Budget <br/> 2017-18 on <br/> Global Institutional Investor
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
   

    <Typography variant='h6' className='black jst'> <strong>After a year of strong inflow of funds in the Indian equities, proposed changes regarding the Foreign Portfolio Investors announced by the India’s Finance Minister, Mr. Arun Jaitley, in the Union Budget 2017-18 would influence the amount of investments that foreign investors bring in this year. </strong></Typography>

    <Typography variant='h6' className='black jst'>In 2016, Foreign Portfolio Investors (FPI’s) invested a net of $2.9 billion into Indian equities, highlighting that they remain broadly bullish on the nation’s economy. However, over the course of 2016 and going into 2017, FPI’s had been concerned about implications of tax policies on their investments. In fact, on 21st December, the Central Board of Direct Taxes (CBDT) in India had clarified that even FPI’s would fall under the ambit of indirect transfer provisions. This would have included all FPIs, having more than 50% of assets under custody in India and owning over 5% in any listed entity. Spooked by the tax regulator’s decision, many foreign investors were forced to make representations to the nation’s Finance Ministry pressing to reconsider the circular, following which, on 18 January, the CBDT put a hold on the move.</Typography>

    <Typography variant='h6' className='black jst'>In a big relief to FPI’s, the 2017-18 budget proposed to keep category I and II FPIs out of the ambit of indirect transfer provisions. This development was partly responsible for the Sensex jumping to a three-month high, gaining 1.74% on 1st February, and marking the best budget-day gain for Indian stocks in 12 years. However, exemption has not been granted to investors such as corporate bodies, trusts, individuals and family offices, hence leaving traces of ambiguity.</Typography>

    <Typography variant='h6' className='black jst'>In addition, the Finance Minister (FM), Mr Jaitley proposed the introduction of a common application form for registration, opening of bank and demat accounts, and issue of PAN for FPIs; in an aid to enhance operational flexibility and ease of access to Indian capital markets. However, Mr. Jaitley did not provide clarity over FPIs holding multiple demat accounts in this budget. At its board meeting on 23rd September, the Securities and Exchange Board of India (SEBI) had proposed to allow FPIs to hold multiple demat accounts but the government shot it down later, citing conflict with tax provisions.</Typography>

    <Typography variant='h6' className='black jst'>The FM stated that over 90% of the total Foreign Direct Investment (FDI) is coming through automatic route and that only 10% passes through the Foreign Investment Promotion Board (FIPB). Over the past few years, the Indian government has further opened-up the economy, doing away with the governmental approval requirement for investments in many sectors. Hence, the FIPB, which grants approvals to all foreign investments that do not go through the automatic route, does not have a significant influence on the amount of investments that foreign investors bring in. The FM noted that the FDI flow had increased from US$ 16.6 billion in the first half of last year to US$ 21.6 billion in the first half of 2016-17. This marks an increase by 30%, despite the 5% reduction in global FDI inflows. Meanwhile, further liberalization of the FDI policy in more sectors were promised. On a separate note, it has also been proposed that foreign investors, who invest in rupee-denominated (masala) bonds sold by Indian companies would be subject to a lower withholding tax rate of 5% until 30 June 2020 (which is currently available till 30 June 2017). Rupee denominated issuances and external commercial borrowings (ECBs) raised by Indian corporate entities would benefit by these changes.</Typography>

    <Typography variant='h6' className='black jst'>Separately, with the Finance Ministry announcing that General Anti Avoidance Rules (GAAR) & Place Of Effective Management (POEM) are here to stay, India will be the 17th country in the world to have a law to fix tax loopholes. Foreign investors would face the implementation of GAAR, which becomes applicable from 2017-18. However, the CBDT has stated that the provisions will not apply when the jurisdiction of FPI is based on non-tax commercial considerations and if the purpose of the arrangement is not to obtain tax benefit. Additionally, with the application of POEM from 1st April 2017 onwards, foreign investors would be subject to greater examination from the tax department. </Typography>


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
