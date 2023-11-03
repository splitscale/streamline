"use client";
import { useState } from 'react';
import ItemCard from './itemCard';
import SearchBar from '@/app/component/searchbar';

export default function CounterPage() {

 const [cartItems, setCartItems] = useState<any[]>([]);
 const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

 // Adds an item to the cart.
 const addToCart = (item: any) => {
   setCartItems((prevItems) => [...prevItems, item]);
 };
 
 return (
   <>
   <div className='m-5 text-4xl font-bold'>STREAMLINE</div>
   <SearchBar/>
   <div className='grid-rows-2'>
   <ItemCard addToCart={addToCart}/>
   <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
   <div className='mt-10'>
    {cartItems.map((item, index) => <div className=' grid grid-cols-3 gap-4 m-10  w-3/4 p-4 pl-10 text-sm 
        text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
     dark:bg-gray-300 dark:placeholder-gray-400 
        dark:text-black font-bold 'key={index}>
            <div>
            {item.name}: ${item.price}
            </div>
            <div>
           
            </div>
            <div className='text-black font-extrabold'>
                
        <button >
            - Counter +
        </button>
            </div>
        </div>
        )}
   </div>
   </div>
   </>

 )
 }
