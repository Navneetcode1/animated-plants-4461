import { Stack, Image, Box, Card, Button, Flex, Tabs, TabList, Tab, TabPanel, TabPanels, Input, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addmenamount, reducemenamount } from '../Redux/Auth/Admin/AdminProduct/AddMenData/menamount'
import "./AdminPage.css"

const ProductDetails = (props) => {
  const { id, brand, qty, images, count, categories, color, gender, price, deleteaction, getdata, addamount, reduceamount } = props
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteaction(id))
      .then(res => dispatch(getdata()))
  }
  const [value, setValue] = useState()


  return (<Stack className='card' fontSize={["80%","90%","90%","90%","90%"]} >
    <Image src={images.image2} />
    <h3>{brand}</h3>
    {count < 50 ? <p className='countp'>{count}: stock is less</p> : <p>{count}</p>}
    <p>{categories}</p>
    <p>{color}</p>
    <p>{gender}</p>
    <p>{price}</p>
    <Flex className='qty' width="100%" >
      <Tabs>
        <TabList >
          <Tab fontSize={["80%","80%","80%","80%","80%"]} className='tab'>Qty Increase</Tab>
          <Tab  fontSize={["80%","80%","80%","80%","80%"]} className='tab'>Qty Decrease</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <form onSubmit={(e) => addamount(e,id,count, value)} >
              <Input type="number" placeholder='Enter the amount' onChange={(e) => setValue(e.target.value)} />
              <Button type="submit" >+</Button>
            </form>
   
          </TabPanel>
          <TabPanel>
            <form onSubmit={(e) => reduceamount(e,id,count, value)}>
              <Input type="number" placeholder='Enter the amount' onChange={(e) => setValue(e.target.value)} />
              <Button type="submit" >-</Button>
            </form>

          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
    <Button onClick={() => handleDelete()}>Delete</Button>
  </Stack>
  )
}

export default ProductDetails
