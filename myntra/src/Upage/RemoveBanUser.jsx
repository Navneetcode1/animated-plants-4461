import { Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getbanuserdata from './getbanuseraction'
import removebanuseraction from './removebanuseraction'
import { useToast } from '@chakra-ui/react'

const RemoveBann = () => {
  const init = {
     email :"",
  }
  const [data,setData] = useState(init)
  const dispatch = useDispatch()
  const banneddata = useSelector(store=>store.getbanreducer.data)
  const toast = useToast()
  console.log(banneddata)
  const handleChange = (e)=>{
      const {name,value} = e.target
      setData({...data,[name]:value})
  }
  const handleSubmit = (e,data)=>{
     e.preventDefault()
     console.log(data.email)
    let newdata =  banneddata.filter(ele=>ele.email===data.email)
    console.log(newdata)
     if(newdata.length>0){
    let id = newdata[0].id
    console.log(id)
      dispatch(removebanuseraction(id))
      .then(res=>dispatch(getbanuserdata()))
      toast({
        title: 'Account reinstalled successfully',
        description: "We've removed ban on your account",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
     }
    
  }
  useEffect(()=>{
       dispatch(getbanuserdata())
  },[])

  return (
    <Stack>
    <form onSubmit={(e)=>handleSubmit(e,data)}>
        <FormControl>
        <FormLabel>Enter User Email</FormLabel>
            <Input type="email" onChange={(e)=>handleChange(e)} value={data.email} name="email"/>
        </FormControl>
        <Button type="submit">Enter</Button>
    </form>
</Stack>
  )
}

export default RemoveBann
