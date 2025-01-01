import React from 'react'

const LoginForm = () => {
 
  const handleSubmit = (event)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const userData ={   
      
      email : data.get("email"),
      password : data.get("password")
    }
       console.log("user data" , userData);
      }
      return (
        <div >
          <form onSubmit={handleSubmit}>
          <Grid2 container spacing={3} size={{ xs: 12}}>
    
    
            <Grid2 item size={{ xs: 12}}>
                <TextField 
                required
                type='email'
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
                type='password'
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
                 hover:bg-[#5276da] rounded-md font-semibold '
                type='submit'
                variant='contained'
                size='large'            
                sx={{padding : "1rem"}}>
                  Log In
                  </Button>
            </Grid2>
          </Grid2>
          </form>
        </div>
      )
}

export default LoginForm