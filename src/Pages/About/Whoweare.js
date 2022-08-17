import React, { Component } from "react";
import { AppBar,  Button, Container, Grid, Tabs, Tab, Toolbar, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Link } from 'react-router-dom';


// images
import indexbanner from "../../asset/images/aboutus/whoweare.gif";
import whoweare from "../../asset/images/aboutus/whoweare_sideimg.png";
import why1 from "../../asset/images/index/homei01.svg";



export class videoModal extends Component {
 
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  
  render() {
    return (
      <>

<Box className='mainsection' component='section'>
<Container maxWidth='lg'>
<Grid container spacing={1} alignItems="center">
<Grid item lg={5} md={6} sm={6} xs={12}>
    <Box>
    <Typography variant='h1' className='blue'>
    Who We Are
    </Typography>

    <Typography variant='h4' className='black'>
    Customized, Optimized and Enhanced Research Operations
    </Typography>

    </Box>
    </Grid>

<Grid item lg={7} md={7} sm={6} xs={12}>
<Box className='al_center'>
<img src={ indexbanner } className='topbanner'/>
</Box>
</Grid>

</Grid>
</Container>
</Box>



<Box className='section' component='section'>
<Container maxWidth='lg' className='bdr'>
<Grid container spacing={1} alignItems="center">
<Grid item lg={5} md={6} sm={6} xs={12}>
<Box>
<Typography variant='h3' className='skblue'>
About
</Typography>
<Typography variant='h2' className='black'>
Who We Are
</Typography>
<Typography variant='h6' className='black jst'>
Since its inception in March 2003, Decimal Point Analytics has been a trusted partner to an entire spectrum of financial market professionals. We are thrilled to be able to deliver innovation in research processes through a team of experts in financial services and computing. By utilizing and scaling the values we bring into the engagements, our customers have been able to delight their end-customers and garner competitive advantage in the process. Our team based in India shares a common vision and pedigree. It includes highly experienced professionals with advanced degrees in engineering, math, business and financial domain. The research wing is often complemented by a team of equally capable professionals at client locations with a common objective of delivering value to clients
</Typography>
</Box>
</Grid>
<Grid item lg={7} md={6} sm={6} xs={12}>
<Box className='al_right'>
<img src={ whoweare } className='topbanner'/>
</Box>
</Grid>
</Grid>
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
So, Why Decimal
</Typography>
</Box>
</Grid>
</Grid>

<Box mt={3}>
<Grid container spacing={1} alignItems="top">
<Grid item lg={4} md={6} sm={6} xs={6}>
<Link to='/datasolution' onClick={this.forceUpdate}>
<Box className='str_bg'>
<Box mb={2}>
<img src={ why1 } className='bxicon'/>
</Box>
<Typography className='black' variant='h4'>The Technology Edge</Typography>
</Box>
</Link>
</Grid>

<Grid item lg={4} md={6} sm={6} xs={6}>
<Box className='str_bg'>
<Box mb={2}>
<img src={ why1 } className='bxicon'/>
</Box>
<Typography className='black' variant='h4'>Value Proposition</Typography>
</Box>
</Grid>

<Grid item lg={4} md={6} sm={6} xs={6}>
<Box className='str_bg'>
<Box mb={2}>
<img src={ why1 } className='bxicon'/>
</Box>
<Typography className='black' variant='h4'>Management Team</Typography>
</Box>
</Grid>


</Grid>
</Box>


</Container>
</Box>



<Box className='section' component='section'>
<Container maxWidth='lg' className='bdr'>
<Grid container spacing={3} alignItems="center">
<Grid item lg={6} md={6} sm={6} xs={12}>
<Box>
<Typography variant='h3' className='skblue'>
About
</Typography>
<Typography variant='h2' className='black'>
Watch Our Story
</Typography>
<Typography variant='h6' className='black jst'>
This video captures our unique Value Proposition and how and why we are transforming research operations and analytics needs of investment management and financial inter mediation businesses.
</Typography>
</Box>
</Grid>
<Grid item lg={6} md={6} sm={6} xs={12}>
            <Box className='al_center' style={{position:'relative',}}>
            <Box className='videobg_gr'></Box>
            <Box className='videobg'>
            <button onClick={this.openModal} class="pulse-button"></button>
            </Box>
            </Box>

            <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="0mXcQHdxIYM"
            onClose={() => this.setState({ isOpen: false })}
            />


</Grid>
</Grid>
</Container>
</Box>





      </>
    );
  }
}

export default videoModal;
