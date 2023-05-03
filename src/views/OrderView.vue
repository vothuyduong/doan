<template>
    <div class="container">
        <div class="navbar">
            <div class="logo">
                <img src="../assets/logo.png" alt="" width="125px" />
            </div>
            <nav>
                <ul>
                    <li><router-link :to="{ name: 'home' }">Trang chủ</router-link></li>
                    <li>
                        <router-link :to="{ name: 'product' }">Sản phẩm</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'about' }">Về chúng tôi</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'donation' }">Quyên góp</router-link>
                    </li>
                    <li v-if="this.username">
                        <div class="dropdown">
                            <a class="dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                {{ this.username }}
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Thông tin cá nhân</a>
                                <a class="dropdown-item" href="#" @click="logout">Đăng xuất</a>
                            </div>
                        </div>
                    </li>
                    <li v-if="!this.username"><router-link :to="{ name: 'login' }">Đăng nhập</router-link></li>
                    <li> <router-link :to="{ name: 'cart' }"><img src="../assets/cart.png" alt="" width="30px"
                                height="30px" /></router-link>({{ this.quantityCart }})</li>
                </ul>
            </nav>
        </div>
    </div>

    <div class="container-title" style="margin-top: 20px;">
        <center>
            <h3>ĐẶT HÀNG</h3>
        </center>
    </div>

    <div class="small-container cart-page" style="min-height: 400px;">
        <div class="container-info">
            <div class="row">
                <div class="col-6">
                    <div class="mb-3 mt-3">
                        <label for="name" class="form-label">Tên người nhận:</label>
                        <input type="text" class="form-control" id="name" v-model="orderInfo.takeCustomer">
                    </div>
                </div>
                <div class="col-6">
                    <div class="mb-3 mt-3">
                        <label for="phone" class="form-label">Số điện thoại:</label>
                        <input type="text" class="form-control" id="phone" v-model="orderInfo.phoneCustomer">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="mb-3 mt-3">
                    <label for="address" class="form-label">Địa chỉ:</label>
                    <input type="text" class="form-control" id="address" v-model="orderInfo.takeAddress">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container-product">
                <label for="product" class="form-label">Sản phẩm:</label>
                <table>
                    <tr>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>
                    <tr v-for="(item, index) in orderInfo.detail" :key="index">
                        <td>
                            <div class="cart-info">
                                <img :src="('data:image/jpeg;base64,' + item.base64)" alt="" />
                                <div>
                                    <p>{{ item.nameProduct }}</p>
                                    <small>Giá: {{ costCurrency(item.price) }}</small><br />
                                </div>
                            </div>
                        </td>
                        <td>
                            <input type="text" :value="item.quantity" style="width: 60px;" />
                        </td>
                        <td>{{ costCurrency(item.intoMoney) }}</td>
                    </tr>
                </table>
                <div class="total-price">
                    <table>
                        <tr>
                            <td>Tổng cộng</td>
                            <td>{{ costCurrency(orderInfo.totalMoney) }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container-payment">
                <label for="product" class="form-label">Phương thức thanh toán:</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="payment" value="Tiền mặt" id="genkin" v-model="orderInfo.paymentMethod">
                    <label class="form-check-label" for="genkin">
                        Tiền mặt
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="payment" value="Chuyển khoản" id="nganhang" v-model="orderInfo.paymentMethod">
                    <label class="form-check-label" for="nganhang">
                        Chuyển khoản
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container-memo" style="margin-top: 10px; margin-bottom: 20px;">
                <label for="comment" class="form-label">Ghi chú:</label>
                <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-7"></div>
            <div class="col-5">
                <router-link class="btn" :to="{ name: 'home' }">Hủy &#8594;</router-link>
                <a class="btn" href="#" style="margin-left: 20px;" @click="save()">Đặt hàng</a>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col-1">
                    <h3>Địa chỉ</h3>
                    <p>15 Hoàng Văn Thái</p>
                    <div class="app-logo">
                        <img src="" alt="" />
                    </div>
                </div>
                <div class="footer-col-3">
                    <h3>Về chúng tôi</h3>
                    <ul>
                        <li>Giới thiệu</li>
                        <li>Sản phảm</li>
                        <li>Tin tức</li>
                        <li>Liên hệ</li>
                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3 style="margin-left: -70px">Liên hệ</h3>
                    <ul>
                        <li>Facebook: Tam An</li>
                        <li>Sđt:012345678</li>
                        <li>Zalo: 0123</li>
                        <li>Gặp chị An</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import cart from '@/api/cart.js'
import order from '@/api/order.js'
const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })

