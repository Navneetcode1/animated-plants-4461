import { Heading, Flex, Box, Input } from '@chakra-ui/react'
import React from 'react'
import { FaUser, FaRegHeart, FaShoppingBag } from "react-icons/fa"

const Navbar = () => {
    return (
        <Flex m={'auto'} w={'98%'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
                <Heading color={'red.500'}>
                    <img width="25%" src="https://document-export.canva.com/ClMQo/DAFX59ClMQo/7/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230118T194100Z&X-Amz-Expires=67769&X-Amz-Signature=1b8256759d7ab5c9804530406ce7a82ef2ced1e0c2bd6b3519f9a48a45b08cd9&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2019%20Jan%202023%2014%3A30%3A29%20GMT"/>
                </Heading>
            </Box>
            <Box w={'40%'} display={'flex'} justifyContent={'space-between'}>
                <Heading size={'sm'}>MEN</Heading>
                <Heading size={'sm'}>WOMEN</Heading>
                <Heading size={'sm'}>KIDS</Heading>
                <Heading size={'sm'}>HOME & LIVING</Heading>
                <Heading size={'sm'}>BEAUTY</Heading>
                <Heading size={'sm'}>STUDIO</Heading>
                <Heading size={'sm'}>STUDIO123</Heading>
            </Box>
            <Box w={'25%'}>
                <Input placeholder='search for products brands and more' />
            </Box>

            <Box w={'11%'} gap="10px" display={'flex'} justifyContent={'space-between'}>
                <Heading size={'sm'}>
                    <FaUser />Profile</Heading>
                <Heading size={'sm'}><FaRegHeart />Wishlist</Heading>
                <Heading size={'sm'}><FaShoppingBag />Bag</Heading>
            </Box>
        </Flex>

    )
}
export default Navbar