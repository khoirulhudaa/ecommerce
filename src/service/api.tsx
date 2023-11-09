import { authInterface } from "../utils/interfaces/authInterface";
import { requestInterface } from "../utils/interfaces/requestInterface";
import api from "./axios";

const API = {
    
    // Account Consumer
    createAccountConsumer: (body: authInterface) => {
        return api.post('/account/signup/consumer', body)
    },
    checkAccountConsumer: (body: authInterface) => {
        return api.post('/account/signin/consumer', body)
    },
    updateAccountConsumer: ({consumer_id, body} : {consumer_id: string, body: any}) => {
        return api.put(`/account/consumer/${consumer_id}`, body)
    },
    getAccountConsumerById: (consumer_id: string) => {
        return api.get(`/account/list/consumer/${consumer_id}`)
    },

    // Product
    getAllProduct: () => {
        return api.get('/product')
    },
    getProductById: (product_id: string) => {
        return api.get(`/product/Oneproduct/${product_id}`)
    },
    getProductByShopId: (shop_id: string) => {
        return api.get(`/product/shop/${shop_id}`)
    },

    // History
    getAllHistoryBuy: () => {
        return api.get('/historyBuy')
    },

    // Request
    createRequest: (body: requestInterface) => {
        return api.post('/request', body)
    },

    // Subsribe
    newSubscribe: (body: any) => {
        return api.post('/subscribe', body)
    }
}

export default API;