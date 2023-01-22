import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ImCross} from "react-icons/im"
import { useToast } from '@chakra-ui/react'
import { getbanuserdata, removeban } from '../Redux/Auth/Admin/userauthaction'

const RemoveBann = () => {
  const dispatch = useDispatch()
  const banneddata = useSelector(store=>store.getbannreducer.banneduserlist)
  const toast = useToast()


  const handleSubmit = (e,id)=>{
     e.preventDefault()
     console.log(id)
      dispatch(removeban(id))
      .then(res=>dispatch(getbanuserdata()))
      toast({
        title: 'Account reinstalled successfully',
        description: "We've removed ban on your account",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
     
    
  }
  useEffect(()=>{
       dispatch(getbanuserdata())
  },[])

  return (
    <Stack>
      {
        banneddata && banneddata.map(ele=><Flex justifyContent="space-between" alignItems="center" key={ele.id}>
          <h3>{ele.email}</h3>
          <Button onClick={(e)=>handleSubmit(e,ele.id)}>{ImCross}</Button>
        </Flex>)
      }
    {/* <form onSubmit={(e)=>handleSubmit(e,data)}>
        <FormControl>
        <FormLabel>Enter User Email</FormLabel>
            <Input type="email" onChange={(e)=>handleChange(e)} value={data.email} name="email"/>
        </FormControl>
        <Button type="submit">Enter</Button>
    </form> */}
</Stack>
  )
}

export default RemoveBann
