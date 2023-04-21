<template>
    <div class="content">
        <div class="content-title my-sm-4 mx-sm-4 my-3">
            <h4>Thống kê</h4>
        </div>

        <div class="content-main mx-sm-4">
            <div class="d-sm-flex justify-content-sm-between">
                <div class="content-o p-4 bg-white rounded shadow mb-3 mb-sm-0 row">
                    <div class="text-cont col-10">
                        <p>Đơn quyên góp</p>
                        <p>23</p>
                    </div>
                    <div class="text-icon col-2">
                        <i class="fa-solid fa-dollar-sign fontsize-30"></i>
                    </div>
                </div>

                <div class="content-o p-4 bg-white rounded shadow mb-3 mb-sm-0 row">
                    <div class="text-cont col-10">
                        <p>Doanh thu</p>
                        <p>100</p>
                    </div>
                    <div class="text-icon col-2">
                        <i class="fa-solid fa-dollar-sign fontsize-30"></i>
                    </div>
                </div>

                <div class="content-o p-4 bg-white rounded shadow mb-3 mb-sm-0 row">
                    <div class="text-cont col-10">
                        <p>Số lượng người cho</p>
                        <p>34</p>
                    </div>
                    <div class="text-icon col-2">
                        <i class="fa-solid fa-dollar-sign fontsize-30"></i>
                    </div>
                </div>

                <div class="content-o p-4 bg-white rounded shadow mb-3 mb-sm-0 row">
                    <div class="text-cont col-10">
                        <p>Số lượng sản phẩm</p>
                        <p>4</p>
                    </div>
                    <div class="text-icon col-2">
                        <i class="fa-solid fa-dollar-sign fontsize-30"></i>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
    
<script setup>

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
}</style>