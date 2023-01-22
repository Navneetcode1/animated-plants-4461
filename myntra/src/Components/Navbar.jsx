import { Text,Box,useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter, Link, Flex, Input } from '@chakra-ui/react'

import React,{useState}from 'react'

// import React from 'react'

import { FaUser, FaRegHeart, FaShoppingBag } from "react-icons/fa"
import { Stack,InputLeftElement,InputGroup } from '@chakra-ui/react'
import {Link as newLink} from "react-router-dom"

// import { Input } from '@chakra-ui/react'


// const data=



const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')

    const [value,setValue]=useState("")


  
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['Mens ▼','Womens ▼', 'Kids ▼'];
    const shadow="box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"
    const sizes1="6md";



const handleChange=(event)=>{

   setValue(event.target.value)
   
}


const handleSearch=()=>{

}



    return (
        // <Flex m={'auto'} w={'98%'} justifyContent={'space-between'} alignItems={'center'}>
        //     <Box>
        //         <Heading color={'red.500'}>
        //             <img width="25%" src="https://document-export.canva.com/ClMQo/DAFX59ClMQo/7/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230118T194100Z&X-Amz-Expires=67769&X-Amz-Signature=1b8256759d7ab5c9804530406ce7a82ef2ced1e0c2bd6b3519f9a48a45b08cd9&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2019%20Jan%202023%2014%3A30%3A29%20GMT"/>
        //         </Heading>
        //     </Box>
        //     <Box w={'40%'} display={'flex'} justifyContent={'space-between'}>
        //         <Heading size={'sm'}>MEN</Heading>
        //         <Heading size={'sm'}>WOMEN</Heading>
        //         <Heading size={'sm'}>KIDS</Heading>
        //         <Heading size={'sm'}>HOME & LIVING</Heading>
        //         <Heading size={'sm'}>BEAUTY</Heading>
        //         <Heading size={'sm'}>STUDIO</Heading>
        //         <Heading size={'sm'}>STUDIO123</Heading>
        //     </Box>
        //     <Box w={'25%'}>
        //         <Input placeholder='search for products brands and more' />
        //     </Box>

        //     <Box w={'11%'} gap="10px" display={'flex'} justifyContent={'space-between'}>
        //         <Heading size={'sm'}>
        //             <FaUser />Profile</Heading>
        //         <Heading size={'sm'}><FaRegHeart />Wishlist</Heading>
        //         <Heading size={'sm'}><FaShoppingBag />Bag</Heading>
        //     </Box>
        // </Flex>
        <>
            {sizes.map((size) => (
              <Text
            //   style={{border:"none"}}
            border={"none"}
           boxShadow={shadow}
                onClick={() => handleSizeClick(size)}
                key={size}
                m={4}
              >{`${size}`}</Text>
            ))}
            <Flex marginTop={"13px"} gap="20px">
            <Link to="/plan">
            <h1>Home & Living</h1>
          
            </Link>

            <h1>Beauty</h1>
            <h1>Studio</h1>
            <Stack spacing={4}>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
    //   children={<PhoneIcon color='gray.300' />}
    />

    <button onClick={()=>handleSearch(value)}>🔎</button>
    <Input type='search' value={value} onChange={handleChange} placeholder=' Search for products' />

    <Input type='search' placeholder=' Search for products' />

  </InputGroup>
  </Stack>
            </Flex>
          
      
            <Modal onClose={onClose}  size={sizes1}  isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                   
                   <Box fontSize={"md"} gap="10px"  m={"auto"}   display={"flex"} justifyContent={"space-evenly"}  bg={"white"}>
                    <Box color={"gold"} >
                      <Text color={"red"} fontSize={"md"}>Top-Wear</Text>
                      <newLink to="/mens">
                      <Text border={"none"} color={"black"}>
                            T-Shirt
                        </Text>
                       
                        </newLink>
                        <Text color="black" fontSize="md">
                          Casual Shirt
                        </Text>
                        <Text color="black" fontSize="md">
                          Formal Shirt
                        </Text>
                        <Text color="black" fontSize="md">
                          Sweat Shirt
                        </Text>
                        <Text color="black" fontSize="md">
                          Jackets
                        </Text>
                        <Text color="black" fontSize="md">
                          Blazzers & Coats
                        </Text>
                        <Text color="black" fontSize="md">
                          Rain jackets
                        </Text>
                       
                       
                        <Box>
                            <Text color={"red"} fontSize={"md"}>Indian & Festive wear</Text>
                        </Box>
                        <Text color={"black"} fontSize={"md"}>Kurta & Kurtis tradionational </Text>
                        <Text color={"black"} fontSize={"md"}>Sherwani </Text>
                        <Text color={"black"} fontsize={"md"}>Nehru Jackets</Text>
                        <Text color={"black"}>Dhotis</Text>

                    </Box>
                    
                   
                    <Box fontsize={"md"} >
                       <Text  color={"red"} fontsize={"sm"}>Bottom Wear</Text>
                       <Text color={"black"} fontsize={"md"}>Jeans</Text>
                       <Text color={"black"} fontsize={"md"} >Casual Trouser</Text>
                       <Text color={"black"} fontsize={"md"}>Formal Trouser</Text>
                       <Text color={"black"} fontsize={"md"}>Shorts</Text>
                       <Text color={"black"} fontsize={"md"}>Engage</Text>
                       <Text color={"black"} fontsize={"md"}>Track pants & Trousers</Text>
                       <Text color={"red"} fontSize={"md"}>Inner Wear </Text>
                       <Text color={"black"} fontsize={"md"}>Breif & Trunks</Text>
                       <Text color={"black"} fontsize={"md"}>Boxers</Text>
                       <Text color={"red"} fontsize={"md"}>Plus Size</Text>
                         
                    </Box>
                    <Box fontsize={"md"}>
                      
                       <Text color={"red"} fontsize={"md"}>Foot Wear</Text>
                       <Text color={"black"} fontsize={"md"} >Formal Shoes</Text>
                       <Text color={"black"} fontsize={"md"} >Sports Shoes</Text>
                       <Text color={"black"} fontsize={"md"}>Snekers</Text>
                       <Text color={"black"} fontsize={"md"} >Sandals & floaters</Text>
                       <Text color={"black"} fontsize={"md"} >Socks</Text>
                       <Text color={"red"} fontsize={"md"}>Personal care & Groming</Text>
                       <Text color={"red"} fontsize={"md"}>Sunglasses & frames </Text>
                       <Text color={"red"} fontsize={"md"}>Watches</Text>
                       
                    </Box>
                    <Box fontSize={"md"}>
                    <Text color={"red"} fontsize={"md"}>Sports & active wear</Text>
                       <Text color={"black"} fontsize={"md"}>Sport Sandals</Text>
                       <Text color={"black"} fontsize={"md"}>Sports Shoes</Text>
                       <Text color={"black"} fontsize={"md"}>Active T-shirts</Text>
                       <Text color={"black"} fontsize={"md"}>Track pants & Shorts</Text>
                       <Text color={"black"} fontsize={"md"}>Track Suits</Text>
                       <Text color={"black"} fontsize={"md"}>Jacket & sweat-shirts</Text>
                       <Text color={"black"} fontsize={"md"}>Swimmers</Text>
                       <Text color={"red"} fontsize={"md"}>Gadgets</Text>
                       <Text color={"black"} fontsize={"md"}>Smart Variables</Text>
                       <Text color={"black"} fontsize={"md"}>Fitness Gadgets</Text>
                       <Text color={"black"} fontsize={"md"}>Speakers</Text>
                    </Box>
                    <Box fontsize={"md"}>
                    <Text color={"red"} fontsize={"md"}>Fashion Accesories</Text>
                       <Text color={"black"} fontsize={"md"}>Wallets</Text>
                       <Text color={"black"} fontsize={"md"}>Belts</Text>
                       <Text color={"black"} fontsize={"md"}>Perfumes & Body Mists</Text>
                       <Text color={"black"} fontsize={"md"}>Trimmers</Text>
                       <Text color={"black"} fontsize={"md"}>Deodrands</Text>
                       <Text color={"black"} fontsize={"md"}>Ties,Cufflinks & Pocket Squares</Text>
                       <Text color={"black"} fontsize={"md"}>Caps & Hats</Text>
                       <Text color={"black"} fontsize={"md"}>Phone & Cases</Text>
                       <Text color={"black"} fontsize={"md"}>Helmets</Text>
                       <Text color={"red"} fontsize={"md"}>Bags & Backpads</Text>
                       <Text color={"red"} fontsize={"md"}>Luggage & Trolleys</Text>
                    </Box>

                    
                  </Box>
                  
                  
                 
                 
                </ModalHeader>
                
                <ModalBody>
                  {/* <Lorem count={2} /> */}
                </ModalBody>
                
                <ModalFooter>
                <ModalCloseButton />
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }
 


    


export default Navbar


