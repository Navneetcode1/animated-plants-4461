import { Box ,Flex,Heading,Spacer,Button,ButtonGroup, Image} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import logoicon from "../pictures/logoicon.png";


import Navbar from './Navbar';

const Navbar2 = ({text}) => {
    const val=text;
    const token = JSON.parse(localStorage.getItem("token"))
   const handleA=()=>{
   
   }
  return (
    <>
   
    <Flex minWidth='max-content' alignItems='center' gap='1'>
        
   <Box>
    <Link to="/">

    <Image h={'60px'} w={'100px'} src={logoicon} alt={'logo'}/>


    </Link>
   </Box>
   <Navbar/>
   
  
  <Spacer />
  <ButtonGroup gap='2'>
    <Box mt={2} >
      <Link to="/login">
      <Heading  size='md'>{token? token: "Login In"}</Heading>
      </Link>
  
   </Box>
   {!token &&   <Link  to="/signup">
   <Button style={{backgroundColor:"gold",border:"none"}}>Sign Up Free</Button>
   </Link>}


</ButtonGroup>
</Flex>


    </>
  )
}


export default Navbar2


