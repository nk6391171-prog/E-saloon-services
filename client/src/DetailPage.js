import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import ab from './images/a.jpg'
import productList from './Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './css/DetailPage.css'

function DetailPage() {
    const {id}=useParams();
     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
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
  const product=productList.find(item=> item.id===Number(id));



    
  return (

    <div className='container'>
       <Slider {...settings} className='Neha'>

              {
productList.map((product)=>(
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
