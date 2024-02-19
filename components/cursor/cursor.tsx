import CursorSVG from '@/public/assets/CursorSVG';
import { Box, Typography } from '@mui/material';
import React from 'react'

type Props = {
    color: string;
    x: number;
    y: number;
    message?: string;
};


const Cursor = ({ color, x, y, message }: Props) => (

    <Box className='pointer-events-none absolute left-0 top-0'
        style={{ transform: `translateX(${x}px) translateY(${y}px)` }}>
        
        <CursorSVG color={color} />

        {message && (
            <Box
                className='absolute left-2 top-5 rounded-3xl px-4 py-2'
                style={{ backgroundColor: color, borderRadius: 20 }}
            >
                <Typography className='whitespace-nowrap text-sm leading-relaxed text-white'>
                    {message}
                </Typography>
                </Box >  
)}
            </Box>
        );


        export default Cursor;
