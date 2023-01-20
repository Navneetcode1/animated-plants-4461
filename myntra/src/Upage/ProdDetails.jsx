import { Stack, Image, Box, Card, Button, Flex, Tabs, TabList, Tab, TabPanel, TabPanels, } from '@chakra-ui/react'
import React from 'react'
import "./AdminPage.css"
import QInput from './Input'
const ProductDetails = (props) => {
  const { id, brand, qty, images, count, categories, color, gender, price } = props
  return (<Card className='card'>
    <Image src={images.image2} />
    <h3>{brand}</h3>
    {count < 50 ? <p className='countp'>{count}: stock is less</p> : count}
    <p>{categories}</p>
    <p>{color}</p>
    <p>{gender}</p>
    <p>{price}</p>
    <Flex className='qty'>
      <Tabs>
        <TabList >
          <Tab className='tab'>Qty Increase</Tab>
          <Tab className='tab'>Qty Decrease</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <QInput icon="+" />
          </TabPanel>
          <TabPanel>
            <QInput icon="-" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  </Card>
  )
}

export default ProductDetails
