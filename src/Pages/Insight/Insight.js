import { AppBar, Divider,  Button, Container, Grid, Tabs, Tab, Toolbar, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
// import dpalogo from "../../asset/images/dpa_cloud_logo.png";
import Aos from 'aos'
import "aos/dist/aos.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';


// images
import indexbanner from "../../asset/images/innovation/ds_banner.gif";
import insight1 from "../../asset/images/insight/insight_1.jpg";
import insight2 from "../../asset/images/insight/insight_2.jpg";


import info1 from "../../asset/images/insight/info1.jpg";
import info2 from "../../asset/images/insight/info2.jpg";
import info3 from "../../asset/images/insight/info3.jpg";
import info4 from "../../asset/images/insight/info4.jpg";
import info5 from "../../asset/images/insight/info5.jpg";

import ic1 from "../../asset/images/innovation/ds_ic_1.svg";
import ic2 from "../../asset/images/innovation/ds_ic_2.svg";
import ic3 from "../../asset/images/innovation/ds_ic_3.svg";
import ic4 from "../../asset/images/innovation/ds_ic_4.svg";
import banenr2 from "../../asset/images/innovation/ds_banner2.svg";








import trophy from "../../asset/images/aboutus/trophy.svg";
import award1 from "../../asset/images/aboutus/about_us_award1.svg";
import award2 from "../../asset/images/aboutus/about_us_award2.svg";

import dash1 from "../../asset/images/index/dash01.svg";
import dash2 from "../../asset/images/index/dash02.svg";
import dash3 from "../../asset/images/index/dash03.svg";
import why1 from "../../asset/images/index/homei01.svg";
import why2 from "../../asset/images/index/homei02.svg";
import why3 from "../../asset/images/index/homei03.svg";
import why4 from "../../asset/images/index/homei04.svg";
import why5 from "../../asset/images/index/homei05.svg";
import why6 from "../../asset/images/index/homei06.svg";
import why7 from "../../asset/images/index/homei07.svg";
import why8 from "../../asset/images/index/homei08.svg";

import pro1 from "../../asset/images/index/productskills/p1.png";
import pro2 from "../../asset/images/index/productskills/p2.png";
import pro3 from "../../asset/images/index/productskills/p3.png";
import pro4 from "../../asset/images/index/productskills/p4.png";
import pro5 from "../../asset/images/index/productskills/p5.png";
import pro6 from "../../asset/images/index/productskills/p6.png";
import pro7 from "../../asset/images/index/productskills/p7.png";
import pro8 from "../../asset/images/index/productskills/p8.png";

import ski1 from "../../asset/images/index/productskills/s1.svg";
import ski2 from "../../asset/images/index/productskills/s2.svg";
import ski3 from "../../asset/images/index/productskills/s3.svg";
import ski4 from "../../asset/images/index/productskills/s4.svg";
import ski5 from "../../asset/images/index/productskills/s5.svg";
import ski6 from "../../asset/images/index/productskills/s6.svg";
import ski7 from "../../asset/images/index/productskills/s7.svg";
import ski8 from "../../asset/images/index/productskills/s8.svg";

// images end

// images of Insight Pages stored in insight_pages folder

import ins1 from "../../asset/images/insight/insight_pages/1insight.jpg";
import ins2 from "../../asset/images/insight/insight_pages/2insight.jpg";
import ins3 from "../../asset/images/insight/insight_pages/3insight.jpg";
import ins4 from "../../asset/images/insight/insight_pages/4insight.jpg";
import ins5 from "../../asset/images/insight/insight_pages/5insight.jpg";
import ins6 from "../../asset/images/insight/insight_pages/6insight.jpg";
import ins7 from "../../asset/images/insight/insight_pages/7insight.jpg";
import ins8 from "../../asset/images/insight/insight_pages/8insight.jpg";
import ins9 from "../../asset/images/insight/insight_pages/9insight.jpg";
import ins10 from "../../asset/images/insight/insight_pages/10insight.jpg";
import ins11 from "../../asset/images/insight/insight_pages/11insight.jpg";
import ins12 from "../../asset/images/insight/insight_pages/12insight.jpg";
import ins13 from "../../asset/images/insight/insight_pages/13insight.jpg";
import ins14 from "../../asset/images/insight/insight_pages/14insight.jpg";
import ins15 from "../../asset/images/insight/insight_pages/15insight.jpg";
import ins16 from "../../asset/images/insight/insight_pages/16insight.jpg";
import ins17 from "../../asset/images/insight/insight_pages/17insight.jpg";
import ins18 from "../../asset/images/insight/insight_pages/18insight.jpg";
import ins19 from "../../asset/images/insight/insight_pages/19insight.jpg";
import ins20 from "../../asset/images/insight/insight_pages/20insight.jpg";
import ins21 from "../../asset/images/insight/insight_pages/21insight.jpg";
import ins22 from "../../asset/images/insight/insight_pages/22insight.jpg";
import ins23 from "../../asset/images/insight/insight_pages/23insight.jpg";
import ins24 from "../../asset/images/insight/insight_pages/24insight.jpg";
import ins25 from "../../asset/images/insight/insight_pages/25insight.jpg";
import ins26 from "../../asset/images/insight/insight_pages/26insight.jpg";

import case1 from "../../asset/images/insight/case_studies/nav_calculations.png";
import case2 from "../../asset/images/insight/case_studies/intelligent_doc_processing.png";
import case3 from "../../asset/images/insight/case_studies/solution_for_crm.png";
import case4 from "../../asset/images/insight/case_studies/response_management.png";
import case5 from "../../asset/images/insight/case_studies/portfolio_monitoring.png";
import case6 from "../../asset/images/insight/case_studies/robotics_process.png";
import case7 from "../../asset/images/insight/case_studies/collatoral_management.png";
import case8 from "../../asset/images/insight/case_studies/intelligent_dashboard.png";


//Tabbed End

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    
    return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`scrollable-auto-tabpanel-${index}`}
    aria-labelledby={`scrollable-auto-tab-${index}`}
    {...other}
    >
    {value === index && (
    <Box p={3}>
    <Typography>{children}</Typography>
    </Box>
    )}
    </div>
    );
    }
    
    TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    };
    
    function a11yProps(index) {
    return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
    }
    //Tabbed End




