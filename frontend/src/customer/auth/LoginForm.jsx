import React from 'react'
import { Button } from '@headlessui/react'
import { Grid2, TextField } from '@mui/material'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../State/Auth/Action'

const LoginForm = () => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const jwt = localStorage.getItem("jwt");
  // const {auth} = useSelector(store=>store);

  // useEffect(()=>{
  //   if(jwt){
  //     dispatch(getUser(jwt));
  //   }
  // },[jwt , auth.jwt]);

  const handleSubmit = (event)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const userData ={  
          
      email : data.get("email"),
      password : data.get("password")
    }
      dispatch(login(userData))
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
          <div className='flex justify-center flex-col items-center'>
                  <div className='py-3 flex items-center'>
                    <p>
                      If you don't have an account ?
                      </p>
                      
                      <Button
                      onClick={()=>navigate("/signUp")}
                       className='ml-5 text-cyan-900 underline' size= 'small'>
                        SignUp
                      </Button>
                     
                  </div>
                </div>
        </div>
      )
}

export default LoginForm