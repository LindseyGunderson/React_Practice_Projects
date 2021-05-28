const reducer = (state, action) => {

    // clear items function
    if(action.type === 'CLEAR_CART'){

        return {...state,cart: []}

    }

    // remove single item from the cart
    if(action.type === 'REMOVE_ITEM'){

        return {...state, cart: state.cart.filter((cartItem)=> cartItem.id !== action.payload)}

    }

    // increase number of the item in the cart
    if(action.type === 'INCREASE_ITEM'){

        let tempCart = state.cart.map((cartItem)=>{

            if(cartItem.id === action.payload){
                
                return {...cartItem, amount: cartItem.amount + 1};

            }

            return cartItem

        })

        return {...state, cart: tempCart}

    }

    // decrease number of items in the cart
    if(action.type === 'DECREASE_ITEM'){

        let tempCart = state.cart.map((cartItem)=>{

            if(cartItem.id === action.payload){
                
                return {...cartItem, amount: cartItem.amount - 1};

            }

            return cartItem

        }).filter((cartItem) => cartItem.amount !== 0)

        return {...state, cart: tempCart}
    }

    // update totals for the navbar and total price when cart is updated
    if(action.type === 'GET_TOTALS'){

        let { total, amount } = state.cart.reduce((cartTotal, cartItem)=> {

            // total of items to add the the navbar
            const {price, amount} = cartItem;

            // price calculation for each item in the cart
            const itemTotal = price * amount;

            cartTotal.total += itemTotal;
            cartTotal.amount += amount;

            return cartTotal

        }, {
            total: 0,
            amount: 0
        })

        // parse the total and to 2 decimal places
        total = parseFloat(total.toFixed(2));

        return {...state, total, amount}
    }


    return state;

}

export default reducer;