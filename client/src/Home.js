import React, {  useEffect, useState } from 'react'
import './css/Home.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Home() {
  const navi=useNavigate();
  const[date,setDate]=useState([]);

  async function getDate(){
    const response = await axios.get("http://localhost:5000/product");
    setDate(response.data);

    console.log(response.date);


  } 
  
  

  useEffect(()=>{
    getDate();
  },[])

  const productList=[
    {
      id:1,
      productImage:"https://www.tradeindia.com/wp-content/uploads/2023/05/arabic-mehandi-design-by-Intricate-Lace.jpg",
      productTitle:"Desiner Mehandi",
      productPrice:"Rs 999"
    },
    {
      id:2,
      productImage:"https://i.pinimg.com/564x/7c/b9/51/7cb95187f4e8de1d35d1c0d326a9750c.jpg",
      productTitle:"Desiner Mehandi",
      productPrice:" Rs 2000"
    },
    {
      id:3,
      productImage:"https://i.pinimg.com/736x/81/10/a6/8110a64cc75586b2026181b66a01a4ed.jpg",
      productTitle:"Dulhan Mehandi ",
      productPrice:"Rs 3000"
    },
    {
      id:4,
      productImage:"https://toppng.com/uploads/preview/tattoo-henna-stencil-template-mehndi-free-hd-image-vector-mehndi-115629847046riiaujy2g.png",
      productTitle:"Neha Mehandi",
      productPrice:"Rs 4000"
    },
    {
      id:5,
      productImage:"https://i.pinimg.com/736x/e9/67/41/e9674175ea3f1dc44ccb13909e6c87ee.jpg",
      productTitle:"Nisha Mehandi",
      productPrice:"Rs  50000 "
    }
    
       
    
  ]

  function goToDetailPage(id){
    navi(`/details/${id}`)
    

  }
  return (
    <div className='productcontainer'>{
      date.map((product)=>(

        
        <div className='productcard' onClick={()=>goToDetailPage(product.id)} key={product.id}>
<img src={product.productImage} className='image'/>    
<h1>{product.productTitle}</h1>
<h3>{product.productPrice}</h3>
<p className='productDescription'>{product.productDescription}</p>

<iframe width="560" height="315" src={product.productVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


    </div>
      ))  
    }
     
      
      

       </div>
  )
}

export default Home
