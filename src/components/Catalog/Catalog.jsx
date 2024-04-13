import "./Catalog.css";
import { useEffect, useState } from "react";

import Product from "../Product/Product";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";

export default function Catalog() {
  const productStorage = [];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://646bafb47d3c1cae4ce42749.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const [query, setQuery] = useState("");
  const [sorting, setSorting] = useState("default");

  const onSortingChange = (event) => {
    setSorting(event.target.value);
  };

  const onChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLocaleLowerCase())
  );
  const sortProducts = (sorting, products) => {
    switch (sorting) {
      case "priceAscending":
        return [...products].sort((a, b) => String(a.price).localeCompare(String(b.price)));
      case "priceDescending":
        return [...products].sort((a, b) => String(b.price).localeCompare(String(a.price)));
      case "nameA":
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case "nameZ":
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products;
    }
  };

  const fullSorting = sortProducts(sorting, filteredProducts);
  return (
    <>
      {/* Фильтры */}
      <div className="settings section">
        <Filters sorting={sorting} onSortingChange={onSortingChange} />
        <Search query={query} onChangeQuery={onChangeQuery} />
      </div>

      {/* Catalog */}
      <div className="catalog" id="catalog">
        {fullSorting.length ? (
          fullSorting.map((product, index) => (
            <Product key={index} {...product} />
          ))
        ) : (
          <h2>По вашему запросу `{query}` ничего не найдено!</h2>
        )}
      </div>
    </>
  );
}
