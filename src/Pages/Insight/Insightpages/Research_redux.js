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


export default function Research_redux() {



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
    Research Redux
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
   


    <Typography variant='h6' className='black jst'> There is no doubt that since the start of the millennia, capital markets have witnessed excesses on a scale that haven’t been seen before in many respects. </Typography>

    <Typography variant='h6' className='black jst'>In the past few decades, the size of some global banking institutions became so large and their influence so strong, that they could not be prevented from seeking high returns while taking greater risks than what was justified. These excesses took the market and the global economy over the cliff.  </Typography>

    <Typography variant='h6' className='black jst'> The resultant free fall and the huge social, economic fallout were bound to follow. From what it seems, there are no sacred cows anymore. There is an uneasy feeling that the system that led us to this disaster would eventually be dismantled. Or at least the research and information part of it has already started to face the music.  </Typography>



    <Divider/>
    <br/>


    <Typography variant='h4' className='blue'>Need to Unbundle… </Typography>
    
    <Typography variant='h6' className='black jst'> Information distribution in the form of research is a key part of the free market system, and it was no exception to the abuse. Selected access to information was misused to make money. A business model evolved where large fund managers passed on expenses to final investors. This was in the form of transaction fees that bundled in the cost of research and ideas that the brokers offered to professional fund managers. </Typography>

    <Typography variant='h6' className='black jst'>The lack of transparency led to an eco-system, which allowed sub-standard research to thrive in an opaque pricing environment. It was a system that didn’t penalize the investment product/fund managers to allow the subsistence of sub-standard research as the ultimate burden was passed on to the final investors. This system allowed the subsistence of sub-standard asset managers too.  </Typography>

    <Typography variant='h6' className='black jst'> After the financial crisis in the last decade, regulators around the world have started to notice various anomalies and have started to take action.  </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>MiFID II Impact …  </Typography>
    
    <Typography variant='h6' className='black jst'>The current set of guidelines along with other regulatory measures will have a profound impact on the business models of the financial services arena. Businesses at all levels of the industry have gone back to the drawing board. Some weak players may even consider exiting, as they find the new reality too tough to survive, considering their underperformance over passive and low-cost investment options. </Typography>

    <Typography variant='h6' className='black jst'> Once this regulation is implemented, both buy side and sell side will be affected. Currently, buy side doesn’t consider research as an important factor in choosing a firm for transactions. The regulatory mandate will lead to more selective consumption of research which will help in an uptake of quality. We foresee following upcoming changes. </Typography>


    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Sell Side – Reduced research, higher quality…  </Typography>

    <Typography variant='h6' className='black jst'>Research has been shared as a free service till now which is bound to change in the MiFID II era. The asset managers will run the risk of being accused of inducement to trade unless they explicitly pay for the service.  </Typography>

    <Typography variant='h6' className='black jst'> The free research also meant that ensuring quality was nobody’s business. There was a lot of redundancy in research which was shared. All these issues will be solved and now sell side will have to charge for the research. New pricing models will evolve, where a base price will allow you a certain amount of written research. While access to a high quality analyst who offers their views as research service will be offered as a premium service. To counter the risk of inducement, expenses related to trade execution and information flow will be unbundled. </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Buy Side – Increased internal research, emphasis on research process…  </Typography>

    <Typography variant='h6' className='black jst'> The contraction at the sell side research will result in asset managers going for a bigger internal research team. The general trend will be more inclined towards niche research rather than general sectoral reports. There will also be more focus on quality and speed which will result in greater use of technology and automation in research. To create more valuable reports more data sources will have to be explored. Insights will be mined using data exhaust and data points from the internet of things. To process such humongous volume of data, machine learning and AI-based systems will have to be deployed. </Typography>


    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Financial Markets – overall improved transparency, structural shift in businesses…  </Typography>

    <Typography variant='h6' className='black jst'>We truly believe that MiFID II and the accompanying regulations will result in a fairer, safer and more efficient market. Successfully navigating this complex and new regulatory environment will require a systematic and methodical structure. The investment management industry will revolve toward ultra-active managers and low-cost passive managers, with lesser room for anything mid-way. </Typography>


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
