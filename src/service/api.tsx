import api from "./axios";

const API = {
    createAccount: () => {
        return api.post('/auth/signup')
    },
    checkAccount: () => {
        return api.post('/auth/signup')
    },
    getAllProduct: () => {
        return api.get('/products')
    },
    getAllHistoryBuy: () => {
        return api.get('/historyBuy')
    },
    getProfileAccount: () => {
        return api.get('/profileAccount')
    },
}

export default API;