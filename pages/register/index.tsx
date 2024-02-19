'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';
import { RegisterFormInputs } from '@/Typescript/interfaces/registerInput';
import { useRouter } from 'next/router';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/config';


const RegisterForm: React.FC = () => {


  const router = useRouter();

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const { register,watch, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>();

  console.log(errors)

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    console.log(data)
    const {email,password}=data;
    createUserWithEmailAndPassword(data.email, data.password)
    .then((res) => {
      console.log({ res });
      sessionStorage.setItem('user', "true");
     
      router.push('/login');
      alert("Register Successfully")
    })
    .catch((error) => {
      console.error(error);
    });
  
  };

  console.log(watch('email'))

  return (
    <Box className="loginbox">
    <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
      <Typography variant="h5">Register</Typography>
      <TextField
        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
        label="Email"
        type="email"
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        {...register("password", { required: "Password is required" })}
        label="Password"
        type="password"
        fullWidth
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
    </form>
    </Box>
  );
};

export default RegisterForm;

// 'use client'
// import { auth } from '@/firebase/config'
// import { Box, Button, TextField, Typography } from '@mui/material'
// import { useRouter } from 'next/router'
// import React, { useState } from 'react'
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

// const index = () => {
//   const [email, setEmail] = useState('');
//   const router = useRouter();
//   const [password, setPassword] = useState('');
//   const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
//   const handleSignUp = () => {
//     createUserWithEmailAndPassword(email, password)
//       .then((res) => {
//         console.log({ res });
//         sessionStorage.setItem('user', "true");
//         setEmail('');
//         setPassword('');
//         router.push('/login');
//         alert("Register Successfully")
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <>
//       <Box className="loginbox">
//         <form className="loginForm">
//           <Typography variant="h4" gutterBottom>
//             Tiktok Register Form
//           </Typography>
//           <TextField type='email' label="Email" variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} />
//           <TextField type='password' label="Password" variant="outlined"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} />
//           <Button variant='contained' size='small' color='secondary' onClick={handleSignUp}>Login</Button>
//         </form>
//       </Box>
//     </>
//   )
// }

// export default index