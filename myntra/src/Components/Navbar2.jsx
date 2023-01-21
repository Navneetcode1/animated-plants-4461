import { Box ,Flex,Heading,Spacer,Button,ButtonGroup, Image} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';



import Navbar from './Navbar';

const Navbar2 = ({text}) => {
    const val=text;
   const handleA=()=>{
   
   }
  return (
    <>
   
    <Flex minWidth='max-content' alignItems='center' gap='1'>
        
   <Box>
    <Link to="/">

    <Image h={'60px'} w={'100px'} src="https://document-export.canva.com/ClMQo/DAFX59ClMQo/7/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230118T194100Z&X-Amz-Expires=67769&X-Amz-Signature=1b8256759d7ab5c9804530406ce7a82ef2ced1e0c2bd6b3519f9a48a45b08cd9&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2019%20Jan%202023%2014%3A30%3A29%20GMT" alt={'logo'}/>


    </Link>
   </Box>
   <Navbar/>
   
  
  <Spacer />
  <ButtonGroup gap='2'>
    <Box mt={2} >
      <Link to="/login">
      <Heading  size='md'>Login In</Heading>
      </Link>
  
   </Box>
   <Link  to="/signup">
   <Button style={{backgroundColor:"gold",border:"none"}}>Sign Up Free</Button>
   </Link>

</ButtonGroup>
</Flex>


    </>
  )
}

export default Navbar2
