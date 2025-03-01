import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate, Routes, Route } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box, List, ListItem, ListItemIcon, Toolbar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dashboard from "./components/Dashboard";
import CreateProduct from "./components/CreateProduct";
import ProductTable from "./components/ProductTable";
import OrderTable from "./components/OrderTable";
import Customers from "./components/Customers";
import AdminDashboard from "./components/Dashboard";
const menu = [
  {
    name: "Dashboard",
    color: "yellow",
    path: "/admin/dashboard",
    icon: <SpaceDashboardIcon />,
  },
  {
    name: "Products",
    color: "green",
    path: "/admin/products",
    icon: <SpaceDashboardIcon />,
  },
  {
    name: "Orders",
    color: "orange",
    path: "/admin/orders",
    icon: <SpaceDashboardIcon />,
  },
  {
    name: "Customers",
    color: "red",
    path: "/admin/customers",
    icon: <SpaceDashboardIcon />,
  },
  {
    name: "Settings",
    color: "pink",
    path: "/admin/settings",
    icon: <SpaceDashboardIcon />,
  },
  {
    name: "Logout",
    color: "purple",
    path: "/admin/logout",
    icon: <SpaceDashboardIcon />,
  },
  {
    name: "Add Product",
     path: "/admin/product/create",
    icon: <SpaceDashboardIcon />,
  },
];
const AdminPanel = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
            sx={{
              padding: "10px",
              cursor: "pointer",
               
            }}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText
              sx={{
                fontWeight: "bold",
              }}
              primary={item.name}
            />
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile"  />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
        <div className='flex h-[100vh] '>
        <CssBaseline />
        <div className='w-[15%] border border-right-2 border-gray-300 h-full fixed top-0'> 
                  {drawer}
        </div>
            <div className='w-[85%] ml-[15%] h-full'>
            <Routes>
                <Route path="/dashboard" element={<AdminDashboard />}></Route>
                <Route path="/product/create" element={<CreateProduct />}></Route>
                <Route path="/products" element={<ProductTable />}></Route>
                <Route path="/orders" element={<OrderTable />}></Route>
                <Route path="/customers" element={<Customers />}></Route>
            </Routes>
            </div>
        </div>
      
     
    </div>
  );
};

export default AdminPanel;
