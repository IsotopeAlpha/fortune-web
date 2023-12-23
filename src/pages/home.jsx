import React from 'react'
import Sidebar from '../components/sidebar'
import Category from '../components/category'

export default function Home() {

    const items= [{name:'Item No', price:100, desc:'This is item description', img:'/logo192.png'},
    {name:'Item No', price:100, desc:'This is item description', img:'/logo192.png'},
    {name:'Item No', price:100, desc:'This is item description', img:'/logo192.png'},
    {name:'Item No', price:100, desc:'This is item description', img:'/logo192.png'},
    {name:'Item No', price:100, desc:'This is item description', img:'/logo192.png'},
    {name:'Item No', price:100, desc:'This is item description', img:'/logo192.png'},
    {name:'Item No', price:100, desc:'This is item description', img:'/logo192.png'},
    {name:'Item No', price:100, desc:'This is item description', img:'/logo192.png'},
    {name:'Item No', price:100, desc:'This is item description', img:'/logo192.png'},
    {name:'Item No', price:100, desc:'This is item description', img:'/logo192.png'},
    {name:'Item No', price:100, desc:'This is item description', img:'/logo192.png'}]
  return (
    <>
        <head>
            <title>Fortune Homepage</title>
        </head>
        <div className='bg-[#ffffffaa] w-[100vw] h-[100vh] pl-[21%] p-[1em] flex flex-col gap-[30px] overflow-auto'>  
            <Category title='Shirts' to='/shirts' items={items}/> 
            <Category title='Body Splashes' to='/splashes' items={items}/> 
            <Category title='Sprays' to='/sprays' items={items}/> 
            <Category title='Shorts' to='/shorts' items={items}/> 
            <Category title='Ups and Downs' to='/ups&downs' items={items}/>
            <Category title='Night Wears' to='/nightwears' items={items}/>
        </div>
        <Sidebar/>
    </>
  )
}
