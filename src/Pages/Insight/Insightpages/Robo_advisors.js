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

import robo1 from "../../../asset/images/insight/insight_pages/robo_advisor/robo1.png";

// images end


export default function Robo_advisor() {



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
    Will Robo-advisors disrupt <br/> the dynamics in <br/> the financial services industry
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
   

    <Typography variant='h6' className='black jst'>Advances in areas of Artificial Intelligence (AI), Machine Learning (ML) and Natural Language Processing are starting to disrupt business models in various industries – by helping automate complex activities that were previously thought to be the sole prerogative of humans. Within financial services, some innovative fintechs have focused on offering solutions for managing wealth digitally, which potentially disrupts the traditional human-advisor based wealth management approach. This has led to the emergence of automated digital financial advisers, also known as Robo-advisors.</Typography>

    <Typography variant='h6' className='black jst'>Robo-advisors employ algorithms to sift customers based on their risk appetite by screening responses from a behavioural questionnaire. For diversification, Robo-advisors typically recommend a portfolio of low-cost ETFs, which helps in keeping costs low. Robo-adviser fee typically ranges from 0.15% to 0.50% of assets, compared to the range of 1.0% to 2.0% of assets charged by traditional wealth advisors. Besides, Robo advisors provide highly cost-effective services with features such as portfolio construction, automated rebalancing, and tax-loss harvesting. The basic premise of Robo-advice is that technology (algorithm) is transparent, and can provide sound and unbiased financial advice at a fraction of the cost of what human advisors charge.  </Typography>

    <Typography variant='h6' className='black jst'> The new generation is quite tech-savvy and prefers to transact using digital tools. Various studies suggest that consumers across all asset classes are interested in using Robo-advisory services, including the wealthy (HNIs) investors. The success of robots to date indicates that clients want digital tools served with their financial services. The advent of Robo-advisers has taught the traditional financial advice industry that they need to embrace new technologies that people are exposed to in other areas of their life. The traditional wealth managers need to integrate Robo-advisory services into their offerings otherwise, they stand the risk of losing substantial assets to competition (to both - the standalone fintech firms offering Robo-advisory services and the traditional wealth managers combining Robo-advisory services in their offerings).</Typography>

    <Divider/>
    <br/> 

    <Typography variant='h4' className='blue'>The following chart shows top Robo-advisors by assets under management (in million U.S. dollars) </Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ robo1  } className='topbanner2'/>
    </Box> 


    <Typography variant='h6' className='black jst'>  Source- Statista, March 2021 </Typography>

    <Divider/>
    <br/> 


    <Typography variant='h4' className='blue'> Industry Outlook</Typography>

    <Typography variant='h6' className='black jst'> Data from Statista shows that capital managed by Robo-advisers worldwide reached almost $1 trillion in 2020, and the forecasts have been adjusted for the subsequent years: the expected annual AuM growth rate is of 26%, to reach $2.5 trillion by 2024. Given the continuing proliferation of digital tools in all walks of life, we see huge growth potential for Robo-advisors. This is also reflected in the growth projections of industry analysts which have shown the increase in the capital managed by Robo-adivsors to increase from $827 billion and expected to grow to reach $1.2 trillion by 2024 </Typography>

    <Divider/>
    <br/> 

    <Typography variant='h4' className='blue'> The Way Ahead</Typography>

    <Typography variant='h6' className='black jst'>The Robo-advisor technology in its current form has some key limitations. To begin with, it is suitable for only those investors which require very basic financial planning or have a smaller investment portfolio. Moreover, it doesn’t present a holistic financial plan that incorporates various variables and complexity involved in making financial decisions. It usually recommends a low-cost passive portfolio. Besides, making decisions about money involves emotions and other intangible aspects. The more complex one’s needs get the more the need for human interaction</Typography>

    <Typography variant='h6' className='black jst'> In our opinion, adopting a hybrid model that combines the substantial algorithm component with human interaction in the advisory process, is the best strategy that traditional industry can employ to remain competitive. To protect their market share, wealth managers should strongly target ‘digitizing’ their businesses. The unique advantage of adopting a hybrid model is that it enables banks to tap into huge volumes of additional personal data. It is extent to which the traditional model leverages this additional data that would give them an edge over standalone firms (offering robo-advisory services only) in the market. Moreover, implementing a hybrid model can help in keeping the overall cost of managing assets low.</Typography>

    <Typography variant='h6' className='black jst'> Digital advisers are hiring human advisors and traditional financial advice firms are deploying automation (case in point of Robo-advisor firm Betterment, which added human advice with its digital advice offering). As Vanessa Oligino, Director of business performance solutions at TD Ameritrade Institutional has remarked, "Human plus digital is really the way things are going for the future".</Typography>

    <Typography variant='h6' className='black jst'> Regarding the argument whether Robo-advisors would increasingly replace human-advisors in the future would depend on few critical questions: Can Robos outperform actively managed funds? Will the development in AI and NLP empower Robos to provide entire financial advice services? Are people inclined to entrust wealth management entirely to technology without the presence of the human element? The level of technological advancement in AI would be a key factor shaping the future of the wealth management industry.</Typography>
    
    <Typography variant='h6' className='black jst'> Decimal Point Analytics (DPA) can assist you in determining and implementing the right robo-advisory tools for you, based on your specific requirements. We can cover all phases in implementing a Robo-advisory platform, which includes planning, designing, building, deploying, and on-going monitoring</Typography>


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
