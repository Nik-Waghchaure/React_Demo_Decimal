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


import Cautionary1 from "../../../asset/images/insight/blog_pages/1cautionary_tale.jpg";
import Cautionary2 from "../../../asset/images/insight/blog_pages/2cautionary_tale.jpg";
import Cautionary3 from "../../../asset/images/insight/blog_pages/3cautionary_tale.jpg";

// images end


export default function A_cautionary_tale() {



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
    A Cautionary Tale for <br/> Bitcoin Maximalists
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    June 18, 2021
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>Bitcoin, if considered as a currency, has highly deflationary properties. Many celebrate the deflationary property as a feature. I show here, based on a painstaking data collection, that it is bug. Deflation is a bug for poor countries. Deflation is a bug for poor people. Deflation, at the end of it, is a feature for rich industrialists. </Typography>

    <Typography variant='h6' className='black jst'>I use data from India during great depression (1929-1939).</Typography>

    <Typography variant='h6' className='black jst'>Let us first look at prices and wages in the table below: </Typography>

    <Typography variant='h4' className='blue jst'>Table 1: Broad Picture of Real Wages in British India during Great Depression</Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ Cautionary1 } className='topbanner2'/>
    </Box>

<Typography variant='h6' className='black jst'>Above, I have taken price index for Calcutta and wages of field workers in Bombay and I have computed the real wages in India for low skilled workers. Initially, the small minority of workers who were able to keep their jobs during depression, saw their real wages climb. However, competition from fellow laborers saw that as the depression started to come to an end, the real wages collapsed, as new workers were introduced at lower prices since they did not have bargaining position. </Typography>

<Typography variant='h6' className='black jst'>That is, when money supply is tightened, first the workers lost their jobs & income and then when they got back their jobs, they got jobs at low real wages.</Typography>

<Typography variant='h6' className='black jst'>Now, let us look at industrial profits in British India for about 300 odd industrial companies operating at that time in India </Typography>

<Typography variant='h4' className='blue jst'>Table 2: Index of Industrial Profits in British India during Great Depression</Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ Cautionary2 } className='topbanner2'/>
    </Box>

<Typography variant='h6' className='black jst'>The industrial profits in nominal terms suffered a great deal during 1928-1939 period. However, in real terms, the profits were back to pre-depression levels within five years. This shows the net pricing power of surviving corporates during depression.</Typography>

<Typography variant='h6' className='black jst'>Finally, let us look at relative power of capital vs unskilled labor during a period of deflation in British India.</Typography>



<Typography variant='h4' className='blue jst'>Table 3: Relative Power of Capital vs Labour</Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ Cautionary3 } className='topbanner2'/>
    </Box>

<Typography variant='h6' className='black jst'>In the initial years of deflation, the surviving labor’s loss is less than the loss of surviving capitalist. However, quickly, the corporates get their act together, and within a decade capital reasserts and even surpasses its strength over labor even during deflation.</Typography>

<Typography variant='h6' className='black jst'> Final message to bitcoin maximalists. Look at history. You are running fool’s errant. Deflation is not the way out of the problems that you want to solve. Deflationary currency like bitcoin will make the problems worse.</Typography>



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
