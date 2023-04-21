<template>
    <div class="content">
        <div class="content-title my-sm-4 mx-sm-4 my-3">
            <h4>Thêm giá</h4>
        </div>

        <div class="content-main mx-sm-4">
            <div class="form-add bg-white p-4 shadow rounded">

                <p>{{ message }}</p>

                <form @submit.prevent="saveItem">

                    <div class="mb-3">
                        <label for="name" class="form-label">Tên sản phẩm</label>
                        <select class="form-select" v-model="itemPrice.idProduct">
                            <option :key="index" v-for="(pro, index) in products" :value="pro.idProduct">{{ pro.nameProduct }}</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="name" class="form-label">Kích thước</label>
                        <select class="form-select" v-model="itemPrice.idSize">
                            <option :key="index" v-for="(si, index) in sizes" :value="si.idSize">{{ si.nameSize }}</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="name" class="form-label">Giá</label>
                        <input type="text" class="form-control" v-model= "itemPrice.price">
                    </div>

                    <div class="mb-3">
                        <label for="name" class="form-label">Số lượng</label>
                        <input type="text" class="form-control" v-model="itemPrice.quantity">
                    </div>

                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import product from '@/api/product.js'
import size from '@/api/size.js'
import price from '@/api/price.js'
import router from '@/router/index.js'

export default {
    data() {
        return {
            products: [],
            sizes: [],
            itemPrice: {
                idProduct: '',
                idSize: '',
                price: '',
                quantity: ''
            },
            message: ''
        }
    },

    created() {
        this.getProductCategory();
        this.getSizeCategory();
    },
    
    methods: {
        async getProductCategory() {
            let res = await product.getAllKsk();
            this.products = res.data;
        },

        async getSizeCategory() {
            let res = await size.getAll();
            this.sizes = res.data;
        },

        async saveItem() {
            let res = await price.save(this.itemPrice);
            if(res.message != null) {
                this.message = res.message;
            } else {
                router.push({name : 'IndexPrice'});
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