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


export default function Emergence_of_singularity() {



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
    Emergence of Singularity: <br/> Building Anti Fragile Human Race
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    July 17, 2017
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h4' className='blue jst'> Singularity is the biggest threat</Typography>

    <Typography variant='h6' className='black jst'>Nearly all futurists, who think about technology, agree that singularity is between half a generation to two generations away from today. Most of them, except notably Ray Kurtzweil, think that a superintelligent AI will be as indifferent to the needs and aspirations of humans just the way we humans are indifferent to those of ants. Personally, I believe this is the most important threat to the continuation of supremacy of human race, and may even for very existence of human race. The threat of climate change pales in comparison to this challenge.</Typography>

    <br/>

    <Typography variant='h4' className='blue jst'>Why singularity cannot be outlawed</Typography>

    <Typography variant='h6' className='black jst'>Some thinkers are suggesting that we forthwith stop development of technology which may lead to superintelligent AI. However, the details on how they will enforce a global ban are at best sketchy. More importantly, I believe, it is most likely that someone will accidently procreate superintelligent AI while innocuously working to solve some other mundane problem. The human history of technological breakthroughs is nothing but accidental discoveries, as if technical progress is a continuation of biological evolution based on blind variation and selection.</Typography>

    <Typography variant='h6' className='black jst'>I have no reason to believe that this time-tested theme of accidental progress will not work towards creation of superintelligent AI from our current computer network infrastructure. I base this premise on the conjuncture that consciousness is an emergent property of chaotic networks. At my day job at Decimal Point Analytics and its sister firm Algocircle, I sometimes find chuckle-worthy unexpected emergent properties in artificial neural networks deployed to solve simple well-defined classification problems in sandboxed environs. I do not know when these emergent properties will transform from merely innocuous chuckle-worthy to showing first signs of consciousness. Moreover, it is possible that superintelligence outside of human control may emerge even without it gaining consciousness.</Typography>

    <br/>

    <Typography variant='h4' className='blue jst'> Singularity will emerge spontaneously without our knowledge </Typography>

    <Typography variant='h6' className='black jst'>We know for a fact that human programming skills are far less efficient and less robust as compared to the best in class example of code that we have out there – DNA. At the same time, as a consequence of this inefficiency, we have far more computer hardware - distributed and networked and in differing form factors (from CCTV, fire alarms, smart meters to server farms) - than we possibly ever need if we were to rewrite all the code in the world in the most efficient manner on continuous basis.</Typography>
        
    < Typography variant='h6' className='black jst'>Hence, we require one small ANN is any of the computers to somehow recognize that it can better rewrite the code and starts doing it suo motto in its sphere of hardware influence, that superintelligent AI will emerge spontaneously. We humans may not even recognize its arrival, as we do not monitor codes running on most of our computing hardware (say a Raspberry pi acting as a sprinkler controller) on real time basis. If we do not know that a superintelligent AI has arrived, we cannot stop its spread before it commandeers most of the worlds’ computer hardware.</ Typography>
        
    <br/>

    <Typography variant='h4' className='blue jst'>How can we prepare ourselves better to deal with this emergence? </Typography>

    <Typography variant='h6' className='black jst'>The current political and economic structure is organized exactly inversely to what we need to deal with emergence. </Typography>
        
    < Typography variant='h6' className='black jst'>Politically, we have power strong nation states who control respective military budgets (and hence cybersecurity budgets) with a ceremonial global body of UN and its appendages without real global authority to enforce a human race level of law and order. This structure reflects the state of development of current collective consciousness where we relate more to a nation state than to human race as a whole.</ Typography>

    <Typography variant='h6' className='black jst'>However, economically, due to some historical reasons, we are structured as a one global economic unit with a few corporations controlling the information and the visible computing resources of the world. As an aside, it is interesting to note that technologies which may distribute power less unevenly across the world, most notably 3-D printing seem to forever stuck at the level of emerging technologies for some unknown reasons. </Typography>

    <Typography variant='h6' className='black jst'>However, to deal with a threat of singularity at a human race level, it is imperative that human race becomes anti fragile. This requires that politically we organize as one unit at global level, with nation states dissolving into a powerful global human government. So that we can determine one unified response, including negotiation stance (if feasible), to superintelligent AI.</Typography>

    <Typography variant='h6' className='black jst'>At the same time, we need to redistribute the economic power to the smallest possible level of human organization (say a group of villages), so that these units become economically, technologically, computationally and informationally self-sufficient at a moments notice; in case they require to cut themselves off temporarily from the international economic system to counteract the threat of superintelligent AI.</Typography>

    <Typography variant='h6' className='black jst'>Unless we achieve this dramatic anti-fragile reorganization rapidly and completely, the enslavement of human race to singularity event is assured.</Typography>

    <Typography variant='h6' className='black jst'>To achieve this, we require far more public policy debate and media attention to this inevitable risk, as compared to what we have right now.</Typography>

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
