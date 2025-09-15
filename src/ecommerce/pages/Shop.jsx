import React from 'react'
import Econavbar from '../Econavbar'
import Ecohome from '../Ecohome'
import Shopsection from '../Shopsection'
import Shopbar from '../Shopbar'
import Scrollbar from '../Scrollbar'
import Footer from '../Footer'

const Shop = () => {
  return (
    <>
    <div> <Econavbar /> </div>
   <div className=""><Ecohome /></div>

   <div className="mb-10 sm:mb-32 mt-28 sm:mt-32" > <Shopsection /> </div>

    <div className=''><Shopbar /> </div>

    <div ><Scrollbar /> </div>

    <div ><Footer /></div>
    </>
  )
}

export default Shop
