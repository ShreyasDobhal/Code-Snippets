const initState = {
    products: [
        {id:1,title:'Laptop',body:'Nice cheap laptop'}
    ]
}

const rootReducer = (state=initState,action) => {
    console.log(action);

    if (action.type==='DELETE_PRODUCT') {
        let newProducts = state.products.filter(product => {
            return product.id !== action.id;
        });
        return {
            ...state,
            products: newProducts
        }
    }
    return state;
}

export default rootReducer;
