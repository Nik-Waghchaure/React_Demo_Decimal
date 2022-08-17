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


export default function From_us_to_yes_bank() {



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
    From Bank of <br/>  United States to Yes Bank: <br/>  Why Bank Stocks should be <br/>  ineligible as loan security
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    October 31, 2019
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>In December of 1930 Bank of United States (BOUS), based primarily in the city of New York failed. It was the first bank failure in New York during the great depression which started in Oct 1929. The main reason for the failure of the bank was that although ostensibly the bank had sufficient equity capital, in reality, the bank had extended loans against its own shares using, what we will call in modern parlance, SPVs. Thus, in effect, bank had no equity for long time. It was showing depositor’s funds as equity using various routing techniques. </Typography>

    <Typography variant='h6' className='black jst'>Now, in November of 2019, Yes Bank based in Mumbai is in financial trouble. It is now emerging that Rana Kapoor and other key personnel of the bank had refinanced their equity holdings in the bank from entities who were in effect funded by Yes Bank at related party level. In other words, Yes Bank’s equity capital to that extent is sham capital and depositors’ money has been used to create an illusion of equity capital in this case as well.</Typography>

    <Typography variant='h6' className='black jst'>Thus, root cause of troubles in these two banks separated by 89 years and seven seas is the same – using depositors’ funds to bolster equity capital.</Typography>

    <Typography variant='h6' className='black jst'>Whatever capital adequacy ratios that regulators may painstakingly double check are meaningless in these cases. We have two possible solutions to this issue. The first being making bank and NBFC equity ineligible for any loan as security. It should be noted that BOUS had used gullible depositors as well to boost their equity in this manner; so, it is not just promoter equity but any equity in bank should be ineligible for refinancing. The second option is that any bank equity shares on which lien was marked in last 24 months should not be counted as equity capital of bank while calculating CAR for the bank in question.</Typography>

    <Typography variant='h6' className='black jst'>It will be interesting to see if there is any debate that happens on this topic and what would be the potential outcome of any such debate.</Typography>

    

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
