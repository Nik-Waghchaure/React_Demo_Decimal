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


export default function Assessing_quality_of_research() {



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
    MIFID II Assessing Quality <br/> of Research!
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
   


    <Typography variant='h6' className='black jst'> With the forced unbundling of research costs, regulators have knowingly or unknowingly unleashed an environment of introspection. There will be an intense examination of whether the research budget is delivering value. One of the biggest positive impacts of MiFID II is an expected improvement in the quality of research. </Typography>
 

    <Divider/>
  

    <Typography variant='h4' className='blue'>Evolution of Research Product Structure </Typography>
    
    <Typography variant='h6' className='black jst'>Pricing models will result in structured research menus for investment managers. Portfolio managers will have to closely review the kind of research input, considering that they must pay for it now. So far, this decision was only about procuring data. Research is ultimately a combination of data, information, and insight. Data has already been commoditized, and information is also commonly available. The evolving research pricing structure is pointing in that direction. </Typography>

    <Typography variant='h6' className='black jst'> Lowest in the hierarchy of such research is the general commentaries, market and news summaries, in most cases, this will be provided for free. Research providers produce research in the form of basic written reports covering equities, credit and interest rate views. Slightly above this in the value chain would be the financial model, and the highest being actual facetime/talk time with the analyst.   </Typography>

    <Typography variant='h6' className='black jst'> The research pricing will settle down to a reasonable pricing for the basic research. However, premium services will be highly differentiated and will depend on the true perceived value of the analyst’s insight.  </Typography>


    <Divider/>


    <Typography variant='h4' className='blue'> But how do you Determine the Right Price for Research? </Typography>
    
    <Typography variant='h6' className='black jst'>The two key elements to consider is the value of research input and its price. And as financial market participants, we all know only too well, that most of the time there is a healthy disconnect between the two. There is a considerable effort being made to determine the value of research in a methodical manner because the value of research will determine the price for it. </Typography>

  
    <Divider/>
 

    <Typography variant='h4' className='blue'> Quality and Value of a Research Input  </Typography>

    <Typography variant='h6' className='black jst'>Interestingly, there is a very simple and methodical way through which investment managers can get a sense of the value of research. An important indicator of value and quality of a research piece is how many people actually read it and who those people are. In any investment organisation, research is consumed across various levels right from CIO, portfolio manager, senior analyst to the junior analyst. A knowledge management system that enables this in the least possible time will give clear and consistent results.  </Typography>

    <Typography variant='h6' className='black jst'>While that may be the case for the basic written research report, what about analyst insights gained through a conversation on the phone? Emerging processes seem to indicate a methodology that involves rating by the user after an exchange. There is a methodology by which this could be deepened again by using a methodical knowledge management system.  </Typography>

    <Typography variant='h6' className='black jst'> Again, this can have a methodical approach that will provide clear input on how these are evaluated, specifically having the portfolio manager/analyst file a call report, along with a rating. This call report can also be shared in the knowledge management platform so that it becomes available to everyone in the organisation. So, along with the rating, there are also data points showing how many people who read the call report. </Typography>


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