export default function Insight() {


//Tabbed start  
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
setValue(newValue);
};
//Tabbed End



useEffect(() => {
Aos.init({ duration:1000 });
}, []);
    

    
    

    return (
        <>


    <Box className='mainsection' component='section'>
    <Container maxWidth='lg'>
    <Grid container spacing={1} alignItems="center">
    <Grid item lg={5} md={6} sm={6} xs={12}>
    <Box>
    <Typography variant='h1' className='blue'>
    Insights
    </Typography>

    <Typography variant='h4' className='black'>
    Read what we think about the world around us. The past, present and the future 
    </Typography>

    </Box>
    </Grid>
    <Grid item lg={7} md={6} sm={6} xs={12}>
    <Box className='al_right'>
    <img src={ indexbanner } className='topbanner'/>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>




    <Box className='maintabbedsection stiky'>
    <AppBar position="static" className="tabbedbar">
    <Tabs
    value={value}
    onChange={handleChange}
    indicatorColor="none"
    textColor="primary"
    variant="scrollable"
    scrollButtons="auto"
    aria-label="scrollable auto tabs example"
    >
    <Tab label="Insight" {...a11yProps(0)} />
    <Tab label="Blog"  {...a11yProps(1)} />
    <Tab label="Infographic" {...a11yProps(2)} />
    <Tab label="Case Studies" {...a11yProps(3)} />
    </Tabs>
    </AppBar>
    </Box>


      










    <Box className='section sec_bg' component='section' style={{paddingTop:'3%',}}>
    <Container maxWidth='lg' className='bdr'>

<TabPanel value={value} index={0}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography variant='h2' className='black'>
Insight
</Typography>
</Box>
</Grid>
</Grid>

<Box className='reportinfo'>
<Grid container spacing={1} alignItems="top">
<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/how_can_asset_managers'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins1+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
How can Asset managers engage with businesses to accelerate drive towards Net Zero
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>



<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/pe_funds'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins2+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
PE Funds and the ESG challenge
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/challenges_in_ESG'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins3+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Challenges in operationalizing
ESG norms in Asset Management
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/solving_challenges'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins4+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Solving Challenges in ESG Investing
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/data_visualization'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins5+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Data Visualization and the Art of Effective Storytelling
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/nlp_technique'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins6+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Leveraging NLP Techniques
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/private_equity'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins7+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Private Equity - Adopting a Data First Approach
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/roadmap_to_institutional'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins8+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Roadmap to Institutional Transformation
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/way_forward_for_asset_management'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins9+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Way forward for Asset Managers!
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/disrupting_asset_management'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins10+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Disrupting Investment Research
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/data_analytics_in_asset'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins11+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Data Analytics in Asset-Backed Securities (ABS)
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/role_of_advanced_analytics'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins12+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Role of Advanced Analytics in Redefining Retail Banking
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>


<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/interest_rates_burden'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins13+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Real Interest Rates Burden On Indian Businesses
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/new_age_asset_managers'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins14+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
New Age Asset Managers
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/india_on_currency'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins15+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
India on currency watchlist
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/india_leverage'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins16+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
India Leverage Rising Crude Prices
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/rethinking_corporate_governance'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins17+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Rethinking Corporate Governance
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/robo_advisors'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins18+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Will Robo-advisors disrupt the dynamics in the financial services industry
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/independant_research'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins19+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Independent Research
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/indian_budget_17_18'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins20+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Indian Budget 2017-18
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/trumps_presidency'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins21+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Donald Trump'S Presidency
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/germany_and_upcoming_elections'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins22+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Germany & The Upcoming Elections
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/fork_wars'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins23+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Fork Wars A Tale of two cryptocurrencies
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/pursuit_of_alpha'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins24+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
In Pursuit of Alpha
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/research_redux'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins25+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
Research Redux
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/assessing_quality_of_research'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+ins26+')', }}></Box>
<Box mt={2} mb={2}>
<Typography className='reporttitle two'>
MIFID II Assessing Quality of Research!
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>


