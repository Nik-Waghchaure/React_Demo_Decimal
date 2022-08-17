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


export default function Incentive_structure_for_AI() {



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
    Incentive Structure For <br/> Building Artificial Intelligence  <br/> With A Sense Of Morality
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    April 17, 2017
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>


    <Typography variant='h6' className='black jst'>Recently, our Head of Talent Management pointed out to me that AI applications, mainly chatbots, seem carry the same biases that humans display.</Typography>

    <Typography variant='h6' className='black jst'>The irony is that it is possible, using current technologies, to engrain in AI a superior sense of morality, with logically consistent and hierarchical set of goals, and hence it is possible that AI to have minimal biases even now.</Typography>
        
    <Typography variant='h6' className='black jst'>Before we move further, it would not be out of place here to point out that The Three Laws of Robotics propounded by Asimov are sufficient for a Sci-Fi plot; but in real life, the societal usefulness of AI will require a far complex set of rules of moral behavior and political correctness; which will vary according to context of time, geography and intended audience.</ Typography>

    <Typography variant='h6' className='black jst'>  However, most applications of AI are currently built without any moral context supplied to it. This carries a danger that these AI tools may behave inappropriately in the wild. Given that AI’s response times are a fraction of second, it may be too late for humans to notice the faults and take corrective actions.</Typography> 

    <Typography variant='h6' className='black jst'>As mentioned earlier, it is possible to engrain the AI with a system of morality which can be superior to the morality of a median human being. AI can be taught modern philosophers such as Nietzsche and Ayn Rand, if a strong enough commercial case can be made. However, for most applications (certainly the applications that my firms are developing), the commercial benefit of adding moral dimensions fall short of the cost of doing so.</Typography>

    <Typography variant='h6' className='black jst'>It is here that the government can prove itself useful for once. Instead of wasting precious tax revenue on providing subsidies for the vote bank or to the financial backers; those revenues, as second best alternative application of tax revenues1 can be used to support various university groups who can develop open source AI APIs in various moral schools which can be plugged by commercial entities as per their preference in their AI application, as a set of limiting conditions for their AI app.</ Typography>    
   
    <Typography variant='h6' className='black jst'> AI is the most important tool ever that humans have developed. Frankly, I find, the current debate surrounding the effect of AI on human society shallow, since it assumes that we humans cannot or will not preemptively change social, economic, governance and moral structure to ensure smooth adoption of AI for greater good of humanity.</Typography> 

    <Typography variant='h6' className='black jst'> In these pages, I will be discussing on weekly basis, the all-encompassing changes we need to engineer to ensure successful implementing of AI, after introducing today once such change that may be deemed necessary.</Typography> 

    <Typography variant='h6' className='black jst'><sup>1</sup>The first best use of tax revenues is to reduce incidence of tax revenues.</Typography> 

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
