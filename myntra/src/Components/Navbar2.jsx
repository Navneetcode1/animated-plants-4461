import { Box, Flex, Heading, Spacer, Button, ButtonGroup, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import logoicon from "../pictures/logoicon.png";


import Navbar from './Navbar';

const Navbar2 = ({ text }) => {
  const val = text;
  const handleA = () => {

  }
  return (
    <>

      <Flex minWidth='max-content' alignItems='center' gap='1'>

        <Box>
          <Link to="/">

            <Image h={'60px'} w={'100%'} src={logoicon} alt={'logo'} />


          </Link>
        </Box>
        <Navbar />


        <Spacer />
        <ButtonGroup gap='2'>
          <Box mt={2} >
            <Link to="/login">
              <Heading size='md'>Login In</Heading>
            </Link>

          </Box>
          <Link to="/signup">
            <Button style={{ backgroundColor: "gold", border: "none" }}>Sign Up Free</Button>
          </Link>

        </ButtonGroup>
      </Flex>


    </>
  )
}


export default Navbar2


