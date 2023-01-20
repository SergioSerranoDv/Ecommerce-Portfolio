/** @format */
'use client'
import App from 'next/app'
import Image from 'next/image'
import { useContext } from 'react'
import { useState } from 'react'

export default function NavBar() {
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  const styling = {
    color: 'transparent',
  }

  return (
    <header
      className={
        color
          ? ' sticky top-0 bg-slate-50 '
          : ' sticky top-0  bg-slate-50 hover:bg-white '
      }>
      <nav className="flex w-full h-20 justify-between items-center shadow-md">
        <div className=" flex w-full justify-between items-center  md:hidden">
          <div className=" flex ml-4 items-center  ">
            <Image src="/Raw/burguer.png" width={24} height={24} alt=" Menu " />
            <Image src="/Raw/lupe.png" width={24} height={24} alt="Lupe" />
          </div>
          <div className="flex justify-center align-items">
            <Image src="/Raw/Raw.png" width={24} height={24} alt="logo" />
          </div>
          <div className="flex justify-center align-items mr-4">
            <Image
              src="/Raw/user.png"
              width={24}
              height={24}
              alt="user"></Image>
            <Image
              src="/Raw/cart.png"
              width={24}
              height={24}
              alt="Cart"></Image>
          </div>
        </div>

        <div className=" hidden md:flex md:ml-8 d:mt-0 md:w-20 md:h-20 md:items-center">
          <Image
            src="/Raw/raw.png"
            width={80}
            height={80}
            alt="Logo enterprise"
          />
        </div>
        <ul className=" hidden md:flex md:items-center mt-18 justify-between ">
          <div className="items-center mt-8 group">
            <a className=" ml-4 mr-4 font-semibold font-mono cursor-pointer  ">
              Supplements
              <div>
                <div className=" absolute top-20 mt-8 w-80 hidden group-hover:block hover:block bg-white ">
                  <ul className="flex-col mt-2">
                    <li>Raw Bar</li>
                    <li>Protein Cookies</li>
                    <li>Thavage RTD Pre-workout</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="items-center mt-8 group">
            <a className=" ml-4 mr-4 font-semibold font-mono cursor-pointer  ">
              On the Go
              <div>
                <div className=" absolute top-20 mt-8 w-80 hidden group-hover:block hover:block bg-white ">
                  <ul className="flex-col mt-2">
                    <li>Raw Bar</li>
                    <li>Protein Cookies</li>
                    <li>Thavage RTD Pre-workout</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className=" items-center mt-8 group">
            <a className=" ml-4 mr-4 font-semibold font-mono cursor-pointer  ">
              Bundles
              <div>
                <div className=" absolute top-20 mt-8 w-80 hidden group-hover:block hover:block bg-white ">
                  <ul className="flex-col mt-2">
                    <li className="text-base font-thin text-zinc-800 ">
                      Cbum Olympia Bundle
                    </li>
                    <li className="text-base font-thin text-zinc-800">
                      Summer shred Bundle
                    </li>
                    <li className="text-base font-thin text-zinc-800">
                      Lean Bulk Bundle
                    </li>
                    <li className="text-base font-thin text-zinc-800">
                      Intra-Workout Performance Bunlde
                    </li>
                    <li className="text-base font-thin text-zinc-800">
                      Max Recomposition Bunlde
                    </li>
                    <li className="text-base font-thin text-zinc-800">
                      Recovery Bundle
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="items-center mt-8 group">
            <a className=" ml-4 mr-4 font-semibold font-mono cursor-pointer  ">
              Athletes
              <div>
                <div className=" absolute top-20 mt-8 w-80 hidden group-hover:block hover:block bg-white ">
                  <ul className="flex-col mt-2">
                    <li>Raw Bar</li>
                    <li>Protein Cookies</li>
                    <li>Thavage RTD Pre-workout</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="items-center mt-8 group">
            <a className=" ml-4 mr-4 font-semibold font-mono cursor-pointer  ">
              Apparel
              <div>
                <div className=" absolute top-20 mt-8 w-80 hidden group-hover:block hover:block bg-white ">
                  <ul className="flex-col mt-2">
                    <li>Raw Bar</li>
                    <li>Protein Cookies</li>
                    <li>Thavage RTD Pre-workout</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </ul>
        <ul className=" hidden md:flex md:mr-8 md:justify-between">
          <a className="items-center mt-8   ml-4 mr-4 font-semibold font-mono">
            Account
          </a>
          <a className="items-center mt-8 ml-4 mr-4 font-semibold font-mono">
            Search
          </a>
          <a className="items-center mt-8 ml-4 mr-4 font-semibold font-mono">
            Cart
          </a>
        </ul>
      </nav>
    </header>
  )
}
