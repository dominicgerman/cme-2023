import { React, useState, useEffect } from 'react'

export default function Slide({ page }) {
  return (
    <div
      className="h-[700px] w-screen bg-cover bg-center grow shrink-0"
      style={{
        backgroundImage: `linear-gradient(rgba(27, 33, 52, 0.5), rgba(27, 33, 52, 0.5)), url(${
          page._embedded['wp:featuredmedia'] &&
          page._embedded['wp:featuredmedia'][0].source_url
        }`,
      }}
    >
      <div className="mx-44 text-white w-full">
        <div className="absolute top-1/2 -translate-y-1/2">
          <div
            className="max-w-5xl font-forum text-6xl mb-8"
            dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
          ></div>
          <a href={page.link} className="mb-8">
            <button className="h-12 w-48 bg-white/100 text-darkBlue font-medium rounded-full">
              Learn more
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
