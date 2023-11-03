import { useState } from 'react';

interface Props {
    addToCart: (item: { name: string; price: number;}) => void;
}

export default function ItemCard({ addToCart }: Props) {
 const [messages, setMessages] = useState<string[]>([]);

 const handleButtonClick = () => {
     console.log('clicked');
     setMessages([...messages, 'Hello']);
     const item = { name: 'SCM1', price: 100 };  // Replace with actual item
     addToCart(item);
 }
 
 return (
     <div className="mt-12 px-6 py-10 grid grid-cols-3 gap-4 place-content-center h-48 ...">
     <a onClick={handleButtonClick} 
     className=" rounded-lg flex flex-col items-center">
     
     <div className=" rounded-lg flex flex-col justify-between p-4 bg-gray-300 leading-normal">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">SCM1</h5>
         <p className="mb-3 font-normal text-center text-gray-700 dark:text-black-400">Ikaw</p>
     </div>
     
 </a>
 <a onClick={handleButtonClick} 
     className=" rounded-lg flex flex-col items-center">
     
     <div className=" rounded-lg flex flex-col justify-between p-4 bg-gray-300 leading-normal">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">SCM1</h5>
         <p className="mb-3 font-normal text-center text-gray-700 dark:text-black-400">Ikaw</p>
     </div>
     
 </a>
 <a onClick={handleButtonClick} 
     className=" rounded-lg flex flex-col items-center">
     
     <div className=" rounded-lg flex flex-col justify-between p-4 bg-gray-300 leading-normal">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">SCM1</h5>
         <p className="mb-3 font-normal text-center text-gray-700 dark:text-black-400">Ikaw</p>
     </div>
     
 </a>
 <a onClick={handleButtonClick} 
     className=" rounded-lg flex flex-col items-center">
     
     <div className=" rounded-lg flex flex-col justify-between p-4 bg-gray-300 leading-normal">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">SCM1</h5>
         <p className="mb-3 font-normal text-center text-gray-700 dark:text-black-400">Ikaw</p>
     </div>
     
 </a>
 <a onClick={handleButtonClick} 
     className=" rounded-lg flex flex-col items-center">
     
     <div className=" rounded-lg flex flex-col justify-between p-4 bg-gray-300 leading-normal">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">SCM1</h5>
         <p className="mb-3 font-normal text-center text-gray-700 dark:text-black-400">Ikaw</p>
     </div>
     
 </a>
 <a onClick={handleButtonClick} 
     className=" rounded-lg flex flex-col items-center">
     
     <div className=" rounded-lg flex flex-col justify-between p-4 bg-gray-300 leading-normal">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">SCM1</h5>
         <p className="mb-3 font-normal text-center text-gray-700 dark:text-black-400">Ikaw</p>
     </div>
     
 </a>
 

     </div>

 )
 }