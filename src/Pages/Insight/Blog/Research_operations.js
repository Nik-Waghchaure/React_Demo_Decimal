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

import Research_op1 from "../../../asset/images/insight/blog_pages/1research_operations.jpg";
import Research_op2 from "../../../asset/images/insight/blog_pages/2research_operations.jpg";
// images end


export default function Research_operations() {



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
    Blog
    </Typography>
    <Typography variant='h1' className='blue al_center'>
    ATM Analytics – New frontier <br/> for competitive advantage <br/> in the Banking industry
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    March 06, 2020
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>The Indian banking industry is undergoing a radical change driven by intense competition from new entrants in the industry, continuously evolving regulatory environment and the changing business models. Technological advancements and innovations have further altered the business landscape for all financial institutions, whether banking or non-banking. </Typography>

    <Typography variant='h6' className='black jst'>Along with technological changes, the industry is also witnessing a demographic shift in customer interactions. The entry of global players in the banking industry has further propelled the customer expectations.</Typography>

    <Typography variant='h6' className='black jst'>Therefore, banks are searching for ways to gain a distinct competitive advantage which will set them apart from other players in the industry.</Typography>

    <br/>
    <Typography variant='h4' className='blue jst'>Continued relevance of ATM as a client engagement tool </Typography>
    <br/>
    <Typography variant='h6' className='black jst'>ATMs are an important consumer touchpoint for banks and they also constitute a large part of banking infrastructure. Today banks have spread their fleet of ATMs across the country. ATMs are found at the most diverse locations, right from the densely populated cities to the loneliest outposts of Himalayan mountaintops. </Typography>

    <Typography variant='h6' className='black jst'>Banks are always looking at ways and means to increase the income and reduce the cost associated with ATM’s. One of the ways to gain a competitive advantage is to capitalize on the data gathered through this huge fleet of ATMs.</Typography>

    <Typography variant='h6' className='black jst'>Following is the region-wide deployment of ATM’s in India for the quarter ended September 2019.</Typography>

    <Box className='al_left' mt={4} mb={4}>
    <img src={ Research_op1 } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'>Data credit: RBI website </Typography>

    <Typography variant='h6' className='black jst'>The above chart shows the number of ATMs deployed across various zones by different financial entities. Every ATM is generating a huge amount of data which is the potential gold mine for the banks who has this data.</Typography>

    <br/>

    <Typography variant='h4' className='blue jst'>Retaining most profitable Bank customers</Typography>
    <br/>
    <Typography variant='h6' className='black jst'>Banks are always on the lookout to attract and retain profitable customers over the long term. To do so they need to develop a strategy that goes beyond the ‘one-size-fits-all’ mindset.</Typography>

    <Typography variant='h6' className='black jst'>To achieve profitability, banks need to understand customer behavior patterns and find out ways and means to gain a greater customer wallet share. They must tap into ATM generated dataset to get a good understanding of their customer. However, banks are still relying on industry data due to their inability to leverage the available financial data.  </Typography>

    <Typography variant='h6' className='black jst'>The data generated by ATM’s through customer interactions can be categorized into </Typography>


    <Box className='al_left' mt={4} mb={4}>
    <img src={ Research_op2 } className='topbanner2'/>
    </Box>

    <Typography variant='h6' className='black jst'>Additionally, data gathered from various ATM management vendors is fragmented. Poor data quality is another hurdle faced by banks while adopting a data analytics approach. The data is often fetched from siloed sources spread across the organization. </Typography>

    <Typography variant='h6' className='black jst'>Further, factors like inefficient data management as well as data maintaining processes, mergers and acquisitions leading to consolidation of systems result in data compatibility and data duplication issues.</Typography>

    <Typography variant='h6' className='black jst'>Therefore, mining this pool of data requires strong analytical capabilities, technical knowledge, and the latest tools, which might not be readily available with the team.</Typography>

    <br/>

    <Typography variant='h4' className='blue jst'>Mining for valuable insights</Typography>
    <br/>
    <Typography variant='h6' className='black jst'>This data can be used to gain unique insights and differentiate themselves from the competition.</Typography>

    <Typography variant='h6' className='black jst'>With growing ATM fleets financial institutions are gradually realizing the potential hidden in the ATM network transaction data. Advanced data mining techniques, as well as big data analytics, holds the potential that allows organizations to analyze their disparate ATM transaction data in real-time.</Typography>

    <Typography variant='h6' className='black jst'>The first step towards realizing the data potential is to sort the data acquired from various ATM vendors into useful datasets and identifying your business requirements for which the data serves the purpose.</Typography>

    <Typography variant='h6' className='black jst'>For example, to extract full value from transaction data, transaction monitoring and analytics software allow financial institutions to extract and analyze real-time transaction data directly from their network. Correlating this data with other ATM generated datasets enables banks to gain deeper insights. </Typography>

    <Typography variant='h6' className='black jst'>Obtained data can be fed to ML-based algorithms to gain more accurate results. Moreover, ML rule-based models utilize a set of rules that continuously learn and improve when fed with more data. This allows machines to generate accurate and more detailed insights into customer behavior patterns. </Typography>

    <Typography variant='h6' className='black jst'>After identifying customer behavior patterns using ML algorithms, acquired insights can be utilized for cross-selling as well as designing customized marketing campaigns. It is proved that ML has the potential to unleash more transformational opportunities for modern-day financial institutions.</Typography>

    <br/>

    <Typography variant='h4' className='blue jst'>Advanced Analytical techniques at work</Typography>
    <br/>
    <Typography variant='h6' className='black jst'>Along with outnumbering installations banks need to tackle security threats and achieve regulatory compliance. ML techniques can be effectively used to detect frauds, ATM hacks, and cyber-attacks. </Typography>

    <Typography variant='h6' className='black jst'>Some of the ML techniques can be used in developing models to determine patterns in unstructured data which otherwise is a difficult task to accomplish with traditional statistical techniques. </Typography>

    <Typography variant='h6' className='black jst'>Further analytics is empowering channel managers and omnichannel banking executives in identifying patterns of customer interaction with the banking system, allowing channel managers to provide a personalized solution to their customers. Many banks have taken an approach of bundling different services together to make their services more alluring for customers, which ultimately improves their customer retention. It has been made possible through data sharing and data analytics initiatives.</Typography>

    <Typography variant='h6' className='black jst'>With the help of data analytics banks can optimize their ATM cash management processes for smaller sites, setting alerts for cash replenishments and further reduce costs. As this data offers substantial benefits, various financial institutions and ATM channel managers would want to extract maximum benefits out of available transaction data.</Typography>


<Box>
    <Box className='insightmidbg'>
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
    Back to Blog
    </Button>
    </Link>
    </Box>


    </Container>
    </Box>



                   



        </>
    );
}
