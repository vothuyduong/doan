import request from "@/static/request.js";

export default {
    getAll() {
        return request({
            url: "http://localhost:5000/api/price",
            method: "get"
        });
    },
    save(data) {
        return request({
            url: "http://localhost:5000/api/price/save",
            method: "post",
            data
        });
    },
    getInfo(param) {
        return request({
            url: "http://localhost:5000/api/price/info",
            method: "get",
            params: param
        });
    },
    delete(param) {
        return request({
            url: "http://localhost:5000/api/price/delete",
            method: "delete",
            params: param
        });
    }
};