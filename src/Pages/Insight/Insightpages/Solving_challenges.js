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


export default function Solving_challenges() {



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
    Solving Challenges in <br/>ESG Investing
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
    
    <Typography variant='h6' className='black jst'> There has been an elevated level of interest in sustainable investing over the past few years, especially since the acceptance of “The 17 Goals” by the UN member nations in 2015. This development started a big push for sustainable or impact investing, and subsequently, ESG has become a predominant investment theme in financial markets. There has been a remarkable growth in the number of mutual funds being marketed as ESG funds after 2016. The year 2019 saw record yearly inflows into ESG ETFs, only to be overshadowed by inflows in 2020 which were three times more than those a year earlier. Several AMCs have started adding ESG metrics in their investment analysis and started using ESG scores of companies in their risk-assessment and decision-making processes. </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Despite the explosion of ESG oriented investment products in the market today, the industry continues to be plagued by many issues and challenges. We list a few important issues in ESG investing below. </Typography>

    <Typography variant='h6' className='black jst'>
    <ul>
        <li><strong>No Clear Framework:</strong> The ESG framework has not been defined precisely. Currently, there is a general lack of clarity on what qualifies as an ESG fund or portfolio. The processes to be followed to qualify for ESG alignment have not been described precisely by regulators and industry associations.</li>
        <li><strong>Disparate Regulations:</strong> Large MNC’s have operations in multiple countries and ESG regulations in many of these countries could be very different from one another. These companies do not always have control at the lowest levels of the process chain. The vendors or suppliers in these countries may engage in malpractices that can malign the corporate image.</li>
        <li><strong>ESG Scoring Mismatch:</strong> The ESG scores from different providers disagree with each other to a large extent. A study by Berg/Kolben/Rigobon of MIT found the correlations of ratings between six different major ESG data providers to be 0.54 on an average, with a range from 0.38 to 0.71.</li>
        <li><strong>Little Benefits on Returns:</strong> Various studies on the comparison of the performance of ESG funds with similar non-ESG funds have not found any incremental returns for incorporating this framework into investment decision making. Moreover, a study published by Barclays Research in August 2020 concluded that a portfolio of funds labelled as ESG does not have any meaningful difference in terms of holdings or risk exposure with other funds. This study was done using holdings data for more than two decades, and included the funds that had changed their categorization to ESG. </li>
    </ul>
    </Typography>

    <Divider/>
    <br/>

    <Typography variant='h6' className='black jst'>The high ESG scores for stocks were promoted as good resistance against sharp downward movements during the financial crisis. However, the COVID-19 stock market crash proved that these are premature assumptions, and we need to understand the materiality of this information more precisely before incorporating it in the investment decision making process. </Typography>

    <Typography variant='h6' className='black jst'>We at Decimal Point Analytics do not look at ESG as a marketing buzzword and are working with our clients on being a part of the solution for the issues plaguing ESG investments. Being a company with the best blend of finance, data analytics, and technical capabilities, we are well placed to provide cutting-edge solutions to all stakeholders in this ecosystem.  </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Working with data providers: </Typography>


    <Typography variant='h6' className='black jst'>Financial market data providers need to innovate and include ESG parameters in their existing products or add new products to cater to this new demand. However, the reliability and timeliness of the data used in the solution cannot be compromised. We have 15 years of experience working with data providers in creating new and innovative data products that are widely used globally by buy-side as well as sell-side participants. </Typography>

    <Typography variant='h6' className='black jst'>DPA is helping a US Based client to create a unique solution that ranks mutual fund portfolios based on the ESG scores of the underlying companies and their relative weights. This product will provide valuable insights that will help in attributing the performance of the portfolio to underlying ESG factors along with other financial factors. DPA has automated data gathering and standardization processes to import data without manual intervention. This helps in improving the reliability of data along with the timeliness. </Typography>


    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Working with the investment community:</Typography>



    <Typography variant='h6' className='black jst'>Investors need to understand the relative positioning of corporations based on their performance on various ESG factors. However, as described earlier, ESG scores provided by different data providers do not agree with each other and the overall scoring systems need an improvement. DPA has developed a scoring methodology that uses alternative sources of information and data along with traditional sources, creating dynamic corporate ESG ratings through a relative ranking of companies based on their performance on various Environmental, Social, and Governance parameters.  </Typography>
    
    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Working with corporations:</Typography>

    <Typography variant='h6' className='black jst'>Due to the increasing use of ESG scores in investment decision-making, companies have an increasing need to pay more attention to their performance on these parameters. DPA has been working with various companies by creating innovative tools that help them actively manage the governance pillar related risks of the ESG framework. A German multinational wanted to make sure that none of its vendors and suppliers are engaged in malpractices that violate its ESG standards. As the company had an extremely diverse network of suppliers, it was difficult to always make sure that they are doing business with vendors that also believe in the same principles. We helped them in creating an automated process that enables them to be alerted about any such negative developments connected to their vendors or suppliers.</Typography>

    <Typography variant='h6' className='black jst'>Further, we have helped a global manufacturer of electronic equipment in creating a system that detects financial malpractices at its production facilities. Machine learning technics were used to train the system by analyzing historical financial transactions at various production facilities of the client. The algorithm successfully identified suspicious trends in some of the transactions that seemed insignificant in isolation but were financially significant when grouped. The algorithm also identified suspicious quotations from suppliers which helped our client in identifying suspect suppliers. This tool helped our client in tightening the internal controls for better governance.</Typography>

    <Typography variant='h6' className='black jst'> To conclude, we believe that creating innovative data solutions will help investors and companies to understand the material impact of ESG related risks on future returns with more confidence. A standardized methodology of ESG scoring and ranking based on data gathered from traditional and non-traditional sources will correctly evaluate the ESG profile of the companies. Companies also need better and innovative internal tools that look beyond traditional ways of process control. These tools help companies build more internal controls that subsequently help the Management, Board, and Shareholders.</Typography>

    
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
