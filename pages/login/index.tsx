'use client'
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';
import { LoginFormInputs } from '@/Typescript/interfaces/loginInput';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/config';
import React from 'react'

const index = () => {

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        try {
            const res = await signInWithEmailAndPassword(data.email, data.password);
            console.log({ res });
            sessionStorage.setItem('user', JSON.stringify(res?.user?.uid))
            sessionStorage.setItem('loginstatus', "true")
            alert("Login Sucessfully")
            router.push('/')
        } catch (e) {
            console.error(e)
        }

    };



    return (
        <>
            <Box className="loginbox">
                <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
                    <Typography variant="h5">Login</Typography>
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
                    <Box className="buttonlogpage">
                        <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>

                        <Button href={"/register"} type="submit" variant="contained" color="secondary" fullWidth style={{ backgroundColor: "#f44336" }}>Register</Button>
                    </Box>

                </form>
            </Box>
        </>
    )
}

export default index
// 'use client'
// import { auth } from '@/firebase/config';
// import { Box, Button, TextField, Typography } from '@mui/material'
// import { useRouter } from 'next/router';
// import React, { useState } from 'react'
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

// const index = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
//     const router = useRouter();

//     const handleSignIn = async () => {
//         try {
//             const res = await signInWithEmailAndPassword(email, password);
//             console.log({ res });
//             sessionStorage.setItem('user', JSON.stringify(res?.user?.uid))
//             sessionStorage.setItem('loginstatus', "true")
//             setEmail('');
//             setPassword('');
//             alert("Login Sucessfully")
//             router.push('/')
//         } catch (e) {
//             console.error(e)
//         }
//     };
//     return (
//         <>
//             <Box className="loginbox">
//                 <form className="loginForm">
//                     <Typography variant="h4" gutterBottom>
//                         Tiktok Login Form
//                     </Typography>
//                     <TextField type='email' label="Email" variant="outlined"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)} />
//                     <TextField type='password' label="Password" variant="outlined"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)} />
//                     <Button variant='contained' size='small' color='secondary'
//                         onClick={handleSignIn}>Login</Button>
//                     <Button variant='contained' size='small' color='secondary'
//                         href={"/register"}>Register</Button>
//                 </form>
//             </Box>
//         </>
//     )
// }

// export default index