</Grid>   
</Box>

</TabPanel>



<TabPanel value={value} index={1}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography variant='h2' className='black'>
Blog
</Typography>
</Box>
</Grid>
</Grid>

<Box className='reportinfo'>
<Grid container spacing={1} alignItems="top">

<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/the_great_skills'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
The Great Skills Shortage and BhagvatGita
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Nov 30, 2021
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
Something unprecedented has happened in 2021. There is a great resignation wave at all levels of skills set and nearly every organization is feeling constrained by skills. Skills which are otherwise in demand has greatest shortage, while otherwise mundane skills like waiting tables are also in relatively short supply.
</Typography>
</Box>

</Box>
</Link>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/a_cautionary_tale'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
A Cautionary Tale for Bitcoin Maximalists
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Jun 18, 2021
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
Bitcoin, if considered as a currency, has highly deflationary properties. Many celebrate the deflationary property as a feature. I show here, based on a painstaking data collection, that it is bug. Deflation is a bug for poor countries. Deflation is a bug for poor people. Deflation, at the end of it, is a feature for rich industrialists.
</Typography>
</Box>

</Box>
</Link>
</Grid>


<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/guiding_policy_making'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Guiding Policymaking through the Fog of Covid19 induced Lockdowns
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Sep 01, 2020
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
Recently, Indian GDP for June 2020 Quarter printed -23.9% growth. Interestingly, just a few weeks before this print, RBI MPC announced that it was holding rates steady because CPI inflation was at 6.93%, outside the target range of 2% to 6%.
</Typography>
</Box>

