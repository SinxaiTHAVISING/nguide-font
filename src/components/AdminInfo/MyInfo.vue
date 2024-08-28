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
                    <label for="">Name</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" placeholder="">
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">ID</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="text" placeholder="">
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone number</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="text" placeholder="">
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Land Conpany Area</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md " type="text" placeholder="" value="">
                </div>
            </div>
        </form>
    </div>
    <!----------------------------- Dialog---------------------------->
    <div v-if="dialogVisible" class="flex w-96 rounded-md shadow-md" id="Dialog">
        <div class="flex-1 px-2 py-1">
            <div class="p-1">
                <span class="text-md font-bold text-center">Enter your password</span>
            </div>
            <div class="p-1 text-black">
                <input type="password" name="" id="" class="w-full p-2 border rounded"
                    placeholder="Please enter your password" v-model="add.password">
                    <p v-if="errors.password" class="text-red text-sm mt-2">{{ errors.password }}</p>
            </div>
            <div class="flex justify-center mt-5">
                <button @click="Cancel"
                    class="rounded-xl border px-3 py-1 font-bold mt-1 w-20 mx-2 hover:bg-[#132d5c] hover:text-white">
                    Cancel
                </button>
                <button @click="editfrom"
                    class="rounded-xl border px-3 py-1 font-bold mt-1 text-white bg-[#132d5c] hover:bg-white hover:text-black w-20 mx-2">
                    OK
                </button>
            </div>
        </div>
    </div>

</template>
<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const add = reactive({
    password: ''
})
const errors = reactive({
    password: ''
})
const editfrom = async () => {
    // Reset error messages
    Object.keys(errors).forEach(key => errors[key] = '');
    // Basic validation checks
    if (add.password === '') {
        errors.password = 'The data is invalid or cannot be empty';
    }
    // else{
    //     router.push('')
    // }
}
const dialogVisible = ref(false);
// const password = ref('');

// Function to show the dialog
let showDialog = () => {
    dialogVisible.value = true;
};
let Cancel = () => {
    dialogVisible.value = false;
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
    top: 30%;
    left: 40%;
    background-color: #ffffff;
    padding: 20px;
    border-color: orange;
    /* display: none; */
}
</style>