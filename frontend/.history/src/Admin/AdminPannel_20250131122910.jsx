import React ,{ useState } from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { Box, List, ListItem, ListItemIcon, Toolbar } from '@mui/material';
const menu =[
    { name:"Dashboard",path:"/admin/dashboard"},
    { name:"Products",path:"/admin/products"},
    { name:"Orders",path:"/admin/orders"},
    { name:"Customers",path:"/admin/customers"},
    { name:"Settings",path:"/admin/settings"},
    { name:"Logout",path:"/admin/logout"},
    {name:"Add Product",path:"/admin/product/create"}
    mav
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between' }} >
                {
                    isLargeScreen && <Toolbar />}
                    <List>
                        {menu.map((item,index) => 
                            <ListItem key={item.name}
                            disablePadding
                            onClick={() => navigate(item.path)}
                            >
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                            </ListItem>
                        )}
                    </List>
            </Box>
    )
    return (
    <div>AdminPanel</div>
  )
}

export default AdminPanel