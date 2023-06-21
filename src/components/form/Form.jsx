import React from 'react'
import CustomInput from '../customInputs/CustomInput'
import CustomButton from '../customButton/CustomButton'
import './Form.css'

function Form() {
  return (
    <form action="" id='form'>
        <p id='banner'>Welcome!! Please Input your username and password</p>
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
        <CustomButton value='submit'/>
    </form> 
  )
}

export default Form