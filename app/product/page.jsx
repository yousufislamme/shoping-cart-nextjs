'use client'
import Button from "@/components/Button";
import Loading from "@/components/Loading";
import Link from "next/link";
import { useEffect, useState } from "react";

const Product = () => {
  const [stores, setStore] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(Data => setStore(Data))
  }, []);

  const btnCart = (e) => {
    console.log(e.target)
  }
  
  return (
    <div>
      <h2>Product</h2>
      <div >
        <div >
          {/* item */}
         {
  stores.length > 0 ? (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  items-stretch gap-5">
      {stores.map((item, index) => (
        <li key={index}>
          <div className="border-2 h-[450px]">
            <div className="bg-red-200 h-[300px] overflow-hidden">
              <Link href={`product/${item.id}`}>
              <img className="object-fill m-auto" src={item.image} alt="image" />
              </Link>
               {/* <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                /> */}
            </div>
            <div className="flex justify-center">
            <h2 className="text-lg font-semibold w-full">
              {item.title.length > 20 ? `${item.title.slice(0, 25)}...` : item.title}
            </h2>
            </div>
            <div className="flex justify-center">
            <p className="text-red-800 font-bold">{item.price}</p>
            </div>
            <div className="flex justify-center">
              <Button onClick={btnCart} />
            </div>

              
          </div>
        </li>
      ))}
    </ul>
  ) : (
   <Loading />
  )
}

        </div>
       </div>

    </div>
  )
}

export default Product;