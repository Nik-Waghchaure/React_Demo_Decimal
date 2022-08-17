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


export default function Disrupting_asset_management() {



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
    Disrupting Investment <br/> Research Process
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
    
    <Typography variant='h6' className='black jst'>Investment research process for asset managers is ripe for innovation. The current research methodologies have not seen any significant change in the past many decades. The process in its current form has been stretched to its limits. Many in the industry feel that emerging technologies in the area of data analytics will lead the way. Extracting insights from data is emerging as a differentiating factor in the asset management industry. </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Need to add data analytics in the investment research process </Typography>

    <Typography variant='h6' className='black jst'>Fundamental data and information have been fairly democratized, and it is difficult for any investment manager to generate any considerable alpha generating insights from it. It is becoming difficult to extract superior performance purely based on financial modelling skills. We have delved about this in depth in our last article here. This process will help you decide on a broad framework for the potential solution and measure the success too. </Typography>

    <Typography variant='h6' className='black jst'>With this shift in the role of data, it’s important to devise an effective data management strategy. In a nutshell, data strategy is to establish a process of accessing different data sets and deriving insights using it. It involves aggregating data from multiple sources, both internal and external, and then using models to approve or disapprove a hypothesis. </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'> Understanding the Data Ecosystem </Typography>


    <Typography variant='h6' className='black jst'>Identifying data sources is a key step in the process of creating a data analytics strategy. The process isn’t complex, a prerequisite for data sourcing is having a good understanding of the various industry segments and their key drivers to valuation and performance. This means strong coordination between data managers and the investment team. The firm can proceed to make an informed choice about which internal data sources can be consumed and what external data they wish to acquire.</Typography>

    <Typography variant='h6' className='black jst'>Managers can choose from both, structured and unstructured data. Structured data is mostly stored in relational databases. Unstructured data makes up 80% and more of internal data and is growing at a rate of 55% and 65% per year. Unstructured data is mostly exhausted data generated in bulk through websites, mobile phones, etc. It also includes email messages, reports, text files, social media data, sensory data, and satellite imagery. These different kinds of data serve different kinds of purposes:</Typography>
    
    <Typography variant='h6' className='black jst'>The biggest challenge at this stage is to decide which data sets are useful for asset managers to acquire.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>The data jigsaw puzzle </Typography>

    <Typography variant='h6' className='black jst'>The approach adopted by most institutional data acquisition teams today is basically quantitative. This results in most data being viewed in a very isolated manner. They are testing whether the new data-set on offer is able to generate a signal quantitatively. Often such tests lead to rejections. On a fundamental basis, it is like attempting to explain stock price movement by just a single financial parameter. </Typography>

    <Typography variant='h6' className='black jst'>In order for the alternative data sets to provide insights, it is important to create a data map that completes the picture on a more holistic basis. Just as different pieces are required to complete a picture in a jigsaw puzzle, these layers of alternative data sets will have to be pieced together. This requires an analyst’s mind first, and then a data scientist. </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'> <em>User-friendly Interface </em></Typography>

    <Typography variant='h6' className='black jst'>Once there is a healthy alternative data-set, how do fund a managers/analysts extract insights from such data sets, and how they are able to add these insights as a layer in their investment process.</Typography>

    <Typography variant='h6' className='black jst'>An important step towards extracting insights is creating an intuitive and user-friendly interface. User adoption can be greatly hampered if the user interface is not up to mark. There should not be a steep learning curve during adoption. It should be easy to ingest data and produce outputs</Typography>

    <Typography variant='h6' className='black jst'>The interface should also integrate visualization tools so that the insights can be easily communicated and shared with the executive teams with time constraints.</Typography>
        
        
    <Typography variant='h4' className='blue'> <em>Building Reliable Data Models </em></Typography>


    <Typography variant='h6' className='black jst'>To generate valuable insights it is necessary to build reliable data models. To achieve this goal, data scientists will have to collaborate with analysts and portfolio managers to get a deep understanding of the function and industry, to apply the right models and approaches.</Typography>

    <Divider/>
    <br/>


    <Typography variant='h4' className='blue'> Challenges in implementation of big data strategies and advanced analytical tools </Typography>
    
    <Typography variant='h6' className='black jst'>Big data and advanced analytics are powerful tools that can catapult a firm to greater heights and present great possibilities, but the implementation of big data strategies and employing advanced analytical tools for day-to-day operations pose a few challenges. </Typography>

   
    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'> Rolling it out... </Typography>

    <Typography variant='h6' className='black jst'>There are a few institutions that have started to build a comprehensive approach towards creating a data-led investment research process. In many cases, there is a movement towards establishing proof of concept on a few industries. The outcome of this system will be a state-of-the-art information system that taps into the latest news, sentiment, data released digitally anywhere. These would be linked to an industry or a stock and present that to the analyst/fund manager in a near real-time basis. This will enable better insights and timely investment decisions that can help beat competition and benchmark. In the current competitive environment, this ability will clearly bring out the differences between the ‘haves’ and the ‘have nots’ of the Asset Management industry. </Typography>

 

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
