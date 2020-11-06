export const UserModule = {
    namespaced: true,
    state: {
        user: null
    },
// mutations são funções que afetam o state
    mutations: {
        SET_USER (state, user) {
            state.user = user;
        }
    },
// actions são funções que você chama ao longo da aplicação que, por sua vez, chamam mutations
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        }
    },
}