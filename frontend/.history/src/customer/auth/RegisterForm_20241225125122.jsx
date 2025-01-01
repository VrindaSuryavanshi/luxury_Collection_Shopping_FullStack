import { Button } from '@headlessui/react'
import { Grid2, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { getUser, register } from '../../State/Auth/Action'

const RegisterForm = () => {

  const navigate  = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store);

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt));
    }
  },[jwt , auth.jwt]);


  const handleSubmit = (event)=>{
event.preventDefault();
const data = new FormData(event.currentTarget);

const userData ={
  firstName: data.get("firstName"),
  lastName : data.get("lastName"),
  email : data.get("email"),
  password : data.get("password")
}
dispatch(register(userData))
   console.log("user data" , userData);
   navigate("/");
  }
  return (
    <div >
      <form onSubmit={handleSubmit}>
      <Grid2 container spacing={3} size={{ xs: 12}}>

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
              Register
              </Button>
        </Grid2>
      </Grid2>
      </form>

      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
          <p>
            If you have already an account ?
            </p>
            
            <Button
            onClick={()=>navigate("/signIn")}
             className='ml-5 text-cyan-900 underline' size= 'small'>
              SignIn
            </Button>
           
        </div>
      </div>
     
    </div>
  )
}

export default RegisterForm