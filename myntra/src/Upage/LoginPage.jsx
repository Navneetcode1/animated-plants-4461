import { FormControl, Input, Button, Spinner, useToast } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import "./Signup.css"
// import { useForm } from 'react-hook-form'


import usergetdataaction from '../Redux/Auth/UserSignup/usergetdataaction'
import { getbanuserdata } from '../Redux/Auth/Admin/userauthaction'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const init = {
        email: "",
        password: "",
    }

    const [data, setData] = useState(init)
  const toast = useToast()
    // const { handleSubmit, formState: { errors, isSubmitting }, } = useForm()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(usergetdataaction())

    }, [])
    useEffect(() => {
        dispatch(getbanuserdata())
    }, [])
  
    const userdata = useSelector(store => store.usergetdatareducer.userdata)
    console.log(userdata)
    const banneduserdata = useSelector(store => store.getbannreducer.banneduserlist)
    console.log(banneduserdata)
    const isloading = useSelector(store => store.usergetdatareducer.isloading)
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    let tokendata = JSON.parse(localStorage.getItem("token")) || []
    console.log(tokendata)
    const onSubmit = (e,data) => {
        e.preventDefault()
        let banneduser = banneduserdata.filter(ele => ele.email === data.email)
        let loginuser = userdata.filter(ele => ele.email === data.email && ele.password == data.password)
        if (banneduser.length > 0) {
            toast({
                position:"center",
                title: 'This account has been banned',
                // description: "We've created your account for you.",
                status: 'warning',
                duration: 9000,
                isClosable: true,
              })
        }
        else if (loginuser.length > 0) {
            toast({
                position:"center",
                title: 'Login successfull',
                // description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            localStorage.setItem("token", JSON.stringify(loginuser[0].token))
        }
        else {
            toast({
                position:"center",
                title: 'email or password is invalid',
                // description: "We've created your account for you.",
                status: 'warning',
                duration: 9000,
                isClosable: true,
              })
        }
      setData(init)
    }

    if (isloading) {
        return <>

            <form className='form'>
                <Spinner className='spinner' thickness='4px' speed='0.65s' emptyColor='gray.200' color='gree.500' size='xl' />
            </form>
        </>
    }


    return (<>
        <form className='form2' onSubmit={(e) => onSubmit(e,data)}>
            <h1>Login here please</h1>
            <FormControl className='form-controll2'>

                <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="enter your email" />

                <Input name="password" value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />

            </FormControl>
            <Button mt={4} colorScheme='teal'  type='submit'>
                Submit
            </Button>
          <Link to="/signup">Don't have an account Click here</Link>
        </form>
    </>
    )

}
export { LoginPage }