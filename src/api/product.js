import request from "@/static/request.js";

export default {
    getAll(param) {
        return request({
            url: "http://localhost:5000/api/product",
            method: "get",
            params: param
        });
    },
    getAllKsk() {
        return request({
            url: "http://localhost:5000/api/product/ksk",
            method: "get"
        });
    },
    save(formData) {
        return request({
            url: "http://localhost:5000/api/product/save",
            method: "post",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }); 
    },
    getDetail(param) {
        return request({
            url: "http://localhost:5000/api/product/info",
            method: "get",
            params: param
        }); 
    },
    delete(param) {
        return request({
            url: "http://localhost:5000/api/product/delete",
            method: "delete",
            params: param
        }); 
    },
    getProductNew() {
        return request({
            url: "http://localhost:5000/api/product/list-new",
            method: "get",
        });
    },
    getProductList(param) {
        return request({
            url: "http://localhost:5000/api/product/list-pro",
            method: "get",
            params: param
        }); 
    },
    getListProductLQ(param) {
        return request({
            url: "http://localhost:5000/api/product/list-lq",
            method: "get",
            params: param
        }); 
    }, 
    getDetailProduct(param) {
        return request({
            url: "http://localhost:5000/api/product/detail",
            method: "get",
            params: param
        }); 
    }
};