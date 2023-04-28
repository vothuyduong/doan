import request from "@/static/request.js";

export default {
    save(data) {
        return request({
            url: "http://localhost:5000/api/donation-form/save",
            method: "post",
            data
        }); 
    },
};