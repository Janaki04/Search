import React, { useContext,useState } from 'react'
import {useNavigate } from 'react-router-dom';
import { Text } from './Text'
import './style.css'

const Details = () => {

const userDetails =useContext(Text)

const[search,setSearch]=useState("")

const store=useNavigate()

const handleChange=(e)=>{
  setSearch(e.target.value)
}



return (
    <div>
        <form className='box'>
         <input style={{height:40,width:300,fontsize:20}} type="search" name="name" placeholder='search' onChange={handleChange}/>
        </form>
        <div >
{
  userDetails.filter(value => {
    if (search === '') {
      return value;
    } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
      return value;
    }
  }).map((value, index) => (
    <div  className="box1" onClick={()=>store(`/name/${value.id}`)}  style={{backgroundColor:value.color}} key={index} >
      <p >{value.name} <br/>{value.email}</p>
      
    </div>
  ))
}
</div>
</div>
  )
}
export default Details