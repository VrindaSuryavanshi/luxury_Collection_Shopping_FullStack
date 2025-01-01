import { Grid2, TextField } from '@mui/material'
import React from 'react'

const RegisterForm = () => {

  const handleSubmit = ()=>{

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Grid2 container spacing={3}>

        <Grid2 item xs={12} sm={6}>
            <TextField 
            required
            id='firstName'
            name='firstName'
            fullWidth
            autoComplete='given_name'
            />
        </Grid2>

      </Grid2>
      </form>
    </div>
  )
}

export default RegisterForm