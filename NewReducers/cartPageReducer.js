import * as actionTypes from '../NewActions';
const initialstate = {
    Length: 0,
    Product: [],
    Price: 0,
}

export default (state = initialstate, action) => {
    switch (action.type) {
        case actionTypes.CART_PRODUCT:
            return {
                Length: action.payload.length,
                Price: action.payload.totalprice,
                Product: action.payload.product,
            }
        case "INCREASE_QUANTITY":
            let index;
            for (let i = 0; i < state.Product.length; i++) {
                if (state.Product[i]._id === action.payload.productid) {
                    index = i;
                }

            }
            let newProduct = [...state.Product];
            let amount = 0;
            newProduct[index].Quantity = newProduct[index].Quantity + 1;
            for (let i = 0; i < newProduct.length; i++) {
                amount = amount + newProduct[i].amount * newProduct[i].Quantity
            }


            return {
                ...state,
                Product: newProduct,
                Price: amount
            }

        case "DECREASE_QUANTITY":
            let amounts = 0;
            for (let i = 0; i < state.Product.length; i++) {
                if (state.Product[i]._id === action.payload.productid) {
                    index = i;

                }

            }
            newProduct = [...state.Product];
            newProduct[index].Quantity = newProduct[index].Quantity - 1;
            for (let i = 0; i < newProduct.length; i++) {
                amounts = amounts + newProduct[i].amount * newProduct[i].Quantity
            }
            return {
                ...state,
                Product: newProduct,
                Price: amounts
            }
        default:
            return state;
    }
   
}