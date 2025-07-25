import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Box } from '@mui/material';
import { Avatar } from '@mui/material';
import { Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardHeader } from '@mui/material';
import { IconButton } from '@mui/material';
import { CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Card } from '@mui/material';


const salesData = [ 
        {
            stats : '245K',
            title : 'Sales',
            color: '#ffb74d',
            icon: <TrendingUpIcon sx={{fontSize: "1.75rem"}} />
        },
        {
            stats : '20.5K',
            title : 'Customers',
            color: '#4caf50',
            icon: <AccountBoxIcon sx={{fontSize: "1.75rem"}} />
        },
        {
            stats : '1.50K',
            title : 'Products',
            color: '#d50000',
            icon: <SettingsCellIcon sx={{fontSize: "1.75rem"}} />
        },
        {
            stats : '89K',
            title : 'Revenue',
            color: '#2196f3',
            icon: <CurrencyRupeeIcon sx={{fontSize: "1.75rem"}} />
        }
    ]
    const renderStates = ()=>{
        return salesData.map((item, index)=>{
            return(
               <Grid item size={{xs:12, md:3}} key={index}>   

                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Avatar variant='rounded' sx={{ mr:3,
                            width:44,
                            height:44,
                            boxShadow:3,
                            color: 'white',
                            background: item.color

                        }}>  
                            {item.icon}
                        </Avatar>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant='caption'>{item.title}</Typography>
                            <Typography variant='h6'>{item.stats}</Typography>

                            </Box>
                </Box>
                </Grid>
        )
            
        })
    }
const MonthlyOverView = () => {
  return (
    <div>
       <Card  sx={{
          borderRadius: '10px', backgroundColor: '#424242',
          color: 'white',
           boxShadow: '0 0 5px 0 rgba(0,0,0,0.1)', 
           }}>
        <CardHeader title='Monthly Overview' 
        action={
            <IconButton size='small'>
                <MoreVertIcon />
            </IconButton>
        }
        subheader={
            <Typography variant='body2'>
                <Box component='span'
                 sx={{fontWeight: 600 , mx:1.5, color: 'success.main',fontWeight:700,paddingBottom:"5px", display: 'flex', alignItems: 'left'}}>
                    Total 48.5% growth  <p className='text-white px-4'>this month</p>
                    </Box>
                   
                </Typography>
        }
        titleTypographyProps={{
            sx:{
                mb:2.5,
                lineHeight: '1.03rem !important',
                letterSpacing: '.15px !important',
            }
        }}
        />
        <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
            <Grid container spacing={[5,0]}>
                {renderStates()}
                
            </Grid>
        </CardContent>
    </Card>
    </div>
  )
}

export default MonthlyOverView