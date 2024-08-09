"use client";

import "./Slider.css";
import { useRef } from "react";
import { YouTubeApiResponse } from "../../types";

interface SliderProps {
  data: YouTubeApiResponse;
}

export default function Slider({ data }: SliderProps) {
  const sliderRef = useRef<HTMLUListElement>(null); // Create a ref with specific type to control the slider

  const scrollToItem = (index: number) => {
    if (sliderRef.current) {
      const list = sliderRef.current;
      const item = list.children[index] as HTMLElement; // Get the specific item
      if (item) {
        const itemWidth = item.offsetWidth; // Width of the item
        const itemLeft = item.offsetLeft; // Left position of the item within the container

        // Scroll so that the target item is aligned with the left edge of the container
        list.scrollLeft = itemLeft;
      }
    }
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      const list = sliderRef.current;
      const items = Array.from(list.children) as HTMLElement[];
      const currentIndex = Math.round(list.scrollLeft / items[0].offsetWidth); // Approximate current item index
      const nextIndex = Math.min(currentIndex + 1, items.length - 1); // Ensure within bounds
      scrollToItem(nextIndex);
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      const list = sliderRef.current;
      const items = Array.from(list.children) as HTMLElement[];
      const currentIndex = Math.round(list.scrollLeft / items[0].offsetWidth); // Approximate current item index
      const prevIndex = Math.max(currentIndex - 1, 0); // Ensure within bounds
      scrollToItem(prevIndex);
    }
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev" onClick={prevSlide}>
        <i className="fas fa-chevron-left" title="Prev"></i>
      </button>
      <ul className="slider-ul" ref={sliderRef}>
        {data.items.map((item: any, index) => {
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId } = snippet;
          const { medium = {} } = thumbnails;
          return (
            <li key={id} className="slider-li">
              <a
                href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                target="_blank"
              >
                <p>
                  <img className="slider-img" src={medium.url} alt={title} />
                </p>
                <h3 className="slider-title">{title}</h3>
              </a>
            </li>
          );
        })}
      </ul>
      <button className="slider-button next" onClick={nextSlide}>
        <i className="fas fa-chevron-right" title="Next"></i>
      </button>
    </div>
  );
}
