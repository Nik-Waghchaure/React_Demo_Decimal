import React, { Component } from "react";
import { AppBar,  Button, Container, Grid, Tabs, Tab, Toolbar, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Link } from 'react-router-dom';


// images
import indexbanner from "../../asset/images/aboutus/whatwedo.gif";
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
    What We Do
    </Typography>

    <Typography variant='h4' className='black'>
    Full Service Consultants to Financial and Economic Markets
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
<Grid item lg={7} md={6} sm={6} xs={12}>
<Box>
<Typography variant='h3' className='skblue'>
About
</Typography>
<Typography variant='h2' className='black'>
What We Do
</Typography>
<Typography variant='h6' className='black jst'>
Decimal Point Analytics Private Limited (DPA) is a leading management consultant in the space of financial solutions & a full service consulting company providing customized management consulting solutions to clients based around the world. The company has extensive management consultancy service capabilities in the key areas of financial research, analysis, modelling, risk management and related solutions. DPA’s clients are institutional asset managers, family offices, and data providers across the globe.
</Typography>

<Typography variant='h6' className='black jst'>
Our services involve consulting and market research services related to economies and financial markets. These services cover most economies and leading financial market analysis, including equities, fixed income, developed and emerging economies and economic modelling, funds and fund analytics, company and industry analysis and other financial market data analytics designed to secure information on the prospects and performance of the relevant market. The company’s domain knowledge in financial markets, coupled with seamless delivery capabilities of its dedicated analyst consultants, enables optimal utilization of senior resources by clients. 
</Typography>

<Typography variant='h6' className='black jst'>
The company facilitates the management consulting of processes of its clients through solutions that combine its markets expertise, technology and access to a vast pool of qualified talent. DPA’s clients have benefited from innovative management consultancy services that have contributed significantly to the quality and timeliness of market research data, information or requirements. 
</Typography>


</Box>
</Grid>
<Grid item lg={5} md={6} sm={6} xs={12}>
<Box className='al_right'>
<img src={ whoweare } className='topbanner'/>
</Box>
</Grid>
</Grid>
</Container>
</Box>







<Box className='section sec_bg' component='section'>
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
