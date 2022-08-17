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

import july1 from "../../asset/images/insight/market_weekly/25july.jpg";
import july2 from "../../asset/images/insight/market_weekly/18july.jpg";
import july3 from "../../asset/images/insight/market_weekly/11july.jpg";
import july4 from "../../asset/images/insight/market_weekly/5july.jpg";

import june1 from "../../asset/images/insight/market_weekly/27june.jpg";
import june2 from "../../asset/images/insight/market_weekly/20june.jpg";
import june3 from "../../asset/images/insight/market_weekly/13june.jpg";
import june4 from "../../asset/images/insight/market_weekly/6june.jpg";

import may1 from "../../asset/images/insight/market_weekly/30may.jpg";
import may2 from "../../asset/images/insight/market_weekly/23may.jpg";
import may3 from "../../asset/images/insight/market_weekly/16may.jpg";
import may4 from "../../asset/images/insight/market_weekly/9may.jpg";
import may5 from "../../asset/images/insight/market_weekly/3may.jpg";

import apr1 from "../../asset/images/insight/market_weekly/25apr.jpg";
import apr2 from "../../asset/images/insight/market_weekly/19apr.jpg";
import apr3 from "../../asset/images/insight/market_weekly/11apr.jpg";
import apr4 from "../../asset/images/insight/market_weekly/4apr.jpg";

import mar1 from "../../asset/images/insight/market_weekly/28mar.jpg";
import mar2 from "../../asset/images/insight/market_weekly/22mar.jpg";
import mar3 from "../../asset/images/insight/market_weekly/14mar.jpg";
import mar4 from "../../asset/images/insight/market_weekly/7mar.jpg";

import feb1 from "../../asset/images/insight/market_weekly/28feb.jpg";
import feb2 from "../../asset/images/insight/market_weekly/21feb.jpg";
import feb3 from "../../asset/images/insight/market_weekly/14feb.jpg";
import feb4 from "../../asset/images/insight/market_weekly/7feb.jpg";

import jan1 from "../../asset/images/insight/market_weekly/31jan.jpg";
import jan2 from "../../asset/images/insight/market_weekly/24jan.jpg";
import jan3 from "../../asset/images/insight/market_weekly/17jan.jpg";
import jan4 from "../../asset/images/insight/market_weekly/10jan.jpg";
import jan5 from "../../asset/images/insight/market_weekly/3jan.jpg";


import Market1 from "../../asset/images/insight/market_weekly/25july.jpg";
import Market2 from "../../asset/images/insight/market_weekly/18july.jpg";
import Market3 from "../../asset/images/insight/market_weekly/11july.jpg";
import Market4 from "../../asset/images/insight/market_weekly/5july.jpg";











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
    Market Weekly
    </Typography>

    <Typography variant='h4' className='black'>
    Stay upto date about the latest happenings in the Financial Industry. Subscribe to our Market Weekly Now! 
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
Market Weekly
</Typography>
</Box>
</Grid>
</Grid>

<Box className='reportinfo'>
<Grid container spacing={1} alignItems="top">

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/jul_22/Market_Weekly_25072022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+july1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
July 25, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | July 25, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
{/* <Link to='/marketweekly'> */}
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/jul_22/Market_Weekly_18072022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+july2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
July 18, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | July 18, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/jul_22/Market_Weekly_11072022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+july3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
July 11, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | July 11, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/jul_22/Market_Weekly_05072022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+july4+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
July 05, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | July 05, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/jun_22/Market_Weekly_27062022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+june1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
June 27, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | June 27, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/jun_22/Market_Weekly_20062022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+june2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
June 20, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | June 20, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/jun_22/Market_Weekly_13062022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+june3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
June 13, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | June 13, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/jun_22/Market_Weekly_06062022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+june4+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
June 06, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | June 06, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/may_22/Market_Weekly_30052022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+may1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
May 30, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | May 30, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/may_22/Market_Weekly_23052022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+may2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
May 23, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | May 23, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/may_22/Market_Weekly_16052022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+may3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
May 16, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | May 16, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/may_22/Market_Weekly_09052022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+may4+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
May 09, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | May 09, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/may_22/Market_Weekly_03_May_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+may5+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
May 03, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | May 03, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/apr_22/Market_Weekly_25_April_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+apr1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Apr 25, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Apr 25, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/apr_22/Market_Weekly_19_April_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+apr2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Apr 19, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Apr 19, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/apr_22/Market_Weekly_11_April_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+apr3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Apr 11, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Apr 11, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/apr_22/Market_Weekly_04_April_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+apr4+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Apr 04, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Apr 04, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/mar_22/Market_Weekly_28_March_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+mar1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Mar 28, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Mar 28, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/mar_22/Market_Weekly_22_March_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+mar2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Mar 22, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Mar 22, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/mar_22/Market_Weekly_14_March_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+mar3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Mar 14, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Mar 14, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/mar_22/Market_Weekly_07_March_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+mar4+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Mar 07, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Mar 07, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/feb_22/Market_Weekly_28_February_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+feb1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Feb 28, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Feb 28, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/feb_22/Market_Weekly_21_February_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+feb2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Feb 21, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Feb 21, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/feb_22/Market_Weekly_14_February_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+feb3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Feb 14, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Feb 14, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/feb_22/Market_Weekly_07_February_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+feb4+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Feb 07, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Feb 07, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/jan_22/Market_Weekly_31_January_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+jan1+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jan 31, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Jan 31, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/jan_22/Market_Weekly_24_January_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+jan2+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jan 24, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Jan 24, 2022
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</a>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<a href='https://decimalpointanalytics.com/media/decimalreport/market_weekly/jan_22/Market_Weekly_17_January_2022.html' target="_blank">
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+jan3+')', }}></Box>

<Box mt={1} mb={0}>
<Typography variant='h6' className='skblue'>
Jan 17, 2022
</Typography>
</Box>

<Box mt={0} mb={2}>
<Typography className='reporttitle one'>
Market Weekly | Jan 17, 2022
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
