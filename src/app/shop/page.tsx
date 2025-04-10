"use client";

import './shop.css';

import { useState, ChangeEvent, MouseEvent } from "react";
import React from "react";
import { Header } from "../../sections/Header";
import Nav from "./shop/Navigation/Nav.jsx";
import Sidebar from "./shop/Sidebar/Sidebar.jsx";
import Recommended from "./shop/Recommended/Recommended.jsx";
import Products from "./shop/Products/Products.jsx";
import { StaticImageData } from "next/image";

// Database
import products from "./shop/db/data.jsx";
import Card from "./shop/components1/Card.jsx";

// Define the Product type
interface Product {
  img: string | StaticImageData;
  title: string;
  star: number | JSX.Element;
  reviews: string;
  newPrice: number | string;
  prevPrice: number | string;
  category: string;
  color: string;
  company: string;
}

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");

  // ------------Input Filter------------
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return typeof product.img === "string" && product.category === "electronics";
  });

  // ------------Radio Filter------------
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  // ------------Buttons Filter------------
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(event.currentTarget.value);
  };

  function filteredData(
    products: Product[],
    selected: string | null,
    query: string
  ) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice.toString() === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={title} // Use a more stable key instead of Math.random()
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="page-container">
      <Header />
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};

export default Services;
