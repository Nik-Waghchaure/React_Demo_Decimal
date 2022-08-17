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

import germany_e from "../../../asset/images/insight/insight_pages/germany&up/germany1.jpg";

// images end


export default function Germany_and_upcoming_elections() {



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
    Germany & The <br/> Upcoming Elections
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>
   

    <Typography variant='h6' className='black jst'> The global economic and political landscape has witnessed a notable transformation in recent years. On the economic front, there seems to be greater confidence in global economic growth, led by the recovery in the US. The US Federal Reserve (Fed) has unequivocally set itself on continued monetary tightening, while the European Central Bank (ECB) is contemplating tapering its bond-buying program. On the political front, Britain’s exit from the European Union (EU) in mid-2016 and the rise in policy uncertainty in the US after the unexpected election of Donald Trump as the US President in late 2016 have led to rising apprehensions that the global recovery is at risk. Europe has also witnessed a rise in anti-Euro parties over the past few years. It is in this backdrop that the September elections in Germany assume significance.</Typography>

    <Typography variant='h6' className='black jst'> The incumbent German Chancellor, Angela Merkel, looks set to secure her fourth term in power with her Christian Democratic Union (CDU) party, supported by the Christian Social Union (CSU), placed comfortably. Most polls show a comfortable lead for Merkel and her allies over arch rival Martin Schulz led Social Democratic Party (SPD), at about 15-18 percentage points. Merkel has been able to maintain her lead despite recent concerns about managing security and immigration. A more than expected fractured mandate would require new coalition partners and a remarkable willingness to compromise from all parties. </Typography>

    <Typography variant='h4' className='blue'>Major Political Parties' Popularity on the Federal Level*</Typography>
     
    <Box className='al_left' mt={4} mb={4}>
    <img src={ germany_e  } className='topbanner2'/>
    </Box>


    <Typography variant='h6' className='black jst'> <em>*Average of major surveys (Allensbach, Infratest Dimap, Forsa, Forschungsgruppe Wahlen, TNS Emnid) published from mid- to end-July 2017; Source: Deutsche Bank Report, August 9th, 2017</em></Typography>


    <Typography variant='h6' className='black jst'> The Merkel led CDU, in its election agenda, has promised modest tax cuts, increased infrastructure spending, and reduction in unemployment to below 3%. However, despite widespread criticism of her immigration policies following last year’s Berlin terror attack, Merkel has ruled out setting an upper limit on refugees coming into Germany. With other opposition parties, particularly the Free Democratic Party (FDP), calling for a stricter immigration policy and increased security, this could turn out to be a major factor that could swing votes away from the CDU and although the CDU will be still expected to win comfortably, the party may fall short of a clear majority. What is interesting to note is that some surveys indicate that over 40% of the voters have not yet frozen their choice to vote, reportedly the highest share of undecided voters in 20 years, this close to the election.</Typography>

    <Typography variant='h6' className='black jst'>The SPD, which is currently part of the grand coalition government with the CDU, is the main opposition party in Germany. The appointment of former President of the European Parliament, Martin Schulz, as the leader of the SPD in January 2017, resulted in a surge in popularity for the party. The party has pledged to invest heavily in the country’s infrastructure and has promised labour and welfare reforms. Schulz, as an ardent supporter of increased EU integration, is expected to work towards establishing an economic and monetary union (EMU), if elected.</Typography>

    <Typography variant='h6' className='black jst'>Over the last decade, Germany has witnessed strong economic growth, especially when seen against the backdrop of other major Eurozone nations, highlighted by an improving jobs market, budget surplus and falling public debt among others. The economy has expanded consistently over the last several quarters, despite geo-political and economic uncertainty surrounding the EU. GDP in Europe’s largest economy rose by 0.6% on a sequential basis in Q2 2017, as domestic demand led by strong household and government spending continued to drive growth. The ECB's ultra-low interest rates and bond-buying program has no doubt helped in boosting demand. Consumers and businesses expect the economy to improve further as highlighted by rising consumer and business sentiment in Germany, providing Angela Merkel added boost before the election.</Typography>

    <Typography variant='h6' className='black jst'>However, there are challenges. German exports in June declined for the first time in 2017 and could face a further downward pressure going forward on the back of a strong Euro, weaker-than-expected US growth and the Brexit impasse. The US President’s call for a more protectionist economic policy could have a negative impact on German trade given that the US is the country’s single most important trading partner. Investor confidence in Germany fell for the third consecutive month in August to its lowest level since October 2016, amid concerns that the diesel scandal and the strengthening Euro will weigh on Europe’s largest economy. The Euro has already appreciated by over 10% against the US Dollar since the beginning of the year. The widening emissions cheating scandal in the German automobile sector is a risk to the economy and is threatening to damage its reputation with foreign buyers, with the Bundesbank recently indicating that the competitiveness of companies has suffered in international markets. With parliamentary elections only a month away, the diesel scandal has come to a boil at a politically sensitive time. On one side are angry voters who are demanding tougher regulations, while on the other side is Germany's biggest industrial sector and its biggest exporter employing over 800,000 people. </Typography>

    <Typography variant='h6' className='black jst'> To conclude, despite a few simmering issues, Angela Merkel is widely expected to win the coming elections. However, in the event of a fractured mandate, coalition partners are likely to have a bigger say in policy matters, ranging from immigration issues, Brexit negotiations, and the diesel scandal, among others. Against this backdrop, the German elections next month have assumed a far greater significance, not only for the country, but for the entire European Union.  </Typography>

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
