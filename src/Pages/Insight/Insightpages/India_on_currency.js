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


export default function India_on_currency() {



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
    How can India benefit <br/> from being on the currency <br/> watchlist of USA?
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    <Typography variant='h6' className='black jst'>Last week India made a surprising entry in the currency watchlist of USA, as a potential currency manipulator. Although, many in India rightly feel that the charge levied is unfair; this unexpected development presents India with an unprecedented opportunity to correct historical imbalances in its trade using two unique approaches. These two approaches will help India extinguish its trade surplus with the USA and also aid India’s desire to grow rapidly simultaneously. </Typography>

    <Typography variant='h6' className='black jst'>Firstly, India is a very large importer of crude oil and the imports are increasing rapidly to support its fast-growing domestic economy. Unfortunately, historically India’s oil imports made her critically dependent on certain nations where the strategic security interests of India did not match with her trade requirement. On the other hand, USA is experiencing a boom in its crude oil production, with daily production rising by around a million barrels in last twelve months; and the pace of increase in production is most likely will be maintained due to the position of DUC wells. If India determines that it should import a million barrels a day from the USA in next twelve months, the India-USA trade will flip to be in a surplus for the USA rather than from being in a deficit. This will also help India diversify its sources and lower its import costs as the WTI trades at a significant discount to Brent. Of course, this will entail significant investment in refinery modifications to ingest the light sweet crude, however, those investments would be justified on the grounds of diversification, strategic interests and aligning to future supply sources. </Typography>

    <Typography variant='h6' className='black jst'>Secondly, US has put a certain restriction on export of high tech items to India. Although in Jan 2017 those restrictions were relaxed a wee bit, the procedure is still cumbersome and the delays are significant – for example, although the original understanding was reached in 2010, a part of that understanding was implemented for the first time in 2017. Hence, it would not be out of place for India to point to the USA that India wants to import more from the USA to support its own ambitions but the USA is putting export barriers, hurting job creation in the USA. A quick resolution and removal of an export ban in its entirety will help USA jobs and Indian growth simultaneously. </Typography>


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
