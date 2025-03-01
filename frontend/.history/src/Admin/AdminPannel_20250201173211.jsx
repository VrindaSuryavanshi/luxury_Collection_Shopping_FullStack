import React ,{ useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { Box, List, ListItem, ListItemIcon, Toolbar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const menu =[
    { name:"Dashboard",path:"/admin/dashboard",icon:<SpaceDashboardIcon/>},
    { name:"Products",path:"/admin/products",icon:<SpaceDashboardIcon/>},
    { name:"Orders",path:"/admin/orders",  icon:<SpaceDashboardIcon/>},
    { name:"Customers",path:"/admin/customers",icon:<SpaceDashboardIcon/>},
    { name:"Settings",path:"/admin/settings",   icon:<SpaceDashboardIcon/>},
    { name:"Logout",path:"/admin/logout",icon:<SpaceDashboardIcon/>},
    {name:"Add Product",path:"/admin/product/create",icon:<SpaceDashboardIcon/>}
    
]
const AdminPanel = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const [sidebarVisible, setSidebarVisible] =useState(false);
    const navigate = useNavigate();

    const drawer=(
        <Box
        sx={{
            overflow: 'auto',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
             
            height : '100%'
             }} >
                {/* {isLargeScreen && <Toolbar />} */}
                    <List>
                        {menu.map((item,index) => 
                            <ListItem key={item.name}
                            disablePadding
                            onClick={() => navigate(item.path)}
                            sx={{cursor:'pointer', 
                                '&:hover':{backgroundColor:'#f5f5f5',
                             backgroundColor: red,                                    
                                }}}
                            >
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        )}
                    </List>

                    <List>
                        
                            <ListItem
                            disablePadding >
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItem>
                        
                    </List>
            </Box>
    )
    return (
    <div>
        <Box sx={{ display: `${isLargeScreen} ? "flex" : "block"`}}>
         <CssBaseline />
         <Drawer
           variant="permanent"
              sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                     width: 240,
                     boxSizing: 'border-box',
                },
              }}
          >
                {drawer}
          </Drawer>
              </Box>
    </div>
  )
}

export default AdminPanel