import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Extra = () => {

    const [data,setData]=useState([])

    useEffect(()=>{
        axios(`https://dummyjson.com/products`)
        .then((response)=>{
          setData(response.data.products)
        })
        // console.log(data)
      },[])

  return (
    <div>
      {
        data.map((pro)=>{
          return<>
          <Link to={`/Extra/${pro.id}`}>
          <h1 className='text-left'>{pro.title}</h1>
          <img className='col-6 mx-auto' src={pro.thumbnail} alt="" />
          </Link>
          </>
        })
      }
    </div>
  )
}
export default Extra