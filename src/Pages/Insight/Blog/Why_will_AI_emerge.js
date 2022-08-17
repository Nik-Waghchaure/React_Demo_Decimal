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


import will_AI from "../../../asset/images/insight/blog_pages/why_will_AI.jpg";

// images end


export default function Why_will_AI_emerge() {



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
    Why Will AI Emerge <br/> Spontaneously?
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    July 24, 2017
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>In response to one of my previous blogs, some readers privately raised questions as to why I think AI will emerge spontaneously. Here is my detailed reasoning.</Typography>

    <Typography variant='h4' className='blue jst'>Internet will become denser by a big factor in next eight years</Typography>

    <Typography variant='h6' className='black jst'>We all know that number of connected devices on internet is increasing rapidly. In 1992, the number of devices connected to internet was in the order of one million. In 2016, it is estimated to be in the range of 23 billion and then to further increase to 80 billion or so by 2025. All of us intuitively understand that the connections in network grow exponentially as the network grows. However, our linear thinking brains may trick us into believing that we are in the middle of the most rapid period of the growth of internet network. However, it would be instructive to run some simulations of see how the network would grow over the years.</Typography>

    <Typography variant='h4' className='blue jst'>The chart below shows an index of the density of the network of devices connected to internet under certain assumptions:</Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ will_AI } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'>I have displayed this chart on natural number scale, instead of log scale to visually impress that, in my estimation, about 99.9999 percent of connections expected as of 2025 between devices on internet, are yet to be formed as of 2017. In other words, the connections between devices on internet will become denser by a factor of 10^5 in 2017-2025 period.</Typography>


    <Typography variant='h6' className='black jst'>Add to the above the fact that the memory costs, communications costs, and compute costs are still falling at the rate of Moore’s Law. Adjusting for available data and compute power at nodes, I will not hesitate to say that, in terms of information flow, the connections between internet connected devices will become denser by a factor of 10^9 from 2017 till 2025.</Typography>


    <Typography variant='h4' className='blue jst'>Why is denser internet is important for spontaneous emergence of AI</Typography>


    <Typography variant='h6' className='black jst'>As a first point, we are already seeing amazing task specific machine intelligence at work everywhere. It is worthwhile to note that this “narrow AI” progress is entirely attributable to human design. However, some specific aspects of those systems are emergent, as has been enthusiastically reported by some sections of media, such as Facebook servers talking to each other in their own language which spontaneously emerged.</Typography>

    <Typography variant='h6' className='black jst'>As a second point, it is postulated that, intelligent behavior is an emergent property of a complex network of otherwise dumb agents working together seemingly without a common motive. The structure of our brains is a good example. Individual neurons in our brain do not seem to have their own native intelligence which they could share with other neurons to multiply the intelligence effect. Also, there does not seem to be a top down command structure in neurons to guide them to a common goal. The goals and the intelligence emerges spontaneously as if it is a bifurcation of a complex system of dense neural network.</Typography>

    <Typography variant='h6' className='black jst'>As a conclusion, it means that whatever rudimentary task-specific intelligent behavior we are seeing now in computers right now, will have a chance of improving itself by a factor of 10^9 by 2025. At the current density of internet, we are observing, at the margin, some development of emergent features. The predicted improvement density by 2025 can very well lead to development of undirected emergent core features floating ‘somewhere’ on the internet. The core features will most likely include objective definition and possibly can include need of some sort of self-preservation. Hence, this will take the computers as a group well beyond human level intelligence by then, without anyone trying to do so deliberately. This will include mastery of multiple tasks and ability to define objectives suo motto. I believe, the only way to stop this development is shutting down entire internet, which is currently impossible.</Typography>


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
