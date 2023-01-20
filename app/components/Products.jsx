/** @format */

import React from 'react'
import data from '../../utils/data'
import Image from 'next/image'

export default function Products() {
  const { products } = data

  return (
    <div className="grid grid-cols-1 mt-4 mr-4 ml-4 xl:grid xl:grid-cols-4 gap-4  ">
      {data.products.map((item) => (
        <div
          className=" flex flex-col w-[360px] h-[400px] mt-4 gap-4"
          key={item.slug}>
          <div className=" text-center shadow-md ">
            <Image
              src={item.link}
              width={360}
              height={360}
              className="rounded-lg"
              alt={item.name}
            />
          </div>
          <div>
            <h3 className="font-bold font-mono">{item.name}</h3>
            <p className=" font-mono font-extralight text-zinc-600 ">
              {item.description}
            </p>
            <span className="font-mono"> ${item.price}</span>
          </div>
          <button className=" flex mt-auto justify-center items-center rounded font-mono py-2 text-slate-50  bg-zinc-800 hover:shadow-md">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  )
}
