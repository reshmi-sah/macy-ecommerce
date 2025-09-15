import React, { useContext } from 'react';
import { ShopContext } from '../ShopContext';
import { useParams } from 'react-router-dom';
import Econavbar from '../Econavbar';
import Breadcrums from '../Breadcrums';
import ProductDisplay from '../ProductDisplay';
import Discription from '../Discription';

const Product = () => {
  const { all_product, data_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Merge both arrays
  const mergedProducts = [...all_product, ...data_product];

  // Search in merged array
  const product = mergedProducts.find((e) => String(e.id) === String(productId));

  console.log('productId from URL:', productId);
  console.log('product found:', product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Econavbar />
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <Discription />
    </>
  );
};

export default Product;



// import React, { useContext } from 'react';
// import { ShopContext } from '../ShopContext';
// import { useParams } from 'react-router-dom';
// import Econavbar from '../Econavbar';
// import Breadcrums from '../Breadcrums';
// import ProductDisplay from '../ProductDisplay';
// import Discription from '../Discription';

// const Product = () => {
//   const { mergedProducts } = useContext(ShopContext); // ✅ now using mergedProducts
//   const { productId } = useParams();

//   // ✅ Find product in mergedProducts
//   const product = mergedProducts.find(
//     (e) => Number(e.id) === Number(productId)
//   );

//   console.log('productId from URL:', productId);
//   console.log('product found:', product);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <>
//       <Econavbar />
//       <Breadcrums product={product} />
//       <ProductDisplay product={product} />
//       <Discription />
//     </>
//   );
// };

// export default Product;

