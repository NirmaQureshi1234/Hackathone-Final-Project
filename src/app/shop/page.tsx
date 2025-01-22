// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import SearchBarDropdown from '../components/SearchBarDropdown';

// // Define the Product interface
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   shortDescription: string;
//   category: string;
//   image: any;
// }

// // Function to fetch products from Sanity
// async function fetchProducts(): Promise<Product[]> {
//   const query = `*[_type == "product"]{
//     _id,
//     name,
//     price,
//     "shortDescription": description[0..100],
//     category,
//     "image":image.asset._ref
//   }`;
//   const products = await client.fetch(query);
//   return products;
// }

// const ShopPage = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [selectedCategory, setSelectedCategory] = useState<string>('');

//   const addToCart = (e: React.MouseEvent) => {
//     e.preventDefault();
//     // Add your cart logic here
//     console.log('Added to cart');
//   };

//   // Fetch products on component mount
//   useEffect(() => {
//     async function getProducts() {
//       const products = await fetchProducts();
//       setProducts(products);
//     }
//     getProducts();
//   }, []);

//   // Filter products based on search term and selected category
//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//     (!selectedCategory || product.category === selectedCategory)
//   );

//   return (
//     <div className="bg-gray-50 min-h-screen">
//             {/* Header Section */}    <div className="relative bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//          <div className="py-16 text-center">
//           <div className="w-16 h-16 mx-auto mb-4">
//              <Image
//                 src="/minilogo.png"
//                 alt="Logo"
//                 width={64}
//                 height={64}
//                 className="object-contain"
//               />
//             </div>
//             <h1 className="text-4xl font-bold text-gray-900">Shop</h1>
//             <p className="text-sm text-gray-500 mt-2 flex items-center justify-center space-x-2">
//               <span>
//                 <Link href="/">Home</Link>
//               </span>
//               <FontAwesomeIcon
//                 icon={faAngleRight}
//                 className="text-gray-500 h-3 w-3 text-xs"
//               />
//               <span><Link href="/singleProduct">Single Product</Link></span>
//             </p>
//           </div>
//         </div>
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/heroShop.png"
//             alt="Background"
//             fill
//             className="pointer-events-none opacity-30 object-cover"
//           />
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      
// <SearchBarDropdown 
//   searchTerm={searchTerm}
//   setSearchTerm={setSearchTerm}
//   selectedCategory={selectedCategory}
//   setSelectedCategory={setSelectedCategory}
//   categories={Array.from(new Set(products.map(product => product.category)))}
// />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {filteredProducts.map((product) => (
//             <div
//               key={product._id}
//               className="relative group text-center p-6 product-card bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
//             >
//               <Link href={`/product/${product._id}`} passHref>
                
//                   <Image
//                     src={urlFor(product.image).url()}
//                     alt={product.name}
//                     width={300}
//                     height={300}
//                     className="mx-auto h-64 object-cover rounded-md"
//                   />
//                   <h3 className="mt-4 text-xl font-semibold text-gray-800">{product.name}</h3>
//                   <p className="mt-2 text-gray-600 text-sm">{product.shortDescription}</p>
//                   <p className="mt-2 text-lg font-bold text-gray-800">${product.price}</p>
                
//               </Link>
//               <div className="mt-4 flex justify-around">
//                 {/* <button 
//                  onClick={addToCart}
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                   Add to Cart
//                 </button>
//                 <button 
//                  onClick={() => window.history.back()}
//                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
//                   View Product
//                 </button> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopPage;



 

"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import SearchBarDropdown from '../components/SearchBarDropdown';
import TopBeds from '../components/TopBed';

// Define the ImageAsset interface for the image
interface ImageAsset {
  _ref: string;
  _type: string;
}

// Define the Product interface
interface Product {
  _id: string;
  name: string;
  price: number;
  shortDescription: string;
  category: string;
  image: ImageAsset;
}

// Function to fetch products from Sanity
async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    _id,
    name,
    price,
    "shortDescription": description[0..100],
    category,
    "image":image.asset._ref
  }`;
  const products = await client.fetch(query);
  return products;
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add your cart logic here
    console.log('Added to cart');
  };

  // Fetch products on component mount
  useEffect(() => {
    async function getProducts() {
      const products = await fetchProducts();
      setProducts(products);
    }
    getProducts();
  }, []);

  // Filter products based on search term and selected category
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedCategory || product.category === selectedCategory)
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-16 text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <Image
                src="/minilogo.png"
                alt="Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Shop</h1>
            <p className="text-sm text-gray-500 mt-2 flex items-center justify-center space-x-2">
              <span>
                <Link href="/">Home</Link>
              </span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-gray-500 h-3 w-3 text-xs"
              />
              <span><Link href="/singleProduct">Single Product</Link></span>
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/heroShop.png"
            alt="Background"
            fill
            className="pointer-events-none opacity-30 object-cover"
          />
        </div>
      </div>
       
        <TopBeds />
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <SearchBarDropdown 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={Array.from(new Set(products.map(product => product.category)))}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="relative group text-center p-6 product-card bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/product/${product._id}`} passHref>
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="mx-auto h-64 object-cover rounded-md"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="mt-2 text-gray-600 text-sm">{product.shortDescription}</p>
                <p className="mt-2 text-lg font-bold text-gray-800">${product.price}</p>
              </Link>
              <div className="mt-4 flex justify-around">
                {/* <button 
                  onClick={addToCart}  // Use addToCart here
                  className="px-4 py-2 bg-black text-white rounded hover:bg-black">
                  Add to Cart
                </button>
                <button 
                  onClick={() => window.history.back()}
                  className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-400">
                  View Product
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