export default {
    data() {
        return {
            username: '',
            displaynone: false,
            quantityCart: '0',
            orderInfo: {
                "takeCustomer": "",
                "takeAddress": "",
                "phoneCustomer": "",
                "paymentMethod": "Chuyển khoản",
                "totalMoney": 0,
                "detail": []
            }
        }
    },
    created() {
        this.getUsername();
        this.getQuantity();
        this.getDetail();
    },
    methods: {
        getUsername() {
            this.username = localStorage.getItem("username");
        },
        displaynav() {
            this.displaynone = !this.displaynone;
        },
        logout() {
            localStorage.removeItem("jwt");
            localStorage.removeItem("username");
            this.username = '';
        },
        async getQuantity() {
            this.quantityCart = 0;
            if (this.username !== '') {
                let rs = await cart.getQuantity();
                this.quantityCart = rs.data;
            }
        },
        async getDetail() {
            let res = await order.getAll();
            let orderDe = res.data;
            this.orderInfo.takeCustomer = orderDe.takeCustomer;
            this.orderInfo.phoneCustomer = orderDe.phoneCustomer;
            this.orderInfo.takeAddress = orderDe.takeAddress;
            this.orderInfo.totalMoney = orderDe.totalMoney;
            this.orderInfo.paymentMethod = orderDe.paymentMethod;
            this.orderInfo.detail = orderDe.detail;
            console.log(this.orderInfo);
        },
        costCurrency(pri) {
            return formatter.format(pri);
        }, 
        async save() {
            if(this.orderInfo.paymentMethod === '') {
                alert('Thêm phương thức thanh toán!');
                return;
            }
            let res = await order.save(this.orderInfo);
            if(res.status === 400 && res.message === 'quantity.product.not.enough') {
                alert('Số lượng sản phẩm trong kho không đủ. Đặt hàng thất bại!');
                return;
            }
            if(res.status === 200) {
                this.quantityCart = 0;
                alert('Đặt hàng thành công!');
                return;
            } else {
                alert('Đặt hàng thất bại');
            }
        }
    },
}
</script>
  
<style scoped>
.mar-10 {
    margin-top: 50px;
}

.logo img {
    width: 125px;
}

nav img {
    width: 30px;
    height: 30px;
}

.navbar {
    display: flex;
    align-items: center;
    padding: 20px;
}

nav {
    flex: 1;
    text-align: right;
}

nav ul {
    display: inline-block;
    list-style-type: none;
}

nav ul li {
    display: inline-block;
    margin-right: 20px;
}

a {
    text-decoration: none;
    color: #555;
}

p {
    color: #555;
}

.container {
    max-width: 1300px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}

.row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}

.col-2 {
    flex-basis: 50%;
    min-width: 300px;
}

.col-2 img {
    max-width: 100%;
    padding: 50px 0;
}

.col-2 h1 {
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
}

.btn {
    display: inline-block;
    background: #7ed957;
    color: #fff;
    padding: 8px 30px;
    margin: 30px 0;
    border-radius: 30px;
    transition: 0.5s;
}

.btn:hover {
    background: #ff523b;
}

