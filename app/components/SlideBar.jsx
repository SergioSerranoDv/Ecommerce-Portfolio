/** @format */
'use client'
import { useState } from 'react'
export default function SlideBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    './Slides/slide1.jpg',
    './Slides/slide2.webp',
    './Slides/slide3.jpg',
  ]
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? currentIndex - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const styling = {
    backgroundImage: `url(${slides[currentIndex]})`,
  }

  return (
    <div className="">
      <div
        style={styling}
        className=" absolute inset-0 -z-50 overflow-hidden group w-full h-screen  bg-center bg-cover  duration-500 "
        alt="imagen"></div>
      <button
        onClick={() => prevSlide()}
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full pl-4 cursor-pointer group focus:outline-none">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-slate-50 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"></path>
          </svg>
        </span>
      </button>
      <button
        onClick={() => nextSlide()}
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-slate-50 group-hover:bg-white/50 dark:group-hover:bg-white group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
      </button>
    </div>
  )
}
