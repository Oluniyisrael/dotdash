import React from 'react'
import CustomInput from '../customInputs/CustomInput'

function Form() {
  return (
    <form action="">
        <p>Welcome!! Please Input your username and password</p>
        <CustomInput 
        type='text'
        id='username'
        placeholder = 'Username'
        name= 'username'/>
        <CustomInput
        type='password'
        id='password'
        placeholder = 'Password'
        name= 'password'/>
    </form> 
  )
}

export default Form