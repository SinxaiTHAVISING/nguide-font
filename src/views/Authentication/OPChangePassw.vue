<template>
    <OppLayout>
        <div class="container  mt-5 p-3 shadow-md  ...">
            <h1 class="font-bold text-xl mb-5 ">Edit information</h1>
            <div class="">
                <h2 class="pb-3 ">Manage my data</h2>
            </div>
            <hr class="pb-3">
            <form action="" method="post" @submit.prevent="edit">
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">Password</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input class="mt-1 block border border-red-200 w-full rounded-md p-2"
                            v-model="add.password" placeholder="Enter your password" autofocus />
                        <p v-if="errors.password" class="text-red text-sm">{{ errors.password }}</p>
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">name of Land Company</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input class="mt-1 block w-full  rounded-md p-2 border border-red-200 bg-gray" type="text"
                            placeholder="" value="---------" readonly>
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">Phone number</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input class="mt-1 block w-full  rounded-md p-2 border border-red-200 bg-gray" type="tel"
                            placeholder="" value="---------" readonly>
                    </div>
                </div>
                <hr class="mt-3">
                <div class="relative mt-2 rounded-md shadow-sm flex-1 mb-4 lg:mb-0 lg:w-full">
                    <label for="comment" class="font-bold">Comment</label>
                    <textarea id="comment" cols="" rows="8" class="w-full rounded-md mt-2 border border-red-200 p-2"
                        maxlength="5000" placeholder="I have edited the information." v-model="add.comment"></textarea>
                    <div class="absolute inset-y-0 right-0 flex items-end pb-3">
                        <span id="currency"
                            class="font-bold rounded-md border-0  py-0 pl-2 pr-7 text-gray-500 sm:text-sm">
                            {{ characterCount }}
                        </span>
                    </div>
                </div>
            </form>

            <div class="flex justify-center space-x-4 py-8">
                <button class="px-4 py-2  text-black border border-black font-semibold rounded-lg w-28" id="cancel">
                    Cancel
                </button>
                <button class="px-4 py-2 text-white bg-gray-400 border border-black font-semibold rounded-lg w-28"
                    id="edit" @click="saveEdit"  :disabled="buttonDisabled">
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
    </OppLayout>
</template>

<script setup>
import Swal from 'sweetalert2'
import { reactive, computed, ref } from 'vue';
import OppLayout from '@/layouts/OppLayout.vue';

const add = reactive({
    password: '12345',
    comment: ''
});
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
const edit = () => {
    if (add.password === '12345') {
        errors.password = 'Your cant not use default password';
    }
    else if (add.password === '') {
        errors.password = 'Your cant not use default password';
    }
    else {
        showStep2()
    }
}
const saveEdit = ()=>{
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
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'successful',
                        icon: 'success'
                    });
                }
            });
        }
        catch (error) {
            Swal.fire({
                icon: "error",
                text: "An error occurred and the data connot be edited"
            });
        }
}
// Maximum length for the textarea
const maxCommentLength = 5000;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const remainingCharacters = computed(() => maxCommentLength - add.comment.length);

// Computed property to show current length and max length
const characterCount = computed(() => `${add.comment.length}/${maxCommentLength}`);

</script>

<style>
#edit {
    background-color: #667085;
}

#edit:hover {
    background-color: #fff;
    color: black;
    /* Ensure text color changes for visibility */
}

#cancel {
    background-color: #fff;
    color: black;
}

#cancel:hover {
    background-color: #667085;
    color: #fff;
    /* Ensure text color changes for visibility */
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
    background-color: #132d5c;
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
    top: 60%;
    left: 60%;
    background-color: #fdf1e8;
    padding: 20px;
    border-color: orange;
}
</style>