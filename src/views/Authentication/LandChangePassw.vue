<template>
    <DefaultLayout>
        <div class="container mt-5 p-3 shadow-md">
            <h1 class="font-bold text-xl mb-5">Edit information</h1>
            <div>
                <h2 class="pb-3">My Informations</h2>
            </div>
            <hr class="pb-3" />
            <form @submit.prevent="edit">
                <!-- Password Field -->
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div>
                        <label for="password">Password</label>
                    </div>
                    <div class="col-span-6">
                        <input id="password"
                            class="mt-1 block border border-red-200 w-full rounded-md focus:border-orange-200 p-2"
                            v-model="add.password" placeholder="Enter your password" autofocus />
                        <p v-if="errors.password" class="text-red text-sm">{{ errors.password }}</p>
                    </div>
                </div>
                <!-- Email Field -->
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div>
                        <label for="email">Email</label>
                    </div>
                    <div class="col-span-6">
                        <input id="email" class="mt-1 block w-full rounded-md p-2 border border-red-200 bg-gray-200"
                            type="email" value="---------" readonly />
                    </div>
                </div>
                <!-- Address Field -->
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div>
                        <label for="address">Address</label>
                    </div>
                    <div class="col-span-6">
                        <input id="address" class="mt-1 block w-full rounded-md p-2 border border-red-200 bg-gray-200"
                            type="text" value="---------" readonly />
                    </div>
                </div>
                <!-- Land Company Area Field -->
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div>
                        <label for="land">Land Company Area</label>
                    </div>
                    <div class="col-span-6">
                        <input id="land" class="mt-1 block w-full rounded-md p-2 border border-red-200 bg-gray-200"
                            type="text" value="---------" readonly />
                    </div>
                </div>
                <!-- Phone Number 1 Field -->
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div>
                        <label for="phone1">Phone number 1</label>
                    </div>
                    <div class="col-span-6">
                        <input id="phone1" class="mt-1 block w-full rounded-md p-2 border border-red-200 bg-gray-200"
                            type="tel" value="---------" readonly />
                    </div>
                </div>
                <!-- Phone Number 2 Field -->
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div>
                        <label for="phone2">Phone number 2</label>
                    </div>
                    <div class="col-span-6">
                        <input id="phone2" class="mt-1 block w-full rounded-md p-2 border border-red-200 bg-gray-200"
                            type="tel" value="---------" readonly />
                    </div>
                </div>
                <!-- Comment Field -->
                <hr class="mt-3" />
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

            <!-- Buttons -->
            <div class="flex justify-center space-x-4 py-8">
                <button class="px-4 py-2 text-black border border-black font-semibold rounded-lg w-28" id="cancel">
                    Cancel
                </button>
                <button class="px-4 py-2 text-white bg-gray-400 border border-black font-semibold rounded-lg w-28"
                    id="edit" @click="saveEdit" :disabled="buttonDisabled">
                    Edit
                </button>
            </div>
        </div>

        <!-- Alert Step 1 -->
        <div v-if="isStep1Dialog" class="flex w-96 guideAlert rounded-md border border-[#ff7100]">
            <div class="basis-16 flex items-start h-15 w-6 rounded-full overflow-hidden">
                <img src="../../../public/logo/LogoFull.png" class="object-cover w-full h-full" />
            </div>
            <div class="flex-1 px-2 py-1">
                <div class="p-1">
                    <span class="text-md font-bold">Press to change new password</span>
                </div>
                <div class="p-1 text-black">
                    <span class="mx-2">The first login requires changing your Password for system security</span>
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
        <div v-if="isStep2Dialog" class="flex w-96 guideAlertEdit rounded-md border border-[#ff7100]">
            <div class="basis-16 flex items-start h-15 w-6 rounded-full overflow-hidden">
                <img src="../../../public/logo/LogoFull.png" class="object-cover w-full h-full" />
            </div>
            <div class="flex-1 px-2 py-1">
                <div class="p-1">
                    <span class="text-md font-bold">Press to change new password</span>
                </div>
                <div class="p-1 text-black">
                    <span class="mx-2">The first login requires changing your Password for system security</span>
                </div>
            </div>
        </div>   
    </DefaultLayout>
</template>

<script setup>
import Swal from 'sweetalert2'
import { reactive, computed, ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
// Form data and errors
const add = reactive({
    password: '12345',
    comment: ''
})
const errors = reactive({
    password: ''
})
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
// Validation and Edit function
const edit =  () => {
    if (add.password === '12345' || add.password === '') {
        errors.password = 'You cannot use the default or empty password'
    } 
    else {
         showStep2()
    }
}

const saveEdit =  ()=>{
    try {
            Swal.fire({
                text: 'Would you like to edit your information?',
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                confirmButtonColor: '#f8b400',
                cancelButtonColor: '#ffffff',
                customClass: {
                    actions: 'custom-actions'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Successful',
                        icon: 'success'
                    })
                }
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                text: 'An error occurred, and the data cannot be edited'
            })
        }
}

// Maximum length for the comment textarea
const maxCommentLength = 5000

const remainingCharacters = computed(() => maxCommentLength - add.comment.length)

// Computed property to show the current length and max length
const characterCount = computed(() => `${add.comment.length}/${maxCommentLength}`)
</script>

<style>

#edit {
    background-color: #667085;
}

#edit:hover {
    background-color: #ffffff;
    color: black;
}

#cancel {
    background-color: #ffffff;
    color: black;
}

#cancel:hover {
    background-color: #667085;
    color: #ffffff;
}

/* Custom CSS for button positioning in SweetAlert2 */
.custom-actions {
    display: flex;
    justify-content: space-between;
}

.custom-actions .swal2-confirm {
    order: 2;
}

.custom-actions .swal2-cancel {
    order: 1;
}

.guideAlert {
    position: absolute;
    float: left;
    top: 29%;
    left: 60%;
    background-color: #fdf1e8;
    padding: 20px;
    border-color: orange;
}

.guideAlertEdit {
    position: absolute;
    float: left;
    top: 75%;
    left: 60%;
    background-color: #fdf1e8;
    padding: 20px;
    border-color: orange;
}
</style>