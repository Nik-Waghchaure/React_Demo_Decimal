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


// images end


export default function Covid_19() {



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
    COVID-19 and <br/> Folly of ETFs
    </Typography>
    <Typography variant='h4' className='blue al_center'>
    March 17, 2020
    </Typography>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


    <Box className='section sec_bg' component='section'>
    <Container maxWidth='lg' className='bdr'>

    <Box className='whitebx'>

    

    <Typography variant='h6' className='black jst'>Let me set the tone first by briefly describing the folly of the 2004-09 Great Financial Crisis. It was believed, without stress test, that by combining a seemingly uncorrelated junk grade loans into a pool, some pixie dust magic will convert the pool of such loans into highly coveted low risk investment grade pool. We all know how that played out, when it was stress tested in 2007-08 period. It will be also be good to remember that the size of such subprime loans was approximately half a trillion dollars. A folly in a half a trillion-market caused mayhem in the financial markets.</Typography>


    <Typography variant='h6' className='black jst'>What is the folly of ETF market? It is now believed, without stress test, that if we create a pool of illiquid assets and sprinkle some pixie dust of basket trading algorithms developed by investment bankers turned AP, the pool will magically become liquid and tradable. As per my back of envelop calculations, about two trillion dollars of ETFs are based on largely illiquid assets supported by basket trading. These ETFs are trading at speed of microseconds while majority of underlyings may or may not trade for weeks.</Typography>



    <Typography variant='h6' className='black jst'>Till COVID-19, it was all hunky and dory to allow such folly to continue because we all believed in the almighty power of central bankers to provide put options by opening liquidity spigots whenever there is a mismatch in trading frequency of ETF and the underlyings. The Fed’s Dec 2018 pivot essentially proved this point that Fed will act if market liquidity evaporates, whether real economy needs or not.</Typography>

    <Typography variant='h6' className='black jst'>What has changed due to COVID-19? This pandemic has disturbed supply chains and demand patterns beyond what was deemed feasible. In this world of JIT supply chains, the current disruption is exerting tremendous working capital demand from real economy on financial sector. The central bankers are reacting by providing liquidity, but the disruption is so large, that the demand for liquidity from real economy far exceeds supply. </Typography>
    
    <Typography variant='h6' className='black jst'>Now, this creates a problem for ETFs. The participants believed that central bankers will provide the liquidity that they need when they need. But now, the central banking put is proving insufficient for real economy and does not even exist for financial markets.  </Typography>

    <Typography variant='h6' className='black jst'>It means, two trillion-dollar worth of ETFs are at risk of being not priced regularly or priced at wild model prices, creating a void in the heart of new paradigm in finance which is supposed to guide us to nirvana of perfect diversification at low cost. This low cost will become very high illiquidity premium in a week or two if situation remains at current level of stress. Ungumming a two trillion market will be multiple times more difficult than the subprime crisis, because a large part of investment grade bonds is about to get pushed into junk territory, which will add complexity to the problem.</Typography>

    <Typography variant='h6' className='black jst'>This is the first time in my professional career I am witnessing a real economy causing crisis in financial markets, all other recent financial crises were result of issues inside finance sector causing a boom-bust cycle. The current bust is coming from real economy. The bust from finance sector issues is yet to come. Be prepared.</Typography>

    <Typography variant='h6' className='black jst'>As an aside, some thoughts on COVID-19. In the year 1986, when as a 15-year old I first read economics textbook, it defined economics as a science which tries to make sure that unlimited human wants are met in the world of limited natural resources. Such a Malthusian definition did not appeal to me then and does not appeal to me even now. So, in my first economics examination, I defined economics as below (and I remember it very well because my answer sheet was later displayed on college notice board). “Human are gregarious animals. We love to interact with each other. Some of these interactions we assign economic value while some other interactions we assign emotional value. Economics is study of those human interactions for which we assign economic value. Human desires are many and hence economics tries to make sure that more resources are available tomorrow than they are today for meeting such desires.” COVID-19 and the resultant social distancing is driving an artificial wedge in our desire to interact, and hence the economic costs will be tremendous. After 35 years, I have found a real-life experiment which validates my definition of economics, but alas at a great cost.</Typography>

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
