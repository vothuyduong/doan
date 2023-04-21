<template>
  <div class="content">
    <div class="content-title my-sm-4 mx-sm-4 my-3">
      <h4>Sản phẩm</h4>
    </div>

    <div class="content-main mx-sm-4">
      <div class="table-cusv shadow bg-white rounded p-3">
        <div class="header-table d-sm-flex justify-content-sm-between mb-3">
          <router-link to="/quanly/sanpham/them" class="button-add delete-un"
            >Thêm sản phẩm</router-link
          >

          <div class="input-group rounded mt-2 mt-sm-0" style="width: 200px">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Tìm..."
              aria-label="Search"
              aria-describedby="search-addon"
              v-model="search"
            />
            <span class="input-group-text border-0" id="search-addon" @click="searchProduct()">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>

        <p style="color: red;">{{ this.mess }}</p>

        <div>
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th>ID</th>
                <th>Tên danh mục</th>
                <th>Tên sản phẩm</th>
                <th>Mô tả</th>
                <th>Hình ảnh</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="index" >
                <td>{{ product.idProduct }}</td>
                <td>{{ product.nameCategory }}</td>
                <td>{{ product.nameProduct }}</td>
                <td>{{ product.description }}</td>
                <td >
                  <img v-if="product.base64.length > 0" :src="('data:image/jpeg;base64,' + product.base64)" title="" class="listPicture"/>
                </td>
                
                  <td> 
                    <a @click="getDetail(product.idProduct)" class="delete-gach"><i class="col-black icon-edit fa-solid fa-pen-to-square"></i></a>
                    <a @click="deleteProduct(product.idProduct)" class="col-black delete-gach"><i class="fa-solid fa-trash"></i></a>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="page-itity d-flex justify-content-sm-end align-items-center"
        >
          <ul class="pagination">
            <li class="page-item" @click="loadPage(currentPage - 1)" v-if="currentPage > 1">
              <a class="page-link text-dark" href="#">Previous</a>
            </li>

            <li
              class="page-item"
              :key="index"
              v-for="(page, index) in totalPage"
              @click="loadPage(page)"
            >
              <a class="page-link text-dark" href="#">{{ page }}</a>
            </li>

            <li class="page-item" @click="loadPage(currentPage + 1)" v-if="currentPage < totalPage">
              <a class="page-link text-dark" href="#">Next</a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import product from "@/api/product.js";
import router from "@/router/index.js";

export default {
    data() {
        return {
            products: [],
            totalPage: '',
            currentPage: '',
            search: '',
            mess: "",
        };
    },

    created() {
        this.initt();
    },

    methods: {
      async initt() {
        let response = await product.getAll();
        this.products = response.data;
        console.log(this.products);
        this.totalPage = response.total_pages;
        this.currentPage = response.current_page;
      },
      getDetail(idProduct) {
        router.push({name: 'EditProduct', params: {id: idProduct}});
      },
      async deleteProduct(idPro) {
        let conf = confirm('Bạn có chắc chắn muốn xoá?');
        if(conf == true) {
          let re = await product.delete({idProduct: idPro});
          if(re.status === 200) {
                this.$router.go(this.$router.currentRoute);
                this.mess = "Xoá thành công!";
            } else {
                this.mess = "Xoá thất bại!";
            }
        }
      },
      async loadPage(page) {
        let response = await product.getAll({pageCurrent: page});
        this.products = response.data;
        this.totalPage = response.total_pages;
        this.currentPage = response.current_page;
      },
      async searchProduct() {
        let response = await product.getAll({keySearch: this.search});
        this.products = response.data;
        this.totalPage = response.total_pages;
        this.currentPage = response.current_page;
      }
    },
};
</script>

<style scoped>
.icon-edit {
  margin-right: 10px;
}

.button-add {
  padding: 5px;
  background-color: black;
  color: white; 
}

.delete-un {
    text-decoration: none;
}

img , svg {
  width: 100px;
  height: 100px;
}

.col-black {
  color: black;
}
</style>