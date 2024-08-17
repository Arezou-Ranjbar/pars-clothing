import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card";

import { CategoriesContext } from "../../context/categories-contex";

import "./category.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-w-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} products={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
