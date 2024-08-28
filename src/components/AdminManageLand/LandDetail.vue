<template>
    <h1 class="font-bold text-xl px-3">Land Conpany</h1>
    <div class=" mt-2 p-3">
        <h1> Land Information</h1>
        <hr class="my-3">
        <form action="" method="post" @submit.prevent="Save">
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Name land company</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border rounded-md p-2" placeholder="Please enter Name land conpany"
                        v-model="add.nameland">
                    <p v-if="errors.nameland" class="text-red text-sm mt-2">{{ errors.nameland }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Name of land company respresentative</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border rounded-md p-2" placeholder="Please enter respresentative"
                        v-model="add.respresentative">
                    <p v-if="errors.respresentative" class="text-red text-sm mt-2">{{ errors.respresentative }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Address</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border rounded-md p-2" placeholder="Please enter address"
                        v-model="add.address" type="">
                    <p v-if="errors.address" class="text-red text-sm mt-2">{{ errors.address }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Land Company Area</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border rounded-md p-2" placeholder="Please enter Company area"
                        v-model="add.area">
                    <p v-if="errors.area" class="text-red text-sm mt-2">{{ errors.area }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Land Company Code</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border rounded-md p-2" placeholder="Please enter Company code"
                        v-model="add.code">
                    <p v-if="errors.code" class="text-red text-sm mt-2">{{ errors.code }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone Number1</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border rounded-md p-2" placeholder="Please enter Phone number1"
                        v-model="add.tel">
                    <p v-if="errors.tel" class="text-red text-sm mt-2">{{ errors.tel }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone Number2</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border rounded-md p-2" placeholder="Please enter Phone number2"
                        v-model="add.tel2">
                </div>
            </div>

            <div class="flex justify-center space-x-4 py-8 mt-5">
                <router-link to="">
                    <button class="px-4 py-2 font-semibold rounded-lg border w-28 btn-cancel">
                        Cancel
                    </button>
                </router-link>
                <button id="deleteButton" class="px-4 py-2 font-semibold rounded-lg border w-28 btn-register"
                    @click.prevent="Save()">
                    Save
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { reactive, ref, computed } from 'vue';
import Swal from 'sweetalert2'; // Ensure SweetAlert2 is installed
import apiClient from '@/../services/apiClient';
import { useRouter } from 'vue-router'
const router = useRouter()

// Define reactive state
const add = reactive({
    nameland: '',
    respresentative: '',
    address: '',
    area: '',
    code: '',
    tel: '',
    tel2: '',
});

const errors = reactive({
    nameland: '',
    respresentative: '',
    address: '',
    area: '',
    code: '',
    tel: '',
});

// Define methods
const Save = async () => {
    // Reset error messages
    Object.keys(errors).forEach(key => errors[key] = '');
    // Basic validation checks
    if (add.nameland === '') {
        errors.nameland = 'The data is invalid or cannot be empty';
    }
    if (add.respresentative === '') {
        errors.respresentative = 'The data is invalid or cannot be empty';
    }
    if (add.address === '') {
        errors.address = 'The data is invalid or cannot be empty';
    }
    if (add.area === '') {
        errors.area = 'The data is invalid or cannot be empty';
    }
    if (add.code === '') {
        errors.code = 'The data is invalid or cannot be empty';
    }
    if (add.tel === '') {
        errors.tel = 'The data is invalid or cannot be empty';
    }
    if (Object.values(errors).every(error => error === '')) {
        try {

            const result = await Swal.fire({
                text: "Do you want to save",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "OK",
                cancelButtonText: "Cancel",
                confirmButtonColor: "#132d5c",
                cancelButtonColor: "#fff",
                customClass: {
                    actions: 'custom-actions' // Add custom class to the actions container
                }
            });

            if (result.isConfirmed) {
                // apiEdit admin Information
                // const response = await apiClient.post('/account/auth/signup/admin', {
                //     username: add.id,
                //     passwordHash: add.password,
                //     adm_name:add.name,
                //     adm_phone:add.tel,
                //     adm_addr:add.area
                // })
                console.log(response)
                await Swal.fire({
                    title: 'Successful',
                    icon: 'success',
                    timer: 3000,
                });
                await router.push('/admin/list')
            }
        } catch (error) {
            // Handle any unexpected failures here
            Swal.fire({
                icon: "error",
                title: "An error occurred and the data could not be added",
                text: error.message
            });
        }
    }
};
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