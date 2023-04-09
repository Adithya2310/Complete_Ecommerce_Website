import styled from 'styled-components';
import {BsFillGridFill,BsList} from "react-icons/bs";
import { useFilterContext } from '../context/FilterContext';


const Sort = () => {

    // const [option,setOption]=useState("lowest");

    const { gridView,setGridView,setListView,filtered_products,sortingValue }=useFilterContext();

    // a function to update options to selected options


    

  return (
    <Wrapper className="sort-section">
        {/* 1st coloumns for toggle button*/}
        <div className="sorting-list--grid">
            <button className={(gridView)?"active sort-btn":"sort-btn"} onClick={setGridView}>
                <BsFillGridFill className='icon'/>
            </button>
            <button className={(!gridView)?"active sort-btn":"sort-btn"} onClick={setListView}>
                <BsList className='icon'/>
            </button>
        </div>
        {/* 2nd column for number of products */}
        <div className="product-data">
            <p>{filtered_products.length} Products Availaible</p>
        </div>
        {/* 3rd column for sorting the elemtent */}
        <div className="sort-selection">
            <form action="#">
              <label htmlFor="sort"></label>
                    <select 
                    className="sort-selection--style" 
                    name="sort" 
                    id="sort"
                    onChange={(event)=>{sortingValue(event.target.value)}}
                    >
                        <option value="lowest" className='sort-select--option'>Price(Lowest)</option>
                        <option disabled></option>
                        <option value="highest" className='sort-select--option'>Price(Highest)</option>
                        <option disabled></option>
                        <option value="ascending" className='sort-select--option'>A-Z</option>
                        <option disabled></option>
                        <option value="descending" className='sort-select--option'>Z-A</option>
                        <option disabled></option>
                    </select>
            </form>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
export default Sort