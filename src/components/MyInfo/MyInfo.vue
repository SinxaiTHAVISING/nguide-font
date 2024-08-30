<template>
    <div class="container  mt-5...">
        <div class="flex ...">
            <div class="flex-none w- h-14 ...">
                <h1 class="font-bold text-xl">My information</h1>
            </div>
            <div class="grow h-14 ...">
            </div>
            <div class="flex-none w-32 h-14 mr-8 ...">
                <button class="px-4 py-2 border font-semibold rounded-lg shadow-md w-40 btn-editInfo"
                    @click="showDialog">
                    Edit information
                </button>
            </div>
        </div>
    </div>
    <div class="container shadow-md  ...">
        <div class="">
            <h2 class="pb-3 ">My Informations</h2>
        </div>
        <hr class="pb-3">
        <form action="" method="post">
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Name of person responsible</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" placeholder="" :value="apiData.lc_res_name" disabled>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">ID</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="text" placeholder=""
                        :value="apiData.uid_user?.username" disabled>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Password</label>
                </div>
                <div class="col-span-6 ...">
                    <input type="password" class="mt-1 block w-full border p-2  rounded-md" placeholder=""
                        :value="apiData.uid_user?.passwordHash"  disabled>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Email</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="email" placeholder=""
                        :value="apiData.uid_user?.email" disabled>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Name land company</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="text" placeholder=""
                        :value="apiData.lc_name" disabled>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Name of land Company representive</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="text" placeholder=""
                        :value="apiData.lc_rep_name" disabled>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">address</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md " type="text" placeholder=""
                        :value="apiData.lc_addr" disabled>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Land Conpany Area</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md " type="text" placeholder=""
                        :value="apiData.lc_area1" disabled>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone namber 1</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md " type="tel" placeholder=""
                        :value="apiData.lc_phone1" disabled>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone namber 2</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="tel" placeholder=""
                        :value="apiData.lc_phone2" disabled>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Land company Code</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="text" placeholder=""
                        :value="apiData.lc_code" disabled>
                </div>
            </div>
            <hr class="mt-3">
            <div class="flex">
                <div class="flex-none w-32 mt-2">
                    <label for="comment">Comment</label>
                </div>
                <div class="flex-none w-32 mt-1">
                    <!-- <button class="px-4 py-2 font-semibold rounded-lg shadow-md w-20 text-sm btn-save border">
                        Save
                    </button> -->
                </div>
            </div>
            <textarea name="" id="" cols="" rows="8" class="w-full border rounded-md mt-2 p-2" maxlength="5000"
                :value="apiData.Memo" disabled></textarea>
        </form>
    </div>
    <!----------------------------- Dialog---------------------------->
    <!-- <form @submit.prevent="chackPassword"> -->
    <div v-if="dialogVisible" class="flex w-96 rounded-md shadow-md" id="Dialog">
        <div class="flex-1 px-2 py-1">
            <div class="p-1">
                <span class="text-md font-bold text-center">Enter your password</span>
            </div>
            <div class="p-1 text-black">
                <input type="password" name="" id="" class="w-full p-2 border rounded"
                    placeholder="Please enter your password" v-model="add.conPassword">
                <p v-if="errors.conPassword" class="text-red text-sm">{{ errors.conPassword }}</p>
            </div>
            <div class="flex justify-center mt-5">
                <button @click="Cancel"
                    class="rounded-xl border px-3 py-1 font-bold mt-1 w-20 mx-2 hover:bg-[#132d5c] hover:text-white">
                    Cancel
                </button>
                <button @click="sendPassword"
                    class="rounded-xl border px-3 py-1 font-bold mt-1 text-white bg-[#132d5c] hover:bg-white hover:text-black w-20 mx-2">
                    OK
                </button>
            </div>
        </div>
    </div>
    <!-- </form> -->
</template>

<script setup>
import Swal from 'sweetalert2'
import apiClient from '@/../services/apiClient';
import {reactive, computed,  ref, onMounted} from 'vue'
import { useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

const add = reactive({
    conPassword: ''
})
const errors = reactive({
    conPassword: ''
})
const apiData = reactive([]);
// function getData Api
const getData = async () => {
    //get params url routes
    const id = route.params.id
    // console.log("Params:" + id)
    try {
        const response = await apiClient.get(`/account/land/com/find/${id}`)
        Object.assign(apiData, response.data)
        // console.log(apiData.uid_user.email)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
onMounted(() => {
    getData()
})
const dialogVisible = ref(false);
// Function to show the dialog
let showDialog = () => {
    dialogVisible.value = true;
};
let Cancel = () => {
    dialogVisible.value = false;
};
const sendPassword = async () => {
    if (add.conPassword === '') {
        errors.conPassword = 'Password is not empty'
    }
    else {
        try {
            const id = route.params.id
            const userid = id
            const response = await apiClient.post(`/account/confirm/password/${userid}`, {
                passwordHash: add.conPassword,
            })
            router.push(`/edit/myinfo/${userid}`)
        } catch (error) {
            console.error('Error:', error);
            errors.conPassword = 'Password is incorrect'
        }
    }
};
</script>

<style>
.btn-editInfo {
    background-color: #667085;
    color: white;
}

.btn-save:hover {
    background-color: #667085;
    color: white;
}

/* Custom CSS for button positioning in SweetAlert2 */
.custom-actions {
    display: flex;
    justify-content: space-between;
    /* Align buttons to left and right */
}

.custom-actions .swal2-confirm {
    order: 2;
    /* Move the confirm button to the right */
}

.custom-actions .swal2-cancel {
    order: 1;
    /* Move the cancel button to the left */
}

.swal2-cancel {
    width: 90px;
    color: gray;
    border: 2px solid gray;
}

.swal2-confirm {
    width: 90px;
}

#Dialog {
    position: absolute;
    float: left;
    top: 50%;
    left: 40%;
    background-color: #ffffff;
    padding: 20px;
    border-color: orange;
    /* display: none; */
}
</style>
