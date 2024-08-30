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
                    <input class="mt-1 block w-full border p-2 rounded-md" type="password" placeholder="" autofocus
                        v-model="add.pass">
                        <p v-if="errors.pass" class="text-red text-sm">{{ errors.pass }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Email</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md" type="email" placeholder=""
                        v-model="add.email">
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">address</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md" type="text" placeholder=""
                        v-model="add.addr">
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Land Company Area</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md" type="text" placeholder=""
                        v-model="add.area">
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone namber 1</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md " type="tel" placeholder=""
                        v-model="add.tel1">
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone namber 2</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md" type="tel" placeholder=""
                        v-model="add.tel2">
                </div>
            </div>
            <hr class="mt-3">
            <div class="relative mt-2 rounded-md shadow-sm flex-1 mb-4 lg:mb-0 lg:w-full">
                <label for="comment" class="font-bold">Comment</label>
                <textarea id="comment" rows="8" class="w-full rounded-md mt-2 border border-red-200 p-2"
                    maxlength="5000" placeholder="Leave a comment about this page" v-model="add.comment"></textarea>
                <div class="absolute inset-y-0 right-0 flex items-end pb-3">
                    <span id="characterCount"
                        class="font-bold rounded-md border-0 py-0 pl-2 pr-7 text-gray-500 sm:text-sm">
                        {{ characterCount }}
                    </span>
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
    email:'',
    addr:'',
    area:'',
    tel1:'',
    tel2:'',
    comment:''
})
const errors = reactive({
    pass: '',
    email:'',
    addr:'',
    area:'',
    tel1:'',
    tel2:'',
    comment:''
})
const apiData = reactive({});
// function getData Api
const getData = async () => {
    //get params url routes
    const id = route.params.id
    // console.log("Params:" + id)
    try {
        const response = await apiClient.get(`/account/land/com/find/${id}`)
        Object.assign(apiData, response.data)
        add.pass=apiData.uid_user.passwordHash
        add.email=apiData.uid_user.email
        add.addr=apiData.lc_addr
        add.area=apiData.lc_area1
        add.tel1=apiData.lc_phone1
        add.tel2=apiData.lc_phone2
        add.comment=apiData.Memo
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
        await apiClient.patch(`/account/land/com/update/${id}`, {
            passwordHash: add.pass,
            email: add.email,
            lc_addr: add.addr,
            lc_area1: add.area,
            lc_phone1:  add.tel1,
            lc_phone2:  add.tel2,
            Memo: add.comment
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
    else if (add.email === '') {
        errors.pass = 'You cannot use the default or empty'
    }
    else if (add.addr === '') {
        errors.pass = 'You cannot use the default or empty'
    }
    else if (add.area === '') {
        errors.pass = 'You cannot use the default or empty'
    }
    else if (add.tel1 === '') {
        errors.pass = 'You cannot use the default or empty'
    }
    else if (add.tel2 === '') {
        errors.pass = 'You cannot use the default or empty'
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
            if (result.isConfirmed) {
                await update()
                await Swal.fire({
                    title: 'successful',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                });
                await router.push(`/myinfo/${id}`)
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