</Box>
</Link>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/private_equity_global_pandamic'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Private Equity - Navigating the Global Pandemic Environment
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Apr 30, 2020
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
The current COVID-19 crisis is causing economic as well as social disruptions, and businesses are no exception. Though central banks worldwide have announced various multi-billion-dollar stimulus packages to contain the economic impact, it has still failed to boost investor confidence.
</Typography>
</Box>

</Box>
</Link>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/forging_ahead'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Forging Ahead in Troubled Times
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Apr 14, 2020
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
The world is in the midst of the COVID-19 pandemic trying to control the social and financial fallout. The already struggling financial markets have nose-dived due to the world economy coming to a grinding halt. Social distancing is being practiced across the world to flatten the infection curve and give the government and administration a fighting chance
</Typography>
</Box>

</Box>
</Link>
</Grid>


<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/laplace_demon'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Laplace’s Demon and Limits to Central Banks’ Ability to Stabilize Economy
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Apr 11, 2020
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
In last three weeks, the major central banks in the world have gone in overdrive to stabilize the markets. Among other things, they are now buying junk bonds, highly rated bonds, MBS, sub-sovereign credits, apart from providing unlimited credit to their sovereigns, and refinancing SME loans. Markets are taking solace from this and are hoping for a V shaped recovery post Covid19 pandemic curve flattening.
</Typography>
</Box>

</Box>
</Link>
</Grid>


<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/latrogenesis_of_social_distancing'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Iatrogenesis of Social Distancing: Thoughts on Flaws in Deeper Structure of Society.
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Mar 25, 2020
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
As the global economy stares at rapid descent into possibly worst depression ever recorded, US President Trump has been voicing concerns on iatrogenesis of the preventive measure of social distancing on the US economy. To think of iatrogenesis of the preventive measures is unthinkable for many, however it is to useful debate this point, but only in the wider context of structure of our society, as discussed below.
</Typography>
</Box>

</Box>
</Link>
</Grid>


<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/beginning_of_ETF_shock'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Beginning of ETF Shock
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Mar 23, 2020
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
Last Monday I wrote about the issues that ETFs will face due to the disruptions to real economy. I did not expect the problems to surface at the short-end of ETFs and so fast.
</Typography>
</Box>

</Box>
</Link>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/extreme_funding_stress'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Extreme Funding Stress in Dollar Market
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Mar 18, 2020
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
One measure of funding stress in dollar markets is how much liquidity is demanded by banks from NY Fed. The chart below shows the net liquidity demand / supply managed by NY Fed from 7<sup>th</sup> July 2000 till 17<sup>th</sup> March 2020.
</Typography>
</Box>

</Box>
</Link>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/covid_19'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
COVID-19 and folly of ETFs
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Mar 17, 2020
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
Let me set the tone first by briefly describing the folly of the 2004-09 Great Financial Crisis. It was believed, without stress test, that by combining a seemingly uncorrelated junk grade loans into a pool, some pixie dust magic will convert the pool of such loans into highly coveted low risk investment grade pool.
</Typography>
</Box>

</Box>
</Link>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/research_operations'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Customized, Optimized and Enhanced research operations
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Mar 06, 2020
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
The Indian banking industry is undergoing a radical change driven by intense competition from new entrants in the industry, continuously evolving regulatory environment and the changing business models. Technological advancements and innovations have further altered the business landscape for all financial institutions, whether banking or non-banking.
</Typography>
</Box>

</Box>
</Link>
</Grid>


<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/from_us_to_yes_bank'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
From Bank of United States to Yes Bank: Why Bank Stocks should be ineligible as loan security
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Oct 31, 2019
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
In December of 1930 Bank of United States (BOUS), based primarily in the city of New York failed. It was the first bank failure in the USA during the great depression which started in Oct 1929.
</Typography>
</Box>

</Box>
</Link>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/do_we_really_need_trade_wars'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Do we really need trade wars to shrink international trade-flows in Physical Goods?
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Mar 19, 2018
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
In the recent weeks the headlines are screaming about the impending trade wars, the expected shrinkage in global trade and its impact on the overall welfare of the humankind.
</Typography>
</Box>

