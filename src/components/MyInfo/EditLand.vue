<template>
    <div class="container  p-3 shadow-md lg:mb-36 ...">
        <h1 class="font-bold">Edit information</h1>
        <div class=" mt-5">
            <h2 class="pb-3 ">Land company Information</h2>
        </div>
        <hr class="pb-3">
        <form @submit.prevent="editLand">
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">address</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="text" placeholder=""
                        v-model="updateData.addr">
                    <p v-if="errors.addr" class="text-red text-sm">{{ errors.addr }}</p>
                </div>
            </div>

            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Land Company Area</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="text" placeholder=""
                        v-model="updateData.area">
                    <p v-if="errors.area" class="text-red text-sm">{{ errors.area }}</p>
                </div>
            </div>
            <hr class="mt-3">
            <div class="flex">
                <div class="flex-none w-32 mt-2">
                    <label for="comment">Comment</label>
                </div>
                <!-- <div class="flex-none w-32 mt-1">
                    <button
                        class="px-4 py-2 border hover:text-[#ffff] hover:bg-[#667085] font-semibold rounded-lg shadow-md w-20 text-sm">
                        Save
                    </button>
                </div> -->
            </div>
            <textarea name="" id="" cols="" rows="8" class="w-full border rounded-md mt-2 p-2" maxlength="5000"
                :value="updateData.comment"></textarea>
        </form>

        <div class="flex justify-center space-x-4 py-8">
            <button
                class="px-4 py-2 border  hover:text-[#ffff] hover:bg-[#667085] font-semibold rounded-lg shadow-md  w-28">
                Cancel
            </button>
            <button
                class="px-4 py-2 bg-gray-50 border bg-[#667085] text-[#fff] hover:text-[#000] hover:bg-[#fff] font-semibold rounded-lg shadow-md  w-28"
                @click="editLand()">
                Save
            </button>
        </div>
    </div>
</template>
<script setup>
import Swal from 'sweetalert2'
import { reactive, computed, ref, onMounted } from 'vue'
import apiClient from '@/../services/apiClient'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const apiData = reactive([]);
const updateData = reactive({
    addr: '',
    area: '',
    comment: ''
});
const errors = reactive({
    addr: '',
    area: '',
})

// function getData Api
const getData = async () => {
    //get params url routes
    const id = route.params.id
    // console.log("Params:" + id)
    try {
        const response = await apiClient.get(`/account/land/com/find/${id}`)
        Object.assign(apiData, response.data)
        // console.log(apiData)

        updateData.addr = apiData.lc_addr
        updateData.area = apiData.lc_area1
        updateData.comment = apiData.Memo

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
onMounted(() => {
    getData()
})
// update Land
// const updateData = reactive([]);
const update = async () => {
    const id = route.params.id
    try {
        await apiClient.patch(`/account/land/com/update/${id}`, {
            lc_addr: updateData.addr,
            lc_area1: updateData.area,
            Memo: updateData.comment
        });
    } catch (error) {
        console.log(error)
    }
}
const editLand = () => {
    const id = route.params.id
    if (updateData.addr === '') {
        errors.addr = 'You cannot use the default or empty address'
    }
    if (updateData.area === '') {
        errors.area = 'You cannot use the default or empty company area'
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
                await router.push(`/myland/${id}`)
            }
        });
    }

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