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


import Demon1 from "../../../asset/images/insight/blog_pages/is_demon_respo.jpg";

// images end


export default function Is_demonstration_respo() {



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
    Blog
    </Typography>
    <Typography variant='h1' className='blue al_center'>
    Is Demonetization Responsible <br/> for Lower GDP Growth Rate?
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    September 04, 2017
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>Since India’s April-June 2017 (Q1FY18) numbers are printed below market expectations, there has been some discussions whether demonetization is responsible for the low GDP print.</Typography>

    <Typography variant='h6' className='black jst'>Some so-called expert economists had predicted, that Indian GDP growth will be lower by 2 percentage points due to demonetization. They had conveniently not given reasoning as to why that would happen. One can imagine thinking that since currency notes are in short supply, the retail transactions will reduce and will affect consumer buying. This looks like the logical course of action for anyone predicting reduction in demand due to reduction in currency in circulation.</Typography>

    <Typography variant='h4' className='blue jst'>Table 1: Composition of GDP at constant Prices</Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ Demon1 } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'>Source: Decimal Point Analytics</Typography>

    <Typography variant='h6' className='black jst'>Let us now see what actually transpired in the latest reported quarter. Private consumption was 53.6% of GDP in QFY17 and accounted for 62.3% of incremental GDP.  In other words, private consumption grew faster than overall GDP at 6.7% during the year.</Typography>

    <Typography variant='h6' className='black jst'>However, Capital formation, which accounted for 31% of GDP in Q1FY17, accounted for only 8.8% of the incremental GDP, indicating unwillingness of businesses to invest in future, in spite of seeing reasonable demand currently. Maybe one can explain this as a reaction to high real interest rates, at 5% plus for the best borrowers.</Typography>


    <Typography variant='h6' className='black jst'>Also, Net Imports dragged down the GDP in Q1FY17 by 0.9% of total, but on incremental basis net imports dragged down the GDP by whopping 45.1%. In other words, if the currency would have not appreciated from above 66.50 to a dollar in April 2016 to current levels of below 64.00; maybe our net imports would have remained stable and the GDP would not have accounted for the 45% downward drag. Had that not happened, India’s GDP growth rate would have been 8.30%, instead of 5.7%. This alone accounts for 2.6% drag on GDP growth rate. If someone can link the worsening trade deficit to demonetization, then yes, demonetization affected GDP growth rate. But, no such link exists.</Typography>

    <Typography variant='h6' className='black jst'>    On the contrary, as shown above, high real rates and high currency dragged the GDP growth rate down by about 4% by worsening net imports and by reducing capex.
    </Typography>




<Box>
    <Box className='insightmidbg'>
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
    Back to Blog
    </Button>
    </Link>
    </Box>


    </Container>
    </Box>



                   



        </>
    );
}
