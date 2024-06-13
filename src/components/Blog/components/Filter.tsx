/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSearchParams } from "@/hooks/utils";
import { useGetCategoriesQuery } from "@/hooks/api/categories";

import {
  ArrowTriangleLeft,
  ArrowTriangleRight,
} from "@/components/Layouts/Icons";
import { TextField } from "@/components/Layouts";
import * as Styled from "./styles/filter.styled";

const Filter: React.FC = () => {
  const slickCarousel = useRef<Slider | null>(null);

  const { data } = useGetCategoriesQuery({ setLimit: false });

  const { setParam, getParam, removeParam } = useSearchParams();

  const [search, setSearch] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const currentSearch = getParam("search");
  const selectedCategories = getParam("category")?.split(",") || [];

  const onCategorySelect = (value: string) => setParam("category", value, true);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  useEffect(() => {
    if (!isMounted) return;

    const timeoutId = setTimeout(() => {
      if (search) setParam("search", search);
      else removeParam("search");
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search, isMounted]);

  useEffect(() => {
    if (!search && currentSearch) setSearch(currentSearch);
    setIsMounted(true);
  }, []);

  return (
    <Styled.Filter>
      <div className="categories-slider__container">
        <button
          className="prev"
          onClick={() => slickCarousel.current.slickPrev()}
        >
          <ArrowTriangleLeft />
        </button>

        <button
          className="next"
          onClick={() => slickCarousel.current.slickNext()}
        >
          <ArrowTriangleRight />
        </button>

        <Slider
          dots={false}
          swipe={true}
          arrows={false}
          infinite={true}
          slidesToScroll={4}
          variableWidth={true}
          ref={slickCarousel}
        >
          {data.map((category) => (
            <div
              key={category._id}
              onClick={() => onCategorySelect(category.query)}
              className={`category-slide ${
                selectedCategories.includes(category.query) ? "active" : ""
              }`}
            >
              {category.title}
            </div>
          ))}
        </Slider>
      </div>

      <TextField
        hasError={false}
        message=""
        placeholder="Search ..."
        fieldProps={{
          name: "search",
          value: search,
          onChange: onSearch,
        }}
      />
    </Styled.Filter>
  );
};

export default Filter;
