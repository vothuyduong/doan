import request from "@/static/request.js";

export default {
    getAll() {
        return request({
            url: "http://localhost:5000/api/category",
            method: "get"
        }); 
    },
    getDetail(param) {
        return request({
            url: "http://localhost:5000/api/category/info",
            method: "get",
            params: param
        }); 
    },
    save(data) {
        return request({
            url: "http://localhost:5000/api/category/save",
            method: "post",
            data
        }); 
    },
    deleteCategory(param) {
        return request({
            url: "http://localhost:5000/api/category/delete",
            method: "delete",
            params: param
        }); 
    }
};