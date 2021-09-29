import styled from "styled-components";
import { useFilterContext } from "../contexts/filterContext";
import { getValues } from "../utils/functions";
import {FaCheckCircle, FaCircle} from 'react-icons/fa';

const Filter = ()=>{
    const {filters:{
        search, category, company , color, minPrice, maxPrice, price,shipping
    }, applyFilters,clearFilters, allProducts} = useFilterContext();
    let curPrice = price;

    const categories = getValues(allProducts, 'category');
    const companies = getValues(allProducts, 'company');
    const colors  = getValues(allProducts, 'colors');
    if(curPrice === -Infinity) {
        curPrice  = 0;
    }

    return (
        <Container>
            <div className="filters">
                <form onSubmit={(e)=> e.preventDefault()}>
                    <input type="text" name="search" value={search} placeholder="Search here.." autoComplete="off"  onChange={applyFilters}/>
                    {/* categories  */}
                    <div className="item">
                        <h4>Category</h4>
                        <select name="category" value={category} onChange={applyFilters}>
                            {
                                categories.map((category, idx)=> <option key={idx} value={category}>{category}</option> )
                            }
                        </select>
                    </div>
                    {/* companies */}
                    <div className="item">
                        <h4>Company</h4>
                        <select name="company" value={company} onChange={applyFilters}>
                            {
                                companies.map((company, idx)=> <option key={idx} value={company} >{company}</option> )
                            }
                        </select>
                    </div>
                    {/* colors */}
                    <div className="item">
                        <h4>Colors</h4>
                        <div className="colors">
                        {colors.map((c, idx)=>{

                            if(c === 'all') {
                                return <button key={idx} name='color' data-color={c} onClick={applyFilters} className={c === color ?'all active' : 'all'}>{c}</button>
                            }

                        return <button key={idx} name='color' style={{color:c}} data-color={c} onClick={applyFilters}>{color === c ? <FaCheckCircle/> : <FaCircle/>}</button>
                        }
                        )}
                        </div>
                    </div>
                    {/* price range */}
                    <div className="item">
                        <h4>Price</h4>
                        <p>₹{curPrice/10}</p>
                        <input type="range" name="price" min={minPrice} max={maxPrice} value={curPrice} onChange={applyFilters} />
                    </div>
                    {/* shipping  */}
                    <div className="item">
                        <div className="ship">
                        <label htmlFor="shipping">Free Shipping</label>
                        <input type="checkbox" name="shipping" id="shipping" onChange={applyFilters} checked={shipping} />
                        </div>
                    </div>
                    <button className="clear" onClick={clearFilters}>Clear All Filters</button>
                </form>
            </div>
        </Container>
    )
}

const Container = styled.div`
    
    h4 {
        color:var(--clr-dark-head);
        margin-left:.2rem;
    }
    p{
        margin-bottom:.2rem;
    }
    .item {
        width:300px;
        margin:.4rem 0;
    }
    .ship {
        width:140px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .all {
        text-transform:capitalize;
        color:var(--clr-light-bc);
        font-weight:bold;
    }
    .active {
        text-decoration: underline; 
        color:var(--clr-dark-head);
    }
    form{
        display:flex;
        justify-content:center;
        align-items:baseline;
        flex-direction:column;
    }
    select {
        width:100px;
    }
    .colors {
        width:150px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        text-align:center;
        svg {
            font-size:.9rem;
        }
    }
    button {
        border:50%;
        background:transparent;
        border:none;
        cursor:pointer;
    }
    input {
        border:1px solid red; 
        border-radius:4px;
        padding:.35rem 0;
        border:none;
        background:var(--clr-light-bc);
        outline:none;
        width:40%;
        line-height:1.2rem;
        padding-left:1.2rem;
    }
    input[type="range"]{
        padding:0;
    }
    input[type="checkbox"] {
        width:15px;
        cursor:pointer;
    }
    .clear {
        border:1px solid red;
        background:red;
        color:white;
        padding:.45rem .25rem;
        border-radius:var(--radius);
        margin-top:.5rem;
    }
    
    @media (min-width:962px) {
       input {
           width:100%;
       }
       .item {
           width:200px;
       }
       form {
           align-items:flex-stretch;
       }
       select, .colors {
           width:200px;
       }
    }

`

export default Filter;