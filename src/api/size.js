import request from "@/static/request.js";

export default {
    getAll() {
        return request({
            url: "http://localhost:5000/api/size",
            method: "get"
        }); 
    },
    getDetail(param) {
        return request({
            url: "http://localhost:5000/api/size/info",
            method: "get",
            params: param
        }); 
    },
    save(data) {
        return request({
            url: "http://localhost:5000/api/size/save",
            method: "post",
            data
        }); 
    },
    deleteSize(param) {
        return request({
            url: "http://localhost:5000/api/size/delete",
            method: "delete",
            params: param
        }); 
    }
};