import { Heading, Flex, Box, Input } from '@chakra-ui/react'
import React from 'react'
import { FaUser, FaRegHeart, FaShoppingBag } from "react-icons/fa"

const Navbar = () => {
    return (
        <Flex m={'auto'} w={'98%'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
                <Heading color={'red.500'}>Myntra</Heading>
            </Box>
            <Box w={'40%'} display={'flex'} justifyContent={'space-between'}>
                <Heading size={'sm'}>MEN</Heading>
                <Heading size={'sm'}>WOMEN</Heading>
                <Heading size={'sm'}>KIDS</Heading>
                <Heading size={'sm'}>HOME & LIVING</Heading>
                <Heading size={'sm'}>BEAUTY</Heading>
                <Heading size={'sm'}>STUDIO</Heading>
            </Box>
            <Box w={'25%'}>
                <Input placeholder='search for products brands and more' />
            </Box>

            <Box w={'11%'} display={'flex'} justifyContent={'space-between'}>
                <Heading size={'sm'}>
                    <FaUser />Profile</Heading>
                <Heading size={'sm'}><FaRegHeart />Wishlist</Heading>
                <Heading size={'sm'}><FaShoppingBag />Bag</Heading>
            </Box>
        </Flex>

    )
}
export default Navbar