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


// images end


export default function Indias_fiscal_contraction() {



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
    India’s coming fiscal <br/> contraction – effect on <br/> growth and inflation
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    August 09, 2017
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>We estimate Central Fiscal Deficit for April-June 2017 quarter for India to be at approximately 10.75% of the GDP of that quarter. This is because of planned increase in capital expenditure by the central government in that quarter. To maintain the preannounced target of 3.20% of GDP for fiscal deficit for the year April 2017 till March 2018, the deficit for the nine-month period July 2017 till March 2018 should not significantly exceed 0.75% of GDP of that period.</Typography>

    <Typography variant='h6' className='black jst'>By itself it not unnatural to see this seasonal variation in fiscal deficit in India. However, we believe, this year, due to planned front ending of capital expenditures, the ramp down will be more severe as compared to the past, at 10% of GDP in contraction of net Central government expenditure.</Typography>

    <Typography variant='h6' className='black jst'>The growth numbers for the June 2017 are not yet published. But, they can be deemed to be good, given this front-ending of the expenditure, boosting GDP growth rate by 1.25% at least. However, on the flip side, the fiscal contraction predicted in the near future will drag the GDP growth for those three quarters.</Typography>

    <Typography variant='h6' className='black jst'>Also, the inflation at the end of June was 1.5%, in spite of growth impetus by the higher fiscal deficit. Other things being equal, the contraction in net government expenditure should provide headwinds for inflation in the coming quarters.</Typography>

  

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
