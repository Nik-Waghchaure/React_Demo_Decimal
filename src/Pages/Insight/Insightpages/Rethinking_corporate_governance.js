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


export default function Rethinking_corporate_governance() {



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
    Rethinking Corporate  <br/> Governance Framework in the <br/> Digital World
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
   

    <Typography variant='h6' className='black jst'> We implicitly believe that a democracy represents the will of the People, as expressed through the legal institutions and infrastructure in the country. It’s common to blame the ineffectiveness of elected political office bearers if the law is found at odds with the will of the People.</Typography>

    <Typography variant='h6' className='black jst'>However, the legal framework of a nation, enshrined in the complex web of laws, customs, rules, and regulations is as much a product of the technology of the times during which the legal infrastructure had been established for the first time, as much as the will of the People. As the arrow of time continues its inevitable journey; the technology evolves much faster than the will of the People. Moreover, when the changes in the law are considered, more often than not, the changed technological background is given scant consideration, if at all. What is worse is that some of the constraints that the legal framework yoked onto itself in its first iteration, mainly due to inadequacy of the technology of the time become key habits of the people and differentiating features of the law; thereby making it nearly impossible to move the legal framework at the same rapid speed as the technology evolves.  </Typography>

    <Typography variant='h6' className='black jst'> HoThe current state of corporate governance is one of the prominent poster of the trends that I have described above. The Company Act first emerged during the age of horse and buggy and of manual record keeping. Hence, it can be reasonably assumed that the lawmakers prescribed annual filing of accounts and giving as much as six months in most jurisdictions to file the annual accounts for all body corporates. Obviously given the cost of information processing of the 19th century, this can be considered a prudent trade-off in the availability of information and cost of information.</Typography>

    <Typography variant='h6' className='black jst'> However, now we are in the 21st century and still, the same framework applies for all body corporates – with exception of the listed companies requiring filing either quarterly or half-yearly accounts based on the local laws. </Typography>

    <Typography variant='h6' className='black jst'> In this age when information can be collected, processed and published at zero marginal cost, the tradeoff between availability of information and cost of information does not exist. One can imagine, with minor changes in the existing processes, large listed companies will be able to publicize their financial information on daily basis. </Typography>

    <Typography variant='h6' className='black jst'> I can imagine eyes rolling and muffled howls of protest from many readers at the suggestion of daily publication of financial results of listed firms- for all of us are creatures of habit and our worldview is shaped more by habits than by expediency and fairness. </Typography>

    <Typography variant='h6' className='black jst'> In fact, if one applies one’s mind, a stock in a company changes hands million times every day based on information on the financial health of the company which is at best 40 days old and is 80 days old for most cases. Since this is the only world that we know, we find no irony that stock trading has moved from open outcry system a quarter century ago to HFT algorithms while the information dissemination frequency has not kept pace with falling cost of information processing. Also, we have come to accept high-cost legal monitoring mechanism for prevention of insider trading emanating as a result of the unnecessary delay in publication of information. We also accept the unreasonable demands that are placed on the board members as a result of this undue lack of transparency enshrined in the extant laws. Of course, the above is just one example of what is possible in the field of corporate governance by use of technology. More such applications can be thought about and deployed in all aspects of corporate governance. </Typography>

    <Typography variant='h6' className='black jst'> Maybe it’s time now that all the stakeholders radically rethink how the corporate governance framework should change in the view of technological progress in our lifetimes. Bringing corporate governance practices in resonance with the possibilities enabled by technology will reduce conflict of interest, frauds, misrepresentations and increase stakeholder welfare. </Typography>


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
