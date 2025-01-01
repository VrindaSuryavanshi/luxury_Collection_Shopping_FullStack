import { Button } from '@headlessui/react'
import { Grid2, TextField } from '@mui/material'
import React from 'react'

const RegisterForm = () => {

  const handleSubmit = ()=>{

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Grid2 container spacing={3}>

        <Grid2
         item
         size={{ xs: 12, sm: 6 }}
          >
            <TextField 
            required
            id='firstName'
            name='firstName'
            label= 'First Name'
            fullWidth
            autoComplete='given_name'
            />
        </Grid2>

        <Grid2 item size={{ xs: 12, sm: 6 }}>
            <TextField 
            required
            id='lastName'
            name='lastName'
            label= 'Last Name'
            fullWidth
            autoComplete='given_name'
            />
        </Grid2>

        <Grid2 item size={{ xs: 12}}>
            <TextField 
            required
            id='email'
            name='email'
            label= 'Email'
            fullWidth
            autoComplete='email'
            />
        </Grid2>

        <Grid2 item size ={{xs:12}} >
            <TextField 
            required
            id='password'
            name='password'
            label= 'Password'
            fullWidth
            autoComplete='password'
            />
        </Grid2>
        <Grid2 item size={{xs:12}}>
            <Button
            className='bg-[#9155FD] w-full p-3
             hover:bg-[#65aee9] box-border font-bold '
            type='submit'
            variant='contained'
            size='large'            
            sx={{padding : "1rem"}}>
              Register
              </Button>
        </Grid2>
      </Grid2>
      </form>
    </div>
  )
}

export default RegisterForm