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


export default function Roadmap_to_institutional() {



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
    Adopting changes in <br/> Investment Research Methodologies - <br/>Roadmap to Institutional Transformation
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    
    
    <Typography variant='h6' className='black jst'> Financial services sector has been an early adopter of Artificial Intelligence; however traditional Asset Management firms have been lagging behind in introducing innovation in investment research and analysis. The biggest challenge that these institutions face is a fragmented data management strategy, and the inability of existing fund managers/analysts to utilize unstructured data-sets and advanced analytics technology.</Typography>

    <Typography variant='h6' className='black jst'>Given the headwinds faced by the investment management industry, most institutions have recognized that developing a proper approach is key for the survival of their business. It is absolutely essential that these institutions build an effective roadmap for implementing a transformation.  </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Getting the lay of the data-land… </Typography>

    <Typography variant='h6' className='black jst'><em> “Nothing exists except atoms and empty space; everything else is just opinion.” - Democritus </em> </Typography>

    <Typography variant='h6' className='black jst'>Asset Management firms generate a lot of internal data across the organization. A lot of this data is held by multiple departments and they are in different formats due to their source of origination. However, there is a lot of value which can be uncovered if these data can be brought under a single platform. Then there are external sources of alternative data like exhaust data which is generated within the normal course of business by various corporate entities which can add more dimensions to the internal data. And finally, there is a rich source of input in the form sentimental scores from various social media feeds, corporate filings, earning calls and media reports. Most of this external data is in unstructured format. </Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'> Stockpiling Data…</Typography>

    <Typography variant='h6' className='black jst'>The first step in this organizational transformation will begin by formulating a data strategy.</Typography>
    <Typography variant='h6' className='black jst'>It’s imperative for the firm to inventory and bring all the data which is generated internally to an efficient and accessible platform. This will improve the visibility of the data which is available within the organization and can be made available for use when required.</Typography>
    <Typography variant='h6' className='black jst'>Next logical step is identifying what external data sets can be included in the data sets. Apart from the structured data sets available through existing information platforms such financial information, and pricing, external data sets that are currently defined as alternative data sets, like market sentiment signals will add depth to the analysis and also improve the robustness of financial models.</Typography>
    <Typography variant='h6' className='black jst'>The new data platform should allow data to be easily available for use and it should also be relatively easy to bring in new data into the platform. It should be able to process and store structured and unstructured data. It should also allow for easy mining of data and play well with advanced analytics so that users will be able to present the output in the form of dashboards and reports.</Typography>


    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Getting the teams to use the data…</Typography>

    <Typography variant='h6' className='black jst'>Once all internal and external data is brought into this Data platform, Business and IT leaders have a more complicated task at hand and that is to harness meaningful insights from all this business information. This means that the data is to be made accessible to the analyst who can use it to generate insights.</Typography>

    <Typography variant='h6' className='black jst'>This access is granted through visualization tools. which will allow analysts to view the data in a cross-dimensional manner. The visual access can be provided through user-friendly dashboards. Such access will provide a robust mean to test their models, assumptions and perform back-testing. The analyst should be able to test the hypothesis and present the output in a visual format to supervisors and portfolio managers.</Typography>

    <Typography variant='h6' className='black jst'>This has been done extensively in the banking sector, where managers have been provided dashboards led business intelligence. This will be no different in the asset management arena, where senior leadership of asset management businesses will have to provide this infrastructure to their fund managers/analysts.</Typography>

    <Divider/>
    <br/>

    <Typography variant='h4' className='blue'>Stepping stones towards advanced analytics…</Typography>

    <Typography variant='h6' className='black jst'>It is important for fund managers/analysts to be able to view different sets of data, and their cross-correlations and linkages. With such a capability, they will be able to collaborate with the data scientist teams to check deeper and more efficient outcomes. The data scientist can explore the data by testing a specific hypothesis or build models by using the new data sets available to them. Such an approach can lead to the deployment of Artificial Intelligence or Machine Learning to more effective outcomes. Given the state of preparedness of some of the institutions, having such a dynamic possibility will be highly exciting.</Typography>


    <Typography variant='h4' className='blue'> Emerging scenario for investment managers…</Typography>

    <Typography variant='h6' className='black jst'><em> "There is nothing permanent except change." - Heraclitus</em> </Typography>

    <Typography variant='h6' className='black jst'>Financial Services industry is being disrupted by technology and those who do not adapt will be forced out of business. Those who foresee these challenges and adopt these new technologies will come out as winners.</Typography>

    <Typography variant='h6' className='black jst'> Asset Management firms who understand that they need to change will have to start working towards this organizational transformation right away. Transforming these processes may not be as big a challenge provided these investment institutions move methodically covering the challenges posed by the new analytical approach. Traditional market inefficiencies are being slowly getting edged out by new and innovative research processes, however, the addition of such layers of analytics are opening up new avenues of opportunities, which were earlier not available. Fund managers and data scientist can collaborate to mine the tidal wave of data to generate value for their investors. Firms will have to grab this potential opportunity and capitalize on it.., without delay.</Typography>

   
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
