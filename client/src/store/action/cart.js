import { ADD_CART, REMOVE_CART } from "./types";


export const addToCart = (product) => {
    return (dispatch, getState) => {
        const cartItems = getState().cart.cartItems
        const cartItemsClone = [...cartItems];
        let isProductExist = false;
        cartItemsClone.forEach(p => {
          if(p.id == product.id) {
            p.qty++;
            isProductExist= true;
          }
        })
        if(!isProductExist) {
          cartItemsClone.push({...product, qty: 1})
        }
        dispatch({
            type: ADD_CART,
            data: {
                cartItems: cartItemsClone
            }
        });
        localStorage.setItem("cartItems", JSON.stringify(cartItemsClone))
    }

}

export const removeFromCart = (product) => {
    return (dispatch, getState) => {
            const cartItems = getState().cart.cartItems
            const cartItemsClone = [...cartItems];
            dispatch ({
                type: REMOVE_CART,
                data:  {
                    cartItems: cartItemsClone.filter(p => p.id !== product.id)
                }
            })
            localStorage.setItem("cartItems", JSON.stringify(cartItemsClone))

    }
}