import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItems from '../Components/FoodItems'
import Cart from '../Components/Cart'

const Home = () => {
  return (
    <>
    <div className="min-h-screen bg-violet-50 text-gray-800">


      <Navbar/>
      <CategoryMenu/>
      <FoodItems/>
      <Cart/>
    </div>
    </>
  )
}

export default Home