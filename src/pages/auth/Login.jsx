import React from 'react'
import { Link } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { Button, Card, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import BoxTitle from '../../components/BoxTitle'
import Form from '../../components/Form'
import { Email, Facebook, Google, Lock } from '@mui/icons-material'

const Login = () => {
    return (
        <>
            <Grid container justifyContent={'center'}>
                <Card sx={{ width: 400, height: 600, mt: 15, bgcolor: 'transparent', boxShadow: 'none' }}>
                    <BoxTitle />
                    <Box p={4}>
                        <Form label='Email' icon={<Email color='#19bade' />} />
                        <Form label='Password' type='password' icon={<Lock />} />
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Typography variant='body2' sx={{ textAlign: 'right', mt: 1, fontSize: 12 }}>Forgot password?</Typography>
                        </Link>
                        <Button variant='contained' size='large' sx={{ width: '100%', mt: 2, bgcolor: '#19bade', color: '#fff', boxShadow: 'none' }}>Login</Button>
                        <Divider sx={{ fontSize: 12, my: 2 }}>Or login with</Divider>
                        <Grid container justifyContent={'space-between'}>
                            <Button variant='contained' size='large' sx={{ width: '45px', height: '50px', bgcolor: '#db3236', color: '#fff', boxShadow: 'none' }}><Google /></Button>
                            <Button variant='contained' size='large' sx={{ width: '45px', height: '50px', bgcolor: '#3b5998', color: '#fff', boxShadow: 'none' }}><Facebook /></Button>
                            <Link to='/register' style={{ textDecoration: 'none' }}>
                                <Button variant='contained' sx={{ width: '180px', height: '50px', bgcolor: '#19bade', color: '#fff', boxShadow: 'none' }}>Register</Button>
                            </Link>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
        </>
    )
}

export default Login