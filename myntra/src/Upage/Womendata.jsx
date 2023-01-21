

import { Button, ButtonGroup, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import ProductDetails from './ProdDetails'
import AddProd from './AddProd'
import addwomenaction from '../Redux/Auth/Admin/AdminProduct/AddWomen/addwomendataaction'
import { getwomenData } from '../Redux/Auth/Admin/AdminProduct/WomenProd/getwomendataaction'
import deletewomenaction from '../Redux/Auth/Admin/AdminProduct/AddWomen/deletewomenactio'

const Womendata = () => {

    const data2 = useSelector((store => store.womenreducer.prod))
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getwomenData())
    }, [])
    return (
        <div>
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
            <Flex className="prod-stack" >
                {
                    data2 && data2.map(ele => <ProductDetails key={ele.id + Math.random()} {...ele} deletedata={deletewomenaction} getdata={getwomenData}/>)
                }
            </Flex>
        </div>
    )
}

export default Womendata
