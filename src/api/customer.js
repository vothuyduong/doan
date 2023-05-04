import request from "@/static/request.js";

export default {
    login(data) {
        return request({
            url: "http://localhost:5000/api/login",
            method: "post",
            data
        }); 
    },
    register(data) {
        return request({
            url: "http://localhost:5000/api/register",
            method: "post",
            data
        }); 
    },
    getCount() {
        return request({
            url: "http://localhost:5000/api/customer/count",
            method: "get",
        }); 
    }
};