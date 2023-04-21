<template>
    <div class="content">
        <div class="content-title my-sm-4 mx-sm-4 my-3">
            <h4>Kích thước</h4>
        </div>

        <div class="content-main mx-sm-4">
            <div class="table-cusv shadow bg-white rounded p-3">
                <div class="header-table d-sm-flex justify-content-sm-between mb-3">
                    <router-link to="/quanly/kichthuoc/them" class="button-add delete-un">Thêm kích thước</router-link>

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
                            <th>Tên kích thước</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(si, index) in sizes" :key="index">
                            <td>{{ si.idSize }}</td>
                            <td>{{ si.nameSize }}</td>
                            <td> 
                                <a @click="getDetail(si.idSize)" class="delete-gach"><i class="icon-edit fa-solid fa-pen-to-square"></i></a>
                                <a @click="deleteSize(si.idSize)" class="delete-gach"><i class="fa-solid fa-trash"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="page-itity d-flex justify-content-sm-end align-items-center">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link text-dark" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link text-dark" href="#"></a></li>
                        <li class="page-item"><a class="page-link text-dark" href="#">Next</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import size from '@/api/size.js';
import router from '@/router/index.js';

export default {
    data() {
        return {
            sizes: [],
            mess: "",
        }
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            let response = await size.getAll();
            this.sizes = response.data;
        },
        getDetail(idSize) {
            router.push({name: 'EditSize', params:{id: idSize}}); 
        },
        async deleteSize(id) {
            let check = confirm('Bạn có chắn chắn muốn xoá!');
            if(check === true) {
                let response = await size.deleteSize({idSize: id});
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