import React ,{ useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate, Routes , Route } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { Box, List, ListItem, ListItemIcon, Toolbar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from './components/Dashboard';
import CreateProduct from './components/CreateProduct';
import ProductTable from './components/ProductTable';
import OrderTable from './components/OrderTable';
import Customers from './components/Customers';
import AdminDashboard from './components/Dashboard';
const menu =[
    { name:"Dashboard",color:"yellow",path:"/",icon:<SpaceDashboardIcon/>},
    { name:"Products",color:"green",path:"/admin/products",icon:<SpaceDashboardIcon/>},
    { name:"Orders",color:"orange",path:"/admin/orders",  icon:<SpaceDashboardIcon/>},
    { name:"Customers",color:"red",path:"/admin/customers",icon:<SpaceDashboardIcon/>},
    { name:"Settings",color:"pink",path:"/admin/settings",   icon:<SpaceDashboardIcon/>},
    { name:"Logout",color:"purple",path:"/admin/logout",icon:<SpaceDashboardIcon/>},
    {name:"Add Product",color:"blue",path:"/admin/product/create",icon:<SpaceDashboardIcon/>}
    
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
            height : '100%',
             }} >
                {/* {isLargeScreen && <Toolbar />} */}
                    <List
                    >
                        {menu.map((item,index) => 
                            <ListItem key={item.name}
                            disablePadding
                            onClick={() => navigate(item.path)}
                            sx={{padding: '10px',
                            cursor: 'pointer',
                            // backgroundColor:'black',
                            }}

                            >
                                <ListItemIcon
                                 sx={{
                                    color: item.color,
                                 }}>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText 
                                sx={{
                                    color: item.color,
                                    fontWeight: 'bold'
                                }} primary={item.name} />
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
          <Box>
            <Routes>
                <Route path='/' element={<AdminDashboard />}></Route>
                <Route path='/product/create' element={<CreateProduct />}></Route>
                <Route path='/products' element={<ProductTable />}></Route>
                <Route path='/orders' element={<OrderTable />}></Route>
                <Route path='/customers' element={<Customers />}></Route>
            </Routes>
            </Box>
              </Box>
    </div>
  )
}

export default AdminPanel