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


import excessive1 from "../../../asset/images/insight/blog_pages/1excessive_monetory.jpg";
import excessive2 from "../../../asset/images/insight/blog_pages/2excessive_monetory.jpg";
import excessive3 from "../../../asset/images/insight/blog_pages/3excessive_monetory.jpg";

// images end


export default function Excessive_monetory() {



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
    Excessive Monetary Tightening  <br/> in India as compared <br/> to OECD
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    July 17, 2017
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    <Typography variant='h4' className='blue jst'>Singularity is the biggest threat</Typography>

    <Typography variant='h6' className='black jst'>In this note we will see how behavior of RBI in recent years is proving a relative impediment to economic growth.</Typography>

    <Typography variant='h6' className='black jst'>In order to analyze inflation, this author prefers to study behavior of GDP deflator over a period of three years. The chart below shows the excess of three year CAGR of Indian GDP deflator over OECD GDP deflator.</Typography>

    <Typography variant='h4' className='blue jst'>Chart 1: Excess Indian GDP Deflator over OECD Deflator</Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ excessive1 } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'>Source: Decimal Point Analytics</Typography>

    <Typography variant='h6' className='black jst'>The above measure has many advantages. Firstly, three year CAGR envelops and hence smoothens out the effect of vagaries of Indian monsoons. Secondly, by subtracting OECD GDP deflator from Indian GDP deflator, we remove effects of global commodity and energy super cycles, which affects all of the countries to differing extents. Thus, what we are left with is only the structural constraints in Indian economy at given level growth of economic activity leading to inflation. As clearly shown by the chart, in last three years, as the new administration took over and removed obstacles for commerce, especially in farm sector, the excess GDP deflator has shown a clear downward trend in India, showing that, possibly, other things being equal, the Indian economy has moved to a permanent relative lower inflation trajectory as long as current administrative policies remain in force.</Typography>

    <Typography variant='h6' className='black jst'>Now, let us see how the policy rates in India have responded, on relative basis to this long term, secular, structural (and possibly sustainable) softening of inflation in India. The chart below shows Indian Central Bank policy rates minus average OECD policy rates at the end of each year.</Typography>


    <Typography variant='h4' className='blue jst'>Chart 2: Excess Indian Policy Rates over OECD</Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ excessive2 } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'>Source: Decimal Point Analytics</Typography>

    <Typography variant='h6' className='black jst'>If we subtract Chart 1 from Chart 2, we will get relative real interest rates in India as compared to OECD, as shown in the chart below.</Typography>

    <Typography variant='h4' className='blue jst'>Chart 3: Relative Real Interest Rates in India as compared to OECD</Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ excessive3 } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'>Source: Decimal Point Analytics</Typography>

    <Typography variant='h6' className='black jst'>The last chart clearly shows that, on relative basis, Indian central bank was somewhat accommodative in 2010 with negative relative interest rates, and by the end of 2016, RBI had moved to extreme tight monetary policy with real rates nearing four percentage points on relative basis.</Typography>

    <Typography variant='h6' className='black jst'>In our view, in normal, middle of business and economic cycle, there is no economic logic for the relative real rates between two countries (or groups of countries) to vary beyond +/-0.50%. In other words, it is possible that history will determine that current monetary policy in India is too tight by three to four percentage points as compared to OECD.</Typography>



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
