<template>
    <h1 class="font-bold">Edit information</h1>
    <div class="container  mt-5 p-3 shadow-md  ...">
        <div class="">
            <h2 class="pb-3 ">My Informations</h2>
        </div>
        <hr class="pb-3">
        <form @submit.prevent="editProfile">
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Password</label>
                </div>
                <div class="col-span-6 ...">
                    <!-- <input class="mt-1 block w-full border p-2 rounded-md" type="password" placeholder="" autofocus v-model="add.pass"> -->
                    <input class="mt-1 block w-full border p-2 rounded-md" type="password" placeholder="Enter for change password" autofocus >
                        <p v-if="errors.pass" class="text-red text-sm">{{ errors.pass }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">address</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md" type="text" placeholder=""
                        v-model="add.addr">
                        <p v-if="errors.addr" class="text-red text-sm">{{ errors.addr }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone namber</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md " type="tel" placeholder=""
                        v-model="add.tel1">
                        <p v-if="errors.tel1" class="text-red text-sm">{{ errors.tel1 }}</p>
                </div>
            </div>
        </form>
        <div class="flex justify-center space-x-4 py-8">
            <button class="px-4 py-2  border font-semibold rounded-lg  w-28 hover:bg-[#656f84] hover:text-[#fff]">
                Cancel
            </button>
            <button class="px-4 py-2 font-semibold rounded-lg border w-28 bg-[#656f84] text-[#fff] hover:bg-[#fff] hover:text-black" @click="editProfile()">
                Save
            </button>
        </div>

    </div>
</template>

<script setup>
import Swal from 'sweetalert2'
import apiClient from '@/../services/apiClient';
import { reactive, computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const add = reactive({
    pass: '',
    addr:'',
    tel1:'',
})
const errors = reactive({
    pass: '',
    addr:'',
    tel1:'',
})
const apiData = reactive({});
// function getData Api
const getData = async () => {
    //get params url routes
    const id = route.params.id
    // console.log("Params:" + id)
    try {
        const response = await apiClient.get(`/account/admin/${id}`)
        Object.assign(apiData, response.data)
        add.pass=apiData.uid_user.passwordHash
        add.addr=apiData.adm_addr
        add.tel1=apiData.adm_phone
    } catch (error) {
        console.error('Error update data:', error);
    }
}
onMounted(() => {
    getData()
})
const update = async () => {
    const id = route.params.id
    try {
        await apiClient.patch(`/account/admin/member/update/${id}`, {
            passwordHash: add.pass,
            adm_addr: add.addr,
            adm_phone: add.tel1
        });
    } catch (error) {
        console.log(error)
    }
}
const editProfile = () => {
    const id = route.params.id
    if (add.pass === '') {
        errors.pass = 'You cannot use the default or empty'
    }
    else if (add.addr === '') {
        errors.addr= 'You cannot use the default or empty'
    }
    else if (add.tel1 === '') {
        errors.tel1 = 'You cannot use the default or empty'
    }
    // console.log( updateData.addr)
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
            // console.log(add.pass)
            // console.log(add.addr)
            // console.log(add.tel1)
            if (result.isConfirmed) {
                try {
                    await update()
                    await Swal.fire({
                    title: 'successful',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                });
                await router.push(`/admin/info/${id}`)
                } catch (error) {
                    Swal.fire({
                    title: 'Update failed',
                    icon: 'warning',
                    // showConfirmButton: false,
                    timer: 2000
                });
                }
            }
        });
    }

}
// Maximum length for the comment textarea
const maxCommentLength = 5000

const remainingCharacters = computed(() => maxCommentLength - add.comment.length)

// Computed property to show the current length and max length
const characterCount = computed(() => `${add.comment.length}/${maxCommentLength}`)
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