import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, Divider, Grid } from '@mui/material'
import { Box } from '@mui/system'
import BoxTitle from '../../components/BoxTitle'
import Form from '../../components/Form'
import { Email, Lock, Person, Phone } from '@mui/icons-material'
import { register } from '../../actions/auth'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const navigate = useNavigate()

    function handleSubmit() {
        register({ name, email, password, phone })
        navigate('/', { replace: true })
        // console.log(name, typeof email, password, phone)
    }

    return (
        <>
            <Grid container justifyContent={'center'}>
                <Card sx={{ width: 400, height: 600, mt: 15, bgcolor: 'transparent', boxShadow: 'none' }}>
                    <BoxTitle />
                    <Box p={4}>
                        <Form label='Name' icon={<Person />} value={name} onChange={(e) => setName(e.target.value)} />
                        <Form label='Email' type='email' icon={<Email />} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form label='Password' type='password' icon={<Lock />} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Form label='Phone' icon={<Phone />} value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <Button variant='contained' size='large' onClick={handleSubmit} sx={{ width: '100%', mt: 2, bgcolor: '#19bade', color: '#fff', boxShadow: 'none' }}>Register</Button>
                        <Divider sx={{ fontSize: 12, my: 2 }}>
                            <Link to='/login' style={{ textDecoration: 'none', fontWeight: 'bold' }}>Login</Link>
                        </Divider>
                    </Box>
                </Card>
            </Grid>
        </>
    )
}

export default Register