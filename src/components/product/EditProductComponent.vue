<template>
    <div class="content">
        <div class="content-title my-sm-4 mx-sm-4 my-3">
            <h4>Sửa thông tin sản phẩm</h4>
        </div>

        <div class="content-main mx-sm-4">
            <div class="form-add bg-white p-4 shadow rounded">

                <p>{{ this.err }}</p>

                <form @submit.prevent="save">

                    <div class="mb-3">
                        <label for="name" class="form-label">Tên sản phẩm</label>
                        <input type="text" class="form-control" id="name" v-model="itemProduct.nameProduct">
                    </div>

                    <div class="mb-3">
                        <label for="danhmuc" class="form-label">Danh mục</label>
                        <select class="form-select" aria-label="Default select example" v-model="itemProduct.idCategory">
                            <option selected>Chọn</option>
                            <option v-for="(cat, index) in categorys" :key="index" :value="cat.idCategory">{{ cat.nameCategory }}</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="formFile" class="form-label">Hình ảnh</label>
                        <input class="form-control" type="file" id="formFile" @change="onChangeFileUpload">
                    </div>

                    <div class="mb-3" v-if="this.base64Review !== ''">
                        <img class="imgProductDetail" :src="base64Review" alt="123image"/>
                    </div>

                    <div class="mb-3">
                        <img v-if="this.base64.length > 0" :src="('data:image/jpeg;base64,' + this.base64)" title="" id="hinhanh" class="listPicture imgProductDetail"/>
                    </div>

                    <div class="mb-3">
                        <label for="mota" class="form-label">Mô tả</label>
                        <textarea class="form-control" id="mota" rows="3" v-model="itemProduct.description"></textarea>
                    </div>

                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import category from '@/api/category.js'
import product from '@/api/product.js'
import router from '@/router/index.js'

export default {
    data() {
        return {
            categorys: [],
            itemProduct: {
                file: '',
                idProduct: '',
                nameProduct: '',
                description: '',
                idCategory: ''
            },
            base64: '',
            base64Review: '',
            err: ''

        }
    },

    created() {
        this.initt();
    }, 

    methods: {
      async initt() {
        let res = await category.getAll();
        this.categorys = res.data;

        let idd = this.$route.params.id;
        let re = await product.getDetail({idProduct: idd});
        this.itemProduct.idProduct = re.data.idProduct;
        this.itemProduct.nameProduct = re.data.nameProduct;
        this.itemProduct.description = re.data.description;
        this.itemProduct.idCategory = re.data.idCategory;
        this.base64 = re.data.base64;
      },

      onChangeFileUpload(e) {
        this.itemProduct.file = e.target.files[0];
        const file = e.target.files[0];
        const theReader = new FileReader();
        theReader.onloadend = async () => {
            this.base64Review = await theReader.result;
        };
        theReader.readAsDataURL(file);
      },

      async save() {
        let formData = new FormData();
        formData.append('idProduct', this.itemProduct.idProduct);
        formData.append('nameProduct', this.itemProduct.nameProduct);
        formData.append('description', this.itemProduct.description);
        formData.append('idCategory', this.itemProduct.idCategory);
        formData.append('file', this.itemProduct.file);
        let response = await product.save(formData);
            if (response.status === 200) {
                router.push({ name: 'IndexProduct' });
            } else {
                if (response.message === 'name.product.empty') {
                    this.err = "Tên sản phẩm trống!";
                }
                if (response.message === 'id.category.invalid"') {
                    this.err = "Id danh mục không hợp lệ!";
                }
            }
      }
    }
}
</script>

<style scoped>
.imgProductDetail {
    width: 400px;
    height: 300px;
}
</style>