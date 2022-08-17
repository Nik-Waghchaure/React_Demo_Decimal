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

import Singularity1 from "../../asset/images/insight/singularity1.jpg";
import Singularity2 from "../../asset/images/insight/singularity2.jpg";
import Singularity3 from "../../asset/images/insight/singularity3.jpg";
import Singularity4 from "../../asset/images/insight/singularity4.jpg";











// images end







export default function Insight() {




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
    Singularity Pulse
    </Typography>

    <Typography variant='h4' className='black'>
    A weekly curation of AI implementation across industries and domains.
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
Singularity Pulse
</Typography>
</Box>
</Grid>
</Grid>

<Box className='reportinfo'>
<Grid container spacing={1} alignItems="top">

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/jul_22/singularity_pulse_26072022_S_Q.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jul 26, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 26 Jul, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/jul_22/singularity_pulse_19072022_S_Q.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jul 19, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 19 Jul, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/jul_22/singularity_pulse_12072022_S_Q.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jul 12, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 12 Jul, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/jul_22/singularity_pulse_05 July 2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity4+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jul 05, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 05 Jul, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/jun_22/singularity_pulse_28062022_S_Q.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jun 28, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 28 Jun, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/jun_22/singularity_pulse_21062022_S_Q.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jun 21, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 21 Jun, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/jun_22/singularity_pulse_14 June 2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jun 14, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 14 Jun, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/jun_22/singularity_pulse_08 June 2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity4+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jun 08, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 08 Jun, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/may_22/singularity_pulse_31_May_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
May 31, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 31 May, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/apr_22/singularity_pulse_12_April_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Apr 12, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 12 Apr, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/apr_22/singularity_pulse_06042022_S_Q.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Apr 06, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 06 Apr, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/mar_22/singularity_pulse_29_March_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity4+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Mar 29, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 29 Mar, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/mar_22/singularity_pulse_22_March_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Mar 22, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 22 Mar, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/mar_22/singularity_pulse_15_March_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Mar 15, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 15 Mar, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/mar_22/singularity_pulse_08th_March_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Mar 08, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 08 Mar, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/mar_22/singularity_pulse_01_March_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity4+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Mar 01, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 01 Mar, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/feb_22/singularity_pulse_22_February_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Feb 22, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 22 Feb, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/feb_22/singularity_pulse_15_February_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Feb 15, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 15 Feb, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/feb_22/singularity_pulse_08_February_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Feb 08, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 08 Feb, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/feb_22/singularity_pulse_01_February_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity4+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Feb 01, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 01 Feb, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/jan_22/singularity_pulse_25_January_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jan 25, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 25 Jan, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/jan_22/singularity_pulse_18_January_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jan 18, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 18 Jan, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/singularity_pulse/jan_22/singularity_pulse_11_January_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Singularity3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jan 11, 2021
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Singularity Pulse | 11 Jan, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>



</Grid>   
</Box>

    </Container>
    </Box>



                   



        </>
    );
}
