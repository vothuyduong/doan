<template>
    <div class="container-fluid">
        <div class="row">

            <div class="d-sm-block col-sm-2 bg-dark text-white" style="height: 100vh;">
                <div class="d-none d-sm-block my-4">
                    <h5 class="text-justify">TỦ QUẦN ÁO 0 ĐỒNG</h5>
                </div>

                <div class="d-sm-block left-bar sidebar" id="nav-admin">
                    <ul>
                        <li>
                            <router-link to="/quanly"><i class="fa-solid fa-house"></i>  Trang chủ</router-link> 
                        </li>
                        <li>
                            <router-link to="/quanly/danhmuc"><i class="fa-solid fa-bars"></i>  Danh mục </router-link>
                        </li>
                        <li>
                            <router-link to="/quanly/kichthuoc"><i class="fa-solid fa-barcode"></i>  Kích thước</router-link> 
                        </li>
                        <li>
                            <router-link to="/quanly/sanpham"><i class="fa-sharp fa-solid fa-shirt"></i> Sản phẩm</router-link>
                        </li>
                        <li>
                            <router-link to="/quanly/gia"><i class="fa-solid fa-money-check-dollar"></i>  Giá</router-link>
                        </li>
                        <li>
                            <router-link to=""><i class="fa-solid fa-user"></i> Khách hàng</router-link>
                        </li>
                        <li>
                            <router-link to=""><i class="fa-solid fa-money-bill"></i> Đơn quyên góp</router-link>
                        </li>
                        <li>
                            <router-link to=""><i class="fa-regular fa-money-bill-wheat"></i> Hóa đơn</router-link>
                        </li>
                        <li>
                            <router-link to=""><i class="fa-solid fa-user"></i> Chi tiết hóa đơn</router-link>
                        </li>
                        <li>
                            <router-link to=""><i class="fa-solid fa-user"></i> Tình nguyện viên</router-link>
                        </li>
                        <li>
                            <a href="#"><i class="fa-solid fa-envelope"></i> Tổ chức</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa-solid fa-envelope"></i> Đơn nhu cầu</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa-solid fa-envelope"></i> Đơn trao tặng</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa-solid fa-envelope"></i> Chi tiết đơn trao tặng</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="body-container col-12 col-sm-10 px-sm-0 mt-0">
                <!--header phone-->
                <div class="row bg-dark text-white p-2 bg-sm-danger d-sm-none">
                    <div class="col-1">
                        <i class="fa-solid fa-bars" @click="displaynav"></i>
                    </div>
                    <div class="col-10 d-flex justify-content-center align-items-center">
                        TỦ QUẦN ÁO 0 ĐỒNG
                    </div>
                    <div class="col-1">
                        <i class="fa-solid fa-user"></i>
                    </div>
                </div>
                <!--header phone-->

                <!--header computer-->
                <div class="d-none d-sm-flex justify-content-sm-between mb-2 bg-white p-2 shadow">
                    <div class="search-input">
                        <div class="input-group">
                            <div class="form-outline">
                                <input type="search" id="form1" class="form-control" placeholder="Tìm kiếm..."/>
                            </div>
                            <button type="button" class="btn btn-dark">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <div class="admin-infor">
                        <i class="fa-solid fa-bell px-2"></i>
                        <i class="fa-solid fa-envelope px-2"></i> | 
                        <img src="../assets/logo.png" alt="" class="rounded-circle"/>
                        <li class="nav-item dropdown" style="display: inline-block;">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Thông tin cá nhân</a></li>
                                <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
                            </ul>
                        </li>
                    </div>     
                </div>
                <!--header computer-->

                <router-view />

            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        
    },
    data() {
        return {
            
        };
    },
    methods: {
       
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
    padding-bottom: 15px;
    padding-top: 15px;
    border-bottom: 1px solid white;
    display: block;
}

#nav-admin ul li a {
    color: white;
    text-decoration: none;
    display: block;
}

#nav-admin ul li:hover{
    background-color: white;
    color: black;
}
#nav-admin ul li:hover a{
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

img, svg, .imgProductDetail {
    width: 150px;
    height: 150px;
    margin-right: 20px;
}

.form-label {
    font-weight: 600;
}
</style>