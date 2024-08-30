<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div class="w-full max-w-sm p-4 bg-white rounded-lg shadow sm:p-6 md:p-8 box-content ">
            <form class="space-y-6" @submit.prevent="login">
                <div class="text-center">
                    <h5 class="text-xl font-medium text-white">Login</h5>
                    <!-- <h5 class="text-xl font-medium text-white">Land Administrator</h5> -->
                </div>
                <div>
                    <label for="id" class="block mb-2 text-sm font-medium text-white">ID</label>
                    <input type="text" name="" id=""
                        class=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                        placeholder="Please enter ID" v-model="add.id" />
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                    <div class="relative mt-2 rounded-md shadow-sm flex-1 mb-4">
                        <input :type="isPasswordVisible ? 'text' : 'password'" id="password"
                            class="block w-full rounded-md p-2 border" placeholder="Please enter your password"
                            v-model="add.password" />
                        <div class="absolute inset-y-0 right-0 flex items-center">
                            <button class="font-bold rounded-md border-0 py-0 pr-3 text-gray-500 sm:text-sm "
                                @click="togglePasswordVisibility" type="button">
                                <Eye v-if="isPasswordVisible" />
                                <EyeOff v-else />
                            </button>
                        </div>
                    </div>
                </div>
                <button type="submit" id="button-login"
                    class="w-full text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                <div class="flex items-center justify-center">
                    <img src="../../../src/assets/images/logo/logoNg.png" alt="" width="150" height="150" class="mt-3">
                </div>
            </form>
        </div>
    </div>


</template>

<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import apiClient from '@/../services/apiClient';
import { EyeOff, Eye } from 'lucide-vue-next';
import { useRoute } from 'vue-router'
const route = useRoute()
const add = reactive({
    id: '',
    password: ''
})
const router = useRouter()
// show-hidePassword
const isPasswordVisible = ref(false)
const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value
}
// Login function
const login = async () => {
    try {
        // const uid = route.params.id
        // console.log(add.id)
        const response = await apiClient.post('/account/login', {
            username: add.id,
            passwordHash: add.password,
        })
        // save data to local storage
        localStorage.clear();
        localStorage.setItem('responeData', JSON.stringify(response.data));
        const usertype = response.data.usertype; // Respon User type
        const id = response.data.uid; // Respon User id
        const updated_at = response.data.updated_at; // Respon updated_at collumn
        // console.log(updated_at)
        if (usertype === 1 && updated_at === null) {
            router.push(`/admin/change/password/${id}`)
        }
        else if (usertype === 1 && updated_at !== null) {
            router.push(`/admin/info/${id}`)
        }
        if (usertype === 2 && updated_at === null) {
            router.push(`/land/change/password/${id}`);
        }
        else if (usertype === 2 && updated_at !== null) {
            router.push(`/myinfo/${id}`)
        }
        if (usertype === 3 && updated_at === null) {
            router.push(`/op/change/password/${id}`)
        }
        else if (usertype === 3 && updated_at !== null) {
            router.push(`/manage/operation/${id}`)
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'ID or Password is incorrect',
            // text: error.response?.data?.message || error.message
        })
        console.error('Login failed:', error);
    }
}
</script>

<style>
/* custom sweetalert */
.swal2-title {
    color: #e25c5c;
}

.swal2-confirm {
    background-color: #e25c5c;
    color: white;
}

/* card of loign */
.box-content {
    background-color: #132D5C;
}

#button-login {
    background-color: #CBD0DC;
}

#button-login:hover {
    background-color: #aeb4c4;
}
</style> */