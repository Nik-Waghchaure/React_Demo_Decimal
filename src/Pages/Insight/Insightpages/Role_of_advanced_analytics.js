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


import adv_ana1 from "../../../asset/images/insight/insight_pages/role_of_advanced_analytics/1advanced_ana.jpg";
import adv_ana2 from "../../../asset/images/insight/insight_pages/role_of_advanced_analytics/2advanced_ana.jpg";

// images end


export default function Role_of_advanced_analytics() {



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
    Role of Advanced Analytics  in  <br/> Redefining Retail Banking
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    
    <Typography variant='h6' className='black jst'>Retail banks generate value through a mix of businesses like financing, investing and by doing financial transactions for their customers. Banks have been offering basic banking services for free and charging an attractive margin in other areas like credit card fees and foreign exchange transactions. On an average 59% of the bank’s earnings come from fee-based products and services like advice on payment, origination, sales, etc. which forms an important part of the banks P&L statement.</Typography>

    <Typography variant='h6' className='black jst'>There is a growing trend of using data and analytics in the financial services industry. Banks are using Artificial Intelligence and Machine Learning to improve their operational capabilities. These technology initiatives are empowering banks to discover new ways of revenue generation. Banks can acquire and retain a large customer base while being profitable by following a data-driven approach. They have realized the value hidden in the unused data and analytics capabilities, making it the global trend for the retail banking industry in 2019. </Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ adv_ana1 } className='topbanner2'/>
    </Box> 

    <Typography variant='h6' className='black jst'><em>Chart showing Top Trends in the Retail Banking Industry </em></Typography>
    <Typography  variant='h6' className='black jst'>(Source: The Financial Brand) </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>The Motivation Behind The Adoption of Data Analytics</Typography>

    <Typography variant='h6' className='black jst'>The convergence of several technology trends is accelerating the progress of advanced data analytics. The volume of data is doubling every two years as information pours in from multiple channels. Data storage capacity has increased while its cost has gone down. We also have the computing power to crunch all this data generated at high velocity. In India, the BFSI sector has been at the forefront in the adoption of analytics which has captured around 36% of the market size. </Typography>


    <Box className='al_left' mt={4} mb={4}>
    <img src={ adv_ana2 } className='topbanner2'/>
    </Box> 


    <Typography variant='h6' className='black jst'><em>Chart showing percentage of adoption of analytics across different sectors</em></Typography>
    <Typography  variant='h6' className='black jst'>(Source: <a href='http://ivyproschool.com/blog/2019/06/19/an-overview-on-analytics-data-science-industry-india-2019/' target='_blank'> IVY Professional School </a>) </Typography>


    <Divider/>
    <br/>

    <Typography variant='h6' className='black jst'>Banks who have started with the digitization are generating terabytes of data which is helping them identify new business opportunities and improve operational efficiencies. </Typography>

    <Typography variant='h6' className='black jst'>YONO is a digital banking platform of SBI which was launched in 2017. The platform provides regular banking services and lifestyle-related services like cab booking and online shopping. In the month March SBI launched a cardless cash withdrawal facility on this platform for users.  </Typography>

    <Typography variant='h6' className='black jst'>HDFC has launched an AI-powered chatbot EVA. Customers can get information about various products and services without needing to search or make a phone call. HDFC also anticipates that soon enough EVA will be able to handle real banking transactions as well. </Typography>

    <Typography variant='h6' className='black jst'>ICICI bank has been the front runner in deploying robotics software in its 200 business processes spanning across various functions. The software deployed is said to be following human actions to automate and perform repetitive, high-volume tasks. That leads to reduced response time to customers and increased productivity as well as efficiency. </Typography>

    <Typography variant='h6' className='black jst'>These examples from leading Indian banks successfully showcase how data analytics and customer service can help retail banking functions. Further analytics can enhance banking capabilities, providing better customer insights and automation for back-end processes. </Typography>

    <Typography variant='h6' className='black jst'>Advanced analytics has opened new doors for banks, also forcing them to investigate into new business avenue which is different from their existing business models. But even with the attractive outputs through advanced technology undertakings, banks have been unable to scale their efforts. These undertakings are not being scaled up and are still at a nascent stage, but it also implies there is significant untapped value creation potential.  </Typography>

    <Typography variant='h6' className='black jst'>If banks are willing to put considerable strategic and organizational efforts into analytics, it will become a true business discipline. Example, today banks cannot imagine their business without marketing and sales, gone are the days when marketing and sales were not actively pursued by the banks. They have become core business functions for banking as well. </Typography>


    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Few Other Areas Where Banks Can Use Advanced Analytics</Typography>

    <Typography variant='h6' className='black jst'>Advanced analytics can accelerate growth. Detailed customer profile combined with transactional data can improve customer acquisition, retention and cross-selling, most common example are banks using credit card transaction data to develop offers that encourage the customer to make more purchases from a specific merchant. It boosts banks commission, as well as providing value to the customer. </Typography>

    <Typography variant='h6' className='black jst'>Advanced analytics can help banks in providing faster and more accurate responses to regulatory requests. This leads to enhanced decision support and better service to the customers.</Typography>

    <Typography variant='h6' className='black jst'>Risk control techniques and prediction are one of the most important functionalities provided by advanced analytics. Analytics enables digital credit assessment, advanced early warning systems and credit collection analytics. With further advancements banks can reduce losses they incur through various financial frauds. </Typography>

    <Typography variant='h6' className='black jst'>Analytics can greatly improve the digital banking experience for its customers. It enables customers to interact with banking activities through a wide variety of communication channels. By gathering real-time customer data analytics banks can understand customers better and maintain consistency in service delivery.</Typography>


    <Divider/>

    <Typography variant='h4' className='blue'>Challenges Faced in the Adoption of Advanced Analytics </Typography>

    <Typography variant='h6' className='black jst'>The major challenge faced by the banks includes multiple competing priorities, functional silos, talent crunch, and inadequate data and system infrastructure. Many of them have experimented with advanced analytic techniques but have failed to attain desirable results. </Typography>
    
    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'> Factors holding back from realizing the full potential of analytics</Typography>

    <Typography variant='h6' className='black jst'>Most banks have legacy IT systems, which leads to fragmented data being collected from multiple sources and various business processes. These systems have a huge amount of data but extracting and processing this data proves to be a real deal-breaker. </Typography>

    <Typography variant='h6' className='black jst'>Over the years traditional banks have gone through various mergers or acquisitions. This has created a Silo’ed business module, creating many hidden barriers to data extraction. </Typography>

    <Typography variant='h6' className='black jst'>Data security breach is one of the major concerns for banks, which stops them from adopting new technologies easily. </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Making it happen</Typography>

    <Typography variant='h6' className='black jst'>To develop analytics competencies, it requires a strategic approach from leaders in the organization. They should identify clear goals for implementation of analytics. In future analytics will drive sustainable competitive advantage for banks. In an era with eroding product differentiation, diminishing customer loyalty and exploding volume, velocity, and variety of data, the extent of growth the banks can achieve will depend upon the how well banks beat these challenges and use the opportunities to their advantage.</Typography>

    <Typography variant='h6' className='black jst'>For adoption of new technologies, the biggest hurdle is cultural change and banks which can manage this will be able to deploy analytics solutions much faster and reap handsome dividends. </Typography>



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
