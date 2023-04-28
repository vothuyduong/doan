<template>
  <div class="header">
    <div class="container">
      <div class="navbar">
        <div class="logo">
          <img src="../assets/logo.png" alt="" width="125px" />
        </div>
        <nav>
          <ul>
            <li><router-link :to="{ name: 'home' }" class="mau-chon">Trang chủ</router-link></li>
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
          </ul>
          <router-link :to="{ name: 'cart' }"><img src="../assets/cart.png" alt="" width="30px"
              height="30px" /></router-link>
        </nav>
      </div>
      <div class="row">
        <div class="col-2">
          <h1>
            Hãy đến với chúng tôi<br />
            <span class="mau-chon"> Tủ quần áo TÂM AN</span>
          </h1>
          <p>
            Tuy ở đây toàn đồ đã qua sử dụng nhưng chúng tôi đảm bảo chất lượng
            quần áo vẫn đảm bảo: <br />
            Sạch, đẹp và thời trang.
          </p>
          <router-link class="btn" :to="{ name: 'product' }">Xem ngay &#8594;</router-link>
        </div>
        <div class="col-2">
          <img src="../assets/slide2.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div class="testimonial">
    <div class="small-container">
      <h2 class="title">Hoạt động chính</h2>
      <div class="row">
        <div class="col-3">
          <h3>THU GOM QUẦN ÁO</h3>
          <img src="../assets/logo.png" alt="" />
          <p>
            Khi nhận được đơn quyên góp, tổ chức sẽ cử cộng tác viên đến địa
            điểm lấy đồ.
          </p>
        </div>
        <div class="col-3">
          <h3>GÂY QUỸ</h3>
          <img src="../assets/logo.png" alt="" />
          <p>Quần áo sau khi thu gom, làm sạch sẽ đem lên website bán.</p>
        </div>
        <div class="col-3">
          <h3>TRAO TẶNG</h3>
          <img src="../assets/logo.png" alt="" />
          <p>
            Tổ chức sẽ tiếp nhận thông tin người cần nhận và trao tận tay đến
            họ.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="small-container">
    <h2 class="title">Sản phẩm nổi bật</h2>
    <div class="row">
      <div class="col-4" v-for="(pro, index) in productNews" :key="index">
        <div v-if="index <= 3" @click="getDetail(pro.idProduct)">
          <img :src="('data:image/jpeg;base64,' + pro.base64)" alt="" style="width: 260px; height: 300px;" />
          <div style="text-align: center;">
            <h4>{{ pro.nameProduct }}</h4>
            <p class="mau-chon">{{ pro.priceMin }} - {{ pro.priceMax }} VND</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="small-container">
    <h2 class="title">Sản phẩm mới nhất</h2>
    <div class="row">
      <div class="col-4" v-for="(pro, index) in productNews" :key="index">
        <div @click="getDetail(pro.idProduct)">
          <img :src="('data:image/jpeg;base64,' + pro.base64)" alt="" style="width: 260px; height: 300px;" />
          <div style="text-align: center;">
            <h4>{{ pro.nameProduct }}</h4>
            <p class="mau-chon">{{ pro.priceMin }} - {{ pro.priceMax }} VND</p>
          </div>
        </div>
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
import product from '@/api/product.js'
import router from '@/router/index.js'

export default {
  data() {
    return {
      username: '',
      displaynone: false,
      productNews: []
    }
  },
  created() {
    this.getUsername();
    this.getProductNew();
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
    async getProductNew() {
      let response = await product.getProductNew();
      this.productNews = response.data;
    },
    getDetail(idProduct) {
      router.push({ name: 'product-detail', params: { id: idProduct } });
    }
  }
};
</script>

<style scoped>
.add-nav {
  display: none;
}

.container {
  max-width: 1300px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
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

nav ul li a {
  text-decoration: none;
  color: #555;
}

p {
  color: #555;
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

.logo img {
  width: 125px;
}

nav img {
  width: 30px;
  height: 30px;
}

.header {
  background: radial-gradient(#fff, #dcffd6);
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
  max-width: 1200px;
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
  background: #ff523b;
  width: 80px;
  height: 5px;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.mau-chon {
  color: #ff523b;
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
  margin-bottom: 30px;
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
  color: #ff523b;
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
</style>