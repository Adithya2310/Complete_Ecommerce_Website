import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import styled from 'styled-components';
import {FaCheck} from "react-icons/fa";
import FormatPrice from '../Helper/FormatPrice';
import {Button} from "../styles/Button"


const FilterSection = () => {
  const {filter:{text,colors:color,category:Cat,price,minPrice,maxPrice},filterValue,all_products,clearFilter}=useFilterContext();
  console.log(all_products);

  // to function to fetch all the categories in a specific label
  const getValues=(products,property)=>{
    let productTypes=products.map((curElem)=>{
      return curElem[property]
    });
    if(property==="colors"){
      productTypes=productTypes.flat();
    }
    return ["All",...new Set(productTypes)];
  }

  // to get the categories
  const category=getValues(all_products,"category");
  // to get the company
  const company=getValues(all_products,"company");
  // to get the colors
  const colors=getValues(all_products,"colors");
  console.log("now",colors);

  console.log("search text in filterContext",text);
  return (
    <Wrapper>
      <div className="filter-search">
        <form action="" onSubmit={(e)=>e.preventdefault}>
          <input type="text" name="text" placeholder="SEARCH" value={text} onChange={filterValue} />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
        {category.map((curCategory,index)=>{
            return <button
            key={index}
            className={(curCategory!==Cat)?'':'active'}
            type="button"
            name="category"
            value={curCategory}
            onClick={filterValue}
            >
            {curCategory}
            </button>
            
        })}
        </div>
      </div>
      <div className="filter-company">
        <h3>
          Company
        </h3>
        <form action="#">
          <select name="company" id="company" className='filter-company--select' onClick={filterValue}>
            {
              company.map((curCompany,index)=>{
                return <option name="company" value={curCompany} key={index}>{curCompany}</option> 
              })
            }
          </select>
        </form>
      </div>
      <div className="filter-colors color">
        <h3>Color</h3>
        <div className="filter-color-style">
          {
            colors.map((curColor)=>{
              if(curColor==="All"){
              return <button
              type="button"
              className="color-all--style"
              name="colors"
              style={{
                backgroundColor:curColor
              }}
              value={curColor}
              onClick={filterValue}
              >All
              </button>
              }
              else{
                return <button
                type="button"
                className={(curColor!==color)?'btnStyle':'btnStyle active'}
                name="colors"
                style={{
                  backgroundColor:curColor
                }}
                value={curColor}
                onClick={filterValue}
              >
              {(curColor===color)?<FaCheck className='checkStyle'/>:null}
              </button>
              }
            })
          }
        </div>
      </div>
      <div className="filter-price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price/100} />
        </p>
        <input 
        type="range" 
        id="price" 
        value={price} 
        name="price"
        max={maxPrice} 
        min={minPrice}
        onChange={filterValue}></input>
      </div>
      <div className="filter-clear">
        <Button className='btn' onClick={clearFilter}>Clear Filter</Button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter-price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;


export default FilterSection