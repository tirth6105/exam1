import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Singleproduct = () => {
    const obj = useParams()
    const [data , setdata]=useState("")

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${obj.js}`)
        .then((response)=>{
            setdata(response.data)
        })
    },[])
     console.log(data)
  return (
    <div>
        <h1 >{data.title}</h1>
        <img className='col-6 mx-auto' src={data.thumbnail} alt="" /> 
    </div>
  )
}

export default Singleproduct