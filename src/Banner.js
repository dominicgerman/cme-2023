import { React, useState, useEffect, useRef } from "react";
import isOnScreen from "./isVisible";
import Slide from "./Slide";

function Banner() {
  let API_URL =
    "https://constellationensemble.org/wp-json/wp/v2/pages?parent=126&_embed";

  if (process.env.NODE_ENV === "development") {
    API_URL = "http://cme.local/wp-json/wp/v2/pages?parent=126&_embed";
  }

  const [slideIndex, setSlideIndex] = useState(0);
  const [slideComponents, setSlideComponents] = useState([]);
  const slider = useRef(null);
  const arrow = {
    enabled: {
      bg: "bg-lightBlue",
      stroke: "#FFF",
      strokeOpacity: "1",
    },
    disabled: {
      bg: "bg-gray/50",
      stroke: "rgba(33, 33, 33, 0.65)",
      strokeOpacity: "0.65",
    },
  };

  const isInViewport = (ref, index) => {
    if (isOnScreen(ref) === true) {
      setSlideIndex(index);
    }
  };

  useEffect(async () => {
    try {
      const response = await fetch(API_URL);
      const pagesArray = await response.json();
      setSlideComponents(
        pagesArray
          .toSorted((a, b) => a.menu_order - b.menu_order)
          .map((page, i) => (
            <Slide
              key={page.id}
              page={page}
              index={i}
              isInViewport={isInViewport}
            />
          ))
      );
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="relative h-[350px] md:h-[500px] lg:h-[42vw]">
      <button
        className={`hidden lg:block h-12 w-12 rounded-full ${
          slideIndex > 0 ? arrow.enabled.bg : arrow.disabled.bg
        } absolute top-1/2 left-16 -translate-y-1/2 z-10`}
        onClick={() => {
          if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
            slider.current.scroll(
              slider.current.scrollLeft - window.visualViewport.width,
              0
            );
          }
        }}
      >
        <svg
          width="13"
          height="21"
          viewBox="0 0 13 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="translate-x-4"
        >
          <path
            d="M11.5 19.5L3.48522 13.3068C1.95826 12.1268 1.92633 9.83301 3.41985 8.61103L11.5 2"
            stroke={
              slideIndex > 0 ? arrow.enabled.stroke : arrow.disabled.stroke
            }
            stroke-opacity={
              slideIndex > 0
                ? arrow.enabled.strokeOpacity
                : arrow.disabled.strokeOpacity
            }
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <div
        ref={slider}
        className="flex h-[350px] md:h-[500px] lg:h-full overflow-y-hidden overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {slideComponents}
      </div>
      <button
        className={`hidden lg:block h-12 w-12 rounded-full ${
          slideIndex < slideComponents?.length - 1
            ? arrow.enabled.bg
            : arrow.disabled.bg
        } absolute top-1/2 right-16 -translate-y-1/2`}
        onClick={() => {
          if (slideIndex < slideComponents?.length - 1) {
            setSlideIndex(slideIndex + 1);
            slider.current.scroll(
              slider.current.scrollLeft + window.visualViewport.width,
              0
            );
          }
        }}
      >
        <svg
          width="13"
          height="21"
          viewBox="0 0 13 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="translate-x-5"
        >
          <path
            d="M1.5 2L9.51478 8.19324C11.0417 9.37316 11.0737 11.667 9.58015 12.889L1.5 19.5"
            stroke={
              slideIndex < slideComponents?.length - 1
                ? arrow.enabled.stroke
                : arrow.disabled.stroke
            }
            stroke-opacity={
              slideIndex < slideComponents?.length - 1
                ? arrow.enabled.strokeOpacity
                : arrow.disabled.strokeOpacity
            }
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <div className="flex gap-2 absolute bottom-[10%] left-1/2 -translate-x-1/2">
        {slideComponents?.map((slideComponent, i) => (
          <div
            key={slideComponent.key}
            className={`h-3 w-3 border-white rounded-full border-2 ${
              slideIndex === i ? "bg-darkGray" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
