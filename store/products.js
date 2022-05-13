export const state = () => ({
    products: [],
    categories: [
        { id: 0, title: 'All' },
        { id: 1, title: 'Smartphone' },
        { id: 2, title: 'Kamera' },
        { id: 3, title: 'Televisi' },
    ],
    categoryId: 0,
})

export const mutations = {
    updateCategoryId(state, categoryId) {
        state.categoryId = categoryId

    },
    updateProducts(state, products) {
        state.products = products
    }
}
export const actions = {
    updateCategoryId({ commit }, categoryId) {
        commit('updateCategoryId', categoryId)
    },
    fetchProducts({ commit }) {
        return this.$axios.$get('http://localhost:8000/products').then(response => {
            commit('updateProducts', response.products)
        })
    }
}