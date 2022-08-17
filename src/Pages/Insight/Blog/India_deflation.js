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


export default function India_deflation() {



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
    India Deflation: <br/> Strategic, Tactical and <br/> Operational Options for RBI
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    July 26, 2017
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>In one of my previous write ups, I sketched the most likely scenario of India facing deflation pretty soon. In this write up, I will describe various responses that RBI should have to have for this emerging black swan event. (Black Swan as far as markets and policy makers are concerned.)</Typography>

    <Typography variant='h4' className='blue jst'>Strategic Response: Narrower, Lower, Forever inflation band</Typography>

    <Typography variant='h6' className='black jst'>RBI has done really well in announcing inflation corridor a few years ago and, as a result, anchoring inflation expectations. Now, the phase two of this noble journey begins. To take baby steps for inflation targeting, it was alright to set initial target relatively high and wide as compared to other nations. Given that Indian inflation at that time was 7-8 percent and higher, to have a long-term target of 4 percent with a wide 4 four percent band was a visionary move.</Typography>

    <Typography variant='h6' className='black jst'>It is time now to again display such visionary zeal and revise the long-term inflation target. Maybe RBI will do well to announce a 2 percent inflation target with one percentage range to be achieved by 2022.</Typography>

    <Typography variant='h6' className='black jst'>RBI would also do well to have the above target in terms of three year CAGR, given the havoc that monsoon can play with annual inflation measurement. Granted, given that media has to sell something in the 24-hour always-on news cycle, any perturbations due to supply shock are dinned up in the media. However, most households can manage sporadic, transient, at the margin price volatility for just a part of basket of goods consumed. What hurts the economy most is the systematic, corrosive, long-term loss of purchasing power.</Typography>

    <Typography variant='h6' className='black jst'>Yes, there is no international precedence of central bank targeting long-term inflation. But, India had a long tradition of global thought leadership since the times of Buddha and it is time to reassert that thought leadership and do what is right for us Indians and not what is preached by others.</Typography>
    
    <Typography variant='h4' className='blue jst'>Tactical Response: Low Policy Rates</Typography>

    <Typography variant='h6' className='black jst'>I believe all the analysts are already (and some would say always) clued on this response and hence I will not spend much time discussing this, except to state that its immoral to force households to pay 7 percent real interest rates on their housing loans for too long.</Typography>

    <Typography variant='h4' className='blue jst'>Operational Response: Abandon MSS</Typography>

    <Typography variant='h6' className='black jst'>RBI has locked up about Rs. 95,000 crores in MSS securities. This should be unwound forthwith and fully, to guide market rates lower till RBI gets chance to review and weigh its policy response on rates.</Typography>


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
