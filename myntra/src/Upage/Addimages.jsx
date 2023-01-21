

import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Addimages = () => {
    const init ={
        image1:"",
        image2:"",
        image3:"",
        image4:"",
        image5:"",
     
    }
    
    const [img,setImg] = useState(init)
    const handlChange =(e)=>{
         const {name,value} = e.target
         setImg({...img,[name]:value})
    }
    const imgarr = JSON.parse(localStorage.getItem("imgarr"))||[]
    const handleSubmit =(e,img)=>{
         e.preventDefault();
         imgarr.push(img)
         localStorage.setItem("imgarr",JSON.stringify(imgarr))
         setImg(init)
    }
  return (
    <form onSubmit={(e)=>handleSubmit(e,img)}>
    <FormControl>
      <FormLabel>Enter Image1</FormLabel>
      <Input onChange={(e)=>handlChange(e)} name="image1" type="text" value={img.image1} />
      <FormLabel>Enter Image2</FormLabel>
      <Input onChange={(e)=>handlChange(e)} name="image2" type="text" value={img.image2} />
      <FormLabel>Enter Image3</FormLabel>
      <Input onChange={(e)=>handlChange(e)} name="image3" type="text" value={img.image3}/>
      <FormLabel>Enter Image4</FormLabel>
      <Input onChange={(e)=>handlChange(e)} name="image4" type="text" value={img.image4} />
      <FormLabel>Enter Image5</FormLabel>
      <Input onChange={(e)=>handlChange(e)} name="image5" type="text" value={img.image5}/>
  </FormControl>
  <Button type="submit">Images</Button>
</form>
  )
}

export default Addimages
