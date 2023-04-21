<template>
    <div class="content">
        <div class="content-title my-sm-4 mx-sm-4 my-3">
            <h4>Thêm danh mục</h4>
        </div>

        <div class="content-main mx-sm-4">
            <div class="form-add bg-white p-4 shadow rounded">

                <p>{{ this.err }}</p>

                <form @submit.prevent="save()">

                    <div class="mb-3">
                        <label for="name" class="form-label">Tên danh mục</label>
                        <input type="text" class="form-control" v-model="this.cate.nameCategory">
                    </div>

                    <div class="mb-3">
                        <label for="name" class="form-label">Giới tính</label><br/>
                        <input type="radio" id="one" value="Nữ" v-model="sex" />
                        <label for="one" style="margin-right: 30px;">Nữ</label>
                        
                        <input type="radio" id="two" value="Nam" v-model="sex" />
                        <label for="two">Nam</label>
                    </div>

                    <button type="submit" class="btn btn-dark">Thêm</button>
                </form>
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
            cate: {
                idCategory: "",
                nameCategory: ""
            },
            err: "",
            sex: ""
        }
    },
    methods: {
        async save() {
            if (this.cate.nameCategory !== '') {
                (this.sex === '') ? this.sex = 'Nữ' : this.sex = 'Nam';
                this.cate.nameCategory = this.sex + '-' + this.cate.nameCategory;
            }
            let response = await category.save(this.cate);
            if (response.status === 200) {
                router.push({ name: 'IndexCategory' });
            } else {
                if (response.message === 'name.category.empty') {
                    this.cate.nameCategory = '';
                    this.sex = '';
                    this.err = "Tên danh mục trống!";
                }
                if (response.message === 'name.category.exist') {
                    this.cate.nameCategory = '';
                    this.sex = '';
                    this.err = "Tên danh mục đã tồn tại!";
                }
            }
        }
    }
}
</script>

<style scoped>
.content-main .form-add p {
    color: red;
}
</style>