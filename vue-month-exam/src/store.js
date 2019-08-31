import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: [],
        defaultList: [],
        detail: {}
    },
    mutations: {
        addCart(state, payload) {
            let Index = state.cart.findIndex(item => item.bookId == payload.values.bookId)
            if (Index >= 0) {
                return
            } else {
                state.cart.push(payload.values)
            }
            localStorage.setItem('cart', state.cart)
        },
        changeDefaultList(state, payload) {
            state.defaultList = payload
        },
        changeDetail(state, payload) {
            state.detail = payload;
            console.log(this)
            let ddd
            if (!localStorage.getItem('defaultList')) {
                ddd = state.defaultList.map((item, index) => {
                    if (item.bookId == payload.bookId) {
                        item.flag = payload.flag
                    }
                    return item
                })
            } else {
                ddd = JSON.parse(localStorage.getItem('defaultList'))
            }

            this.commit("changeDefaultList", ddd)
            localStorage.setItem('defaultList', JSON.stringify(ddd))
        }
    },
    actions: {
        getDetail() {
            axios({
                url: '/detail',
                method: 'get',
            })
        },
        getDefault_List({ commit }) {
            let defaultL = JSON.parse(localStorage.getItem('defaultList'))
            let List = []
            if (defaultL) {
                List = defaultL
            }
            if (List.length > 0) {
                console.log(List)
                commit('changeDefaultList', List)
            } else {
                axios({
                    url: "/list_default",
                    method: "get"
                }).then(res => {
                    //this.defaultList = res.data.values;
                    commit("changeDefaultList", res.data.values)

                });
            }

        }
    }
})