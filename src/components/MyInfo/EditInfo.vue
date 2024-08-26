<template>
    <h1 class="font-bold">Edit information</h1>
    <div class="container  mt-5 p-3 shadow-md  ...">
        <div class="">
            <h2 class="pb-3 ">My Informations</h2>
        </div>
        <hr class="pb-3">
        <form action="" method="post">
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Password</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md" placeholder="" :value="12345" autofocus>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Email</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md" type="email" placeholder="" value=""
                        readonly>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">address</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md" type="text" placeholder="" value=""
                        readonly>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Land Company Area</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md" type="text" placeholder="" value=""
                        readonly>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone namber 1</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md " type="tel" placeholder="" value=""
                        readonly>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone namber 2</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border p-2 rounded-md" type="tel" placeholder="" value=""
                        readonly>
                </div>
            </div>
            <hr class="mt-3">
            <div class="flex">
                <div class="flex-none w-32 mt-2">
                    <label for="comment">Comment</label>
                </div>
            </div>
            <textarea name="" id="" cols="" rows="8" class="w-full border p-2 rounded-md mt-2" maxlength="5000"></textarea>
        </form>

        <div class="flex justify-center space-x-4 py-8">
            <button
                class="px-4 py-2  border font-semibold rounded-lg  w-28">
                Cancel
            </button>
            <button
                class="px-4 py-2 font-semibold rounded-lg border w-28"
                @click="alertConfirm()">
                Save
            </button>
        </div>
    </div>
</template>

<script>
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