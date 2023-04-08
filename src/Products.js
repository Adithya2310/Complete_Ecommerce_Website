import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { useProviderValue } from "./context/ProductContext";
import { useFilterContext } from "./context/FilterContext";

const Products = () => {

  const {isLoading}=useProviderValue();
  // console.log("product data =>",data);


  // for fetching the filtered product list from filter context
  const {filtered_products,gridView}=useFilterContext();

  console.log("filtered product data",filtered_products);
  if(isLoading)
  return <p>isLoading...</p>

  return <Wrapper>
    <div className="container grid grid-filter-column">
      <div>
        <FilterSection />
      </div>
      <section className="product-view--sort">
      <div className="sort-filter">
        <Sort />
      </div>
      <div className="main-product">
        <ProductList products={filtered_products} gridView={gridView}/>
      </div>
      </section>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
