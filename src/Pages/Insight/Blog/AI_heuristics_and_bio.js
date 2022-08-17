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


export default function AI_heuristics_and_bio() {


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
    Artificial Intelligence, Heuristics and Biomimicry
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    May 29, 2017
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>


    <Typography variant='h6' className='black jst'>Across the world, AI is the talk of town for last two years or so. This area of enquiry is making significant strides day by day, covering more and more ground, and will catch up with animal level intelligence sooner rather than later.</Typography>

    <Typography variant='h6' className='black jst'>However, when one sees beyond the PR-doped headlines, one sees many hurdles – such as huge computation requirements, need to have large sample sizes, ability of humans to fool the AI easily using simple perturbations, and inability to master human language reproduction, just to name a few. Granted, the scientists are making progress in each of the areas above, however, reaching truly human level AGI is still beyond the horizons that guide most investors.</Typography>
        
    <Typography variant='h6' className='black jst'>I think two areas where AI researchers can benefit are Biomimicry and Heuristics. Inputs for both will come natural world, where evolution of four billion years (or is it rather 14 billion years of evolution?) have found certain fast solutions.</ Typography>

    <Typography variant='h6' className='black jst'>As a first approach, heuristics deployed by living beings, as deciphered by biologists, can be handcoded and given as ready set of solutions which needs to be bettered by any AI solution both in terms of efficacy (achieving the objective function) and efficiency (energy costs, time to solve in terms of computation cycles and size of training sets). This will ensure that AI solutions are better than human understanding of naturally occurring heuristics.</Typography> 

    <Typography variant='h6' className='black jst'>As a second approach, the training sets of AI algorithms should include examples where nature has solved a particular problem efficiently and we humans still do not understand the source of that efficiency. These augmented training sets will be a distraction initially for the algorithm, but with right coaxing, the algorithms can figure out if similar solution can be applied in another context and what adjustments are needed to be made to the natural solution to fit a new application.</Typography>

    <Typography variant='h6' className='black jst'>I believe adding these two ingredients will further boost already astonishing speed of development in the field of AI.</ Typography>    
   
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