</Box>
</Link>
</Grid>



<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/is_demonstration_respo'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Is Demonetization Responsible for Lower GDP Growth Rate?
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Sep 04, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
Since India’s April-June 2017 (Q1FY18) numbers are printed below market expectations, there has been some discussions whether demonetization is responsible for the low GDP print.
</Typography>
</Box>

</Box>
</Link>
</Grid>


<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/analyzing_GDP_nos'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Analyzing The GDP numbers
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Sep 01, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
The Indian GDP rate came significantly below expectations at 5.7% in the Q1FY18 (Apr-June 2017) The Table below shows the contribution to the GDP growth by type of expenditure.
</Typography>
</Box>

</Box>
</Link>
</Grid>


<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/indias_fiscal_contraction'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
India’s coming fiscal contraction – effect on growth and inflation
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Aug 09, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
We estimate Central Fiscal Deficit for April-June 2017 quarter for India to be at approximately 10.75% of the GDP of that quarter. This is because of planned increase in capital expenditure by the central government in that quarter. To maintain the preannounced target of 3.20% of GDP for fiscal deficit for the year April 2017 till March 2018, the deficit for the nine-month period July 2017 till March 2018 should not significantly exceed 0.75% of GDP of that period.
</Typography>
</Box>

</Box>
</Link>
</Grid>


<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/does_RBI_need_to_revise'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Does RBI need to revise its models?
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Aug 07, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
The low inflation print in recent months has raised some important methodological questions. RBI relies heavily on the internal models that it has developed for its inflation forecast and hence for making interest rate decisions.
</Typography>
</Box>

</Box>
</Link>
</Grid>


