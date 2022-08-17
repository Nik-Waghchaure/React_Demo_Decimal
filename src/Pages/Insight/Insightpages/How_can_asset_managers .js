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


export default function How_can_asset_managers () {



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
    How can Asset managers <br/> engage with businesses <br/> to accelerate drive towards Net Zero
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
    <Typography variant='h4' className='blue'>Introduction:</Typography>

    <Typography variant='h6' className='black jst'>Investment Managers (IM) are expected to be key drivers in monitoring the Environmental, Social, and Governance (ESG) performance of the assets they invest in. Their close watch is expected to exert pressure on companies to improve their ESG compliance. Asset owners want their IMs take an active stance in nudging companies forward in their ESG performance. While IMs take the lead, let us analyse how IMs ensure that their investor firms are driving in the right path towards their Net Zero targets.</Typography>

    <Divider/>

    <br/>

    <Typography variant='h4' className='blue'>Ways in which IMs influence industries in their drive towards Net Zero targets:</Typography>
    <br/>


    <Typography variant='h4' className='black'>1. Rise in active engagement with stakeholders of underlying companies </Typography>


    <Typography variant='h6' className='black jst'>Actively engaging with underlying firms, and/or, governments, is one of the key tools leveraged by IMs to drive the Net Zero agenda. Such IMs discuss and have a say on potential decisions of such underlying firms related to transparency, improved behaviours and reduced uncertainty risk with regards to ESG compliance. For example, as Rob Walker, Global Co-Head of Asset Stewarship of State Street states , since 2014, they have engaged with more than 600 companies in multiple industries regarding climate change issues. In 2020, per <a href='https://i2.res.24o.it/pdf2010/Editrice/ILSOLE24ORE/ILSOLE24ORE/Online/_Oggetti_Embedded/Documenti/2020/11/01/2020-%20ESG-%20Manager-%20Survey-%20Results_EMEA.pdf'> the survey results from Russell Investments</a> , the trend of rising engagement between IMs and firms was visible not only with equity managers but also among fixed income managers, where 92% of fixed income managers regularly engaged with underlying companies they invested, in 2020. The survey adds that only 10% of IMs across asset classes who responded, cited that they don’t engage with companies on ESG related terms. </Typography>

    <Typography variant='h6' className='black jst'>The key takeaway is that many IMs are already increasingly vocal and active in engaging and the number will likely increase as they intend to hold issuers that are perceived to be laggards in climate transition efforts.</Typography>

    <Divider/>

    <br/>

    <Typography variant='h4' className='black'>2. Using proxy voting strategies to assess and effect major changes in a company’s strategy</Typography>

    <Typography variant='h6' className='black jst'>Asset managers also assert their stewardship efforts using proxy voting. It is one of the critical tools in hands of IMs to gain a firm’s attention and implement the changes that the IMs seek. IMs can vote against boards with governance deficiencies such as long-tenured directors, over-boarded directors or less-diverse boards. The IMs also ensure that there are voting guidelines to ensure they follow best practices in global stewardship while taking into account local market sensitivities. Such guidelines are updated frequently by IMs through thorough research into characteristics of well-governed companies.  </Typography>

    <Typography variant='h6' className='black jst'>To explain the power of such proxy voting with an example, in 2020–2021 proxy year, Blackrock stated it voted against 255 directors in the 12 months ended June 2021, up from 55 directors in the year before that. The Asset Manager also increased its engagement levels to 2,300 companies on climate and natural capital in the mentioned period, up from 1,200. Similarly, State Street also highlighted that the bank did not hesitate to vote against re-electing executives if the bank’s recommended changes and concerns were not adhered to. </Typography>


    <Divider/>

    <br/>

    <Typography variant='h4' className='black'>3. Engaging with regulators closely</Typography>

    <Typography variant='h6' className='black jst'>In addition to working with clients and firms, IMs also work closely with global regulators and share opinions or inputs on how they can help in improve governance and sustainability measures for a market. Many IMs share their comments in public to regulatory bodies like the US Securities and Exchange Commission (SEC) on issues including, but not limited to, adopting new metrics, modifying disclosure requirements, independence of proxy advisors, etc.</Typography>

    <Divider/>

    <br/>

    <Typography variant='h4' className='black'>4. Collaboration with other stakeholders</Typography>

    <Typography variant='h6' className='black jst'>IMs, in their part, have collaborated with their like-minded peers to intensify their voices for ESG measures and garnered support. They have increasingly highlighted challenges posed by climate change and their “calls for action” have intensified in recent years. In mid-2021, more than 450 investors representing Assets Under Management (“AuM”) of over $41 trillion signed a “Global Investor Statement” urging Governments to tackle climate crisis. Similarly, the Glasgow Financial Alliance for Net Zero (“GFANZ”) launched by Mark Carney, in October 2021, laid out a scheme of policy requests to G20 governments to act on strategies to control climate change. </Typography>


    <Divider/>

    <br/>

    <Typography variant='h4' className='black'>5. Offering more ESG related offerings to the market</Typography>

    <Typography variant='h6' className='black jst'>IMs have also done their part by accelerating ESG-related product expansion across asset classes, as higher proportion of assets have gone into ESG and responsible investing strategy offerings in the last couple of years. Per the survey by Russell Investments, 36% of total ESG asset base in such IMs is US$1 billion total, vis-à-vis 43% in 2020 and 48% in 2019, reflecting the fact that the assets under purview of ESG strategies have grown in size and crossed about a billion dollars for most IMs.</Typography>


    <Divider/>

    <br/>

    <Typography variant='h4' className='blue'>Solving the Engagement problem for asset managers </Typography>

    <Typography variant='h6' className='black jst'>As IMs strive to steer the global ESG agenda, they also face challenges in their journey. IMs, particularly those with smaller teams, tend to avoid Engagement. They are content with doing the bare minimum on ESG: subscribe to a rating provider, keep the weighted average ESG score of their funds above a basic threshold. p</Typography>

    <Typography variant='h6' className='black jst'>The reason many small to mid-size funds avoid Engagement is because it needs specific effort; they need to look at specific data on ESG parameters, have clarity on what data points they need to pick up and discuss with their folio companies. In other words, IMs not only need granular of their folio companies, they also need a ‘view’ on the data. Small and medium sized funds don’t have the manpower to do this.</Typography>

    <Typography variant='h6' className='black jst'>Decimal Point Analytics is helping address some of these fund houses in engaging with their folio companies. Our structured database platform captures granular data on the securities in the folios of our clients. Having structured data makes subsequent analytics easy. We are able to pinpoint which ESG dimensions a company may be underperforming its peers on. We guide our clients to take up these issues in their Engagement discussions. Our database also provides time series of granular ESG data, helping a IM keep track of progress on their chosen ESG dimensions. </Typography>

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
