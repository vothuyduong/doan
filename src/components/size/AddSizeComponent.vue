<template>
    <div class="content">
        <div class="content-title my-sm-4 mx-sm-4 my-3">
            <h4>Thêm kích thước</h4>
        </div>

        <div class="content-main mx-sm-4">
            <div class="form-add bg-white p-4 shadow rounded">

                <p>{{ this.err }}</p>

                <form @submit.prevent="save()">

                    <div class="mb-3">
                        <label for="name" class="form-label">Tên kích thước</label>
                        <input type="text" class="form-control" v-model="this.size.nameSize">
                    </div>

                    <button type="submit" class="btn btn-dark">Thêm</button>
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
            err: ""
        }
    },
    methods: {
        async save() {
            let response = await size.save(this.size);
            if(response.status === 200) {
                router.push({name: 'IndexSize'});
            } else {
                if(response.message === 'name.size.empty') {
                    this.err = "Tên kích thước rỗng!";
                    this.size.nameSize = '';
                }
                if(response.message === 'name.size.exist') {
                    this.err = "Tên kích thước đã tồn tại!";
                    this.size.nameSize = '';
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