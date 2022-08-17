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


export default function New_age_asset_managers() {



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
    Evolution of the <br/> New Age Avatars of Asset Managers
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
  
    <Typography variant='h6' className='black jst'>Data revolution in recent times has changed the financial market rapidly. Application of Machine Learning and Big Data has enormous potential to generate alpha. A growing number of asset managers have realized this fact and are using these technologies for research and idea generation, trading, compliance, sales, and customer support. Some are also using it for predictive analytics. </Typography>

    <Typography variant='h6' className='black jst'>We have only scratched the surface of what is possible, Asset managers will have to embrace it and make it part of their organizational DNA to make the most of this technology. </Typography>

    <Divider/>

    <Typography variant='h4' className='blue'>  Challenges of an Asset Manager</Typography>
   

    <Typography variant='h6' className='black jst'>An asset manager is busy managing multiple priorities, he has to ensure healthy growth in Asset under management, while keeping clients happy and making a decent profit for the firm. We have highlighted the most pressing challenges that keep asset manager awake at night. </Typography>

    <Divider/>

    <Typography variant='h4' className='blue'>Performance Pressure</Typography>
    

    <Typography variant='h6' className='black jst'>Although most asset managers remain healthily profitable, fees have come under relentless pressure over the past decade. The rise of passive investment funds has made customers far more cost-conscious. Index funds and funds managed by robo-advisors have a low expense ratio and distribution cost which makes them a favorite among the millennial investors.  </Typography>

    <Divider/>

    <Typography variant='h4' className='blue'>Generating Alpha without breaking the bank</Typography>
 
    <Typography variant='h6' className='black jst'>The market is getting more transparent and customers have started asking difficult questions. Managers who charge a premium are not able to justify it because they are not able to beat the market. Asset Managers need to find a way to generate alpha without increasing their cost. Traditional means of adding more research analyst may not augur well in the current environment. They will have to factor in the fundamental shift which the industry has gone through and capitalize on emerging technologies to compete with new age fintech firms which are disrupting the market.  </Typography>

    <Divider/>

    <Typography variant='h4' className='blue'>Regulatory challenges</Typography>
 
    <Typography variant='h6' className='black jst'>Regulators like ESMA have stepped in and have started asking for accountability, compliance on privacy, security, and Investor’s interest in general. Last year, MiFID II came into force to ensure complete transparency with the customer by providing them with clear and relevant information. It also asked businesses to treat customers fairly and put them at the center of the business model. </Typography>

    <Divider/>

    <Typography variant='h4' className='blue'>Technology to the Rescue</Typography>
 
    <Typography variant='h6' className='black jst'>Asset managers who wish to stay in the business will have to find a way to overcome the above challenges. Asset management is a virtual business, but it still operates within a relatively low-tech infrastructure. Asset managers will have to find a solution that incorporates technology which can help them solve these challenges.   </Typography>

    <Typography variant='h6' className='black jst'>With fees under pressure and performance uncertain, creating the optimal infrastructure for front and back offices will be critical. This is likely to involve closer integration with vendors and the technology to plug and play with a number of vendors.  </Typography>

    <Divider/>

    <Typography variant='h4' className='blue'>Alternative Data and Artificial Intelligence</Typography>
 

    <Typography variant='h6' className='black jst'>Asset managers will have to understand the fundamental shift which has happened. With the proliferation of the Internet, emergence of social media and with mobile phones becoming ever so smart there has been a data explosion. Technology is now finding ways and means to use all these data points to generate insights which were not possible earlier. Today we have solved the technical challenges of storing and computing a huge amount of data which had held us back earlier. Once you provide a smart data scientist enough data and computing power he or she can help you figure out trends which were inconceivable for human minds. These insights can then be used to generate alpha which will enable asset managers to deliver superlative performance.  </Typography>

    <Typography variant='h6' className='black jst'>Fund managers are increasingly using Artificial Intelligence to mine for insights from social media feeds, satellite data and credit card data. Others have also deployed analytics tools which help them to perform analysis of web traffic on corporate websites, text analysis of earnings calls transcripts, as well as looking at smartphone geo-location data to see where people are shopping in a bid to improving investment performance. </Typography>

    <Divider/>

    <Typography variant='h4' className='blue'>Automation and Data Analytics</Typography>
 

    <Typography variant='h6' className='black jst'>Asset managers are also deploying a process automation system, which improves trade execution and efficiencies across client servicing, data management, and operational support. Another benefit that fund managers have yielded after deploying AI and big data analytics tools in their processes is an improvement in compliance with various operational requirements like speed and security.  </Typography>

    <Typography variant='h6' className='black jst'>Financial regulatory bodies in various countries have also adopted big data to their systems as they seek to identify strategic trends in the market, as well as, trying to monitor market developments and emerging risks at an early stage. Used together with technologies like machine learning, financial regulators and asset managers can use big data analytics to detect and prevent fraud in the market.  </Typography>

    <Divider/>

    <Typography variant='h4' className='blue'>Emerging Opportunities... </Typography>
 

    <Typography variant='h6' className='black jst'> AsIn conclusion it’s fair to say that asset managers will have to adapt to the new realities of the connected market. They will have to embed data culture within its DNA. AI, Big Data and Automation are going to become more pervasive and those who fail to factor this in their strategy is destined to fall behind.  </Typography>

    <Typography variant='h6' className='black jst'>Asset Managers will have to pivot from their existing business models or else they will become relics of the good old days. The new entrants in the financial markets are born out of this technology and they are managed by the digital natives. If the asset managers want to grow their business then it will be a prudent decision to invest and migrate to the cutting edge version of asset management. Asset Managers have a great opportunity at hand because they have tremendous domain knowledge, experience, and client relationships which can be leveraged along with technology. However, if they do not act swiftly then they will lose their advantage and be disrupted by the new entrants.
    </Typography>


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
