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


export default function PE_funds() {



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
    PE Funds and <br /> the ESG challenge
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
    <Typography variant='h4' className='blue'>Learn about challenges faced by PE funds while integrating ESG into performance reporting and how DPA solutions are helping to overcome such issues</Typography>

    <Typography variant='h6' className='black jst'>PE Funds have seen enormous growth over last two decades, beating S&P 500 and MSCI World by 2.8% and 4% annually during 2002-2020 as per a research report by <a href='https://www.blackrock.com/institutions/en-us/literature/whitepaper/historical-outperformance-of-private-equity.pdf' target='_blank'> BlackRock </a> . However, rules of the game have changed and they need to equip themselves with an additional tool – ESG (Environmental, Social and Governance) based performance of companies. As per a survey by <a href='https://www.collercapital.com/coller-capital-global-private-equity-barometer-winter-2021-22'  target='_blank' > Coller Capital </a>, a private equity secondaries manager, half of limited partners (LPs) in 2021 rejected committing to a PE fund because of ESG concerns, up from 33% in 2016/2017. </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>The Challenge :</Typography>

    <Typography variant='h6' className='black jst'>However, PE funds, indeed, the entire investors’ community is grappling with numerous challenges with regard to integrating ESG into their performance metrics. The first challenge for PE funds is absence of consistent ESG parameters. While there are a large number of frameworks that have been developed over last few years, such as SASB, GRI, SBT, CDP, TCFD, PRI, UN SDGs, EU SFDR etc, none of these offers standardized guidance and are not universally accepted. This also limits general partners (GPs) ability to share meaningful information with limited partners (LPs) who may be working with another set of ESG metrics. Further, these require large number of data points which are nearly impossible for private companies to collect and report.  </Typography>

    <Typography variant='h6' className='black jst'>The second challenge with regard to ESG data is that a significant part of it deals with qualitative and intangible issues. This limits the ability of PE funds to compare performance across industries or ever across periods and to finalize a course of action to improve the performance. Yet another and the ultimate challenge is to develop a correlation between financial performance and ESG performance. So, would PE funds choose to invest in a company with high ESG ranking but low profitability? Or, would a high ESG score, eventually, lead to higher profitability? While there are no clear answers to these questions at the moment, it is still imperative for PE funds to devise a way to analyse ESG based performance of their portfolio companies.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>The Solution :</Typography>

    <Typography variant='h6' className='black jst'>PE Funds started a collaboration under Institutional Limited Partners Association’s (ILPA) ESG Data Convergence Project to create a ESG framework suiting their needs. The project was launched in Sept’21 and has attracted the commitment of 104 GPs and LPs by Jan’22. They represent around $8.7 trillion of assets and 1,400 underlying portfolio companies. The objective is to evolve a standard set of metrics to evaluate a company’s ESG performance, to be followed across the entire PE industry. The project succeeded in finalising first set of six KPI involving 18 data points to be tracked and reported by the portfolio companies. The KPIs are -  </Typography>

    <Typography variant='h6' className='black jst'>
    <ul>
        <li>Greenhouse gas emission.</li>
        <li>Renewable energy percent. </li>
        <li>Board diversity.</li>
        <li>Work related injuries.</li>
        <li>Net new hires.</li>
        <li>Employee engagement.</li>
    </ul>
    </Typography>
    <Typography variant='h6' className='black jst'> The most important attribute of these KPIs is that they are quantifiable and comparable across companies and industries. A limited number of KPIs were chosen so as to not burden the GPs and their portfolio companies. Further, it leaves room to further expand as the capabilities improve. However, even these are not such an easy metrics to track. For instance, greenhouse gas emission. The challenge is greater for newer companies which have limited resources at the initial stage of their formation. Yet, this gives a good starting point. The exercise can lead to outsourcing model for reporting, driven by LPs and GPs.  </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Initial Results </Typography>

    <Typography variant='h6' className='black jst'> While the project has considered 2021 as the first year for collecting the data, the participating GPs were asked to provide historical ESG data from 2018 to 2020 also. This was done for a sample of their portfolio totalling nearly 100 companies spread across close to 40 different industries. Even though the dataset was incomplete, it provides some very useful insights and encouraging results.  </Typography>

    <Typography variant='h6' className='black jst'> The first relates to emission disclosures. While only one company reported its emission data in 2018, this number crossed 60 by 2020. In all likelihood, GPs should be able to get this data from all of their portfolio companies in 2021/2022. This would be an important KPI to rank ESG performance of all PE funded companies and industries and analyse annual progress. An interesting finding of this data was that there was no significant difference between the emission intensity - amount of GHG emissions per dollar of revenue – between those of private and public companies when segmented by emissions scope. This is contrary to general perception that private companies are less rigorous in terms of monitoring and controlling their emissions. </Typography>
   
    <Typography variant='h6' className='black jst'> The other parameter on which useful insights have been obtained relate to gender diversity of the board. While women accounted for only 6% of board members in 2018, the share rose to 12% by 2020. While there is a gap with their public sector counterparts, which have a regulatory mandate, it has narrowed from 12 to 8 percentage points between 2018 and 2020. The interesting insight from gender diversity data is that it also provides a correlation between ESG and financial performance. As per the data, the median private company with at least one woman on its board recorded higher revenue growth relative to the median private company with no women on its board both in 2018-2019 and 2019-2020. The difference was observed in both private and public companies giving more credibility to the finding. </Typography>


    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Matches DPA’s Approach </Typography>

    <Typography variant='h6' className='black jst'>Incidentally, ILPA’s approach matches Decimal Point Analytic’s (DPA) approach very closely. DPA had designed a standardized database sometime ago; we capture granular data on key ESG parameters which feeds our clients’ requirements for Integration, Engagement and Reporting. </Typography>

    <Typography variant='h6' className='black jst'>A majority of fund managers are still claiming to be ESG compliant without clear handle on underlying data; which is one of the reason allegations of greenwashing keep surfacing from time to time. Investment managers truly committed to ESG will see the value of a structured approach. </Typography>

    
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
