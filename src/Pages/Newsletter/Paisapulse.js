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

import Paisa1 from "../../asset/images/insight/paisa1.jpg";
import Paisa2 from "../../asset/images/insight/paisa2.jpg";
import Paisa3 from "../../asset/images/insight/paisa3.jpg";
import Paisa4 from "../../asset/images/insight/paisa4.jpg";











// images end







export default function Paisapulse() {




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
    Paisa Pulse
    </Typography>

    <Typography variant='h4' className='black'>
    Financial Insights on Indian banking industry by combining Unique datasets and Business Intelligence
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
Paisa Pulse
</Typography>
</Box>
</Grid>
</Grid>

<Box className='reportinfo'>
<Grid container spacing={1} alignItems="top">

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/paisapulse'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Paisa1+')', }}></Box>

<Box mt={2} mb={2}>
<Typography className='reporttitle one'>
Paisa Pulse
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/paisapulse'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Paisa2+')', }}></Box>

<Box mt={2} mb={2}>
<Typography className='reporttitle one'>
Paisa Pulse
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/paisapulse'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Paisa3+')', }}></Box>

<Box mt={2} mb={2}>
<Typography className='reporttitle one'>
Paisa Pulse
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/paisapulse'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Paisa4+')', }}></Box>

<Box mt={2} mb={2}>
<Typography className='reporttitle one'>
Paisa Pulse
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/paisapulse'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Paisa1+')', }}></Box>

<Box mt={2} mb={2}>
<Typography className='reporttitle one'>
Paisa Pulse
</Typography>
</Box>
<Box className='line'></Box>

</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/paisapulse'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+Paisa2+')', }}></Box>

<Box mt={2} mb={2}>
<Typography className='reporttitle one'>
Paisa Pulse
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
