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


export default function Laplace_demon() {



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
    Laplace’s Demon and Limits <br/> to Central Banks’ Ability <br/> to Stabilize Economy
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    April 11, 2020
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>In last three weeks, the major central banks in the world have gone in overdrive to stabilize the markets. Among other things, they are now buying junk bonds, highly rated bonds, MBS, sub-sovereign credits, apart from providing unlimited credit to their sovereigns, and refinancing SME loans. Markets are taking solace from this and are hoping for a V shaped recovery post Covid19 pandemic curve flattening.</Typography>

    <Typography variant='h6' className='black jst'>In effect, markets are assuming that central banks have powers of Laplace’s Demon. What is Laplace’s Demon? Laplace, in his Philosophical Essay on Probabilities, in 1814, wrote the following:</Typography>

    <Typography variant='h6' className='blue jst'>“Given for one instant an intelligence which could comprehend all the forces by which nature is animated and the respective situation of the beings who compose it, an intelligence sufficiently vast to submit these data to analysis, it would embrace in the same formula the movements of the greatest bodies of the universe and those of the lightest atom; for it, nothing would be uncertain and the future, as the past, would be present to its eyes.”</Typography>

  
    <Typography variant='h6' className='black jst'>In other words, if central banks have perfect knowledge at minutest level and have access to all the analytical tools, central banks can know everything with certainty. However, given that they are reacting to events and are not proactive, shows that they do not have sufficient information at this stage.</Typography>

    <Typography variant='h6' className='black jst'> Another analogy can be if a person is carrying on her head nine claypots of water stacked one above another, and if she stumbles, attempt to stabilize one or two claypots will not bring back stability to that stack of claypots. And if she keeps on stumbling, no amount of efforts to stabilize even all the nine claypots will keep the stack stable. (An excellent video from 1959 Bollywood movie Navrang on nine claypots dance can be found here <a href='https://bit.ly/2yMwmJC' target='_blank'> https://bit.ly/2yMwmJC</a>)</Typography>


    <Typography variant='h6' className='black jst'>Right now, due to social distancing, the real economy is fumbling (the real economy can be imagined as dancer in the above song), and the real economy is carrying on its head a huge stack of leveraged debt positions of market players (the claypots are representing stacks of leverage). Given that fumble of real economy globally is going last for a few quarters, the attempts to stabilize the claypots, in the light of insufficient information with the entities entrusted with stabilizing the markets will not succeed.</Typography>
        
    <Typography variant='h6' className='black jst'>Forewarned is forearmed. </Typography>
           


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
