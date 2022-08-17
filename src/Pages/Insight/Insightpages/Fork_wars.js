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


import fork_war1 from "../../../asset/images/insight/insight_pages/fork_wars/fork_wars_1.jpg";  
import fork_war2 from "../../../asset/images/insight/insight_pages/fork_wars/fork_wars_2.jpg";
import fork_war3 from "../../../asset/images/insight/insight_pages/fork_wars/fork_wars_3.jpg";
// images end


export default function Fork_wars() {



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
    Fork Wars A Tale of <br/> two cryptocurrencies
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
   

    <Typography variant='h6' className='black jst'> “Bitcoin” made its debut in 2009, with its creation credited to a pseudonymous coder known as Satoshi Nakamoto. Unlike most currencies, Bitcoin does not involve any bank or third parties. The coins are created by users who “mine” them by lending computing power to verify other users’ transactions and are then rewarded in Bitcoins. Amid much controversy over size and scale, Bitcoin split off in two directions recently, forming a new branch of currency called “Bitcoin Cash”.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Why the Split?</Typography>

    <Typography variant='h6' className='black jst'> For years, a so-called “scaling debate” had been going on within the Bitcoin community. Bitcoin’s existing technology was struggling to cope with the surge in popularity, that has seen its price jump from about $580 in 2016 to over $4,000 now. </Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ fork_war1  } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'> <em>Source: CoinMarketCap</em></Typography>

    <Typography variant='h6' className='black jst'> In fact, there is a big backlog of transactions on the Bitcoin blockchain i.e. the technology that underpins the cryptocurrency. Only 1 megabyte of transactions could be processed at one time, thus leading to delays. Many alternative solutions were proposed for resolving the scaling situation and rejected. SegWit2x, short for segregated witness, involved moving some of the data outside the main Bitcoin network to increase its capacity and is likely to increase the size of Bitcoin blocks to 2 megabytes. However, some miners were unhappy with the proposal and it ultimately resulted in a fork. </Typography>

    <Typography variant='h4' className='blue'>The Birth of Bitcoin Cash</Typography>
    
    <Typography variant='h6' className='black jst'> On 1st August 2017, a user activated hard fork took place and Bitcoin Cash was created. The new digital currency has swung dramatically in price in the initial few days. On 4th August, Bitcoin Cash plunged 30% to below $300, and has recovered since the middle of August to reach a level of $755.  </Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ fork_war2  } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'> <em>Source: CoinMarketCap</em></Typography>

    <Typography variant='h6' className='black jst's> Meanwhile, the original cryptocurrency held up well against its offshoot rival during the volatile early August period. </Typography>

    <Typography variant='h4' className='blue'>The Segwit Lock-in</Typography>
    
    <Typography variant='h6' className='black jst'> Segwit was officially locked-into the blockchain on 8th August 2017. This now sets the timeline for implementation of the SegWit2x, which will be triggered about three months after the SegWit activation. On 8th August, Bitcoin surpassed the $3,500 mark for the first time, hitting a fresh record high as uncertainty over the future of the cryptocurrency subsided. The new technology will free up space for more transactions to take place on the blockchain. </Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ fork_war3  } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'> <em>Source: CoinMarketCap</em></Typography>


    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>What does the future of Bitcoin look like? </Typography>
    
    <Typography variant='h6' className='black jst'> The new strategy to optimise transactions per chain size will facilitate the trading of more Bitcoins on the current infrastructure. The Bitcoin community has lauded this move as a big step in the cryptocurrency world. Moreover, as regulators start sounding positive about Bitcoins and with more institutional investors now considering allocation of funds to Bitcoin, going ahead, the popularity of Bitcoin is likely to increase. For instance, in Switzerland, the financial market regulator has given approval to Zurich-based Falcon Private Bank on managing assets based on the blockchain technology behind Bitcoin and other digital currencies. Separately, the Chicago Board Options Exchange has revealed its plan to offer Bitcoin futures by early next year and the US Commodity Futures Trading Commission has approved a digital currency trading firm called LedgerX to clear derivatives. However, we cannot turn a blind eye to the challenges the cryptocurrency market faces. For instance, its use is limited currently to a small group of merchants at present and the value of bitcoin keeps fluctuating sharply. Moreover, the anonymity in exchanging such virtual currencies magnify the risk associated with laundering and counterfeiting. It is also important to note that like everything else in the crypto universe, no one knows what’s about to happen next!</Typography>


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
