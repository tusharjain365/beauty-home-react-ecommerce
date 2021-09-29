import styled from "styled-components";
import {FaSquare, FaBars} from 'react-icons/fa';
import {useFilterContext} from '../contexts/filterContext';

const Sort = ()=>{
    const {filterProducts,gridView, setGrid, setList,sort,applySort} = useFilterContext();
    return(
        <Container>
            <div>
                <button className={gridView ?'active': null} onClick = {setGrid}><FaSquare/></button>
                <button className={!gridView ? 'active' : null} onClick = {setList}><FaBars/></button>
            </div>
            <h4>Total Products: <span>{filterProducts.length}</span></h4>
            <div className="sort-price">
                <form>
                    <label htmlFor="sort">Sort By</label>
                    <select name="sort" id="sort" value={sort} onChange={applySort} >
                        <option value="price-low">Price (low to high)</option>
                        <option value="price-high">Price (high to low)</option>
                        <option value="name-a">Name (A-Z)</option>
                        <option value="name-z">Name (Z-A)</option>
                    </select>
                </form> 
            </div>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:.9rem;
    h4 {
        color:var(--clr-h);
    }
    .active {
        background :var(--clr-dark);
        color:white;
    }
    form {
        display:grid;
        gap:.2rem;
    }
    button {
        color:var(--clr-dark);
        cursor:pointer;
        margin:0 .2rem;
        padding:.15rem .25rem;
        border:1px solid var(--clr-h);
    }
    span {
        color:var(--clr-light);
    }
    @media (min-width:800px) {
       form {
           grid-template-columns:70px auto;
       }
    }
`

export default Sort;