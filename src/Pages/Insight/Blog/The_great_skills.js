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


export default function The_great_skills() {



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
    The Great Skills<br/>Shortage and BhagvatGita
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    November 30, 2021
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>Something unprecedented has happened in 2021. There is a great resignation wave at all levels of skills set and nearly every organization is feeling constrained by skills. Skills which are otherwise in demand has greatest shortage, while otherwise mundane skills like waiting tables are also in relatively short supply. </Typography>

    <Typography variant='h6' className='black jst'>Is this a problem or is this an opportunity? In my view, this is an opportunity for one in multi-generation reset for human race to spread actionable knowledge and skills across all stratas of humanity and what is more important, corporates have a play a pivot role to ensure that we get positive results in this era which has been thrust by pandemic caused stirring of the socio-economic paradigm. </Typography>

    <Typography variant='h4' className='blue jst'>Let me explain how.</Typography>

    <Typography variant='h6' className='black jst'>In the great war of Mahabharat, the Lord Krishna imparts the wisdom of being righteous to the confused human Arjun, which enables Arjun to wage a war against his own folks who were on the path to decadence and wrongdoing. Those teachings of the Lord Krishna are embedded in a text called Bhagvat Gita.</Typography>

    <Typography variant='h6' className='black jst'>Now, there is a seemingly valid argument as to why the Lord should spend time with righteous but confused Arjun, so that Arjun can go on and wage a bloody war? Why not spend the same time with the village of the events, Duryodhana, and teach him the righteous path so that the war can be avoided completed, and no blood is shed?</Typography>

    <Typography variant='h6' className='black jst'>The answer is given by Duryodhana, the villain of this war, himself; in another body of text called PandavaGita, in which Duryodhana states -</Typography>

    <Typography variant='h6' className='black jst'>“I know what is right but I am not able to practice it; I know what is wrong and I am not able to keep away from it. I act as I am directed to by some mysterious power that is seated in my heart. I am but a machine.”</Typography>

    <Typography variant='h4' className='blue jst'>Original text:</Typography>

<Typography variant='h6' className='skblue jst'>“जानामि धर्मम् न च मे प्रवृत्ति:, जानाम्यधर्मम् न च मे निवृत्ति:<br/>
त्वया हृषीकेश हृदिस्थितेन यथा नियुक्तोस्मि तथा करोमि” </Typography>

<Typography variant='h6' className='black jst'>The modern term for Duryodhana will be that he is “uncoachable” into right action, although he has all the unnecessary knowledge, because he is not able to translate the knowledge into practice.</Typography>

<Typography variant='h6' className='black jst'>I conclude that, there is no point in working with people who consider themselves a machine incapable of improving themselves, whatever maybe their current mastery of skills; but rather work with people, however confused they are today, who want to improve their own understanding and actions. </Typography>

<Typography variant='h6' className='black jst'>What the relevance for corporate world here?</Typography>

<Typography variant='h6' className='black jst'>There are many articles, which have been published for decades now that, a great majority of graduates are deemed “unemployable” for large corporates because they lack basic skills. I have always taken objection to this term “unemployable” because it transfers the failure of education system to care for its students to the young graduates. The right parameter to look for is to find out if those young people “coachable” or not, however confused and skillless they may sound right now.</Typography>

<Typography variant='h6' className='black jst'>In the pre-pandemic world of great supply of talent pouring out in job market, companies could lazily check the current skillsets and categorize the talent as employable or otherwise. In the post-pandemic world of great shortage of skills, corporates have to play a role of Lord Krishna and identify confused but coachable Arjuns. If many corporates make this transition, then human society will improve, otherwise, the bidding war for the “employables” will continue, leading to higher inflation, which will eventually lead to faster arrival of recession. If corporates shift their focus from employables to coachables, the inflationary pressures will die out sooner rather than later, and next recession will be postponed for a longer while.</Typography>



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
