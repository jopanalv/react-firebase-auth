import { InputAdornment, TextField } from '@mui/material'
import { Email } from '@mui/icons-material'
import React from 'react'

const Form = ({ label }) => {
    return (
        <>
            <TextField label={label} InputProps={{
                startAdornment: <InputAdornment position='start'><Email /></InputAdornment>
            }} />
        </>
    )
}

export default Form