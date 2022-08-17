import { AppBar, Grid, Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import {useState} from 'react';
import Scroll from './Scroll'
import {IconButton, MenuItem, Menu, Button, Box, Drawer, Divider, withStyles , List, ListItem } from '@material-ui/core';
import {Link} from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';


const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);


const AccordionSummary = withStyles({
    root: {
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);


  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

  


export default function CustomizedAccordions() {
  
    
    const [expanded, setExpanded] = React.useState('panel1');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
   
  
  
    return (

        <Box>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Button endIcon={<ArrowDropDownIcon />} disableRipple className="menutt">Innovation Center</Button>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>

                <Grid container spacing={2} alignItems="top">
<Grid item xs={12} sm={6}> 
             
<Typography className="menuheading">Solutions</Typography>

<Box className='bdd'>
<Box className='linkitem'  component={Link} to='/datasolution'>
<MenuItem ><span>Data Solution</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/businessintelligence'>
<MenuItem    ><span>Business Intelligence</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/artificialintelligence'>
<MenuItem    ><span>Artificial Intelligence</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/researchsolution'>
<MenuItem    ><span>Research Solution</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box>
</Box>

<Typography className="menuheading">Upcoming</Typography>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem    ><span>Quantum Computing</span>
</MenuItem>
</Box>
</Box>            

</Grid>

<Grid item xs={12} sm={6}> 
<Typography className="menuheading">Product</Typography>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/ecopulse'>
<MenuItem    ><span>Eco Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/coffeepulse'>
<MenuItem    ><span>Coffee Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/creditpulse'>
<MenuItem    ><span>Credit Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/analystpulse'>
<MenuItem    ><span>Analyst Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/fidelitypulse'>
<MenuItem    ><span>Fidelity Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/robopulse'>
<MenuItem    ><span>Robo Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

</Grid>
</Grid>

            </Typography>
          </AccordionDetails>
        </Accordion>
  

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary  aria-controls="panel2d-content" id="panel2d-header" >
          <Button disableRipple className="menutt">Insight</Button>
          </AccordionSummary>
        </Accordion>
  

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary  aria-controls="panel3d-content" id="panel3d-header" >
          <Button disableRipple className="menutt">Career</Button>
          </AccordionSummary>
        </Accordion>
  
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Button endIcon={<ArrowDropDownIcon/>} disableRipple className="menutt">About Us</Button>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <Grid container spacing={2} alignItems="top">
            <Grid item xs={12} sm={6}> 

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/whoweare'>
<MenuItem    ><span>Who We Are</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/whatwedo'>
<MenuItem    ><span>What We do</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/awards'>
<MenuItem    ><span>Awards and Recognition</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem    ><span>The Technology Edge</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem    ><span>Value Proposition</span>
</MenuItem>
</Box>
</Box>

</Grid>

<Grid item xs={12} sm={6}> 

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem    ><span>Management Team</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem    ><span>Client Testimonials</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem    ><span>Structure of Innovation</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem    ><span>CSR</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem    ><span>Energy Efficiency</span>
</MenuItem>
</Box>
</Box>

</Grid>

            </Grid>
            </Typography>
          </AccordionDetails>
        </Accordion>
  

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary  aria-controls="panel5d-content" id="panel5d-header" >
          <Button disableRipple className="menutt">Contact Us</Button>
          </AccordionSummary>
        </Accordion>
      </Box>
        );
    }
    