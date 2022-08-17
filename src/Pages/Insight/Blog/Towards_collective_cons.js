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


export default function Towards_collective_cons() {



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
    Towards Collective Consciousness <br/> of Human Race
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    April 2, 2017
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>


    <Typography variant='h6' className='black jst'>In my blog report published on the website of Decimal Point Analytics on 14th March 2011, I had posited that Jasmine Revolution (Arab Spring) is indicative of slow emergence of collective human consciousness, enabled by the Internet, while the problems in the Eurozone currency area at that time are indicative of the fact that our collective consciousness is not at the same level as that of a colony of honeybee.</Typography>

    <Typography variant='h6' className='black jst'> We humans have evolved to be individualistic and the Western culture, in particular, celebrates expression of individualistic choices, as long as they do not directly harm the freedom and wellbeing of other humans. The tremendous success that the western world has achieved in last half a millennia is mostly attributed to application of reason in the framework of individualistic choices in solving societal problems.</Typography>
        
    <Typography variant='h6' className='black jst'>However, at the same time, humans are also social, gregarious animals, seeking approval of the society at all times for their behavior. So, our individualistic choices are, at the same time, constrained by and fueled by, the societal norms.</ Typography>

    <Typography variant='h6' className='black jst'> How these societal norms are defined and are transmitted has evolved significantly as the society has changed. For hunter gatherers, the societal norms were defined in the narrow confines of geography, and till the language evolved, it was impossible to ensure transmission across future, yet to be born generations. With the advent of language and writing, social norms could be transmitted both in time and in space continuum. The speed and the coverage of transmission increased as newer technology such as printing, telegraph, telephone and finally the Internet.</Typography> 

    <Typography variant='h6' className='black jst'>Now, in last few days, Elon Musk has announced Neuralink, a company attempting to create direct electronic interface between silicon based computer, and carbohydrate based human brain. In recent years, there have been many successful attempts to link rat brains to such interfaces involving surgery and implants. The reason Mr. Musk is building such a link is to give humans a competitive advantage in a race against fast developing AI.</Typography>

    <Typography variant='h6' className='black jst'> However, such a link, in addition to transmitting information, will be able to transmit emotions, desires, passions and values. Since, modern computers are designed to be connected always, it is but logical that all brains connected to the computers will also be connected to each other, sharing all the feelings, emotions, desires and values with everyone else across the planet.</ Typography>    
   
    <Typography variant='h6' className='black jst'> The implication of this for the society goes for beyond Artificial Intelligence. Such collective human consciousness will, if used properly, can eliminate hatred and wars, reduce friction in functioning of politics. The changes economic systems that will happen in response to development of collective consciousness will be far greater than have been imagined by any philosopher enquiring on human affairs till now.</Typography> 

    <Typography variant='h6' className='black jst'> Personally, till recently, I had a date of third quarter of this century for development of such a brain-computer interface on commercial scale. However, Mr. Musk may force faster commercial development, requiring the society to scurry around to find appropriate structural response to this inevitable technological development.</Typography> 


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
