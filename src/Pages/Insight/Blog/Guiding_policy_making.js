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


export default function Guiding_policy_making() {



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
    Guiding Policymaking through <br/> the Fog of Covid19 <br/> induced Lockdowns
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    September 01, 2020
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>Recently, Indian GDP for June 2020 Quarter printed -23.9% growth. Interestingly, just a few weeks before this print, RBI MPC announced that it was holding rates steady because CPI inflation was at 6.93%, outside the target range of 2% to 6%.</Typography>

    <Typography variant='h6' className='black jst'>Is it appropriate to hold rates steady, when we have strong degrowth and supply disrupted (and not demand driven) inflation? There is a simple guide available. It is called Taylor rule of monetary policy.</Typography>

    <Typography variant='h4' className='blue jst'>The Rule is as follows: </Typography>

    <Typography variant='h6' className='black jst'>i=π+r+aπ (π-π* )+ay (y-y*)</Typography>

    <Typography variant='h6' className='black jst'>Where
        <Typography><strong>i  </strong>is the policy rate</Typography>
        <Typography><strong>π  </strong>is the current inflation</Typography>
        <Typography><strong>r  </strong>is the real rate that the economy can afford</Typography>
        <Typography><strong>aπ </strong> is the relative importance of inflation deviation</Typography>
        <Typography><strong>π* </strong> is the targeted inflation rate</Typography>
        <Typography><strong>y  </strong>is the real GDP growth rate</Typography>
        <Typography><strong>ay </strong> is the relative importance of GDP deviation</Typography>
        <Typography><strong>y* </strong> is the targeted GDP growth rate</Typography>
    </Typography>

<br/>
<br/>

    <Typography variant='h6' className='black jst'>So, if we assume the following for March 2021
        <Typography><strong>π </strong> is 7%</Typography>
        <Typography><strong>r</strong>  , the real rate that the economy can afford, is 1%</Typography>
        <Typography><strong>aπ </strong> is 0.5</Typography>
        <Typography><strong>π* </strong>  is 4%</Typography>
        <Typography><strong>y</strong>  is -10%</Typography>
        <Typography><strong>ay </strong>   is 0.5</Typography>
        <Typography><strong>y*</strong>   is 6%</Typography>
    </Typography>

<Typography variant='h4' className='blue jst'>So, we get policy rate in March 2021 should be at</Typography>

<Typography variant='h6' className='black jst'><strong>i=7%+1%+0.5(7%-4%)+0.5(-10%-6%)=1.5%</strong> </Typography>

<Typography variant='h6' className='black jst'>
In other words, even if we assume that current supply chain disruptions continue causing high inflation, and at the same time oxymoronically assume that GDP growth rate for remainder of the year improves to -5.33% from latest reading of -24% (giving FY21 print at -10%); India will need policy rate of 1.5% rather than current 4.0%. Thus, we have room to cut rates by 250 basis points in next seven months.</Typography>

<Typography variant='h6' className='black jst'>Of course, I cannot imagine how inflation can stay at 7% when Keynesian multiplier is below 1.0 and when, in latest five months of pandemic, contrary to popular perceptions, RBI has not funded any central govt borrowings on net basis, and when commercial banks are refusing to lend to borrowers in spite of adequate deposit growth. However, we will go with strong inflation assumption and still find that India needs rate cuts of 250 basis points in next seven months.</Typography>



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
