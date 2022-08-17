import { AppBar, Divider,  Button, Container, Grid, Tabs, Tab, Toolbar, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
// import dpalogo from "../../asset/images/dpa_cloud_logo.png";
import Aos from 'aos'
import "aos/dist/aos.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';


// images
import indexbanner from "../../asset/images/innovation/ds_banner.gif";

import Sample1 from "../../asset/images/insight/sample1.jpg";
import Sample2 from "../../asset/images/insight/sample2.jpg";
import Sample3 from "../../asset/images/insight/sample3.jpg";
import Sample4 from "../../asset/images/insight/sample4.png";
import Sample5 from "../../asset/images/insight/sample5.jpg";
import Sample6 from "../../asset/images/insight/sample6.jpg";











// images end







export default function Samplereport() {




useEffect(() => {
Aos.init({ duration:1000 });
}, []);
    

    
    

    return (
        <>


    <Box className='mainsection' component='section'>
    <Container maxWidth='lg'>
    <Grid container spacing={1} alignItems="center">
    <Grid item lg={5} md={6} sm={6} xs={12}>
    <Box>
    <Typography variant='h1' className='blue'>
    Decimal Reports
    </Typography>

    <Typography variant='h4' className='black'>
    A glimpse of the variety of projects handled by us
    </Typography>

    </Box>
    </Grid>
    <Grid item lg={7} md={6} sm={6} xs={12}>
    <Box className='al_right'>
    <img src={ indexbanner } className='topbanner'/>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>







      










    <Box className='section sec_bg' component='section' style={{paddingTop:'3%',}}>
    <Container maxWidth='lg' className='bdr'>

    <Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography variant='h3' className='skblue'>
Newsletter
</Typography>
<Typography variant='h2' className='black'>
Decimal Report
</Typography>
</Box>
</Grid>
</Grid>

<Box className='reportinfo'>
<Grid container spacing={1} alignItems="top">

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/samplereport'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Sample1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Nov 03, 2014
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Global currency Report
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/samplereport'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Sample2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Sept 22, 2014
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Fund Performance
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/samplereport'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Sample3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
May 14, 2014
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Corporate Snapshot
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/samplereport'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Sample4+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Mar 18, 2014
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Monthly Market View
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/samplereport'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Sample5+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Mar 11, 2014
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Daily Market Snapshot
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/samplereport'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Sample6+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Feb 25, 2014
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
US Market Daily
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</Link>
</Grid>




</Grid>   
</Box>




    </Container>
    </Box>



                   



        </>
    );
}
