import request from "@/static/request.js";

export default {
    getAll() {
        return request({
            url: "http://localhost:5000/api/order",
            method: "get"
        }); 
    },
    save(data) {
        return request({
            url: "http://localhost:5000/api/order/save",
            method: "post",
            data
        });
    },
};