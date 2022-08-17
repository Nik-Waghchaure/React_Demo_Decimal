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


import fallacy1 from "../../../asset/images/insight/blog_pages/the_fallacy.jpg";

// images end


export default function The_fallacy_of_paradox() {



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
    The Fallacy Of <br/> The Repugnant Paradox
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    July 10, 2017
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>


    <Typography variant='h6' className='black jst'>Recently, I became aware of a philosophical topic “The Repugnant Paradox” via an excellent YouTube Video <a href=' http://bit.ly/2tWEgf5' target='_blank'>  http://bit.ly/2tWEgf5 </a>. A more technical description of the paradox can be found at <a href='http://stanford.io/2tAbE9a' target='_blank'> http://stanford.io/2tAbE9a </a>. In short, the Paradox states that “For any possible population of at least ten billion people, all with a very high quality of life, there must be some much larger imaginable population whose existence, if other things are equal, would be better even though its members have lives that are barely worth living.”</Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ fallacy1 } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'>where “N” is the count of individuals in the universe.</Typography>

    <Typography variant='h6' className='black jst'>Also, it is natural to assume that a person is either happy or sorrow at a particular moment and the cumulative happiness or sorrow respectively of an individual is the count of happy or sorrow moments in her life till this moment respectively, as measured by net sum of the two.</Typography>
        
    < Typography variant='h6' className='black jst'>When one systematically defines the welfare of the world from bottom up in this way, the Repugnant Paradox vanishes pretty soon. The moment the number of individuals who have more moments of sorrow than of happiness; exceeds the number of individuals who are net happy, the welfare of the universe turns negative.</ Typography>

    <Typography variant='h6' className='black jst'>I can give a mathematical proof the concept but it is not relevant here. You, the smart reader, can work it out yourself, from the objective function.</Typography> 

    <Typography variant='h6' className='black jst'>However, let me end by saying that as technology becomes more advanced, the individuals start having greater access to tools to increase their net happiness at individual level, the universe can support bigger populations. Given that I am basically a cornucopian, I think the world can eventually support infinite happy population.</Typography>
        
   
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
