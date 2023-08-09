//define all the app level states and define actions to make he changes to the state
export const initialState = {
    cart: [],

}

//Selector
const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
        return {
            ...state, 
            cart: [...state.cart, action.item]
        }
    }
}

export default reducer