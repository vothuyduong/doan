import request from "@/static/request.js";

export default {
    save(param) {
        return request({
            url: "http://localhost:5000/api/cart/save",
            method: "post",
            params: param
        }); 
    },
    getDetail() {
        return request({
            url: "http://localhost:5000/api/cart/detail",
            method: "get",
        }); 
    },
    delete(param) {
        return request({
            url: "http://localhost:5000/api/cart/delete-item",
            method: "delete",
            params: param
        }); 
    },
    updateQuantity(data) {
        return request({
            url: "http://localhost:5000/api/cart/update-quantity",
            method: "post",
            data
        }); 
    },
    getQuantity() {
        return request({
            url: "http://localhost:5000/api/cart/count",
            method: "get",
        }); 
    }
};