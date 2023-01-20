import { Stack, Heading, Input, FormControl, FormLabel, Select, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Addimages from './Addimages'



const AddProd = ({addprodaction}) => {
  const init = {
    title: "",
    brand: "",
    price: "",
    brand: "",
    count: "",
    category: "",
    images: [],
   
  }
  const [prod, setProd] = useState(init)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const handleChange =(e)=>{
     const {name,value} = e.target
     setProd({...prod, [name]: value })
  }
  const handleSubmit = (e,prod) => {
        e.preventDefault()
        const imgarr = JSON.parse(localStorage.getItem("imgarr"))||[]
        setProd({...prod,images:imgarr})
        dispatch(addprodaction(prod))
        localStorage.setItem("imgarr", JSON.stringify(""))
       setProd(init)
        
  }
  return (<Stack>
    <form onSubmit={(e)=>handleSubmit(e,prod)}>
      <FormControl>
        <FormLabel>Enter Product Name</FormLabel>
        <Input name="title" type="text" onChange={(e)=>handleChange(e)} value={prod.title}/>
        <FormLabel>Enter Product Price</FormLabel>
        <Input type="number" name="price"  onChange={(e)=>handleChange(e)} value={prod.price}/>
        <FormLabel>Enter Product Brand</FormLabel>
        <Input type="text" name="brand" onChange={(e)=>handleChange(e)} value={prod.brand}/>
        <FormLabel>Enter Product Quantity</FormLabel>
        <Input type="number" name="count" onChange={(e)=>handleChange(e)} value={prod.count}/>
        <FormLabel>Enter Product Category</FormLabel>
        <Select placeholder='Select option' name="category"  onChange={(e)=>handleChange(e)}>
          <option value='tshirt'>T-Shirt</option>
          <option value='shirt'>Shirt</option>
          <option value='kurta'>Kurta</option>
          <option value='shoes'>Shoes</option>
        </Select>
        <Button onClick={onOpen}>Enter Images</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
           <Addimages/>
            </ModalBody>
          </ModalContent>
        </Modal>
    </FormControl>
    <Button type="submit">Submit</Button>
  </form>
         </Stack >
  )
}

export default AddProd
