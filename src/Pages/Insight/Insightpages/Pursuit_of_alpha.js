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


export default function Pursuit_of_alpha() {



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
    In pursuit of Alpha: <br/> The rise of data-driven <br/> decision making with  help of <br/> AI/ ML technologies. 
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
   


    <Typography variant='h4' className='blue'><em>"There is no force more dramatic today than technology and its potential to transform the asset-management industry"</em></Typography>

    <Typography variant='h6' className='black jst '> - Larry Fink, chairman and CEO of BlackRock Inc, in its 2016 annual letter to shareholders </Typography>

    <Typography variant='h4' className='blue'>The Backdrop</Typography>
    
    <Typography variant='h6' className='black jst'> The last couple of years have been challenging for the asset management industry on several fronts, with active investment strategies finding it hard to outperform benchmarks/ broader indices. Alternative investments largely failed to beat performance of other asset classes, with average Hedge fund returns lagging those of S&P 500 (underperformance of 6% vs. S&P in 2016). This trend has continued to steer the persistent shift of assets from active strategies to passive products. Besides, wealth managers have faced difficulties to comply with increased regulatory oversight in recent years. Added to it, a slew of innovative technologies from Fintechs (most prominently Robo Advisors) have disrupted the market dynamics in the sector.  </Typography>

    <Divider/>
    <br/>


    <Typography variant='h4' className='blue'>Searching alpha in big data </Typography>
    
    <Typography variant='h6' className='black jst'> One of the central tenets of superior asset management has always been about building an edge in information asymmetry by accessing new and insightful sources of information. In this context, institutional investors always had edge over retail investors. Within institutional assets, fund managers moved from employing better analysts to conducting channel checks and then building expert networks and so on in the pursuit of alpha. Given the number/types of data sources and the quantum of data that was generated a few years ago, the aforesaid approach worked quite well. With the exponential growth in information and humongous data that continues to be generated every day, it is no longer possible for human capacity alone to effectively make sense of this data. This has made finding an edge in investing harder than ever. </Typography>

    <Typography variant='h6' className='black jst'>Meanwhile, computing power and data storage capacity have improved significantly during the same period, and are available at reduced cost. This has driven several participants to adopt Artificial Intelligence (AI)/ Machine Learning (ML) algorithms that make use of data science and other quantitative investment techniques into their investment framework. </Typography>


    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Data is the Oil of the 21st Century </Typography>
    
    <Typography variant='h6' className='black jst'>The past few years have seen exponential rise in the amount of data generated each day, with some estimates suggesting that 90% of the data in the world today has been created in the last two years alone. The massive increase in the amount and diverse types of data has prompted several asset managers to build their business strategy around ‘Big Data’ investment framework.</Typography>

    <Typography variant='h6' className='black jst'> At the heart of Big Data investing strategy is being able to find and analyse information earlier than competition. For instance, satellite imagery of car parking lots outside stores of a major retailer can give an idea to a Retail sector portfolio manager about store-specific sales and demand before it is disclosed by the company in its financial results. Though big data adoption in asset management is still in its infancy, we see big data strategies as a competitive differentiator going forward, facilitating better asset/stock selection via superior insights.</Typography>


    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'> Glimpse into some Asset Managers’ AI/ML initiatives </Typography>

    <Typography variant='h6' className='black jst'> BlackRock, the world’s largest asset manager, is developing its quant research strategy around ML and is exploring various social media and web search data sets for unique insights. The back-tested successful quant ideas will be utilized into constructing Blackrock’s smart beta products, or build passive ETFs that give exposure to specific return factors. Merrill Lynch is testing an AI-driven stock-picking tool to identify attractive small caps that traditional fundamental analysts might have missed. </Typography>

    <Typography variant='h6' className='black jst'> In June 2017, a new ETF (named ‘Equbot with Watson AI Total US ETF’ from ETF Managers Group) was filed with U.S. SEC that would employ IBM's Watson AI platform for picking stocks. The ETF's approach to stock picking is "based on the results of a proprietary, quantitative model” that will conduct “an objective, fundamental analysis of U.S.-listed common stocks and REITs based on up to ten years of historical data and apply that analysis to recent economic and news data.” There is increasing recognition of the value of data analytics in financial investments.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Concerns over Jobs ‘displacement’ by AI/ML and the role of humans in the future </Typography>

    <Typography variant='h6' className='black jst'>While increasing automation is fraught with the risk of replacing several jobs in the financial industry, we believe that there are several areas where automation cannot replace human analysts/portfolio managers. It is difficult to foresee a world where there is no place for human intuition and supervision. We would tend to believe that humans would continue to do a far better job in the foreseeable future than machines in understanding the context, comprehending narratives, perceive changes in regimes and market sentiments, and in anticipating political/central bank responses. We have seen that human evolution has survived every major technological revolution, adapted to changes brought about by it, and has on the whole reaped immense benefits in the process. There is nothing to believe that this time will be any different. However, clearly the challenge this time seems to be higher than ever before.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Conclusion </Typography>

    <Typography variant='h6' className='black jst'>Accessing sources of information that provide superior insights and unique methods of extracting such data have always provided an edge in investing. We believe that sustainable alpha generation in the future will ever more be a function of uniquely insightful data-driven investing approaches.</Typography>

    <Typography variant='h6' className='black jst'>Perceptions around data science and AI/ML in asset management are changing, as doubts around the effectiveness of AI/ML technologies are giving way to fears of missing out on the opportunity to leverage them as a profitable tool. We see asset managers, across fundamental and quantitative approaches, increasingly adopt AI/ML techniques and firmly believe that such asset managers will be better placed to reinforce their value proposition, gain market share, and emerge winners in the future.</Typography>



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
