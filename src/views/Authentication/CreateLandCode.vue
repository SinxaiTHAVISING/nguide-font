<template>
    <DefaultLayout>
        <div class="container  mt-5 ...">
            <div class="flex ...">
                <div class="flex-none w- h-14 ...">
                    <h1 class="font-bold text-xl">Manage Land Company</h1>
                </div>
                <div class="grow h-14 ...">
                </div>
                <div class="flex-none w-32 h-14 mr-8 ...">
                    <RouterLink to="/Edit/land">
                        <button
                            class="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 w-40">
                            Edit information
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div class="container  shadow-md  ...">
            <div class="">
                <h2 class="pb-3 ">Land company Informations</h2>
            </div>
            <hr class="pb-3">
            <form  @submit.prevent="save">
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">Name Land company</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input class="mt-1 block w-full border p-2 rounded-md" placeholder=""  :value="apiData.lc_name">
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">Name of land Company representative</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input class="mt-1 block w-full border p-2 rounded-md" placeholder="" :value="apiData.lc_rep_name">
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">address</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input class="mt-1 block w-full border p-2 rounded-md" type="text" placeholder=""  :value="apiData.lc_addr">
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">land Company Area</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input type="text" class="mt-1 block w-full border p-2 rounded-md" placeholder=""  :value="apiData.lc_area1">
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">land Company Code</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input type="text" class="mt-1 block w-full border p-2 rounded-md"
                            placeholder="Please enter land Company Cade" autofocus v-model="add.landCode">
                        <p v-if="errors.landCode" class="text-red text-sm mt-2">{{ errors.landCode }}</p>
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">Phone namber 1</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input class="mt-1 block w-full border p-2 rounded-md " type="tel" placeholder="" :value="apiData.lc_phone1">
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">Phone namber 2</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input class="mt-1 block w-full border p-2 rounded-md" type="tel" placeholder="" :value="apiData.lc_phone2">
                    </div>
                </div>
                 <!-- Alert Step 1 -->
        <div v-if="isStep1Dialog" class="flex w-96 rounded-md border border-[#ff7100]" id="guideAlert">
            <div class="basis-16 flex items-start h-15 w-6 rounded-full overflow-hidden">
                <img src="../../../public/logo/LogoFull.png" class="object-cover w-full h-full" />
            </div>
            <div class="flex-1 px-2 py-1">
                <div class="p-1">
                    <span class="text-md font-bold">Press create your land Company Cade</span>
                </div>
                <div class="p-1 text-black">
                    <span class="mx-2">Your land company Code must consist of only 3 capital Englist letter</span>
                </div>
                <hr />
                <div class="flex items-end mt-2">
                    <button @click="edit"
                        class="ml-auto rounded-xl border px-3 py-1 font-bold mt-1 text-white bg-[#ff7100]">
                        Next
                    </button>
                </div>
            </div>
        </div>

        <!-- Alert Step 2 -->
        <div v-if="isStep2Dialog" class="flex w-96  rounded-md border border-[#ff7100]" id="guideAlertEdit">
            <div class="basis-16 flex items-start h-15 w-6 rounded-full overflow-hidden">
                <img src="../../../public/logo/LogoFull.png" class="object-cover w-full h-full" />
            </div>
            <div class="flex-1 px-2 py-1">
                <div class="p-1">
                    <span class="text-md font-bold">Press to create your land Company Code</span>
                </div>
                <div class="p-1 text-black">
                    <span class="mx-2">Your land company Code must consist of only 3 capital Englist letter</span>
                </div>
            </div>
        </div>
                <div class="flex justify-center space-x-4 py-8">
                    <button class="px-4 py-2  text-black border border-black font-semibold rounded-lg w-28" id="cancel">
                        Cancel
                    </button>
                    <button class="px-4 py-2 text-white bg-gray-400 border border-black font-semibold rounded-lg w-28"
                        id="edit" @click="save">
                        Save
                    </button>
                </div>
            </form>
        </div>
    </DefaultLayout>
</template>

<script setup>
import Swal from 'sweetalert2'
import { reactive, computed, ref, onMounted } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import apiClient from '@/../services/apiClient'
import router from '../../router';
import { useRoute } from 'vue-router'

const route = useRoute()
const add = reactive({
    landCode: '',
});
const errors = reactive({
    landCode: ''
})

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
// update land company Code
const pathCode = async () => {
    // const id = route.params.id
    try {
        //  await apiClient.patch(`/account/land/com/update/${id}`, {
         await apiClient.patch(`/account/land/com/update/3`, {
            lc_code: add.landCode,
        });
        // alert(id)
    } catch (error) {
        console.log(error)
    }
}
//button Disable
const buttonDisabled = ref(true);
// Alerts visibility
const isStep1Dialog = ref(true)
const isStep2Dialog = ref(false)
// Show second alert step
const showStep2 = () => {
    isStep1Dialog.value = false
    isStep2Dialog.value = true
    buttonDisabled.value = !buttonDisabled.value;
}
const edit = () => {
    if (add.landCode === '') {
        errors.landCode = 'The data is invalid or cannot be empty';
        return;
    }
    if (add.landCode.length > 3) {
        errors.landCode = 'The code must be longer than 3 characters';
        return;
    }
    if (add.landCode !== add.landCode.toUpperCase()) {
        errors.landCode = 'Your Land Company Code must consist of only 3 capital Englist leters';
        return;
    }
    else {
        showStep2()

    }
}
const save = () => {
    const id = route.params.id
    try {
        Swal.fire({
            text: "Would you like to edit your information?",
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#f8b400",
            cancelButtonColor: "#ffff",
            customClass: {
                actions: 'custom-actions' // Add custom class to the actions container
            }
        }).then( async(result) => {
            if (result.isConfirmed) {
                await pathCode();
                await Swal.fire({
                    title: 'successful',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
            await router.push(`/myland/${id}`)
        });
    }
    catch (error) {
        Swal.fire({
            icon: "error",
            text: "An error occurred and the data connot be edited"
        });
    }
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

#guideAlert {
    position: absolute;
    float: left;
    top: 25%;
    left: 60%;
    background-color: #fde8f0;
    padding: 20px;
    border-color: orange;
}

#guideAlertEdit {
    position: absolute;
    float: left;
    top: 45%;
    left: 60%;
    background-color: #fdf1e8;
    padding: 20px;
    border-color: orange;
}
</style>