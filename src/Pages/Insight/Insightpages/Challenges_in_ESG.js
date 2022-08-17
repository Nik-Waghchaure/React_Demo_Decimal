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


export default function Challenges_in_ESG() {



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
    Challenges in operationalizing <br/> ESG norms in Asset Management
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
   
    <Typography variant='h6' className='black jst'>The ESG wave continues strengthen with each passing year. Fresh flows into ESG focused funds are estimated to have grown at ~30% in 2021 over 2020, after a growth of 90% in 2020 over 2019. According to Refinitiv data, inflows into global ESG ETFs grew 50% in 2021 over 2020. SWFs investments in the ESG space globally surged 215.3 per cent in 2021 to $22.7 billion, from $7.2 billion the previous year.</Typography>

    <Typography variant='h6' className='black jst'>2022 can be the year when ESG not only becomes mainstream, but it starts driving markets a lot more, believes Aniket Shah, the global head of ESG and sustainability research at Jefferies.</Typography>

    <Typography variant='h6' className='black jst'>No asset management firm in the developed markets, and increasingly in developing markets, is now left untouched by the ESG tsunami. It is no surprise that ESG compliance is one of the top priorities of asset managers around the world, as confirmed by approximately 85% of the AMs surveyed by the Index Industry Association (IIA).</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>However, managers face several hurdles in operationalizing their ESG strategies. We list below some of the key challenges:</Typography>
    
    <Typography variant='h6' className='black jst'>
    <ul>
        <li> <strong>Insufficient disclosure of ESG metrics by corporates </strong> affects progress in ESG compliance. Despite guidelines by most securities regulators, companies continue to take liberty in reporting their ESG data, making comparison across companies difficult. We even find that companies are also not consistent in reporting data from one year to the other, impacting comparisons across time. The problem is more acute for credit funds and private equity funds that hold assets of unlisted companies. Such companies are not under regulatory obligation to commence ESG reporting in most jurisdictions as yet.</li>

        <li> <strong>Conflicting guidelines: </strong>Reporting guidelines are not consistent across regulators and standards bodies. For example, SASB wants energy usage info in GJ (gigajoule) while GRI needs it in MWh (megawatt hour). At DPA, we have large reference table to handle conversion of data from one reporting unit to another, for a wide range of ESG factors, for example between GJ, MWh, TJ or terajoules and MMBTU or Metric Million British Thermal Unit.Such differences mean managers struggle to prepare a standardised reporting template to track the KPIs. Data standardisation is a pervasive challenge as ~63% of asset managers surveyed by IIA highlighted it as a key challenge. </li>

        <li> <strong>Evolving regulatory framework:</strong> Securities and Exchange Commission’s (SEC) recent stand on ESG compliance, European Union’s Corporate Sustainability Reporting Directive (CSRD) and the Sustainable Finance Disclosure Regulation (SFDR) have strengthened ESG reporting norms. The Indian regulator, SEBI, also came out with a new ESG format in 2021, called Business Responsibility and Sustainability Report (BRSR), which is likely to have more disclosure requirements. As regulations evolve, most managers need to keep updating their policies and processes.</li>

        <li> <strong>Compliance costs: </strong> Asset managers face higher compliance costs from legacy tools, manual processes, and lack of staff. Additional costs from engaging teams, launching new products, and sourcing data will impact profits. While big firms may have necessary cushion to absorb such costs, their small/mid-size peers are the worst affected.</li>
    </ul>
    </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>From our experience of working with funds on their ESG journey, we advise an optimal mix of human capital and technology to address the ESG compliance journey. Some solutions that can address ESG integration challenges:</Typography>

    <Typography variant='h6' className='black jst'>
    <ul>
        <li> Asset managers can look at <strong> automating data collation and reporting process </strong>  to mitigate costs. As reporting norms are volatile, manual processes will only complicate the compliance process. Automation tools and techniques are necessary for convenient data collation, analysis and framing follow-up actions. </li>

        <li> <strong>Standardized data structures </strong> backed by automation will also alleviate complexities from differing reporting structures put forth by various regulators.</li>

        <li> In addition to quantitative numbers, asset managers with strong ESG focus can also analyse <strong> qualitative data points  </strong>from portfolio firms published in their press releases, announcements, earnings disclosures, strategic presentations, etc. to frame a comprehensive ESG compliance strategy. This requires ML based solutions.</li>

        <li> Finally, a <strong>scalable/agile data model  </strong>will help managers to quickly adopt to any changing rules.</li>
    </ul>
    </Typography>



    <Typography variant='h6' className='black jst'> While the project has considered 2021 as the first year for collecting the data, the participating GPs were asked to provide historical ESG data from 2018 to 2020 also. This was done for a sample of their portfolio totalling nearly 100 companies spread across close to 40 different industries. Even though the dataset was incomplete, it provides some very useful insights and encouraging results.  </Typography>
    
    <Typography variant='h6' className='black jst'> The first relates to emission disclosures. While only one company reported its emission data in 2018, this number crossed 60 by 2020. In all likelihood, GPs should be able to get this data from all of their portfolio companies in 2021/2022. This would be an important KPI to rank ESG performance of all PE funded companies and industries and analyse annual progress. An interesting finding of this data was that there was no significant difference between the emission intensity - amount of GHG emissions per dollar of revenue – between those of private and public companies when segmented by emissions scope. This is contrary to general perception that private companies are less rigorous in terms of monitoring and controlling their emissions. </Typography>
    
    <Typography variant='h6' className='black jst'> The other parameter on which useful insights have been obtained relate to gender diversity of the board. While women accounted for only 6% of board members in 2018, the share rose to 12% by 2020. While there is a gap with their public sector counterparts, which have a regulatory mandate, it has narrowed from 12 to 8 percentage points between 2018 and 2020. The interesting insight from gender diversity data is that it also provides a correlation between ESG and financial performance. As per the data, the median private company with at least one woman on its board recorded higher revenue growth relative to the median private company with no women on its board both in 2018-2019 and 2019-2020. The difference was observed in both private and public companies giving more credibility to the finding. </Typography>


    <Typography variant='h6' className='black jst'>In future, we expect the Asset Managers which handle such challenges with the right digital tools to have an edge over their peers which are late to react. Limited Partners are increasingly asking asset managers extremely pointed questions on ESG processes, a robust technology platform can be a big advantage in institutional fund-raising processes as well.</Typography>

    
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
