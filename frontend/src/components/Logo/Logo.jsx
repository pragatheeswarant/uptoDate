import React from 'react'
import './Logo.css'
import logo from '../../assets/logo.jpeg'
import Typography from '@mui/material/Typography';



const Logo = () => {
  return (
    <div className='bg'>
    <div className='image'>
        <img src={logo} alt="coretopia" className='img'></img>
    <div className='welcome'>
        <Typography fontSize={20} className='back'>CORE SERVICES TO CREATE A BUSINESS UTOPIA! </Typography>
        </div>
    </div>
    </div>
  )
}

export default Logo