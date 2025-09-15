import React from 'react'
import Barimage from '../ecommerce/ecommerce_images/macyheroimage.jpg';


const Shopbar = () => {
  return (
  <>
 <div
  className=" h-[250px] w-full sm:h-[400px] bg-center bg-cover bg-no-repeat bg-fixed "
  style={{ backgroundImage: `url(${Barimage})` }}
>
</div>

  </>
  )
}

export default Shopbar
