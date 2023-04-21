<template>
  <div class="content">
    <div class="content-title my-sm-4 mx-sm-4 my-3">
      <h4>Giá</h4>
    </div>

    <div class="content-main mx-sm-4">
      <div class="table-cusv shadow bg-white rounded p-3">
        <div class="header-table d-sm-flex justify-content-sm-between mb-3">
          <router-link to="/quanly/gia/them" class="button-add delete-un">Thêm giá sản phẩm</router-link>

          <div class="input-group rounded mt-2 mt-sm-0" style="width: 200px">
            <input type="search" class="form-control rounded" placeholder="Tìm..." aria-label="Search"
              aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>

        <div>
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th>Tên sản phẩm</th>
                <th>Kích thước</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(price, index) in prices" :key="index">
                <td>{{ price.nameProduct }}</td>
                <td>{{ price.nameSize }}</td>
                <td>{{ price.price }}</td>
                <td>{{ price.quantity }}</td>
                <td>
                  <a @click="getDetail(price.idProduct, price.idSize)" class="delete-gach"><i
                      class="icon-edit fa-solid fa-pen-to-square"></i></a>
                  <a @click="deletePrice(price.idProduct, price.idSize)" class="delete-gach"><i
                      class="fa-solid fa-trash"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- <div
            class="page-itity d-flex justify-content-sm-end align-items-center"
          >
            <ul class="pagination">
              <li class="page-item" v-if="this.pageHT > 0">
                <a class="page-link text-dark" href="#" @click="getData(this.pageHT - 1)">Previous</a>
              </li>
  
              <li :key="index"
              v-for="(page, index) in totalPage"
                class="page-item" 
              >
                <a class="page-link text-dark" @click="getData(page - 1)">{{ page }}</a>
              </li>
  
              <li class="page-item" v-if="this.pageHT < this.totalPage - 1">
                <a class="page-link text-dark" href="#" @click="getData(this.pageHT + 1)">Next</a>
              </li>
            </ul>
          </div> -->

      </div>
    </div>
  </div>
</template>
  
<script>
import price from '@/api/price.js'
import router from '@/router/index.js'

export default {
  data() {
    return {
      prices: [],
      messager: ""
    };
  },

  created() {
    this.initt();
  },

  methods: {
    async initt() {
      let si = await price.getAll();
      this.prices = si.data;
    },
    getDetail(idProduct, idSize) {
      router.push({ name: 'EditPrice', query: { idPro: idProduct, idSi: idSize } });
    },
    async deletePrice(idPro, idSi) {
      let check = confirm('Bạn có chắn chắn muốn xoá!');
      if (check === true) {
        let res = await price.delete({ idProduct: idPro, idSize: idSi });
        if (res.status === 200) {
          this.$router.go(this.$router.currentRoute);
          this.mess = "Xoá thành công!";
        } else {
          this.mess = "Xoá thất bại!";
        }
      }
    }
  }
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

img,
svg {
  width: 100px;
  height: 100px;
}

.delete-un {
  text-decoration: none;
}

.delete-gach {
  text-decoration: none;
  color: black;
}
</style>