import { Box, Typography } from '@mui/material'
import React from 'react'

const BoxTitle = () => {
    return (
        <Box sx={{ width: 400, height: 170, bgcolor: '#19bade', borderRadius: '20px' }}>
            <Typography color='white' fontWeight='bold' fontSize={18} sx={{ pt: 4, px: 3 }}>Welcome to</Typography>
            <Typography color='white' fontWeight='bold' fontSize={36} sx={{ px: 3 }}>!Ngutang</Typography>
            <Typography color='white' fontSize={14} sx={{ px: 3 }}>Batasi dan Monitor semua Hutang-hutangmu!</Typography>
        </Box>
    )
}

export default BoxTitle