<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/india_deflation'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
India Deflation: Strategic, Tactical and Operational Options for RBI
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Jul 26, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
In one of my previous write ups, I sketched the most likely scenario of India facing deflation pretty soon. In this write up, I will describe various responses that RBI should have to have for this emerging black swan event. (Black Swan as far as markets and policy makers are concerned.
</Typography>
</Box>

</Box>
</Link>
</Grid>



<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/why_will_AI_emerge'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Why Will AI Emerge Spontaneously?
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Jul 24, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
In response to one of my previous blogs, some readers privately raised questions as to why I think AI will emerge spontaneously. Here is my detailed reasoning.
</Typography>
</Box>

</Box>
</Link>
</Grid>



<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/india_heading_toward_deflation'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
India Heading Towards Deflation
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Jul 21, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
The latest reading of Indian CPI came in at 1.54% for June 2017. This is the first time the inflation has breached RBI band of 2% to 6%. I am sure there would be a lot of soul searching going on at offices of many authorities as to what it means.
</Typography>
</Box>

</Box>
</Link>
</Grid>



<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/excessive_monetory'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Excessive Monetary Tightening in India as compared to OECD
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Jul 17, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
In this note we will see how behavior of RBI in recent years is proving a relative impediment to economic growth.
In order to analyze inflation, this author prefers to study behavior of GDP deflator over a period of three years. The chart below shows the excess of three year CAGR of Indian GDP deflator over OECD GDP deflator.
</Typography>
</Box>

</Box>
</Link>
</Grid>



<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/emergence_of_singularity'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Emergence of Singularity: Building Anti Fragile Human Race
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Jul 17, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
Nearly all futurists, who think about technology, agree that singularity is between half a generation to two generations away from today. Most of them, except notably Ray Kurtzweil, think that a superintelligent AI will be as indifferent to the needs and aspirations of humans just the way we humans are indifferent to those of ants.
</Typography>
</Box>

</Box>
</Link>
</Grid>




<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/the_fallacy_of_paradox'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
The Fallacy of the Repugnant Paradox
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Jul 10, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
Recently, I became aware of a philosophical topic “The Repugnant Paradox” via an excellent YouTube Video "http://bit.ly/2tWEgf5" . A more technical description of the paradox can be found at
</Typography>
</Box>

</Box>
</Link>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/ai_heuristics_and_bio'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Artificial Intelligence, Heuristics and Biomimicry
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
May 29, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
Across the world, AI is the talk of town for last two years or so. This area of enquiry is making significant strides day by day, covering more and more ground, and will catch up with animal level intelligence sooner rather than later.
</Typography>
</Box>

</Box>
</Link>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/incentive_structure_for_AI'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Incentive Structure for building Artificial Intelligence with a sense of morality
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Apr 17, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
Recently, our Head of Talent Management pointed out to me that AI applications, mainly chatbots, seem carry the same biases that humans display.
</Typography>
</Box>

</Box>
</Link>
</Grid>

<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/towards_collective_cons'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Towards Collective Consciousness of Human Race
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Apr 02, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
In my blog report published on the website of Decimal Point Analytics on 14th March 2011, I had posited that Jasmine Revolution (Arab Spring) is indicative of slow emergence of collective human consciousness, enabled by the Internet, while the problems in the Eurozone currency area at that time are indicative of the fact that our collective consciousness is not at the same level as that of a colony of honeybee.
</Typography>
</Box>

</Box>
</Link>
</Grid>


<Grid item lg={6} md={6} sm={6} xs={12}>
<Link to='/need_trade_wars2'>
<Box className='reportm_bg'>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Do we really need trade wars to shrink international trade-flows in Physical Goods?
</Typography>
</Box>

<Typography variant='h6' className='skblue'>
Mar 19, 2017
</Typography>

<Box className='line'></Box>

<Box mt={2}>
<Typography variant='h6' className='black jst thr'>
In the recent weeks the headlines are screaming about the impending trade wars, the expected shrinkage in global trade and its impact on the overall welfare of the humankind.
</Typography>
</Box>

</Box>
</Link>
</Grid>




</Grid>   
</Box>

</TabPanel>



<TabPanel value={value} index={2}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography variant='h2' className='black'>
Infographic
</Typography>
</Box>
</Grid>
</Grid>

<Box className='reportinfo'>
<Grid container spacing={1} alignItems="top">
<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/chinaauto'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+info1+')', }}></Box>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
China Auto Finance Market
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/taxi_aggregator'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+info2+')', }}></Box>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Taxi Aggregator Market
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/the_indian_industry'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+info3+')', }}></Box>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
The Indian Tea Industry
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/laser_Therapy'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+info4+')', }}></Box>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Laser Therapy
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/white_label_ATM'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+info5+')', }}></Box>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
White Label ATMs
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>




</Grid>   
</Box>

</TabPanel>


<TabPanel value={value} index={3}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography variant='h2' className='black'>
Case Studies
</Typography>
</Box>
</Grid>
</Grid>

<Box className='reportinfo'>
<Grid container spacing={1} alignItems="top">
<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/nav_calculations'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+case1+')', }}></Box>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
NAV Calculations for Portfolio Management
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/intelligent_doc_processing'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+case2+')', }}></Box>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Intelligent document processing of Rent Rolls for an Asset Manager
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/data_managment_for_CRM'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+case3+')', }}></Box>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Data Management for Efficient CRM Usage
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/response_management_system'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+case4+')', }}></Box>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Response Management System for Fund Raising
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/portfolio_monitoring'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+case5+')', }}></Box>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Automated Portfolio Monitoring System for a Private Equity firm
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/robotic_process_automation'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+case6+')', }}></Box>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Robotics Process Automation (RPA) for Credit Funds
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/customized_credit_platform'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+case7+')', }}></Box>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Customized Credit Platform for Financial Institution
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={4} sm={6} xs={12}>
<Link to='/intelligent_dashboard'>
<Box className='reportm_bg'>
<Box className='reportimg_bg' style={{ backgroundImage: 'url('+case8+')', }}></Box>
<Box mt={2} mb={2}>
<Typography   className='reporttitle two '>
Intelligent Dashboard Solution for Banks
</Typography>
</Box>
<Box className='line'></Box>
</Box>
</Link>
</Grid>



</Grid>   
</Box>

</TabPanel>




    </Container>
    </Box>



                   



        </>
    );
}
