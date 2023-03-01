import React from 'react'
import { initializeApp } from 'firebase/app'
import { Card, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import BoxTitle from '../../components/BoxTitle'
import Form from '../../components/Form'

const Login = () => {
    return (
        <>
            <Grid container justifyContent={'center'}>
                <Card sx={{ width: 400, height: 600, my: 8, bgcolor: 'transparent', boxShadow: 'none' }}>
                    <BoxTitle />
                    <Form label='Email' />
                </Card>
            </Grid>
        </>
    )
}

export default Login