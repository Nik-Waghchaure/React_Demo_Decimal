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


// images end


export default function Way_forward_for_asset_management() {



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
    Big Data and Analytics, <br/> the way forward for Asset Managers!
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
   
    <Typography variant='h6' className='black jst'> Active managers continue to face strong headwinds for a couple of reasons. There is a strong market which is driven by liquidity on steroids. Then there are passive funds with dramatically low management charges, and the less than the ordinary performance by a large segment of fund managers haven’t helped either. However the final nail on the coffin has been the cavalier, but well-directed actions by regulators. These headwinds have exposed the weakness and inertia of many industry participants.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Need for innovation</Typography>
 
    <Typography variant='h6' className='black jst'><em> Everything flows, and nothing abides, everything gives way, and nothing stays fixed." - Heraclitus </em> </Typography>

    <Typography variant='h6' className='black jst'>Investment management industry has the presence of many large investment institutions, some of them in existence for over a century and some more recently. These institutions have established investment practices which is considered as a holy grail for successful investing. However, these Investment research methodologies have not seen any innovation for many decades. Technology has made it possible for the perfect implementation of such research methodologies, to add to that information and data is now freely available and easy to access. Even retail investors have the same access to information and data as most institutions. </Typography>

    <Typography variant='h6' className='black jst'>Active managers have to innovate to find their way out of this mess. They have found their path to redemption by implementing emerging new approaches to management using input and insight made possible by harvesting the ever-increasing flow of digital footprint of most aspects of various businesses and industries. This involves collecting and organising these big-data sets, and setting up advanced analytical techniques.</Typography>

    <Divider/>

    <br/>

    <Typography variant='h4' className='blue'> Understanding Big-data.. </Typography>

    <Typography variant='h6' className='black jst'>There are different definitions of Big-data floating about, however, one definition that brings out the true essence describes it as unstructured sets of data that are so large that traditional data handling tools are not equipped enough to process or analyse it. Three aspects that are key to understanding big data are: volume, variety and velocity of data.</Typography>

    <Typography variant='h6' className='black jst'>Some asset managers have started to aggregate, a multitude of such data sets. These are data sets containing credit card transactions, satellite imagery, and others that give hints of emerging trends about different aspects about a company or industry prospects.</Typography>

    <Divider/>

    <br/>

    <Typography variant='h4' className='blue'>Making sense out of these data sets.. </Typography>

    <Typography variant='h6' className='black jst'><em> When we try to pick out anything by itself, we find it hitched to everything else in the universe. - John Muir</em> </Typography>

    <Typography variant='h6' className='black jst'>These large sets of data, if analysed properly, can provide patterns and trends that give valuable insights. In order to get these insights, advanced analytical tools such as machine learning, natural language processing, and robotic process automation are deployed. </Typography>

    <Typography variant='h6' className='black jst'>Asset managers have so far been able to make a difference on investments either through unique insight or through unique information (which may or may not be publicly available). This situation has undergone tremendous change due to technology and in some respect strong actions taken by the regulators. Asset managers while continue to follow various fundamental, technical and quantitative approaches, they are now seeking a unique understanding of underlying trends and sentiments relating to various key factors that affect company performances and valuations.</Typography>

    <Divider/>

    <br/>

    <Typography variant='h4' className='blue'>Advanced Analytics – and how it’s used..</Typography>

    <Typography variant='h6' className='black jst'>Machine learning makes available a plethora of possibilities for asset managers to process information and data in the right way and hence obtain these valuable insights.</Typography>

    <Typography variant='h6' className='black jst'>Natural Language Processing, like machine learning, is a subset of artificial intelligence, capable of understanding human language as it is spoken. Human language and communication are tricky as it is often not literal. NLP enables the machines to understand human conversations like another human does. NLP can help gauge investor emotions in the market based on their interaction amongst themselves.</Typography>

    <Typography variant='h6' className='black jst'>There are algorithms that have been developed to identify the common themes that maybe more relevant for a particular quarter for companies in similar industry lines. These can be done by textual processing of earning call transcripts.</Typography>

    <Typography variant='h6' className='black jst'>An NLP search can sift through market conversations and look for either positive or negative words. These words can then be attributed to a positive or a negative sentiment in the market and decisions can be taken based on that. On the back of such capability, asset managers are able to identify specific sentiments in the management commentary in their statutory filings. </Typography>

    <Typography variant='h6' className='black jst'> An algorithm can then evaluate the best momentum signal (derived from market performance over recent time periods) for predicting future market performance or to try to predict how much the market will move if there is a sudden spike in inflation. </Typography>
    
    <Typography variant='h6' className='black jst'> Similarly an algorithm could find that, at a certain point in time, the market is being driven by various factors, such as momentum factor, energy prices, level of US dollar, and liquidity. </Typography>
    
    <Typography variant='h6' className='black jst'> Another application of machine learning is in the area of identifying relevant news along with specific hint of sentiment in such news articles.  </Typography>
    
    
     
    <Divider/>
    <br/>


    <Typography variant='h4' className='blue'> Challenges in implementation of big data strategies and advanced analytical tools </Typography>

    <Typography variant='h6' className='black jst'>Big data and advanced analytics are powerful tools that can catapult a firm to greater heights and present great possibilities, but the implementation of big data strategies and employing advanced analytical tools for day-to-day operations pose a few challenges. </Typography>

   
    <Divider/>
    <br/>


    <Typography variant='h4' className='blue'> Access to reliable, unique and potent data - </Typography>

    <Typography variant='h6' className='black jst'>IBM estimates that 90% of the world’s data was created in the past two years. In this age where infinite amounts of data are being generated every moment, it’s important to know where to access the most potent and useful datasets from. Asset managers, while accessing alternative data generated by clients should be careful that the data is unique and is being accessed without any breach of privacy and that the source of data is reliable. </Typography>

   
    <Divider/>
    <br/>


    <Typography variant='h4' className='blue'> Refining big data models from time to time -</Typography>

    <Typography variant='h6' className='black jst'>Majority of strategies and models in the asset management space are based on market signals. After some time, the decay effect of signals starts taking over as competitors adjust and respond to the same market signals. Hence for the continuation of efficient operations, it is essential to review and refine big data strategies from time to time. </Typography>

   
    <Divider/>
    <br/>


    <Typography variant='h4' className='blue'> Implementation of big data strategies - </Typography>

    <Typography variant='h6' className='black jst'> Much has been talked about big data and advanced analytics but there are still a lot of blanks that need to be filled on the practical, application-based knowledge front. A recent survey conducted by industry service providers showed that, over 70% of the respondents believed big data investments as ‘Very Important’ or ‘Somewhat Important’. However, about 50% of the respondents did not have adequate big data capabilities or were in the initial stages of building their big data capabilities. As an evolving field, the big data industry suffers from a lack of manpower adequately equipped with the skills to navigate the space of big data and advanced analytics and get desired results.  </Typography>

   
    <Divider/>
    <br/>


    <Typography variant='h4' className='blue'>Bridging the skill gap - </Typography>

    <Typography variant='h6' className='black jst'>An asset management firm’s current pool of employees are highly experienced analysts and fund managers who have been working using various resources that have been available for many years. These employees now need to adapt to the new environment. This will give them the ability to add insights from new sources of data, while applying their own in-depth understanding of business models and the industry. Achieving this transition can prove to be the most challenging task. </Typography>

    <Typography variant='h6' className='black jst'>To sum it all, the asset management is in a nascent stage of big data and advanced analytics adoption. While some of these challenges seem daunting however, they are certainly not insurmountable. The dynamics of the asset management industry is ripe for a big dose of innovative change. And these will be facilitated by numerous ancillary technology companies that will play an important role in this evolution. </Typography>

 

<Divider/>


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

    <Tooltip title="Linkedin">
    <a href='https://www.linkedin.com/company-beta/523783/?pathWildcard=523783' target='_blank'>
    <IconButton aria-label="Linkedin" className='icbg'>
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
