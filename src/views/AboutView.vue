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
                        <router-link :to="{ name: 'about' }" class="mau-chon">Về chúng tôi</router-link>
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
    </div>

    <div class="small-container" style="margin-bottom: 20px;">
        <div class="title-2">
            <h2 style="margin: 50px 0px;">Khi bạn đến với chúng tôi, bạn cần phải chú ý?</h2>
        </div>
        <div class="row">
            <p><b><u>1. Những lưu ý về sản phẩm quyên góp:</u></b></p>
            <p>- Tâm An ưu tiên quần áo từ 18-45 tuổi, đa dạng màu sắc và chất liệu.</p>
            <p>- Quần áo phải có nhãn hiệu, thuộc danh mục định giá sản phẩm trên website với số lượng không hạn chế.</p>
            <p>- Quần áo không quá cũ, không rách, sờn, tuột chỉ, không có vết ố, không bị lem màu, không hư khóa, không đứt,
                thiếu cúc...</p>
            <p>- Ngoài quần áo Tâm An còn có thể nhận các sản phẩm khác nếu bạn cần Tâm An xử lý chúng.</p>

            <p><b><u>2. Tiến trình hoàn trả trong trường hợp quần áo không đủ tiêu chuẩn:</u></b></p>
            <p>- Giai đoạn 1: THÔNG TIN - Tâm An sẽ thông tin đến bạn về tình trạng của sản phẩm không đủ tiêu chuẩn qua
                tin nhắn.</p>
            <p>- Giai đoạn 2: XÁC NHẬN - Khách hàng vui lòng phản hồi tin nhắn sẽ nhận hàng hoặc từ chối nhận hàng.</p>
            <p>- Giai đoạn 3 : HOÀN TRẢ:</p>
            <p>+ Cách 1: Khách hàng tự đến lấy tại địa chỉ 15 Phạm Như Xương.</p>
            <p>+ Cách 2: Sau khi xác nhận sẽ nhận hoàn trả, Tâm An sẽ cử cộng tác viên giao đến cho khách hàng.</p>

            <p>Lưu ý: đối với sản phẩm hoàn trả, trong vòng thời gian 1 tuần nếu khách hàng không đến nhận hoặc không xác
                nhận hoàn trả, Tâm An sẽ không giải quyết.</p>
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

export default {
    data() {
        return {
            username: '',
            displaynone: false,
        }
    },
    created() {
        this.getUsername();
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
    }
};
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

.size-image {
    width: 300px;
    height: 350px;
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

.col-6 h1 {
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
}

.btn {
    display: inline-block;
    background: #ff523b;
    color: #fff;
    padding: 8px 30px;
    margin: 30px 0;
    border-radius: 30px;
    transition: 0.5s;
}

.mau-chon {
    color: #ff523b;
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

.coll-4 {
    flex-basis: 25%;
    padding: 10px;
    min-width: 200px;
    margin-bottom: 50px;
    transition: transform 0.5s;
}

.coll-4 img {
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

h4 {
    color: #555;
    font-weight: normal;
}

.coll-4 p {
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
    border: 1px solid #ff523b;
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
    border: 1px solid #ff523b;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}

.page-btn span:hover {
    background: #ff523b;
    color: #fff;
}

.single-product {
    margin-top: 80px;
}

.single-product .col-2 img {
    padding: 0;
    width: 100%;
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
    border: 1px solid #ff523b;
}

input:focus {
    outline: none;
}</style>