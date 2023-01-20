/** @format */
'use client'
import React from 'react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useContext } from 'react'
import { appContext } from '../AppContext'

export default function Item({ producto }) {
  const item = [producto]
  const { state, dispatch } = useContext(appContext)
  const productos = [state]
  const [count, setcount] = useState(0)
  const aumentar = () => {
    dispatch({ type: 'INCREMENT', payload: { ...item[0] } })
  }
  console.log(state.count)
  const [selected, setSelected] = useState(item[0].flavor[0])
  return (
    <div className="grid grid-cols-1  mt-8 w-full m-auto xl:grid xl:grid-cols-2 ">
      <div className=" block ml-8">
        <Image
          src={item[0].link}
          className="rounded shadow-md"
          alt={item[0].name}
          width={720}
          height={720}
        />
      </div>
      <div className="flex-col w-full ml-14">
        <h2 className="font-bold font-mono text-5xl text-left uppercase ">
          {item[0].name}
        </h2>
        <div className="  mt-8 text-left font-mono text-2xl">
          <span>${item[0].price}</span>
        </div>

        <div className="inline-block text-left mt-0">
          <span className=" text-zinc-600 text-base">Flavor: {selected}</span>
        </div>
        <div className="relative w-72 mt-4">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white  py-2 pl-3 pr-10 text-left shadow-md  border border-slate-400 sm:text-sm">
                <span className="block truncate">{selected}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <Listbox.Options className="absolute mt-1 h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {item[0].flavor.map((taste, tasteIdx) => (
                    <Listbox.Option
                      key={tasteIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? 'bg-amber-100 text-amber-900 cursor-pointer'
                            : 'text-gray-900'
                        }`
                      }
                      value={taste}>
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}>
                            {taste}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div className="mt-4  border-b-2  border-zinc-800  border-opacity-10 ">
          {[...Array(item[0].rating)].map((star, idx) => (
            <span className="inline-block" key={idx}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentcolor"
                className="w-6 h-6 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </span>
          ))}
        </div>
        <div className=" flex  mt-12">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="green"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </span>
          <h4 className=" flex ml-2"> In Stock</h4>
        </div>
        <div className="flex w-full text-left mt-4">
          <button
            className="relative w-3/4 h-12 justify-center  text-center rounded-md border border-slate-500 ring-black ring-opacity-5"
            onClick={() => aumentar()}>
            Add to Cart
          </button>
        </div>
        <div>
          HOa
          {console.log(state)}
          {console.log(productos)}
        </div>
      </div>
    </div>
  )
}
