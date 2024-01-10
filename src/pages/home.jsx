import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import Category from '../components/category'
import axios from 'axios';

export default function Home() {

  const [products, setProducts] = useState([])
  const [shirts, setShirts] = useState([])
  const [shorts, setShorts] = useState([])
  const [splahes, setSplahes] = useState([])
  const [sprays, setSprays] = useState([])
  const [nightwears, setNightwears] = useState([])
  const [ups_downs, setUps_downs] = useState([])

  const handleAllFetches = async()=>{
    await axios.get(`${process.env.REACT_APP_BASE_URL}products`).then(res => {
            setProducts(res.data);
  
        });

        for(let i=0; i<products.length; i++){
          if(products[i].categoryName==='Shirts'){
            shirts.push(products[i])
          }else if(products[i].categoryName==='Shorts'){
            shorts.push(products[i])
          }else if(products[i].categoryName==='Sprays'){
            sprays.push(products[i])
          }else if(products[i].categoryName==='Nightwears'){
            nightwears.push(products[i])
          }else if(products[i].categoryName==='Splashes'){
            splahes.push(products[i])
          }else if(products[i].categoryName==='Ups&Downs'){
            ups_downs.push(products[i])
          }
        }

        localStorage.setItem('shirts', JSON.stringify(shirts));
        localStorage.setItem('shorts', JSON.stringify(shorts));
        localStorage.setItem('sprays', JSON.stringify(sprays));
        localStorage.setItem('splashes', JSON.stringify(splahes));
        localStorage.setItem('nightwears', JSON.stringify(nightwears));
        localStorage.setItem('ups&downs', JSON.stringify(ups_downs));
}


useEffect(()=>{
  handleAllFetches()
},[products])

  return (
    <>
        <head>
            <title>Fortune Homepage</title>
        </head>
        <div className='bg-[#ffffffaa] w-[100vw] h-[100vh] sm:pl-[21%] p-[1em]  sm:mt-0 mt-[40px] flex flex-col gap-[30px] overflow-auto'>  
            <Category title='Shirts' to='/shirts' items={shirts}/> 
            <Category title='Body Splashes' to='/splashes' items={splahes}/> 
            <Category title='Sprays' to='/sprays' items={sprays}/> 
            <Category title='Shorts' to='/shorts' items={shorts}/> 
            <Category title='Ups and Downs' to='/ups&downs' items={ups_downs}/>
            <Category title='Night Wears' to='/nightwears' items={nightwears}/>
        </div>
        <Sidebar/>
    </>
  )
}
