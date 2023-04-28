import styled from "styled-components";
import { useProviderValue } from "./context/ProductContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNavigation from "./components/PageNavigation";
import { Container } from "./styles/Container";
import MyImage from "./components/MyImage";
import FormatPrice from "./Helper/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./components/Star";
import AddtoCart from "./components/AddtoCart";

const API="https://api.pujakaitem.com/api/products";


const SingleProduct= () => {

  const {is_SingleLoading,singleProduct,getSingleProduct}=useProviderValue();
  console.log(is_SingleLoading,singleProduct);

  const {id}=useParams();



  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`);
  },[]); // eslint-disable-line react-hooks/exhaustive-deps
  
  const {
    name,company,price,
    description,stock,
    stars,reviews,image}=singleProduct;

    if(is_SingleLoading){
      return <div className="page-loading">.....Loading</div>
    }

  return <Wrapper>
    <PageNavigation title={name}/>
    <Container className="container">
      <div className="grid grid-two-column">
      {/* Image data */}
        <div className="product-images">
          <MyImage img={image} />
        </div>
        {/* product data */}
        <div className="product-data">
          <h2>{name}</h2>
          <Star stars={stars} reviews={reviews}/>
          {/* <p>{stars}</p>
          <p>{reviews} reviews</p> */}
          <div style={{display:"flex"}}>
          <p className="product-data-price ">
            MRP:
          </p>
          <p className="product-data-price add-margin">
            <span><del><FormatPrice price={price/100+2500}/></del></span>
          </p>
          </div>
          <div style={{display:"flex"}}>
          <p className="product-data-price product-data-real-price">
            Deal of the Day: 
          </p>
          <p className="product-data-price product-data-real-price add-margin">
             <FormatPrice price={price/100}/> 
          </p>
          </div>
          <p>{description}</p>
          <div className="product-data-warranty">
          <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Fast Delivery</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
          </div>
          <div className="product-data-info">
            <p>Availaible:
            <span>
              {stock>0?" In Stock":" Not Availaible"}
            </span></p>
              <p>
                Brand :<span> {company} </span>
              </p>
          </div>
          {stock>0&&<AddtoCart product={singleProduct} />}
        </div>
      </div>
    </Container>
  </Wrapper>
  ;
}
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .add-margin{
      margin-left: 5px;
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    padding-top:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
