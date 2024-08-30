<template>
    <h1 class="font-bold text-xl px-3">Administrator</h1>
    <div class=" mt-2 p-3">
        <from @submit.prevent="editDetail">
        <h1> Admin Information Details</h1>
        <hr class="my-3">
        <div class="grid grid-cols-7 gap-4 py-2">
            <div class="...">
                <label for="">ID</label>
            </div>
            <div class="col-span-6 ...">
                <input class="mt-1 block w-full border rounded-md p-2" placeholder="Please enter admin ID"
                    v-model="add.id" disabled>
                <p v-if="errors.id" class="text-red text-sm mt-2">{{ errors.id }}</p>
            </div>
        </div>
        <div class="grid grid-cols-7 gap-4 py-2">
            <div class="...">
                <label for="">Name</label>
            </div>
            <div class="col-span-6 ...">
                <input class="mt-1 block w-full border rounded-md p-2" placeholder="Please enter admin Name"
                    v-model="add.name">
                <p v-if="errors.name" class="text-red text-sm mt-2">{{ errors.name }}</p>
            </div>
        </div>
        <div class="grid grid-cols-7 gap-4 py-2">
            <div class="...">
                <label for="">Password</label>
            </div>
            <div class="col-span-6 ...">
                <input class="mt-1 block w-full border rounded-md p-2" placeholder="Enter for change password"
                    type="password" v-model="add.updatePassword">
                <p v-if="errors.password" class="text-red text-sm mt-2">{{ errors.password }}</p>
            </div>
        </div>
        <div class="grid grid-cols-7 gap-4 py-2">
            <div class="...">
                <label for="">Address</label>
            </div>
            <div class="col-span-6 ...">
                <input class="mt-1 block w-full border rounded-md p-2" placeholder="Please enter Company addr"
                    v-model="add.addr">
                <p v-if="errors.addr" class="text-red text-sm mt-2">{{ errors.addr }}</p>
            </div>
        </div>
        <div class="grid grid-cols-7 gap-4 py-2">
            <div class="...">
                <label for="">Phone Number</label>
            </div>
            <div class="col-span-6 ...">
                <input class="mt-1 block w-full border rounded-md p-2" placeholder="Please enter Phone number"
                    v-model="add.tel">
                <p v-if="errors.tel" class="text-red text-sm mt-2">{{ errors.tel }}</p>
            </div>
        </div>

        <div class="flex justify-center space-x-4 py-8 mt-5">
            <router-link to="">
                <button class="px-4 py-2 font-semibold rounded-lg border w-28 btn-cancel">
                    Cancel
                </button>
            </router-link>
            <button id="deleteButton" class="px-4 py-2 font-semibold rounded-lg border w-28 btn-register"
                @click.prevent="editDetail">
                Save
            </button>
        </div>
        </from>
    </div>
</template>
<script setup>
import { onMounted, reactive, ref, computed } from 'vue';
import Swal from 'sweetalert2'; // Ensure SweetAlert2 is installed
import apiClient from '@/../services/apiClient';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const add = reactive({
    id: '',
    name: '',
    updatePassword: '',
    addr: '',
    tel: ''
})
const errors = reactive({
    id: '',
    name: '',
    addr: '',
    tel: ''
})
const apiData = reactive([]);
// function getData Api
const getData = async () => {
    //get params url routes
    const id = route.params.adm_id
    // console.log("Params:" + id)
    try {
        const response = await apiClient.get(`/account/admin/${id}`)
        Object.assign(apiData, response.data)
        add.id = apiData.uid_user.username
        add.name = apiData.adm_name
        add.password = apiData.uid_user.passwordHash
        add.addr = apiData.adm_addr
        add.tel = apiData.adm_phone
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
onMounted(() => {
    getData()
})
const update = async () => {
    const id = route.params.adm_id
    try {
            await apiClient.patch(`/account/admin/member/update/${id}`, {
                // username: add.id,
                adm_name: add.name,
                adm_addr: add.addr,
                adm_phone: add.tel
            });
        }
    catch (error) {
        console.log(error)
    }
}
const editDetail = () => {
    if (add.name === '') {
        errors.name = 'You cannot use the default or empty'
    }
    else if (add.addr === '') {
        errors.addr = 'You cannot use the default or empty'
    }
    else if (add.tel === '') {
        errors.tel = 'You cannot use the default or empty'
    }
    else {
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
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // await update()
                    await Swal.fire({
                        title: 'successful',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    await router.push('/admin/list')
                } catch (error) {
                    Swal.fire({
                        title: 'Update failed',
                        icon: 'warning',
                        // showConfirmButton: false,
                        timer: 3000
                    });
                }
            }
        });
    }

}
</script>
<style>
.btn-add {
    background-color: #667085;
    color: white;
}

.btn-address {
    background-color: #667085;
    color: white;
}

.btn-edit:hover {
    background-color: #667085;
    color: white;
}

.btn-cancel:hover {
    background-color: #667085;
    color: white;
}

.btn-register {
    background-color: #667085;
    color: white;
}

.btn-register:hover {
    background-color: #fff;
    color: black;
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

.swal2-confirm {
    background-color: #132d5c;
}
</style>