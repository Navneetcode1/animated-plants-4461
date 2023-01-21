

import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import addmenproductaction from "../Redux/Auth/Admin/AdminProduct/AddMenData/addmendataaction"

import ProductDetails from './ProdDetails'
import AddProd from './AddProd'
import { getmenData } from '../Redux/Auth/Admin/AdminProduct/MenProduct/getmendataaction'

import deletemenaction from '../Redux/Auth/Admin/AdminProduct/AddMenData/deletemenaction'
import { addmenamount, reducemenamount } from '../Redux/Auth/Admin/AdminProduct/AddMenData/menamount'

const Mendata = () => {
    const data = useSelector((store => store.menreducer.prod))
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getmenData())

    }, [])
    const addamount =(e,value)=>{
        e.preventDefault()
        dispatch(addmenamount(value))
    }
    const reduceamount =(e,value)=>{
        e.preventDefault()
        dispatch(reducemenamount(value))
    }
    return (
        <div>
            <Button onClick={onOpen}>Add Product</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Enter the Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AddProd addprodaction={addmenproductaction}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Flex className="prod-stack" >
                {
                    data && data.map(ele => <ProductDetails key={ele.id + Math.random()} {...ele} deleteaction={deletemenaction} getdata={getmenData} addamount={addamount} reduceamount={reduceamount}/>)
                }
            </Flex>
        </div>
    )
}

export default Mendata
