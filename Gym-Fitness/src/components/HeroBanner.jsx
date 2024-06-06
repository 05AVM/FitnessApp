// eslint-disable-next-line no-unused-vars
import React from 'react'
//MUI _COMPONENETS
import {Box,Button,Typography} from '@mui/material'; 
//typography is just like <p> tag but with some additional styles..
import banner from '../assets/icons/images/banner.png'

const HeroBanner = () => {
  return (
  <Box sx={{mt:{lg:'212px',xs:'70px'},
    ml:{sm:'50px'}
}} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
    </Typography>
    <Typography fontWeight="700px" 
    sx={{fontSize:{lg:'44px',xs:'40px'}}}>
        Sweat, Smile <br /> Stay Fit
    </Typography>
    <Typography fontSize="22px"
    lineHeight="35px" mb="10px">
        Check out the most effective<br/> exercises personalized to you

    </Typography>
    <Button variant='contained'
    color='error' href='#exercises'>
        Explore Exercises
    </Button>

    <Typography fontWeight={600}
    color="#ff2625"
    sx={{opacity:0.1,
        display:{lg:'block' , xs:'none'}}}
fontSize="200px">Exercise</Typography>


    <img src={banner} alt="herobanner" height="30px" className='hero-banner-img'/>
  </Box>
  )
}

export default HeroBanner



{/*
Box
Box is a component from 
Material-UI (MUI) that 
functions as a generic 
container. It is highly 
versatile and allows you 
to style and layout elements 
using the sx prop for 
custom styles.

sx
The sx prop is a 
shortcut for defining 
styles directly on a component. It accepts an object with style rules, including responsive styles.

mt: { lg: '212px', xs: '70px' }
This defines the 
margin-top (mt) property 
with responsive values:

lg: '212px' sets 
the top margin to 212 
pixels on large screens.

xs: '70px' sets the 
top margin to 70 pixels 
on extra small screens.

ml: { sm: '50px' }
This defines the margin-left 
(ml) property with a responsive value:

sm: '50px' sets the left 
margin to 50 pixels on 
small screens.

position="relative"
This sets the position 
CSS property to relative. 
This means the element will 
be positioned relative to 
its normal position. 
It allows for further 
positioning adjustments (e.g., top, right, bottom, left).

p="20px"
This sets the padding (p)
 property to 20 pixels on 
 all sides of the Box.

*/}