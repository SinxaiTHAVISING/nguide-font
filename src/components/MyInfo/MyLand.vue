<template>
    <div class="container  mt-5 ...">
        <div class="flex ...">
            <div class="flex-none h-14 ...">
                <h1 class="font-bold text-xl">Manage Land Company</h1>
            </div>
            <div class="grow h-14 ...">
            </div>
            <div class="flex-none w-32 h-14 mr-8 ...">
                <button @click="linkEdit"
                    class="px-4 py-2 bg-red-400 bg-[#667085] text-[#fff] font-semibold rounded-lg shadow-md hover:bg-gray-600 w-40">
                    Edit information
                </button>
            </div>
        </div>
    </div>
    <div class="container shadow-md  ...">
        <div class="">
            <h2 class="pb-3 ">Land company Informations</h2>
        </div>
        <hr class="pb-3">
        <form @submit.prevent="save">
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Name Land company</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md" placeholder="" :value="apiData.lc_name">
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Name of land Company representative</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2  rounded-md" placeholder="" :value="apiData.lc_rep_name">
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">address</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2  rounded-md" type="text" placeholder=""
                        :value="apiData.lc_addr">
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">land Company Area</label>
                </div>
                <div class="col-span-6 ...">
                    <input type="text" class="mt-1 block w-full border p-2  rounded-md" placeholder=""
                        :value="apiData.lc_area1">
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">land Company Code</label>
                </div>
                <div class="col-span-6 ...">
                    <input type="text" class="mt-1 block w-full border p-2  rounded-md" placeholder=""
                        :value="apiData.lc_code">
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone namber 1</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2  rounded-md " type="tel" placeholder=""
                        :value="apiData.lc_phone1">
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone namber 2</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2  rounded-md" type="tel" placeholder=""
                        :value="apiData.lc_phone2">
                </div>
            </div>
            <hr class="mt-3">
            <div class="flex">
                <div class="flex-none w-32 mt-2">
                    <label for="comment">Comment</label>
                </div>
                <div class="flex-none w-32 mt-1">
                    <!-- <button
                            class="px-4 py-2  hover:text-white hover:bg-[#667085] border-2 border-gray-500 font-semibold rounded-lg shadow-md hover:bg-gray-600 w-20 text-sm">
                            Save
                        </button> -->
                </div>
            </div>
            <textarea name="" id="" cols="" rows="8" class="w-full border p-2  rounded-md mt-2" maxlength="5000"
                :value="apiData.Memo"></textarea>
        </form>
    </div>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from 'vue'
import apiClient from '@/../services/apiClient'
// import router from '../../router';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
// Define a reactive array to store API data
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
const linkEdit = () => {
    const id = route.params.id
    router.push(`/edit/myland/${id}`)
}
</script>

<style>
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
</style>