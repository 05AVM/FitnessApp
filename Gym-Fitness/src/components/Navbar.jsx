/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
{/*Stack is a container component for arranging
 elements vertically or horizontally.*/ }
import Logo from '../assets/icons/images/Logo.png'
 const Navbar = () => {
  return (
  
    <Stack direction="row" justify-content="space-around" sx={{gap:{}}}>
      <Link to="/">
        <img src={Logo} alt="logo" style={{width:'48px',height:'48px',margin:'0 20px'}}/>

      </Link>
      <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-start"
    >
     

      
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid black' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      </Stack>
      </Stack>
      
  )
}

export default Navbar