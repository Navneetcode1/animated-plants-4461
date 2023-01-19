
import {
    FormControl,
    Input,
    Button,
    Spinner,
    useToast
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import "./Signup.css"
// import { useForm } from 'react-hook-form'


import loginaction from '../Redux/Auth/Admin/loginaction'

const AdminLogin = () => {
    const init = {
        admin_email: "",
        admin_password: "",
    }
    const [data, setData] = useState(init)
   const toast = useToast();
   const navigate = useNavigate()
    // const { handleSubmit, formState: { errors, isSubmitting }, } = useForm()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loginaction())
    }, [])
    const admin = useSelector(store=>store.adminloginreducer.admindata)
    const isloading = useSelector(store=>store.adminloginreducer.isloading)
            console.log(admin)

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const onSubmit = (e,data) => {
       
      
        let adminuserdata = admin.filter(ele => ele.admin_email === data.admin_email && ele.admin_password === data.admin_password)
        e.preventDefault()
        if (adminuserdata.length > 0) {
            toast({
                position:"center",
                title: 'Welcome Back Sir.',
                // description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            localStorage.setItem("admintoken", JSON.stringify(adminuserdata[0].token))
            navigate("/adminpage")
        }
        else {
            toast({
                position:"center",
                title: 'Email or Password id incorrect',
                description: "We can not let you in",
                status: 'warning',
                duration: 9000,
                isClosable: true,
              })
        }
   setData(init)
    }
    
  if(isloading){
    return <>
    
    <form className='form2'>
        <Spinner className='spinner' thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
        </form>
    </>
  }


    return (<>
        <form className='form2' onSubmit={(e) => onSubmit(e,data)}>
            <h2>Admin's Login</h2>
            <FormControl className='form-controll2'>

                <Input name="admin_email" value={data.admin_email} onChange={handleChange} className='input' type='email' placeholder="enter your email" />

                <Input name="admin_password" value={data.admin_password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />

            </FormControl>
            <Button mt={4} colorScheme='teal' type='submit'>
                Submit
            </Button>

        </form>
    </>
    )

}
export { AdminLogin }