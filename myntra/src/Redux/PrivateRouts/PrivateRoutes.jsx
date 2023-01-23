import { useToast } from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
         const navigate = useNavigate() 
         const toast = useToast()
         const token = JSON.parse(localStorage.getItem("token"))

         if(token){
              return children
         }
         else{
             navigate("/login")
         }
}

export default PrivateRoutes
