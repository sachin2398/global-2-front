import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import SignupBox from './SignupBox'



const Home = () => {
  const { authState,logout} = useContext(AuthContext);
  return (
  <SignupBox/>
  
  )
}

export default Home
