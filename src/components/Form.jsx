import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material'
import React, {useState} from 'react'

const Form = ({ label, type, icon }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <>
            <TextField size='small' fullWidth placeholder={label} type={showPassword ? 'text' : type} InputProps={{
                style: {text: 'white'},
                startAdornment: <InputAdornment position='start'>{icon}</InputAdornment>,
                endAdornment: type === 'password' ? <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment> : null
            }} sx={{ mb: 2 }} />
        </>
    )
}

export default Form