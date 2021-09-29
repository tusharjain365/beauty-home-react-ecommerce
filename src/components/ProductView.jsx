import GridView from './GridView';
import { useFilterContext } from '../contexts/filterContext';
import ListView from './ListView';

const ProductView = ()=>{
    const {filterProducts, gridView} = useFilterContext();

    if(filterProducts.length === 0) {
        return <h1>Sorry , no products match </h1>
    }
    if(!gridView) {
        return <ListView products={filterProducts}/>
    }

    return(
        <GridView products = {filterProducts}/>
    )
}

export default ProductView;