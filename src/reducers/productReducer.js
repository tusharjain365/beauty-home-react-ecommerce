import { SIDEBAR_CLOSE, SIDEBAR_OPEN, FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_SINGLE_PRODUCT_BEGIN, FETCH_SINGLE_PRODUCT_SUCCESS, FETCH_SINGLE_PRODUCT_ERROR} from "../actions";

const productReducer = (state , action)=>{
    switch (action.type) {
        case SIDEBAR_OPEN:
            return {...state, isSidebarOpen:true }
        case SIDEBAR_CLOSE:
            return {...state, isSidebarOpen:false}
        case FETCH_PRODUCTS_BEGIN:
            return {...state, loadingProducts:true}
        case FETCH_PRODUCTS_SUCCESS:
            const featureProducts = action.payload.filter((product)=> product.featured === true);
            return {
                ...state,
                loadingProducts:false,
                products : action.payload,
                featureProducts,
            }
        case FETCH_PRODUCTS_ERROR:
            return {...state, loadingProducts:false, errorProducts:true}


        case FETCH_SINGLE_PRODUCT_BEGIN:
            return {...state, loadingSingleProduct:true, errorSingleProduct:false }
        case FETCH_SINGLE_PRODUCT_SUCCESS:
            return {...state, 
                loadingSingleProduct:false,
                singleProduct:action.payload,
            }
        case FETCH_SINGLE_PRODUCT_ERROR:
            return {...state,loadingSingleProduct:false, errorSingleProduct:true }
        default:
            return state;
    }
}

export default productReducer;