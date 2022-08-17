import { AppBar, Grid, Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import {useState} from 'react';
import Scroll from './Scroll'
import {IconButton, MenuItem, Menu, Button, Box, Drawer, Divider, withStyles , List, ListItem } from '@material-ui/core';
import {Link} from 'react-router-dom';


import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import dpalogo from "../asset/images/dpalogo.svg";

import CloseIcon from '@mui/icons-material/Close';
import DragHandleIcon from '@mui/icons-material/DragHandle';
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




/* Navbar Section Start */
export default function PrimarySearchAppBar() {
  const [count, setCount] = useState(0);
  const [anchorE2, setAnchorE2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE2(null);
  };
  
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
    setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const ITEM_HEIGHT = 48;

    const [state, setState] = React.useState({
    });
   
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'right' && (event.key === 'right' || event.key === 'right')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };



// Drawer Ended ============ MOBILE VIEW ENDED ==========================


    const [expanded, setExpanded] = React.useState('false');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    const list = (anchor) => (
      
      <Box
        sx={{ width: 300 }}
        role="presentation"
      >


        <Box mb={2} mt={2} ml={2}>
          <IconButton
            className='Close_btn'
            variant="contained"
            onClick={toggleDrawer(anchor, false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
           
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
<MenuItem  onClick={toggleDrawer(anchor, false)} ><span>Data Solution</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/businessintelligence'>
<MenuItem  onClick={toggleDrawer(anchor, false)}><span>Business Intelligence</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/artificialintelligence'>
<MenuItem onClick={toggleDrawer(anchor, false)} ><span>Artificial Intelligence</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/researchsolution'>
<MenuItem  onClick={toggleDrawer(anchor, false)} ><span>Research Solution</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box>
</Box>

<Typography className="menuheading">Upcoming</Typography>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem  onClick={toggleDrawer(anchor, false)} ><span>Quantum Computing</span>
</MenuItem>
</Box>
</Box>            

</Grid>

<Grid item xs={12} sm={6}> 
<Typography className="menuheading">Product</Typography>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/ecopulse'>
<MenuItem onClick={toggleDrawer(anchor, false)} ><span>Eco Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/coffeepulse'>
<MenuItem onClick={toggleDrawer(anchor, false)}><span>Coffee Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/creditpulse'>
<MenuItem  onClick={toggleDrawer(anchor, false)} ><span>Credit Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/analystpulse'>
<MenuItem  onClick={toggleDrawer(anchor, false)} ><span>Analyst Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/fidelitypulse'>
<MenuItem  onClick={toggleDrawer(anchor, false)} ><span>Fidelity Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/robopulse'>
<MenuItem  onClick={toggleDrawer(anchor, false)} ><span>Robo Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

</Grid>
</Grid>

            </Typography>
          </AccordionDetails>
        </Accordion>
  
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
          <AccordionSummary component={Link} to='/insight' aria-controls="panel2d-content" id="panel2d-header"  onClick={toggleDrawer(anchor, false)}>
          <Button disableRipple className="menutt">Insight</Button>
          </AccordionSummary>
  
        </Accordion>
  
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary component={Link} to='/commingsoon'  aria-controls="panel3d-content" id="panel3d-header"  onClick={toggleDrawer(anchor, false)}>
            <Button disableRipple className="menutt">Career</Button>
          </AccordionSummary>
        </Accordion>
  
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" >
            <Button endIcon={<ArrowDropDownIcon/>} disableRipple className="menutt">About Us</Button>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <Grid container spacing={2} alignItems="top">
            <Grid item xs={12} sm={6}> 

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/whoweare'>
<MenuItem  onClick={toggleDrawer(anchor, false)} ><span>Who We Are</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/whatwedo'>
<MenuItem onClick={toggleDrawer(anchor, false)} ><span>What We do</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/awards'>
<MenuItem  onClick={toggleDrawer(anchor, false)}><span>Awards and Recognition</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem  onClick={toggleDrawer(anchor, false)} ><span>The Technology Edge</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem  onClick={toggleDrawer(anchor, false)} ><span>Value Proposition</span>
</MenuItem>
</Box>
</Box>

</Grid>

<Grid item xs={12} sm={6}> 

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem  onClick={toggleDrawer(anchor, false)} ><span>Management Team</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem onClick={toggleDrawer(anchor, false)}><span>Client Testimonials</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem onClick={toggleDrawer(anchor, false)} ><span>Structure of Innovation</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem  onClick={toggleDrawer(anchor, false)} ><span>CSR</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem  onClick={toggleDrawer(anchor, false)}><span>Energy Efficiency</span>
</MenuItem>
</Box>
</Box>

</Grid>

            </Grid>
            </Typography>
          </AccordionDetails>
        </Accordion>
  
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary component={Link} to='/commingsoon' aria-controls="panel5d-content" id="panel5d-header"  onClick={toggleDrawer(anchor, false)}s>
            <Button disableRipple className="menutt">Contact Us</Button> 
          </AccordionSummary>
        </Accordion>
      </Box>
 
    </Box>
    );
  

// Drawer Ended ============ MOBILE VIEW ENDED ==========================

  

const renderMenu = (
// =====================================================================      
<Menu
anchorEl={anchorEl}
anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
id={menuId}
keepMounted
transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
open={isMenuOpen}
onClose={handleMenuClose} className="menuitem"
PaperProps={{
style: {
width: '20ch',
},
}}
>


<Grid container spacing={4} alignItems="top">
<Grid item xs={12} sm={6}> 
<Typography className="menuheading">Solutions</Typography>

<Box className='bdd'>
<Box className='linkitem'  component={Link} to='/datasolution'>
<MenuItem onClick={handleMenuClose} ><span>Data Solution</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/businessintelligence'>
<MenuItem onClick={handleMenuClose} ><span>Business Intelligence</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/artificialintelligence'>
<MenuItem onClick={handleMenuClose} ><span>Artificial Intelligence</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/researchsolution'>
<MenuItem onClick={handleMenuClose} ><span>Research Solution</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box>
</Box>

<Typography className="menuheading">Upcoming</Typography>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem onClick={handleMenuClose} ><span>Quantum Computing</span>
</MenuItem>
</Box>
</Box>



</Grid>

<Grid item xs={12} sm={6}> 
<Typography className="menuheading">Product</Typography>


<Box className='bdd'>
<Box className='linkitem' component={Link} to='/ecopulse'>
<MenuItem onClick={handleMenuClose} ><span>Eco Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/coffeepulse'>
<MenuItem onClick={handleMenuClose} ><span>Coffee Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/creditpulse'>
<MenuItem onClick={handleMenuClose} ><span>Credit Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/analystpulse'>
<MenuItem onClick={handleMenuClose} ><span>Analyst Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/fidelitypulse'>
<MenuItem onClick={handleMenuClose} ><span>Fidelity Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/robopulse'>
<MenuItem onClick={handleMenuClose} ><span>Robo Pulse</span>
</MenuItem>
<Typography className='menudscrp'>Lorem Ipsum is simply dummy text of the printing</Typography>
</Box> 
</Box>

</Grid>
</Grid>


</Menu>
// ===================================================================== 
);



    return (
      <div className="grow">
        <Scroll showBelow={250} />
        <AppBar position="fixed" className="appnavbar" alignItems="center">
          <Toolbar>

            <Box className='loggo'>
            <a onClick={() => {window.location.href="/"}}><img src={dpalogo} className='dpalogo  ' /></a>
            </Box>

            <div className="grow" />

            <div className="sectionDesktop">

            


<Box  variant="h6" className="logintitle" aria-controls="menuId" aria-haspopup="true" onClick={handleProfileMenuOpen}>
<Button endIcon={<ArrowDropDownIcon/>} disableRipple className="menutt">Innovation Center</Button>
</Box>

<Link to='/insight' variant="h6" className="logintitle" >
<Button className="menutt" disableRipple>Insight</Button>
</Link>
              
<Link to='/commingsoon' variant="h6" className="logintitle" >
<Button className="menutt" disableRipple>Career</Button>
</Link>           

<Box  variant="h6" className="logintitle" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
<Button endIcon={<ArrowDropDownIcon/>} disableRipple className="menutt">About Us</Button>
</Box>  


<Menu
id="menuId"
anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
anchorEl={anchorE2}
keepMounted
open={Boolean(anchorE2)}
onClose={handleClose} className="menuitem"

>


<Grid container spacing={4} alignItems="top">
<Grid item xs={12} sm={6}> 

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/whoweare'>
<MenuItem onClick={handleClose} ><span>Who We Are</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/whatwedo'>
<MenuItem onClick={handleClose} ><span>What We do</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/awards'>
<MenuItem onClick={handleClose} ><span>Awards and Recognition</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem onClick={handleClose} ><span>The Technology Edge</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem onClick={handleClose} ><span>Value Proposition</span>
</MenuItem>
</Box>
</Box>





</Grid>

<Grid item xs={12} sm={6}> 

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem onClick={handleClose} ><span>Management Team</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem onClick={handleClose} ><span>Client Testimonials</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem onClick={handleClose} ><span>Structure of Innovation</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem onClick={handleClose} ><span>CSR</span>
</MenuItem>
</Box>
</Box>

<Box className='bdd'>
<Box className='linkitem' component={Link} to='/commingsoon'>
<MenuItem onClick={handleClose} ><span>Energy Efficiency</span>
</MenuItem>
</Box>
</Box>

</Grid>
</Grid>

</Menu>

              
  

<Link to='/commingsoon' variant="h6" className="logintitle" >
<Button className="menutt" disableRipple>Contact Us</Button>
</Link>

<Box>
      {['right'].map((anchor) => (
        <React.Fragment  >
          <Button className="menutt" onClick={toggleDrawer(anchor, true)}> <DragHandleIcon/>  </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
</Box>



            </div>

          </Toolbar>
        </AppBar>
                
        {renderMenu}
      </div>



    );
}
/* Navbar Section Ends */