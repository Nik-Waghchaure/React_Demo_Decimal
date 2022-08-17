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


export default function Data_visualization() {



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
    Data Visualization and <br/> the Art of Effective Storytelling
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
    
    <Typography  variant='h6' className='black jst'>Mr. Omkar Shah is the CEO of a well-known retail chain in India, one of the fiercely competitive retail markets in the world. Although the company had been doing well, Mr. Shah was stressed of late due to slowing profitability and below-par growth in many new branches. He was not able to pin-point the exact reasons for this decline, despite having all the data and wisdom of the best minds in the sector at his disposal. Enter business intelligence and data visualization. We will get back to Mr. Shah a little later.</Typography>

    <Typography variant='h6' className='black jst'>Organizations today, have access to massive in-depth data. However, possessing data and using it effectively are two entirely different things - the latter is equally, if not more important. This is where data visualization comes into play. The concept of ‘a picture is worth a thousand words’ comes in handy when making a point that could take a lot longer without the benefit of visuals. A good visualization has the power to turn static data into a cohesive story that can be understood by everyone.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Data Visualization: Key Trends</Typography>

    <Typography variant='h6' className='black jst'>Data visualization tools and techniques are continuing to evolve at a rapid pace and below, we highlight some of the key trends in the space that are likely to explode in the near-term.</Typography>

    <Divider/>
    <br/>

    
    <Typography variant='h4' className='blue'>Ø Geospatial Mapping and Analytics </Typography>

    <Typography variant='h6' className='black jst'> Visualization tools are fast evolving into geo-analytic powered real-time dashboards and have become more and more integrated and interactive. This does not entail just a map with eye-catching imagery but includes the ability to select geographic attributes and view the analytical effects across all metrics within a dashboard. Today, interactive maps are a must-have to view financial, product, and customer data across geographic locations.</Typography>

    <Divider/>
    <br/>
   

    <Typography variant='h4' className='blue'>Ø Mobile-Friendly Tools</Typography>

    <Typography variant='h6' className='black jst'>Another exciting trend that has arisen due to rising mobile usage is the need for visualizations to be optimized for mobile devices. In today’s hyper-connected digital world, visualizations need to be dynamic and mobile-friendly to benefit traveling executives. This has resulted in the incorporation of mobile-friendly layouts into almost all data visualization platforms available in the market today.</Typography>

    <Typography variant='h6' className='black jst'>On this front, Stakeboat Capital, an Indian private equity firm, uses dashboards modeled and customized specifically to be viewed on handheld devices such as iPads, and other tablets. These dashboards enable portfolio managers to get a higher-level view of their portfolio companies and if needed, seek further details from analysts and create contingencies to overcome any surprises.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Ø AI-ML in Visualization</Typography>

    <Typography variant='h6' className='black jst'>Artificial intelligence (AI) and machine learning (ML) are increasingly being employed to help users detect patterns in large and complex datasets. Salesforce Einstein, a tool from Salesforce.com, can be used to apply advanced AI-ML algorithms to discover insights about customer behavior.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Ø Natural Language Processing</Typography>

    <Typography variant='h6' className='black jst'>Natural language processing (NLP) helps in capturing current trends and mood for a topic or product, and even answer context-dependent questions. The rapid development of NLP techniques over the last few years have provided both individuals and organizations access to powerful, consistent, and scalable textual analytics tools.</Typography>

    <Typography variant='h6' className='black jst'> Edmond de Rothschild REIM, the real estate investment management platform of the Edmond de Rothschild Group, has been developing a digital dashboard system to track tenants across its commercial properties. The system presents a 360° view of tenants vis-à-vis a sentiment analytics module combining social media feeds, company, sector, and macroeconomic news as well as tenant financials. The technology used in this engine system ranges from the automated collection of information, NLP, ML techniques, model building, and visualization tools.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>What the (not so distant) Future Holds </Typography>

    <Typography variant='h6' className='black jst'> Back to where we began, Mr. Shah was able to turn around things at his company by employing data visualization tools to identify problem areas impeding his company’s growth and make better decisions. Here are some of the sample visualization dashboards which helped Mr. Shah gain a 360° view of his organization enabling better decision-making.</Typography>

    <Typography variant='h6' className='black jst'> Organizations that can position themselves and harness data visualization in unique and highly profitable ways, will likely see significant business opportunities and avenues for growth going forward.</Typography>

    <Typography variant='h6' className='black jst'> The Data and Business Intelligence team at Decimal Point Analytics has helped several financial and non-financial institutions transform their existing reporting platforms into easy to comprehend and simple yet effective visualization engines.</Typography>

    <Divider/>
    <br/>




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
