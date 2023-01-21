import { Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { banuser, getbanuserdata } from '../Redux/Auth/Admin/userauthaction'



const BannUser = () => {
  const init={
      email:""
  }
  const [data,setData] = useState(init)
  const dispatch = useDispatch()
  const handleChange = (e)=>{
     const {name,value} = e.target;
     setData({...data, [name]:value})
  }
  const handleSubmit = (e,data)=>{
     e.preventDefault()
     dispatch(banuser(data))
     .then(res=>dispatch(getbanuserdata()))
     setData(init)
  }

  return (
    <Stack>
    <form onSubmit={(e)=>handleSubmit(e,data)}>
        <FormControl>
        <FormLabel>Enter User Email</FormLabel>
            <Input type="email" onChange={handleChange} name="email" value={data.email}/>
        </FormControl>
        <Button type="submit">Enter</Button>
    </form>
</Stack>
  )
}

export default BannUser
