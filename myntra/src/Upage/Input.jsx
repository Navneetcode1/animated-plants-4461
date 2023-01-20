




import React from 'react'
import {Button, Flex, Input} from "@chakra-ui/react"
import { useState } from 'react'
const QInput = ({icon}) => {
    const [value,setValue] = useState()
  return (
    <Flex>
      <Input type="number" placeholder='Enter the amount'/>
      <Button onClick={(e)=>setValue(e.target.value)}>{icon}</Button>
    </Flex>
  )
}

export default QInput
