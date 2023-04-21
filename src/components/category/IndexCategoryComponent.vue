<template>
    <div class="content">
        <div class="content-title my-sm-4 mx-sm-4 my-3">
            <h4>Danh mục</h4>
        </div>

        <div class="content-main mx-sm-4">
            <div class="table-cusv shadow bg-white rounded p-3">
                <div class="header-table d-sm-flex justify-content-sm-between mb-3">
                    <router-link to="/quanly/danhmuc/them" class="button-add delete-un">Thêm danh mục</router-link>

                    <div class="input-group rounded mt-2 mt-sm-0" style="width: 200px;">
                        <input type="search" class="form-control rounded" placeholder="Tìm..." aria-label="Search" aria-describedby="search-addon" />
                        <span class="input-group-text border-0" id="search-addon">
                            <i class="fas fa-search"></i>
                        </span>
                    </div>
                </div>

                <p style="color: red;">{{ this.mess }}</p>
                
                <table class="table">

                    <thead class="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Tên danh mục</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cat, index) in categories" :key="index">
                            <td>{{ cat.idCategory }}</td>
                            <td>{{ cat.nameCategory }}</td>
                            <td> 
                                <a @click="getDetail(cat.idCategory)" class="delete-gach"><i class="icon-edit fa-solid fa-pen-to-square"></i></a>
                                <a @click="deleteCategory(cat.idCategory)" class="delete-gach"><i class="fa-solid fa-trash"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- <div class="page-itity d-flex justify-content-sm-end align-items-center">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link text-dark" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link text-dark" href="#"></a></li>
                        <li class="page-item"><a class="page-link text-dark" href="#">Next</a></li>
                    </ul>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import category from '@/api/category.js';
import router from '@/router/index.js';
export default {
    data() {
        return {
            categories: [],
            mess: "",
        }
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            let response = await category.getAll();
            this.categories = response.data;
        },
        getDetail(idCategory) {
            router.push({name: 'EditCategory', params:{id: idCategory}});
        },
        async deleteCategory(idCategory) {
            let check = confirm('Bạn có chắn chắn muốn xoá!');
            if(check === true) {
            let response = await category.deleteCategory({id: idCategory});
            if(response.status === 200) {
                this.$router.go(this.$router.currentRoute);
                this.mess = "Xoá thành công!";
            } else {
                this.mess = "Xoá thất bại!";
            }
        }
        }
    }
}
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

.delete-gach {
    text-decoration: none;
    color: black;
}

.delete-un {
    text-decoration: none;
}
</style>