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


export default function NLP_technique() {



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
    How Asset Managers are Leveraging  <br/> Natural Language Processing <br/>(NLP) Techniques
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    <Typography variant='h4' className='blue'>AI-led Hedge Funds have delivered cumulative returns of 3X the overall Funds universe</Typography>
    
    <Typography variant='h6' className='black jst'>A recent analysis by Cerulli Associates, a provider of global asset management analytics, of the assets under management (AUM) and net new flows of Europe-domiciled AI-led funds from 2013 to April 2020 shows solid AUM growth from 2016 to 2019. Notably, the research finds that the cumulative return of AI-led hedge funds was about three-times the overall returns clocked by the hedge fund universe during this period: 33.9% compared to returns of 12.1%. The report finds that European AI-led active equity funds added assets at a faster rate than other active equity funds from January to April this year. The research contends that there “has long been suspicion of the ability of AI to react to unexpected events, such as the coronavirus pandemic, but there is now a sense that the technology has advanced to the point where it is better able to adapt to unforeseen scenarios via the ever growing amount of market data available.”</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Machines can understand the text better than ever before </Typography>

    <Typography variant='h6' className='black jst'>In the investing world, it used to be the case that edge was based on access to better sources of information and superior analysis/number crunching. Given that access to information is no longer a competitive advantage, generating alpha has become much harder. Moreover, with the proliferation of humongous text-based data (unstructured) across media, it is no longer possible for human capacity alone (nor efficient) to read and analyze the data. To drastically cut the text-related grunt work and capture excess returns, the asset managers are increasingly leveraging NLP techniques - a key subset of AI to process unstructured text into actionable insights for decision making. The NLP has wide applications across various business areas. The Covid-19 pandemic and tougher economic climate have only accelerated the use of NLP in investment management. Some of the most compelling applications of NLP include assistance in credit scoring, fraud detection, customer service, chatbots, and document search and processing for business intelligence. </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'> Examples of Some Key NLP Applications in Asset Management :</Typography>


    <Typography variant='h6' className='black jst'>1) During the pandemic,<strong>Blackrock</strong>  employed NLP on research documents to glean insights from analysts many of whom were relatively slow to update their earnings estimates for the first quarter of 2020. The leading asset manager contends that while an analyst may take some time to update a numerical forecast, examining the text of their reports helps capture a true picture of their overall stance in the absence of a standard numerical estimate. Besides, Blackrock has recently also utilized the NLP model to generate sentiment signals for getting an early read on fiscal policy, allowing the investment manager to parse analyst language for a sense of how policy is moving across countries. The investment manager then tilts its portfolio decisions to lean into those with easing tendencies, such as the US. </Typography>

    <Typography variant='h6' className='black jst'>2) Uncovering hidden market signals in equities: Global asset manager American Century Investments uses NLP to complement its research process with an NLP sentiment model that aims to detect deception in management commentary/language during quarterly earnings calls. The NLP model predicated on psychology and computational linguistics has been trained on Russell 3000 companies. It evaluates the text for an indication of deception such as omission (failure to disclose key details), spin (exaggeration from management and overly scripted language), obfuscation (management’s use of complex explanations/storytelling for a simple concept), and blame (deflection of responsibility characterized by the use of language such as ‘bad luck’, ‘challenging environment’, etc.).</Typography>

    <Typography variant='h6' className='black jst'>3) Better Sustainability Investing: Deutsche Bank observed that typically large-cap companies tend to receive overall higher ESG ratings, probably because large firms employ greater resources to write detailed sustainability reports. For instance, about 85% of S&P 500 companies publish sustainability reports. The Bank decided to devise an alternative way to evaluate sustainability reports using the NLP algorithm – to ascertain whether the commitments firms made to reduce carbon emissions were correlated with achieved sustainability performance. For assessing carbon-related discussions within the reports, researchers identified five different topics along with the top keywords associated with each topic. The NLP model ranked companies based on their focus on the mitigation and adaptation topics. The algorithm also checked for mentions of numeric and quantitative terms (like 'first' and 'half'), and for use of active versus passive language. The bank discovered that firms using highly active and numeric language have, on average, a 74% chance of reducing their future emissions. Moreover, companies that frequently discuss mitigating or adapting to climate change have a 65% higher probability of achieving reductions.</Typography>

    <Typography variant='h6' className='black jst'>4) <strong>UBS wealth management</strong> is using NLP in its investment due diligence to detect negative news – via reading and analyzing vast amounts of documents fetched from search engines developed by its in-house AI-team. The algorithm saves hours of time and thus frees up the research team to focus on other critical tasks. In addition, UBS also uses the same model in its client screening process, where profiles are scanned to identify whether features meet a client’s criteria.</Typography>

    <Typography variant='h6' className='black jst'>5) Top institutional investors such as <strong>  AIG and Citadel </strong>are leveraging insights from alternative data such as text in social networks, shopping history, shipping info in order to enhance active investment return and are considering how NLP technology can improve efficiency and scalability in this practice. Moreover, several asset managers have hired in-house technical teams or enlisted third-party providers for automatic ingestion and analysis of public filings and derive signals from sentiment in the news and social media content.</Typography>


    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Closing thoughts</Typography>

    <Typography variant='h6' className='black jst'>Humans are generally better at high-level comprehension of written text and have a better understanding of the context. However, with the rise of myriad sources and enormous quantum of unstructured textual data, it makes compelling sense to harness technology to process such data. Meanwhile, advances in AI such as NLP techniques, coupled with a tremendous increase in computational power are at an inflection point. This presents immense opportunities for asset managers to leverage NLP techniques for deriving reliable insights from textual datasets and build a competitive edge. In the future, there is certainly going to be a huge divide between the firms that leverage technology and data for a competitive edge, and those who are falling behind. In the long run, this will reflect in the flow of assets and portfolio performance of asset managers</Typography>
    
    <Typography variant='h6' className='black jst'>However, a vast number of NLP solutions typically target the streamlining of repetitive tasks. To devise a solution to one’s custom needs and derive tangible gains from its implementation needs domain knowledge. We at Decimal Point Analytics, with our deep finance domain knowledge and expertise in data analytics, have been employing NLP techniques to bring out unique/distinctive insight for our asset management clients, affording them a distinct edge in investing. </Typography>
    
    <Divider/>
    <br/>
    
    <Typography variant='h6' className='black jst'><em> To know more details of projects executed by us or to request case studies featuring asset management firms using Neuro-Linguistic Programming, email us at <a href="mailto:marketing@decimalpointanalytics.com" target='_blank'> marketing@decimalpointanalytics.com </a> </em></Typography>
   
  
    
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
