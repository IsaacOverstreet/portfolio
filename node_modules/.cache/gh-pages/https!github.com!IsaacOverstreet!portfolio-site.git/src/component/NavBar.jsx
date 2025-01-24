import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { Link } from 'react-router-dom';



function navStyle(){
    return{
        width:"20px",
      marginRight:"5px",
      color:'#B1D4E0'
    }
        
}
 
function NavBar(props) {   
    const drawerWidth = 240;
    const navItems = [
        {
            id: 1,
            name: "Home",
            icon: <HomeIcon style={navStyle()}/>,
            link: "/"
        },
        {
            id: 2,
            name: "About",
            icon: <PersonOutlinedIcon style={navStyle()}/>,
            link: "/About"
        },
        {
            id: 3,
            name: "Project",
            icon: <AccountTreeOutlinedIcon style={navStyle()}/>,
            link: "/Project"
        },
        {
            id: 4,
            name: "Resume",
            icon: <InsertDriveFileOutlinedIcon  style={navStyle()}/>,
            link: "/Resume"
        }
    ];


        const { window: customWindow } = props;
        const [mobileOpen, setMobileOpen] = React.useState(false);
        const [navBarBlur, setNavBarBlur] = useState(false);

        function scrollHandler(){
            if (window.scrollY >= 20){
                setNavBarBlur(true)
            }else {
                setNavBarBlur(false)}
        }

        useEffect(()=>{
            window.addEventListener("scroll", scrollHandler);
            return ()=>{
                window.removeEventListener("scroll",scrollHandler)
            };

        },[]);

       

        const handleDrawerToggle = () => {
            setMobileOpen((prevState) => !prevState);
        };

        

        const drawer = (
           
            <Box onClick={handleDrawerToggle} sx={{ textAlign:'center'}}>
                <Typography variant="h6" sx={{ my: 2 }}>
                    MI
                </Typography>
                <Divider />
                <List>
                    {navItems.map(({id,name,icon,link}) => (
                    <ListItem key={name} disablePadding>
                        <ListItemButton component={Link} to={link} sx={{ textAlign: 'start', marginLeft:'30px'}}><ListItemIcon sx={{padding: 0, margin: 0, justifyContent: 'center'}}>{icon}</ListItemIcon>
                        <ListItemText primary={name} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
        );
        

        const container = customWindow !== undefined ? () => customWindow().document.body : undefined;

        

        
        

       

    return (
        <Box sx={{ display: 'flex'}}   className={navBarBlur ? 'navbar blur': 'navbar'}  >
        
            <AppBar  component="nav"   style={{ boxShadow: 'none', background: navBarBlur? 'rgba(7, 38, 66, 0.26)' : "rgba(2, 0, 36, 0.57)",
                    backdropFilter: navBarBlur ? "blur(10px)" : "none",
                    transition: 'backdrop-filter 0.3s ease'}} >
                                    
                <Toolbar  sx={{ display: 'flex', justifyContent: 'space-between'  }}>
                    
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { xs:'block',sm: 'block', md:'none'  } }} >
                        <MenuIcon sx={{color:'#B1D4E0'}} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, color:'#B1D4E0', cursor:'pointer', display: { xs: 'none', sm: 'none', md:'flex' } }}
                        onClick={()=>window.location.reload(true)}
                    >
                        MI
                    </Typography>
                    <Box  sx={{ display: { xs: 'none', sm:'none', md:'flex' } }}>
                        {navItems.map(({id, name, icon, link}) => (
                        <Button className="nav-bar"  component={Link} to={link} key={name} sx={{ color:'#B1D4E0', fontSize:'1.2rem',marginRight:'20px' }}>
                            {icon}{name}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer 
                PaperProps={{sx:{
                    background:"rgb(7,37,66)",
                    color: "white"
                }}}
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'block'  },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
                >
                {drawer}
                </Drawer>
            </nav>
        </Box>
    );


}
export default NavBar;