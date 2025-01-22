import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

// Define the type for the image object
interface ImageObject {
  asset: {
    _ref: string;
    _type: string;
  };
}

interface CartItem {
  _id: string;
  name: string;
  price: number;
  shortDescription: string;
  image: ImageObject; // Specify the type for image
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  removeFromCart: (productId: string) => void;
  incrementQuantity: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
  handleCheckout: () => void;
}

// Ensure the return type of urlFor is well-defined
const Cart: React.FC<CartProps> = ({ cart, removeFromCart, incrementQuantity, decrementQuantity, handleCheckout }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-bold">Cart</h2>
      <div className="mt-6">
        {cart.map((item) => {
          const imageUrl = urlFor(item.image).url(); // Call url() method to get the string
          return (
            <div key={item._id} className="flex items-center justify-between mb-4">
              <Image src={imageUrl} alt={item.name} width={50} height={50} />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.shortDescription}</p>
                <p className="text-lg text-gray-800">Rs. {item.price}</p>
                <div className="flex items-center mt-2">
                  <button onClick={() => decrementQuantity(item._id)} className="px-2 py-1 bg-gray-300 rounded">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item._id)} className="px-2 py-1 bg-gray-300 rounded">+</button>
                  <button onClick={() => removeFromCart(item._id)} className="ml-4 px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={handleCheckout} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
  