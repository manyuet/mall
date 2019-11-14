const state = {
    shoppingCart: []
};

const actions = {};

const mutations = {
    setIntoShoppingCart(state, productInfos) {
        state.shoppingCart = productInfos
    }
};

export default {
    state,
    actions,
    mutations
}