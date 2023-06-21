import React, { useState } from 'react'
import CustomInput from '../customInputs/CustomInput'
import CustomButton from '../customButton/CustomButton'
import './Form.css'
import database from '../../assets/jsons/database.json'

function Form() {
  const [username,setUserName] = useState('')
  const [password,setPassword] = useState('')
  function isCorrect(){
    for (let i = 0; i < database.length; i++) {
      if(username === database[i].username && password === database[i].password){
        console.log('true')
        return true
      }
    }
    console.log('false')
    return false
  }
  // console.log(username)

  return (
    <form action="" id='form'>
        <p id='banner'>Welcome!! Please Input your username and password</p>
        <CustomInput 
        type='text'
        id='username'
        placeholder = 'Username'
        name= 'username'
        onchange={(e)=>{setUserName(e.target.value)}}/>
        <CustomInput
        type='password'
        id='password'
        placeholder = 'Password'
        name= 'password'
        onchange={(e)=>{setPassword(e.target.value)}}/>
        <CustomButton value='Submit' onClick={isCorrect}/>
    </form> 
  )
}

export default Form