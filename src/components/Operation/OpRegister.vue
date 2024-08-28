<script setup>
import Swal from 'sweetalert2';
import { reactive, computed } from 'vue';

// Validation state
const add = reactive({
    name: '',
    id: '',
    password: '',
    land: '',
    phone: '',
    comment: ''
});

const errors = reactive({
    name: '',
    id: '',
    password: '',
    land: '',
    phone: ''
});

// Define methods
const Save = async () => {
    // Reset error messages
    Object.keys(errors).forEach(key => errors[key] = '');

    // Basic validation checks
    if (add.name === '') {
        errors.name = 'The data is invalid or cannot be empty';
    }
    if (add.id === '') {
        errors.id = 'The data is invalid or cannot be empty';
    }
    if (add.password === '') {
        errors.password = 'The data is invalid or cannot be empty';
    }
    if (add.land === '') {
        errors.land = 'The data is invalid or cannot be empty';
    }
    if (add.phone === '') {
        errors.phone = 'The data is invalid or cannot be empty';
    }

    // If there are no validation errors
    if (Object.values(errors).every(error => error === '')) {
        try {
            const result = await Swal.fire({
                text: "Would you like to edit your information?",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "OK",
                cancelButtonText: "Cancel",
                confirmButtonColor: "#0e7490",
                cancelButtonColor: "#ffff",
                customClass: {
                    actions: 'custom-actions' // Add custom class to the actions container
                }
            });

            if (result.isConfirmed) {
                await Swal.fire({
                    title: 'Successful',
                    icon: 'success'
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                text: "This ID already used, please use another one"
            });
        }
    }
};
// Maximum length for the textarea
const maxCommentLength = 5000;

// Computed property to calculate remaining characters
const remainingCharacters = computed(() => maxCommentLength - add.comment.length);

// Computed property to show current length and max length
const characterCount = computed(() => `${add.comment.length}/${maxCommentLength}`);
</script>

<template>
    <h1 class="font-bold pl-3">Register OP</h1>
    <div class="container mt-5 p-3 shadow-md">
        <div>
            <h2 class="pb-3">OP Information</h2>
        </div>
        <hr class="pb-3">
        <form action="" method="post"  @submit.prevent="save">
            <div class="grid grid-cols-7 gap-4 py-2">
                <div>
                    <label for="name">Name of person responsible</label>
                </div>
                <div class="col-span-6">
                    <input type="text" id="name" class="mt-1 block w-full rounded-md p-2 border"
                        placeholder="Please enter the name of the person responsible" v-model="add.name" />
                    <p v-if="errors.name" class="text-red-500 text-sm mt-2">{{ errors.name }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div>
                    <label for="id">ID</label>
                </div>
                <div class="col-span-6">
                    <input type="text" id="id" class="mt-1 block w-full rounded-md p-2 border" placeholder="Please enter ID"
                        v-model="add.id" />
                    <p v-if="errors.id" class="text-red-500 text-sm mt-2">{{ errors.id }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div>
                    <label for="password">Password</label>
                </div>
                <div class="col-span-6">
                    <input type="text" id="password" class="mt-1 block w-full rounded-md p-2 border"
                        placeholder="Please enter your password" v-model="add.password" />
                    <p v-if="errors.password" class="text-red-500 text-sm mt-2">{{ errors.password }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div>
                    <label for="land">Name of land company</label>
                </div>
                <div class="col-span-6">
                    <input type="text" id="land" class="mt-1 block w-full rounded-md p-2 border"
                        placeholder="Please enter the name of the land company you belong to" v-model="add.land" />
                    <p v-if="errors.land" class="text-red-500 text-sm mt-2">{{ errors.land }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div>
                    <label for="phone">Phone number</label>
                </div>
                <div class="col-span-6">
                    <input type="tel" id="phone" class="mt-1 block w-full rounded-md p-2 border"
                        placeholder="Please enter your phone number" v-model="add.phone" />
                    <p v-if="errors.phone" class="text-red-500 text-sm mt-2">{{ errors.phone }}</p>
                </div>
            </div>
            <hr class="mt-3">
            <div class="flex">
                <div class="flex-none w-32 mt-2">
                    <label for="comment">Comment</label>
                </div>
            </div>
            <div class="relative mt-2 rounded-md shadow-sm flex-1 mb-4 lg:mb-0 lg:w-full">
                <textarea id="comment" cols="" rows="8" class="w-full rounded-md mt-2 p-2 border" maxlength="5000"
                    placeholder="Leave a comment about this page" v-model="add.comment"></textarea>
                <div class="absolute inset-y-0 right-0 flex items-end pb-3">
                    <span id="currency" class="font-bold rounded-md border-0  py-0 pl-2 pr-7 text-gray-500 sm:text-sm">
                        {{ characterCount }}
                    </span>
                </div>
            </div>
        </form>

        <div class="flex justify-center space-x-4 py-8">
            <button
                class="px-4 py-2 text-black border border-black font-semibold rounded-lg w-28  hover:bg-[#667085] hover:text-white">
                Cancel
            </button>
            <button class="px-4 py-2 text-white bg-[#667085] border border-black font-semibold rounded-lg w-28 hover:bg-[#fff] hover:text-black"
                @click="Save">
                Save
            </button>
        </div>
    </div>
</template>

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
    background-color: #0e7490;
}
</style>