.header {
    background: radial-gradient(#fff, #ffd6d6);
}

.header .row {
    margin-top: 70px;
}

.categories {
    margin: 70px 0;
}

.col-3 {
    flex-basis: 30%;
    min-width: 250px;
    margin-bottom: 30px;
}

.col-3 img {
    width: 100%;
}

.small-container {
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 5px #e9ecef;
    ;
}

.col-4 {
    flex-basis: 25%;
    padding: 10px;
    min-width: 200px;
    margin-bottom: 50px;
    transition: transform 0.5s;
}

.col-4 img {
    width: 100%;
}

.title {
    text-align: center;
    margin: 0 auto 80px;
    position: relative;
    line-height: 60px;
    color: #555;
}

.title::after {
    content: "";
    background: #7ed957;
    width: 80px;
    height: 5px;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

h4 {
    color: #555;
    font-weight: normal;
}

.col-4 p {
    font-size: 14px;
}

.offer {
    background: radial-gradient(#fff, #ffd6d6);
    margin-top: 80px;
    padding: 30px 0;
}

.col-2 .offer-img {
    padding: 50px;
}

small {
    color: #555;
}

.testimonial {
    padding-top: 100px;
}

.testimonial .col-3 {
    text-align: center;
    padding: 40px 20px;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.5s;
}

.testimonial .col-3 img {
    width: 50px;
    margin-top: 20px;
    border-radius: 50%;
}

.testimonial .col-3:hover {
    transform: translateY(-10px);
}

.col-3 p {
    font-size: 12px;
    margin: 12px 0;
    color: #777;
}

.testimonial .col-3 h3 {
    font-weight: 600;
    color: #555;
    font-size: 16px;
}

.footer {
    background: #000;
    color: #8a8a8a;
    font-size: 14px;
    padding: 60px 0 20px;
}

.footer p {
    color: #8a8a8a;
}

.footer h3 {
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
}

.footer-col-1,
.footer-col-2,
.footer-col-3,
.footer-col-4 {
    min-width: 250px;
    margin-bottom: 20px;
}

.footer-col-1 {
    flex-basis: 30%;
    text-align: center;
}

.footer-col-2 {
    flex: 1;
    text-align: inherit;
}

.footer-col-2 img {
    width: 180px;
    margin-bottom: 20px;
}

.footer-col-3,
.footer-col-4 {
    flex-basis: 12%;
    text-align: inherit;
}

ul {
    list-style-type: none;
}

.footer hr {
    border: none;
    background: #b5b5b5;
    height: 1px;
    margin: 20px 0;
}

.row-2 {
    justify-content: space-between;
    margin: 100px auto 50px;
}

select {
    border: 1px solid #7ed957;
    padding: 5px;
}

select:focus {
    outline: none;
}

.page-btn {
    margin: 0 auto 80px;
}

.page-btn span {
    display: inline-block;
    border: 1px solid #7ed957;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}

.page-btn span:hover {
    background: #7ed957;
    color: #fff;
}

.single-product {
    margin-top: 80px;
}

.single-product .col-2 img {
    padding: 0;
}

.single-product .col-2 {
    padding: 20px;
}

.single-product h4 {
    margin: 20px 0;
    font-size: 22px;
    font-weight: bold;
}

.single-product select {
    display: block;
    padding: 10px;
    margin-top: 20px;
}

.single-product input {
    width: 50px;
    height: 40px;
    padding-left: 10px;
    font-size: 20px;
    margin-right: 10px;
    border: 1px solid;
}

.cart-page {
    margin: 80px auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

.cart-info {
    display: flex;
    flex-wrap: wrap;
}

th {
    text-align: left;
    padding: 5px;
    color: #fff;
    background: #7ed957;
    font-weight: normal;
}

td {
    padding: 10px 5px;
}

td input {
    width: 40px;
    height: 30px;
    padding: 5px;
}

td a {
    color: #7ed957;
    font-size: 12px;
}

td img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
}

.total-price {
    display: flex;
    justify-content: flex-end;
}

.total-price table {
    border-top: 3px solid #7ed957;
    width: 100%;
    max-width: 400px;
}

td:last-child {
    text-align: right;
}

th:last-child {
    text-align: right;
}
</style>