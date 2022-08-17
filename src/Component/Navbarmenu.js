import React,{useState} from 'react';
import { AppBar,  Button, Divider, Container, Grid, Tabs, Tab, Toolbar, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {NavLink, Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../src/asset/images/logo.png';
import Stack from '@mui/material/Stack';



const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
    };


    const toggleSubmenu2Close = () => {

        setMenuSubMenu2(isMenuSubMenu2 === true ? false : false  );

      };

   

      const toggleSubmenuClose = () => {

        setMenuSubMenu(isMenuSubMenu === true ? false : false  );

      };

 
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    
    // for dropdown menu (Innovation Center)  START
    const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
      
    const toggleSubmenu2 = () => {
      setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
    };
    
    let boxClassSubMenu2 = ["sub__menus"];
    if(isMenuSubMenu2) {
        boxClassSubMenu2.push('sub__menus__Active');
    }else {
        boxClassSubMenu2.push('');
    }
    // for dropdown menu (Innovation Center)  END


    // for dropdown menu (About Us)  START
     const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
     const toggleSubmenu = () => {
       setMenuSubMenu(isMenuSubMenu === false ? true : false);
     };
 
     
     let boxClassSubMenu = ["sub__menus"];
     if(isMenuSubMenu) {
         boxClassSubMenu.push('sub__menus__Active');
     }else {
         boxClassSubMenu.push('');
     }
    // for dropdown menu (About Us)  END

 
    return (


    <header className="header__middle" sticky>
        <Container maxWidth>
        <Grid container spacing={1} alignItems="center">
        <Grid item lg={3} md={3} sm={3} xs={3}>
        <Box>
        <img src={logo} alt="logo" /> 
        </Box>
        </Grid>


        <Grid item lg={9} md={9} sm={9} xs={9}>
<Box>
<nav className="main-nav " >

{/* Responsive Menu Button */}
{isResponsiveclose === true ? <> 
<span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <MenuIcon />                                 </span>
</> : <> 
<span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <MenuIcon />   </span>
</>} 

<ul className={boxClass.join(' ')}>
<li onClick={toggleSubmenu2}  className="menu-item sub__menus__arrows" ><Link to='Home' onClick={toggleSubmenuClose}> Innovation Center  </Link>


<ul className={boxClassSubMenu2.join(' ')} id="Dropdown1" > 
<Grid container spacing={0}>
<Grid item xs={6}>
<Stack>
<li  className='li-head'>Solution</li>
<Divider className='divider'/>
<li className='li'> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/D_Solution`}>Data Solution </NavLink>saddasdsad </li>
<Divider className='divider'/>
<li className='li'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/BI`}> Business Intelligence </NavLink> </li>
<Divider className='divider'/>
<li className='li'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/AI`}> Artificial Intelligence </NavLink> </li>
<Divider className='divider'/>
<li className='li'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/R_Solution`}> Reseacrh Solution </NavLink> </li>
<Divider className='divider'/>
</Stack>
</Grid>
<Grid item xs={6}>
<Stack>
<li  className='li-head'>Product</li>
<Divider className='divider'/>
<li  className='li'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Eco_P`}> Eco Pulse </NavLink> </li>
<Divider className='divider'/>
<li  className='li'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Coffee_P`}> Coffee Pulse </NavLink> </li>
<Divider className='divider' />
<li  className='li'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Credit_P`}> Credit Pulse </NavLink> </li>
<Divider className='divider'/>
<li  className='li'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Analyst_P`}> Anylyst Pulse </NavLink> </li>
<Divider className='divider'/>
<li className='li'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Fidility_P`}> Fidility Pulse </NavLink> </li>
<Divider className='divider' />
<li className='li' ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Robo_P`}> Robo Pulse </NavLink> </li>
<Divider className='divider' />
</Stack>
</Grid>   
</Grid>
</ul>     
</li>

<li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Insight`}> Insight </NavLink> </li>

<li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Career`}> Career </NavLink> </li>

<li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="About Us" onClick={toggleSubmenu2Close} > About Us  </Link>

<ul className={boxClassSubMenu.join(' ')} id="Dropdown2" > 
<li  className='li'> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/who`}> Who we Are </NavLink> </li>
<Divider className='divider'/>
<li  className='li'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/What`}> What we do </NavLink> </li>
<Divider className='divider'/>
<li className='li' ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Quantum`}> Quantum Computing </NavLink> </li>
<Divider className='divider'/>
<li className='li' ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Awards`}> Awards & Recognition </NavLink> </li>
<Divider className='divider'/>
<li className='li' ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Tech_Edge`}> Technological Edge </NavLink> </li>
<Divider className='divider'/>
<li className='li' ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Value_P`}> Value Proposition </NavLink> </li>
<Divider className='divider'/>
<li className='li' ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Team`}> Management Team </NavLink> </li>
<Divider className='divider'/>
<li className='li' ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Client_Testi`}> Client Testimonials </NavLink> </li>
<Divider className='divider'/>
<li className='li' ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Innovation`}> Structure of Innovation </NavLink> </li>
<Divider className='divider'/>
<li className='li' ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/CSR`}> CSR </NavLink> </li>
<Divider className='divider'/>
<li className='li' ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Energy_E`}> Energy Efficiency </NavLink> </li>
</ul>
</li>

<li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact Us </NavLink> </li>

</ul>

</nav> 
</Box>
        </Grid>

    </Grid>
        </Container>
    </header>
    )
}

export default Navbarmenu
