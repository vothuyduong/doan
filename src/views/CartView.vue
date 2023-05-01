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

  <div v-if="products.length > 0" class="small-container cart-page" style="min-height: 400px;">
    <table>
      <tr>
        <th>Sản phẩm</th>
        <th>Số lượng</th>
        <th>Thành tiền</th>
      </tr>
      <tr v-for="(item, index) in products" :key="index">
        <td>
          <div class="cart-info">
            <img :src="('data:image/jpeg;base64,' + item.base64)" alt="" />
            <div>
              <p>{{ item.nameProduct }}</p>
              <small>Giá: {{ costCurrency(item.price) }}</small><br />
              <a href="#" @click="del(item.idProduct, item.idSize)">Xóa</a>
            </div>
          </div>
        </td>
        <td>
          <input type="number" :value="item.quantity" style="width: 60px;"
            @change="updateQuantity(item.idProduct, item.idSize, $event)" min="1" max="100" />
        </td>
        <td>{{ costCurrency(item.price * item.quantity) }}</td>
      </tr>
    </table>

    <div class="total-price">
      <table>
        <tr>
          <td>Tổng cộng</td>
          <td>{{ costCurrency(Sum) }}</td>
        </tr>
        <tr>
          <td>
            <a class="btn" href="#" @click="saveChange()">Lưu</a>
          </td>
          <td>
            <router-link class="btn" :to="{ name: 'product' }">Đặt hàng &#8594;</router-link>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <div v-if="products.length <= 0" class="small-container cart-page" style="min-height: 500px;">
    <center>
      <h1>Giỏ hàng rỗng!</h1>
    </center>
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

const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })

export default {
  data() {
    return {
      username: '',
      displaynone: false,
      products: [],
      quantityCart: '0'
    }
  },
  created() {
    this.getUsername();
    this.getAll();
    this.getQuantity();
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
    async getAll() {
      let res = await cart.getDetail();
      this.products = res.data;
    },
    async del(idPro, idSi) {
      let con = confirm('Bạn có chắc muốn xóa?');
      console.log(idPro);
      console.log(idSi);
      if (con === true) {
        let res = await cart.delete({ idProduct: idPro, idSize: idSi });
        if (res.status === 200) {
          this.getAll();
        }
      }
    },
    updateQuantity(idPro, idSi, e) {
      let quanti = e.target.value;
      if (quanti < 1 || quanti > 100) {
        alert('Số lượng nhập không hợp lệ');
        return;
      }
      const found = this.products.find(pro => pro.idProduct === idPro && pro.idSize === idSi);
      if (found) {
        found.quantity = quanti;
      }
    },
    async saveChange() {
      let proo = this.products;
      let res = await cart.updateQuantity({ "detail": proo });
      if (res.status === 200) {
        alert('Lưu thành công!');
      } else {
        alert('Lưu thất bại!');
      }
      this.getQuantity();
    },
    async getQuantity() {
      this.quantityCart = 0;
      if (this.username !== '') {
        let rs = await cart.getQuantity();
        this.quantityCart = rs.data;
      }
    },
    costCurrency(pri) {
      return formatter.format(pri);
    }
  },
  computed: {
    Sum() {
      return this.products.reduce((Sum, pro) => pro.price * pro.quantity + Sum, 0);
    }
  }
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
  background: #563434;
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