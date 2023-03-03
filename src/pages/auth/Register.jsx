import React from 'react'
import { Link } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { Button, Card, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import BoxTitle from '../../components/BoxTitle'
import Form from '../../components/Form'
import { Email, Facebook, Google, Lock, Person, Phone } from '@mui/icons-material'

const Register = () => {
    return (
        <>
            <Grid container justifyContent={'center'}>
                <Card sx={{ width: 400, height: 600, mt: 15, bgcolor: 'transparent', boxShadow: 'none' }}>
                    <BoxTitle />
                    <Box p={4}>
                        <Form label='Name' icon={<Person />} />
                        <Form label='Email' icon={<Email />} />
                        <Form label='Password' type='password' icon={<Lock />} />
                        <Form label='Phone' icon={<Phone />} />
                        <Button variant='contained' size='large' sx={{ width: '100%', mt: 2, bgcolor: '#19bade', color: '#fff', boxShadow: 'none' }}>Register</Button>
                        <Divider sx={{ fontSize: 12, my: 2 }}>
                            <Link to='/' style={{ textDecoration: 'none', fontWeight: 'bold' }}>Login</Link>
                        </Divider>
                    </Box>
                </Card>
            </Grid>
        </>
    )
}

export default Register