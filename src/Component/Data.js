import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { Text } from './Text'


function Data() {

    const { id } = useParams();


 const userData=useContext(Text)
console.log(userData, id)
 var a = userData.filter((value)=> value.id===parseInt(id))
 console.log(a)
 
  return (
    <div >
      {a.map((value)=>(
        <div className='box2' style={{background:value.color}}>
          Name:  {value.name}<br/>
          Email:  {value.email}<br/>
          Number:  {value.number}<br/>
          Role:  {value.role}<br/>
           About: {value.about}<br/>


        </div>
      ))}  
      


     

    </div>
  )
}

export default Data