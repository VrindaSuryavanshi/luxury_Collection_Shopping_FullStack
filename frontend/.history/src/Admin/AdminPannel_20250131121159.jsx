import React ,{ useState } from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
const menu =[
    { name:"Dashboard",path:"/admin/dashboard"},
    { name:"Products",path:"/admin/products"},
    { name:"Orders",path:"/admin/orders"},
    { name:"Customers",path:"/admin/customers"},
    { name:"Settings",path:"/admin/settings"},
    { name:"Logout",path:"/admin/logout"},
    {name:"Add Product",path:"/admin/product/create"}
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
                    isLargeScreen && <Toolbar />
                    <List>
                        {menu.map((item,index) => 
                            <ListItem key={item.name}
                            disablePadding
                            onClick={() => navigate(item.path)}
                            >
                                <ListItemIcon>

                                </ListItemIcon>
                            </ListItem>
                        )}
                }
            </Box>
    )
    return (
    <div>AdminPanel</div>
  )
}

export default AdminPanel