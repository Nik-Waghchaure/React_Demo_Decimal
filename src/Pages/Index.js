import { AppBar,  Button, Container, Grid, Tabs, Tab, Toolbar, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
// import dpalogo from "../../asset/images/dpa_cloud_logo.png";
import Aos from 'aos'
import "aos/dist/aos.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';


// images
import indexbanner from "../asset/images/index/indexbanner.gif";
import dash1 from "../asset/images/index/dash01.svg";
import dash2 from "../asset/images/index/dash02.svg";
import dash3 from "../asset/images/index/dash03.svg";
import why1 from "../asset/images/index/homei01.svg";
import why2 from "../asset/images/index/homei02.svg";
import why3 from "../asset/images/index/homei03.svg";
import why4 from "../asset/images/index/homei04.svg";
import why5 from "../asset/images/index/homei05.svg";
import why6 from "../asset/images/index/homei06.svg";
import why7 from "../asset/images/index/homei07.svg";
import why8 from "../asset/images/index/homei08.svg";

import pro1 from "../asset/images/index/productskills/p1.png";
import pro2 from "../asset/images/index/productskills/p2.png";
import pro3 from "../asset/images/index/productskills/p3.png";
import pro4 from "../asset/images/index/productskills/p4.png";
import pro5 from "../asset/images/index/productskills/p5.png";
import pro6 from "../asset/images/index/productskills/p6.png";
import pro7 from "../asset/images/index/productskills/p7.png";
import pro8 from "../asset/images/index/productskills/p8.png";

import ski1 from "../asset/images/index/productskills/s1.svg";
import ski2 from "../asset/images/index/productskills/s2.svg";
import ski3 from "../asset/images/index/productskills/s3.svg";
import ski4 from "../asset/images/index/productskills/s4.svg";
import ski5 from "../asset/images/index/productskills/s5.svg";
import ski6 from "../asset/images/index/productskills/s6.svg";
import ski7 from "../asset/images/index/productskills/s7.svg";
import ski8 from "../asset/images/index/productskills/s8.svg";

import ds from "../asset/images/index/hm_ds.svg";
import rs from "../asset/images/index/hm_rs.svg";
import ai from "../asset/images/index/hm_ai.svg";
import bi from "../asset/images/index/hm_bi.svg";
import pd from "../asset/images/index/hm_pd.svg";
import md from "../asset/images/index/hm_md.svg";
import wd from "../asset/images/index/hm_wd.svg";
import uiux from "../asset/images/index/hm_uiux.svg";

import integrity from "../asset/images/index/integrity.svg";
import innovation from "../asset/images/index/innovation.svg";
import makediff from "../asset/images/index/makingdiff.svg";
import customer from "../asset/images/index/customer.svg";
import rest from "../asset/images/index/respandcare.svg";
import growth from "../asset/images/index/growth.svg";


// images end


export default function Index() {



useEffect(() => {
Aos.init({ duration:1000 });
}, []);
    

    
    

    return (
        <>


    <Box className='mainsection' component='section'>
    <Container maxWidth='lg'>
    <Grid container spacing={1} alignItems="center">
    <Grid item lg={4} md={6} sm={6} xs={12}>
    <Box>
    <Typography variant='h1' className='blue'>
    Data Analytics & Financial Research Solutions
    </Typography>
    <Typography variant='h6' className='black'>
    Presenting a unique combination of deep computational skills and core financial services domain expertise
    </Typography>
    </Box>
    </Grid>
    <Grid item lg={8} md={6} sm={6} xs={12}>
    <Box className='al_right'>
    <img src={ indexbanner } className='topbanner'/>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>


        <Box className='section' component='section'>
        <Container maxWidth='lg' className='bdr'>
        <Grid container spacing={1} alignItems="top">
        <Grid item lg={5} md={6} sm={6} xs={12}>
        <Box>
        <Typography variant='h3' className='skblue'>
        About
        </Typography>
        <Typography variant='h2' className='black'>
        Decimal Point Analytics
        </Typography>
        <Typography variant='h6' className='black jst'>
        Decimal Point Analytics is a modern, technology enabled financial research consulting company. Our combination of machine learning algorithms with talented professional team enables us to create unique, tailor-made-products, real-time services and solutions for our clients. Our unmatched value proposition has been increasingly appreciated by clients across the globe.
        </Typography>
        </Box>
        </Grid>
        <Grid item lg={7} md={6} sm={6} xs={12}>
        <Box className='al_center dpa_caro'>
        <Box className="custom1 owl-carousel owl-carousel owl-theme">

        <Box className="item ">
        <img src={ dash1 } className='slideimg'/>
        </Box>
        <Box className="item">
        <img src={ dash2 } className='slideimg'/>
        </Box>
        <Box className="item">
        <img src={ dash3 } className='slideimg'/>
        </Box>

        </Box>
        </Box>
        </Grid>
        </Grid>
        </Container>
        </Box>



<Box className='section whydecimal' component='section'>
<Container maxWidth='lg' className='bdr'>
<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography variant='h3' className='skblue'>
ABOUT
</Typography>
<Typography variant='h2' className='black'>
So, Why Decimal
</Typography>
</Box>
</Grid>
</Grid>


<Grid container spacing={0} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>

<Box className="owl-carousel loop">

<Box>
<img src={ ds } className='caroic'/>
<Typography variant='h4' className='black'>Data Solution</Typography>
<Typography variant='h6' className='black'>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</Typography>
</Box>

<Box>
<img src={ rs } className='caroic'/>
<Typography variant='h4' className='black'>Research Solution</Typography>
<Typography variant='h6' className='black'>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</Typography>
</Box>

<Box>
<img src={ ai } className='caroic'/>
<Typography variant='h4' className='black'>AI Solution</Typography>
<Typography variant='h6' className='black'>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</Typography>
</Box>

<Box>
<img src={ bi } className='caroic'/>
<Typography variant='h4' className='black'>BI Solution</Typography>
<Typography variant='h6' className='black'>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</Typography>
</Box>

<Box>
<img src={ pd } className='caroic'/>
<Typography variant='h4' className='black'>Product Development</Typography>
<Typography variant='h6' className='black'>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</Typography>
</Box>

<Box>
<img src={ md } className='caroic'/>
<Typography variant='h4' className='black'>App Development</Typography>
<Typography variant='h6' className='black'>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</Typography>
</Box>

<Box>
<img src={ wd } className='caroic'/>
<Typography variant='h4' className='black'>Website Development</Typography>
<Typography variant='h6' className='black'>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</Typography>
</Box>

<Box>
<img src={ uiux } className='caroic'/>
<Typography variant='h4' className='black'>UI/UX</Typography>
<Typography variant='h6' className='black'>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</Typography>
</Box>


</Box>

</Grid>
</Grid>


</Container>
</Box>



<Box className='section' component='section' id='corevalue'>
<Container maxWidth className='fullcontainer'>
<Grid container spacing={0} alignItems="center" className='rowfullheight'>
<Grid item lg={6} md={6} sm={6} xs={12} id="left">
<Box ml={6}>
<Typography className='skblue' variant='h3'>
ABOUT
</Typography>
<Typography className='white' variant='h2'>
Our Core Value
</Typography>
<Typography className='white jst' variant='h6'>
Dummy Text.. Decimal Point Analytics is a modern, technology enabled financial research consulting company. Our combination of machine learning algorithms with talented professional team enables us to create unique, tailor-made-products, real-time services and solutions for our clients. Our unmatched value proposition has been increasingly appreciated by clients across the globe. 
</Typography>
</Box>
</Grid>
<Grid item lg={6} md={6} sm={6} xs={12} id="red">
<Box className='custom2 owl-carousel owl-carousel owl-theme'>

<Box className='item'>
<Box className='corvaluebx'>
<img src={ integrity } className='caroic'/>
<Box mb={3}>
<Typography className='blue' variant='h2'>Integrity</Typography>
</Box>
<Typography className='black jst' variant='h6'>
We believe in being transparent in the work we do and the approach we take. We shave honest dialogues with our clients and with each other. We are accountable, we challenge unacceptable behaviour,create better understanding and trust.
</Typography>
</Box>
</Box>

<Box className='item '>
<Box className='corvaluebx'>
<img src={ innovation } className='caroic'/>
<Box mb={3}>
<Typography className='blue' variant='h2'>Innovation</Typography>
</Box>
<Typography className='black jst' variant='h6'>
We support creativity and innovation to achieve better outcomes. We believe in having an entrepreneurial spirit, being agile, adaptable, and innovative. We are empowered to continuously review.
</Typography>
</Box>
</Box>

<Box className='item '>
<Box className='corvaluebx'>
<img src={ makediff } className='caroic'/>
<Box mb={3}>
<Typography className='blue' variant='h2'>Making a Difference</Typography>
</Box>
<Typography className='black jst' variant='h6'>
We aim to create long-term success for our clients, other stakeholders, and society. We are passionate that our work impacts lives for the better. We believe in being competitive while showing humility and hunger.
</Typography>
</Box>
</Box>

<Box className='item '>
<Box className='corvaluebx'>
<img src={ customer } className='caroic'/>
<Box mb={3}>
<Typography className='blue' variant='h2'>Customer Centricity</Typography>
</Box>
<Typography className='black jst' variant='h6'>
We take collective ownership of outcomes, always suggest what is right for the client and do it right the first time, and always strive to surpass the expectations of the client.
</Typography>
</Box>
</Box>

<Box className='item '>
<Box className='corvaluebx'>
<img src={ rest } className='caroic'/>
<Box mb={3}>
<Typography className='blue' variant='h2'>Respect and Care</Typography>
</Box>
<Typography className='black jst' variant='h6'>
We are thoughtful, empathetic, and compassionate. We exhibit care and respect for each other and our clients. We create fulfilling work, recognize and celebrate achievements, integrate work-life balance, and have fun.
</Typography>
</Box>
</Box>

<Box className='item '>
<Box className='corvaluebx'>
<img src={ growth } className='caroic'/>
<Box mb={3}>
<Typography className='blue' variant='h2'>Constant Learning and Growth</Typography>
</Box>
<Typography className='black jst' variant='h6'>
We get motivated by constantly growing and so we always strive to upgrade knowledge and skills. We constantly learn new things for personal and professional growth to remain relevant in the fast-changing environment.
</Typography>
</Box>
</Box>

</Box>
</Grid>
</Grid>
</Container>
</Box>



<Box className='section ourknowledge' component='section'>
<Container maxWidth='lg' className='bdr'>

<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography className='skblue' variant='h3'>
ABOUT
</Typography>
<Typography className='black' variant='h2'>
Our Knowledge
</Typography>
</Box>
</Grid>
</Grid>

<Box mt={3}>
<Box className="skillproduct owl-carousel owl-theme">
        <Box className="item">
        <ul id='proskills'>
        <li>
        <Box className="productknow">
        <img src={ pro1 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ pro2 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ pro3 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ pro4 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ pro5 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ pro6 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ pro7 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ pro8 } />
        </Box>
        </li>
        </ul>
        </Box>

        <Box className="item">
        <ul id='proskills'>
        <li>
        <Box className="productknow">
        <img src={ ski1 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ ski2 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ ski3 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ ski4 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ ski5 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ ski6 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ ski7 } />
        </Box>
        </li>

        <li>
        <Box className="productknow">
        <img src={ ski8 } />
        </Box>
        </li>
        </ul>
        </Box>
</Box>
</Box>


</Container>
</Box>


<Box className='section sec_bg ourstrength' component='section'>
<Container maxWidth='lg' className='bdr'>

<Grid container spacing={1} alignItems="top">
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className='al_center'>
<Typography className='skblue' variant='h3'>
ABOUT
</Typography>
<Typography className='black' variant='h2'>
Our Strength
</Typography>
</Box>
</Grid>
</Grid>

<Box mt={3}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={3} md={6} sm={6} xs={6}>
<Box className='str_bg'>
<Box className='numcircle' mb={2}>
350
<Box className='pulse'>
+
</Box>
</Box>
<Typography className='black' variant='h4'>Happy Customer</Typography>
</Box>
</Grid>

<Grid item lg={3} md={6} sm={6} xs={6}>
<Box className='str_bg'>
<Box className='numcircle' mb={2}>
700
<Box className='pulse'>
+
</Box>
</Box>
<Typography className='black' variant='h4'>Project Completed</Typography>
</Box>
</Grid>

<Grid item lg={3} md={6} sm={6} xs={6}>
<Box className='str_bg'>
<Box className='numcircle' mb={2}>
04
</Box>
<Typography className='black' variant='h4'>Offices Wordlwide</Typography>
</Box>
</Grid>

<Grid item lg={3} md={6} sm={6} xs={6}>
<Box className='str_bg'>
<Box className='numcircle' mb={2}>
80
<Box className='pulse'>
+
</Box>
</Box>
<Typography className='black' variant='h4'>Expert Advisors</Typography>
</Box>
</Grid>

</Grid>
</Box>


</Container>
</Box>


                   



        </>
    );
}
