<template>
    <div class="content">
        <div class="content-title my-sm-4 mx-sm-4 my-3">
            <h4>Chỉnh sửa kích thước</h4>
        </div>

        <div class="content-main mx-sm-4">
            <div class="form-add bg-white p-4 shadow rounded">
                <form @submit.prevent="save()">

                    <p>{{ this.err }}</p>

                    <div class="mb-3">
                        <label for="name" class="form-label">Tên danh mục</label>
                        <input type="text" class="form-control" v-model="size.nameSize">
                    </div>

                    <button type="submit" class="btn btn-dark">Cập nhập</button>
                </form>
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
            size: {
                idSize: "",
                nameSize: ""
            },
            err: "",
            nameDefault: ""
        }
    },
    created() {
        this.defaultData();
    },
    methods: {
        async defaultData() {
            let idd = this.$route.params.id;
            let res = await size.getDetail({"idSize": idd});
            this.size.idSize = res.data.idSize;
            this.size.nameSize = res.data.nameSize;
            this.nameDefault = res.data.nameSize;
        },
        async save() {
            let response = await size.save(this.size);
            if(response.status === 200) {
                router.push({name: 'IndexSize'});
            } else {
                if(response.message === 'name.size.empty') {
                    this.err = "Tên kích thước rỗng!";
                    this.size.nameSize = this.nameDefault;
                }
                if(response.message === 'name.size.exist') {
                    this.err = "Tên kích thước đã tồn tại!";
                    this.size.nameSize = this.nameDefault;
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