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

import ic1 from "../../../asset/images/innovation/rs1.svg";
import ic2 from "../../../asset/images/innovation/rs2.svg";
import ic3 from "../../../asset/images/innovation/rs3.svg";
import ic4 from "../../../asset/images/innovation/rs4.svg";

import banenr2 from "../../../asset/images/innovation/ds_banner2.svg";

import ds1 from "../../../asset/images/innovation/ds1.svg";
import ds2 from "../../../asset/images/innovation/ds2.svg";
import ds3 from "../../../asset/images/innovation/ds3.svg";
import ds4 from "../../../asset/images/innovation/ds4.svg";


import trumps_table1 from "../../../asset/images/insight/insight_pages/donald_trumps_pre/table 01.svg";
import trumps_table2 from "../../../asset/images/insight/insight_pages/donald_trumps_pre/table 02.svg";


import donald_t1 from "../../../asset/images/insight/insight_pages/donald_trumps_pre/donald_t_1.jpg";
import donald_t2 from "../../../asset/images/insight/insight_pages/donald_trumps_pre/donald_t_2.jpg";

// images end


export default function Trumps_presidency() {



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
    Insight
    </Typography>
    <Typography variant='h1' className='blue al_center'>
    Donald Trump'S <br/> Presidency
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
   

<Grid container spacing={3} alignItems="top">
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+trumps_table1+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
    <Typography variant='h6' className='black jst'> Republican candidate, Donald Trump was sworn in as the US President on 20th January 2017. He has repeatedly spoken about his policy trifecta since coming to power. It comprises of tax cuts, deregulation, and infrastructure spending. Global financial markets jubilantly vaulted higher and welcomed the new White House resident with great enthusiasm. The S&P 500 registered a rise of 4.5% and the Dow Jones Industrial Average gained 5.3% during the first 50 days since Trump got sworn in, the best ever for a GOP President. To top that, robust jobs report and firm wage growth for February gives a clear indication that US economic growth is on its way up.  </Typography>

    </Box>
</Grid>
</Grid>

<Divider/>
<br/>

<Grid container spacing={3} alignItems="top" >
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+donald_t1+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
        
    <Typography variant='h4' className='blue jst'> Travel Ban </Typography>

    <Typography variant='h6' className='black jst'>The most controversial Trump initiative has been suspending immigration from seven Muslim-majority nations while indefinitely barring Syrian refugees. This gave rise to chaos at airports around the world as authorities struggled to implement the new policy. However, not everything went as Trump planned. His first order on immigration and refugees had a clumsy rollout and was struck down by a Washington state US district judge. It was an early lesson for Trump that executive power comes with limits. Major tech giants in the US protested against the move, as immigrants have traditionally comprised a healthy proportion of Silicon Valley's lucrative start-up scene and it could risk disrupting the engine of innovation. </Typography>
    </Box>
</Grid>
</Grid>

<br/>
<Divider/>
<br/>

<Grid container spacing={3} alignItems="top" >
    <Box>      
    <Typography variant='h4' className='blue jst'> Repeal and Replace Obamacare Act  </Typography>

    <Typography variant='h6' className='black jst'> President Donald Trump’s efforts to overhaul the US healthcare system hit a bump, after it faced resistance from a conservative GOP faction, the House Freedom Caucus. Failure to pass the healthcare bill raised questions not only on Trump’s ability to get other key parts of his agenda, including tax cuts and infrastructure spending, but also his capacity to govern effectively.  </Typography>
    </Box>

</Grid>

<br/>
<Divider/>
<br/>

<Grid container spacing={3} alignItems="top">
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+donald_t2+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
        
    <Typography variant='h4' className='blue jst'> Rolling back Obama-era Environmental Policies  </Typography>

    <Typography variant='h6' className='black jst'> Donald Trump has started demolishing a wide array of Obama-era policies. On his second full working day, Trump signed orders to advance construction of two controversial pipelines - the Keystone XL and Dakota Access. Trump signaled his support for these two projects, which critics state will have an adverse environmental impact. He also signed an executive order on energy independence and to review and potentially repeal President Obama’s anti-energy policies that were instituted under the Climate Action Plan and Clean Power Plan. These involve a framework for reducing carbon dioxide emissions from fossil-fuel-fired electricity plants. Further, he has promised to put an end to Obama's moratorium on issuing new leases for coal mining on government administered property.  </Typography>
    </Box>
</Grid>
</Grid>

<br/>
<Divider/>
<br/>

<Grid container spacing={3} alignItems="top">
<Grid item lg={4} md={4} sm={4} xs={12}>
    <Box className='al_center'>
    <Box className='casestudy_bg' style={{ backgroundImage: 'url('+trumps_table2+')', }}></Box>
    </Box>
    </Grid>
    
    <Grid item lg={8} md={8} sm={8} xs={12}>
    <Box>
        
    <Typography variant='h4' className='blue jst'> Protecting American Workers  </Typography>


    <Typography variant='h6' className='black jst'>Protecting the jobs of American workers was a central focus of Trump’s campaign. He has signed an order to withdrawn from the Trans-Pacific Partnership, which was a critical part of Barack Obama's international trade policy. He has also pledged to renegotiate the North American Free Trade Agreement. However, there hasn’t been an executive order to that effect yet. Moreover, Trump also targeted the coveted H-1B work visa, which is the main pathway for highly skilled foreigners to work at US companies for up to six years. The US has suspended expedited processing of H-1B visas for six months starting from 3rd April, 2017.  </Typography>
    </Box>
</Grid>
</Grid>

<br/>
<Divider/>
<br/>
   

    <Box>
    <Box className='insightmidbg'>
    <img src={ dpaic } className='bxicon2'/>

    <Typography variant='h4' className='blue'>Decimal Point Analytics</Typography>

    <Tooltip title="Facebook">
    <a href='https://www.facebook.com/decimalpointanalyticspl' target='_blank'>
    <IconButton aria-label="Facebook" className='icbg'>
    <FacebookIcon className='icbl' fontSize="small" />
    </IconButton>
    </a>
    </Tooltip>

    <Tooltip title="LinkedIn">
    <a href='https://www.linkedin.com/company-beta/523783/?pathWildcard=523783' target='_blank'>
    <IconButton aria-label="LinkedIn" className='icbg'>
    <LinkedInIcon className='icbl' fontSize="small" />
    </IconButton>
    </a>
    </Tooltip>


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
    Back to Insight
    </Button>
    </Link>
    </Box>


    </Container>
    </Box>



                   



        </>
    );
}
