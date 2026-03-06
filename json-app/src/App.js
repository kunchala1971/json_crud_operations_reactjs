import React, { useEffect, useState } from 'react'

const App = () => {
	const [data,setData]=useState([]);
	useEffect(()=>{

	fetch("http://localhost:3000/products").then(res=>res.json()).then(data=>setData(data))

	},[])
  return (
	<div>
	  {data.map((element)=><h1>{element.id}-{element.name}-{element.price}</h1>)}
	</div>
  )
}

export default App
