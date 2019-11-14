const state = {
    account:{
        username:"",
        password:""
    }
};

const actions = {};

const mutations = {
    loginSuccess(state,account){
        state.account=account
    },
    loginOut(state,account){
        state.account=""
    }
};

export default {
    state,
    actions,
    mutations
}