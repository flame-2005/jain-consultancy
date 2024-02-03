import Link from 'next/link'
import React from 'react'

const blogs = () => {
  return (
    <div>
      <section class="relative pb-8 " style={{height:"750px"}}>
        <div>
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1706974370/pexels-pixabay-207684_c6yvgv.jpg"
                class="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full" alt=""/>
            <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center bg-gray-900/75">
                <div class="z-10 max-w-6xl px-4 mx-auto">
                    <span class="text-xs font-semibold text-blue-400 uppercase">Knowledge is power</span>
                    <h2
                        class="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight g">
                        Comming Soon
                    </h2>
                    <div class="items-center justify-start block gap-4 md:flex">
                        <Link class="block px-5 py-3 mb-4 text-sm font-semibold text-center text-gray-100 transition duration-200 bg-blue-600 rounded md:mb-0 md:inline-block hover:bg-blue-700 "
                            href="/"> Home </Link>
                        <Link class="block px-5 py-3 text-sm font-semibold text-center text-blue-700 transition duration-200 bg-white rounded md:inline-block hover:bg-blue-700 hover:text-gray-100"
                            href="/percentilepredictor"> Rank Predictor </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default blogs
