import { React, useRef } from 'react'

export default function Slide({ page, index, isInViewport }) {
  const ref = useRef()
  isInViewport(ref, index)

  return (
    <div
      className="snap-start flex flex-col items-center justify-center h-[350px] md:h-[500px] lg:h-[700px] w-screen bg-cover bg-center grow shrink-0"
      style={{
        backgroundImage: `linear-gradient(rgba(27, 33, 52, 0.5), rgba(27, 33, 52, 0.5)), url(${
          page._embedded['wp:featuredmedia'] &&
          page._embedded['wp:featuredmedia'][0].source_url
        }`,
      }}
    >
      <div className="text-white w-full">
        <div className="w-full">
          <div
            ref={ref}
            className="max-w-[75%] m-auto md:text-4xl font-forum text-3xl font-semibold lg:text-6xl lg:mb-8 [&_p]:text-shadow"
            dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
          ></div>
          <div className="max-w-[75%] mx-auto">
            <a href={page.link} className="mb-8">
              <button className="mt-5 h-10 w-36 md:h-12 md:w-48 bg-white/100 text-darkBlue font-medium rounded-full">
                Learn more
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
