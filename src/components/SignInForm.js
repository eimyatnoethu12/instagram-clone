import React, { useState } from 'react';
import { FormControl,InputLabel,Input,FormHelperText, Button } from '@mui/material';

function SignInForm({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [useremail, setuseremail] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(username);
  };

  return (
    <div className='grid lg:grid-cols-2  grid-cols-1  w-full'>
        <div className='w-full'>
           <img className='' width={500}  alt='imag' src='https://img.freepik.com/premium-vector/realistic-instagram-photo-frame-smartphone_23-2148103601.jpg?w=740'/>
        </div>

       <div className='col-span-1 p-12 border'>
        <h1 className='text-3xl font-extralight'>Welcome to Instagram Clone</h1>
       <form onSubmit={handleSubmit} className='flex flex-col gap-9 mt-4'>
            <FormControl>
              <InputLabel  htmlFor="my-input">Please Enter your Name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl>
              <InputLabel htmlFor="my-input">Please Enter your Email Address</InputLabel>
              <Input id="" placeholder='Please Enter your Email Address' aria-describedby="" value={useremail} onChange={(e) => setuseremail(e.target.value)} />
              <FormHelperText id="my-helper-text">We'll never share your email.
              </FormHelperText>
          </FormControl>
          <Button type="submit">Sign In</Button>
        </form>
       </div>
    </div>
  
  );
}

export default SignInForm;
