import { ADD_TO_CART, CAL_TOTAL_AMOUNT, CLEAR_CART, REMOVE_FROM_CART, TOGGLE_AMOUNT } from "../actions";

const cartReducer = (state, action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const {id,color,items,product} = action.payload;
            const isPresent = state.cartProducts.find((p)=> p.id === id  + color);
            if(isPresent) {
               const existingProducts = state.cartProducts.map((p)=>{
                   if(p.id === id + color){ 
                        let totalItems = p.items + items;
                        if(totalItems > p.maxItems) {
                            totalItems =  p.maxItems;
                        }
                        return {...p, items:totalItems}
                   }
                   return p;
               })

               return {...state, cartProducts:existingProducts};

            }else {
                const newProduct = {
                    id: id + color,
                    name :product.name,
                    price:product.price,
                    image:product.images[0].url,
                    color,
                    items,
                    maxItems:product.stock
                }
                return {...state,cartProducts:[...state.cartProducts, newProduct]}
            };
        case REMOVE_FROM_CART:
            let products = state.cartProducts.filter((p)=> p.id !== action.payload);
            return {...state, cartProducts:products};
        case CLEAR_CART:
            return {...state, cartProducts:[]};
        case TOGGLE_AMOUNT:
            const {cid, type} = action.payload;
            let tempProducts = state.cartProducts.map((p)=>{
                if(p.id === cid) {
                    if(type === 'inc') {
                        let newItems = Math.min(p.items + 1, p.maxItems);
                        return {...p, items:newItems};
                    }
                    if(type === 'dec') {
                        let newItems = Math.max(p.items - 1, 1);
                        return {...p, items:newItems};
                    }
                }
                return p;
            })
            return {...state, cartProducts:tempProducts};
        case CAL_TOTAL_AMOUNT:
            let totalItems = 0;
            let totalPrice = 0;
            state.cartProducts.forEach(p => {
                totalItems += p.items;
                totalPrice += p.price * p.items;
            });
            return {...state, totalProducts:totalItems, totalAmount:totalPrice}
        default:
            return state;
    }
}

export default cartReducer;