<template>
        <h1 class="font-bold">Manage OP data</h1>
        <div class="container  mt-5 p-3 shadow-md  ...">
            <div class="">
                <h2 class="pb-3 ">OP Information</h2>
            </div>
            <hr class="pb-3">
            <form action="" method="post">
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">Name of person responsible</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input type="text" class="mt-1 block w-full  rounded-md border p-2" placeholder="">
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">ID</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input class="mt-1 block w-full  rounded-md border p-2" type="text" placeholder="" value="---------">
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">Password</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input class="mt-1 block w-full  rounded-md border p-2" type="text" placeholder="" value="---------">
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">name of land company</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input class="mt-1 block w-full  rounded-md border p-2" type="text" placeholder="" value="---------">
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-4 py-2">
                    <div class="...">
                        <label for="">Phone namber</label>
                    </div>
                    <div class="col-span-6 ...">
                        <input class="mt-1 block w-full  rounded-md border p-2 " type="tel" placeholder="" value="---------"
                            readonly>
                    </div>
                </div>
                <hr class="mt-3">
                <div class="flex">
                    <div class="flex-none w-32 mt-2">
                        <label for="comment">Comment</label>
                    </div>
                    <div class="flex-none w-32 mt-1">
                        <button
                            class="px-4 py-2 font-semibold rounded-lg shadow-md  w-20 text-sm border hover:bg-[#667085] hover:text-[#fff]">
                            Save
                        </button>
                    </div>
                </div>
                <textarea name="" id="" cols="" rows="8" class="w-full  rounded-md border p-2 mt-2" maxlength="5000"></textarea>
            </form>

            <div class="flex justify-center space-x-4 py-8">
                <button
                    class="px-4 py-2  font-semibold rounded-lg shadow-md w-28 border hover:bg-[#667085] hover:text-[#fff]">
                    Cancel
                </button>
                <button
                    class="px-4 py-2  font-semibold rounded-lg shadow-md w-28 border bg-[#667085] text-[#fff] hover:bg-[#fff] hover:text-[#000]"
                    @click="alertConfirm()">
                    Save
                </button>
            </div>
        </div>
</template>

<script setup>
import Swal from 'sweetalert2'
const alertConfirm = () => {
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