<template>
    <div class="content">
        <div class="content-title my-sm-4 mx-sm-4 my-3">
            <h4>Thống kê</h4>
        </div>

        <div class="content-main mx-sm-4" style="width: 1100px; margin-left: 30px;">
            <div class="d-sm-flex justify-content-sm-between">
                <div class="content-o p-4 bg-white rounded shadow mb-3 mb-sm-0 row">
                    <div class="text-cont col-12">
                        <p>Đơn quyên góp</p>
                        <center><p>{{ this.donation }}</p></center>
                    </div>
                </div>

                <div class="content-o p-4 bg-white rounded shadow mb-3 mb-sm-0 row">
                    <div class="text-cont col-12">
                        <p>Khách hàng</p>
                        <center><p>{{ this.customer }}</p></center>
                    </div>
                </div>

                <div class="content-o p-4 bg-white rounded shadow mb-3 mb-sm-0 row">
                    <div class="text-cont col-12">
                        <p>Loại sản phẩm</p>
                        <center><p>{{ this.typePro }}</p></center>
                    </div>
                </div>

                <div class="content-o p-4 bg-white rounded shadow mb-3 mb-sm-0 row">
                    <div class="text-cont col-12">
                        <p>Số lượng sản phẩm</p>
                        <center><p>{{ this.product }}</p></center>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
    
<script>
import customer from '@/api/customer.js'
import dona from '@/api/donation.js'
import product from '@/api/product.js'
import price from '@/api/price.js'

export default {

    data() {
        return {
            "customer": "",
            "donation": "",
            "typePro": "",
            "product": ""
        };
    },
    created() {
        this.countCustomer();
        this.countDona();
        this.countPro();
        this.countPri();
    },
    methods: {
        async countCustomer() {
            let res = await customer.getCount();
            this.customer = res.data;
        },
        async countDona() {
            let res = await dona.countDo();
            this.donation = res.data;
        },
        async countPro() {
            let res = await product.getCount();
            this.typePro = res.data;
        },
        async countPri() {
            let res = await price.countPri();
            this.product = res.data;
        }
    },
};
</script>
    
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#nav-admin ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;
}

#nav-admin ul li {
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 1px solid white;
    display: block;
}

#nav-admin ul li a {
    color: white;
    text-decoration: none;
    display: block;
}

#nav-admin ul li:hover {
    background-color: white;
    color: black;
}

#nav-admin ul li:hover a {
    color: black;
}

.body-container {
    background-color: #E0E0E0;
    margin-top: 0px;
}

.displaynone {
    display: none;
}

.text-cont p {
    margin-bottom: 0px;
}

.delete-gach {
    text-decoration: none;
    color: black;
}

img.rounded-circle {
    width: 40px;
    height: 40px;
    margin-right: 5px;
}

img,
svg,
.imgProductDetail {
    width: 150px;
    height: 150px;
    margin-right: 20px;
}

.form-label {
    font-weight: 600;
}
</style>