

import { Button, ButtonGroup, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import ProductDetails from './ProdDetails'
import AddProd from './AddProd'
import addwomenaction from '../Redux/Auth/Admin/AdminProduct/AddWomen/addwomendataaction'
import { getwomenData } from '../Redux/Auth/Admin/AdminProduct/WomenProd/getwomendataaction'
import deletewomenaction from '../Redux/Auth/Admin/AdminProduct/AddWomen/deletewomenactio'
import { reducewomenamount } from '../Redux/Auth/Admin/AdminProduct/AddWomen/womenamount'
import { addwomenamount } from '../Redux/Auth/Admin/AdminProduct/AddWomen/womenamount'
const Womendata = () => {

    const data2 = useSelector((store => store.womenreducer.prod))
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const addamount =(e,id,value)=>{
        e.preventDefault()
         
        // dispatch(addwomenamount(value))
    }
    const reduceamount =(e,id,value)=>{
        e.preventDefault()
        console.log(value,id)
        // dispatch(reducewomenamount(value))
    }
    useEffect(() => {
        dispatch(getwomenData())
    }, [])
    return (
        <Stack className='card' fontSize={["80%","90%","90%","90%","90%"]}>
            <Flex justifyContent="space-around" alignItems="center">
                <h3>ProductCount : {data2 && data2.length}</h3>
            <Button onClick={onOpen}>Add Product</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Enter the Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                     <AddProd addprodaction={addwomenaction}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
            </Flex>
            <SimpleGrid columns={[ 2, 3, 5, 6]} gap={5}>
                {
                    data2 && data2.map(ele => <ProductDetails key={ele.id + Math.random()} {...ele} deletedata={deletewomenaction} getdata={getwomenData} addamount={addamount} reduceamount={reduceamount} />)
                }
            </SimpleGrid>
        </Stack >
    )
}

export default Womendata
