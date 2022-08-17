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


export default function India_leverage() {



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
    How can India leverage <br/> rising crude oil prices <br/> to help the domestic economy?
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
    
    <Typography variant='h6' className='black jst'>At the current juncture, mainly due to geopolitical reasons and artificial supply constraints, the international crude oil prices are near four-year highs at mid $70s per barrel, in spite of rising shale oil production in the USA. Correspondingly, the RBOB Gasoline (gasoline) near-term futures are at $2.08 per gallon in international markets. In India, Indian Oil Corporation on 23rd April 2018 charged Rs. 35.58 per liter of petrol (gasoline) to the dealers before adding excise duty and VAT. </Typography>

    <Typography variant='h6' className='black jst'> Firstly, India is a very large importer of crude oil and the imports are increasing rapidly to support its fast-growing domestic economy. UnfortThis needs to be juxtaposed with the 5 percent ethanol blending norm in India for petrol, for which the oil marketing companies procure ethanol at Rs. 40.85 per liter. Obviously, even at elevated crude oil prices, domestic ethanol is costlier than imported petrol by Rs. 5.3 per liter approx. </Typography>

    <Typography variant='h6' className='black jst'>However, as the crude oil price has risen, the negative carry on ethanol has progressively reduced. At the same time, there is a clamor for the government to reduce the Excise duty and VAT burden on motor fuels to offer respite to the common man. </Typography>

    <Typography variant='h6' className='black jst'> The government can use both the above factors by smartly creating a new class of petrol with 20 percent blend of ethanol, where the excise duty is Rs. 5 lower than excise duty on petrol with 5 percent blend. This will make, other things being equal, 20 percent ethanol petrol Rs. 4 per liter cheaper than 5 percent blend, giving enough incentives for both the consumers and the retailers to actively build supplies of ethanol using both 1G and 2G refinery techniques. This will quickly build income for Indian farmers, reduce imports and reduce inflation (as compared to do-nothing scenario) at the same time. In the past, subsidies by the Indian government on motor fuels have directly gone to benefit OPEC producers. However, now, by smartly directing the reduction in excise duty, India can support its local economy while helping motorists at the same time. </Typography>

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
