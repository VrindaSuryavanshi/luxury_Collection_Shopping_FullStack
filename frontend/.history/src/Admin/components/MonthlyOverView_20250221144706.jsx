import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Box } from '@mui/material';
import { Avatar } from '@mui/material';
import { Typography } from '@mui/material';
const salesData = [ 
        {
            stats : '245K',
            title : 'Sales',
            color: 'primary',
            icon: <TrendingUpIcon sx={{fontSize: "1.75rem"}} />
        },
        {
            stats : '20.5K',
            title : 'Customers',
            color: 'success',
            icon: <AccountBoxIcon sx={{fontSize: "1.75rem"}} />
        },
        {
            stats : '1.50K',
            title : 'Products',
            color: 'warning',
            icon: <SettingsCellIcon sx={{fontSize: "1.75rem"}} />
        },
        {
            stats : '89K',
            title : 'Revenue',
            color: 'info',
            icon: <CurrencyRupeeIcon sx={{fontSize: "1.75rem"}} />
        }
    ]
    const renderStates = ()=>{
        return salesData.map((item, index)=>{
            return
               <Grid item xs={12} md={3} key={index}>   

                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Avatar variant='rounded' sx={{ mr:3,
                            width:44,
                            height:44,
                            boxShadow:3,
                            color: 'white',
                            backgroundColor: `${item.color}`

                        }}>  
                            {item.icon}
                        </Avatar>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant='caption'>{item.title}</Typography>
                            <Typography variant='h6'>{item.stats}</Typography>

                            </Box>
                </Box>
                </Grid>
            
        })
    }
const MonthlyOverView = () => {
  return (
    <div>
        
    </div>
  )
}

export default MonthlyOverView