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


export default function Latrogenesis_of_social_distancing() {



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
    Iatrogenesis of Social Distancing: <br/> Thoughts on Flaws in <br/> Deeper Structure of Society.
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    March 25, 2020
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>As the global economy stares at rapid descent into possibly worst depression ever recorded, US President Trump has been voicing concerns on iatrogenesis of the preventive measure of social distancing on the US economy. To think of iatrogenesis of the preventive measures is unthinkable for many, however it is to useful debate this point, but only in the wider context of structure of our society, as discussed below.</Typography>

    <Typography variant='h4' className='blue jst'>Burden of Indirect Democracy</Typography>

    <Typography variant='h6' className='black jst'>No democratically elected leader, be it Trump or Trudeau or Macron or Modi, has infinite emotional space to carry the moral burden to single handedly decide to inflict pain on entire population to save an undefined proportion of the population. Should the entire population, through direct democracy, make such decisions? Do we have sufficient information? One thing is clear, the moral burden is with all of us and not just with our leaders to make these difficult choices or at least support our leaders in these difficult times. In this digital world, direct democracy can be easily implemented using mobile apps / text messages with appropriate authentication mechanism. Should we use these technologies at this time? Once all the issues surrounding COVID19 are settled, I would like to see society take up this debate.</Typography>

    <br/>
  
    <Typography variant='h4' className='blue jst'>Flaws in Capitalism</Typography>

    <Typography variant='h6' className='black jst'>Drastic reduction in demand can and will become a vicious cycle for capitalism. Especially in times of extreme leverage and zero bound interest rates, it is very difficult to get economy out of reduced level of economic activity. Command and control type central planning is the only solution. Also, central planning is the only mechanism by which society can handle unforeseen circumstances like this – examples being car factories now being repurposed into medical equipment factories – not by price signal but by government orders.</Typography>


    <Typography variant='h6' className='black jst'>Past experiences with central planning have been all utter failures. At the same time, capitalism does not have answers to society’s needs. Also, mixed economy quickly becomes a den for crony capitalism. Will direct democracy with extreme transparency-based command and control system replace price signal-based capitalism? This needs to be thought of in the context of homeostatic of evolution and dynamic imbalance of financial system.</Typography>
        
    <br/>
  
    <Typography variant='h4' className='blue jst'>Homeostatic of Evolution</Typography>

    <Typography variant='h6' className='black jst'>In response to COVID19 we may be forgetting that a globally spread out species like human beings is anti-fragile to a 1% to 2% mortality morbidity. While we come to rely more and more on our technological capabilities, we forget that evolution is a variation-loving system, which becomes stronger after each mild shock. Are we doing disservice to the future of human race by trying to protect the race from maladies today?</Typography>
  
    <br/>
  
    <Typography variant='h4' className='blue jst'>Dynamic Imbalance of F&S Capital</Typography>

    <Typography variant='h6' className='black jst'>As against biological human race, our financial system does not benefit from mild shocks. In fact, the current structure of financial system is such that it goes into tailspin at every mild shock. Unfortunately, the current structure of financial system has become salient feature of capitalism. It should be kept in mind that basic tenants of capitalism do not at all require use of leverage to carry out price discovery and resource allocation. Even then, debt and leverage has become cornerstone of financial system. Can we get out this unholy alliance between leverage and capitalism?</Typography>


    <Typography variant='h6' className='black jst'>If we do not pause and seriously think about these issues, we will have let the current crisis gone to waste. And this is a too great a crisis to let go waste.</Typography>
        

           


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
