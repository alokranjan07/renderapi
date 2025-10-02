 import React from 'react'
 import {useState,useEffect} from 'react'
 import axios from 'axios'
 import './Cats.css'

 function Cats() {
  const [cat,setCat]=useState([]);

  useEffect(()=>{
    const fetchCats=async()=>{
      try {
        const res=await axios.get(" https://cataas.com/api/cats?tags=cute");
        setCat(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
        
      }
    };
    fetchCats();

  },[])
   return (
    <>
    <div>Cats App</div>
    <div>
      {cat.map((item)=>(
        <div key={item.id}>
          <h1 className="h1">{item.tags}</h1>
          <p className="para">{item.mimetype}</p>
          </div>

      ))}
    </div>
    </>
      
   )
 }
 
 export default Cats