import React, {useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import ab from './images/a.jpg'
import productList from './Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './css/DetailPage.css'
import axios from 'axios';

function DetailPage() {

    const {id}=useParams();
    const[data,setDate]=useState([]);

    async function getData(){
    const response = await axios.get(`https://e-saloon-services.onrender.com/product/${id}`);
    
    setDate(response.data);

    console.log(response.data);

  } 
     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(()=>{
      getData();
      
    },[]);
    


    
  return (

    <div className='container'>
       <Slider {...settings} className='Neha'>

              {
data.map((product)=>(
        <div>

<img src={product.productImage} className='sliderImage'/>
<h1 className='sliderTitle'>{product.productTitle}</h1>
        </div>
      ))

      }
       </Slider>

      

      
    </div>
  )
}

export default DetailPage
