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

import Trade2 from "../../../asset/images/insight/blog_pages/need_of_trade2.jpg";

// images end


export default function Do_we_really_need_trade_wars() {



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
    Do we really need trade wars to shrink international trade-flows in Physical Goods?
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    March 19, 2018
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>In the recent weeks the headlines are screaming about the impending trade wars, the expected shrinkage in global trade and its impact on the overall welfare of the humankind. </Typography>

    <Typography variant='h6' className='black jst'>In this write-up, I attempt to show that very soon technological changes will lead to shrinkage in global trade.</Typography>

    <Typography variant='h6' className='black jst'>The key feature of industrial revolution since early 19th century is lengthening of the supply chains, concentration of manufacturing in specialized workplaces of gigantic proportions – all for the quest of efficiency.</Typography>

    <br/>
    
    <Box className='al_left' mt={4} mb={4}>
    <img src={ Trade2 } className='topbanner2'/>
    </Box>

    <br/>
    <Typography variant='h6' className='black jst'>However, the new kind of manufacturing is on the horizon, additive manufacturing or 3d printing. It is just now moving from prototyping novelty to serious manufacturing for various applications. As additive manufacturing is at a cutting-edge intersection of computer science, materials science, thermodynamics and very recently optics and chemistry as well, we believe that this technique will enable production of goods at the places where consumers are <strong>converting locally available materials into desired products.</strong> </Typography>

    <Typography variant='h6' className='black jst'>The elusive goal of economic batch size of one is within the reach of this generation. When we say economic batch size of one, we just do not mean the customization to the needs of individual consumer’s taste, but we also imply use of materials that are locally available in abundance.</Typography>

    <Typography variant='h6' className='black jst'>So, in the not so distant future, we will not have huge ships carrying containers of goods from low production cost centers to high income centers; but CAD designs with bills of materials will be zipping over cyberspace from designers located in places with high creativity and education to places with low creativity and education. The designers will be receiving the relative cost of all available materials amenable for additive manufacturing across all consumption centers, apart from receiving the customization needs of consumers. As more and more materials are made amenable for additive manufacturing, we can expect combinatorial explosion of possible designs to such a great extent that only AI can assist the designers in making the most appropriate choices of designs.</Typography>

    <Typography variant='h6' className='black jst'>In other words, in less than two decades, we predict a sharp slowdown in global trade of physical goods as additive manufacturing becomes even more practical and cost efficient. Pretty soon, we do not a Trump to cause a collapse in the international trade. What this means for current e-commerce giants, physical big box retailers, and transporters et al is matter of detailed analysis. Unfortunately, as usual, the stock market has not yet seen beyond the first curve it is facing.</Typography>

    

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
