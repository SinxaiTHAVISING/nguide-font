<template>
    <div class="flex  items-center p-3">
        <div class="flex-auto w-full md:w-auto">
            <h1 class="font-bold text-xl">Administrator List</h1>
        </div>
        <div class="">
            <router-link to="/admin/registor">
                <button class="px-4 py-2 font-semibold rounded-lg shadow-md w-full btn-regis">
                    Registration
                </button>
            </router-link>
        </div>
    </div>

    <div class="py-5">
        <form action="" method="get">
            <div class="flex flex-wrap items-center">
                <div class="mx-0 md:mx- mt-3 md:mt-0">
                    <input type="text" name="search" id="" class="rounded-md w-full md:w-80 p-2 border border-black"
                        placeholder="Please enter your search">
                </div>
                <div class="w-full md:w-auto mt-3 md:mt-0 md:ml-5 ">
                    <button
                        class="px-4 py-2 bg-[#132d5c] text-white font-semibold rounded-lg shadow-md hover:bg-[#0e192e] w-full md:w-auto"
                        type="submit">
                        Search
                    </button>
                </div>
            </div>
        </form>
    </div>
    <div class="overflow-x-auto h-screen">
        <table class="min-w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    <th class="text-center border px-4 py-2">No</th>
                    <th class="text-center border px-4 py-2">Name</th>
                    <th class="text-center border px-4 py-2">ID</th>
                    <th class="text-center border px-4 py-2">Land Company area</th>
                    <th class="text-center border px-4 py-2">Registration date</th>
                    <th class="text-center border px-4 py-2">Tool</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(member, index) in apiData" :key="index">
                    <td class="px-4 py-2 border">{{ index+1 }}</td>
                    <td class="px-4 py-2 border">{{ member.adm_name }}</td>
                    <td class="px-4 py-2 border">{{ member.uid_user.username }}</td>
                    <td class="px-4 py-2 border">{{ member.adm_addr }}</td>
                    <td class="px-4 py-2 border">{{ member.created_at }}</td>
                    <td class="px-4 py-2 text-center border">
                        <router-link :to="`/admin/detail/${member.adm_id}`">
                            <button class="px-4 py-2 border-2 font-semibold rounded-lg shadow-md w-20 btn-del">
                                Detail
                            </button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="mt-3">
        <ul>
            <li v-for="item in paginatedData" :key="item.id">{{ item.name }}</li>
        </ul>

        <div class="pagination flex justify-center items-center space-x-2">
            <button
                class="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-l-md hover:bg-gray-300 focus:ring-2 focus:ring-indigo-500">
                <ChevronLeft />
            </button>
            <a href="#"
                class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">1</a>
            <button
                class="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-r-md hover:bg-gray-300 focus:ring-2 focus:ring-indigo-500">
                <ChevronRight />
            </button>
        </div>

    </div>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue';
import apiClient from '@/../services/apiClient';

// Define a reactive array to store API data
const apiData = reactive([]);
// Define a ref to track loading state
const loading = ref(true);
// Function to fetch data from the API
const fetchData = async () => {
    try {
        const response = await apiClient.get('/account/admin/member/list');
        apiData.push(...response.data); // Store the fetched data in the reactive array
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loading.value = false; // Stop loading once data is fetched
    }
};

// Fetch data when the component is mounted
onMounted(() => {
    fetchData();
});
</script>
<style>
.btn-regis {
    background-color: #667085;
    color: white
}

.btn-edit:hover {
    background-color: #667085;
    color: white;
}

.btn-del:hover {
    background-color: #667085;
    color: white;
}

.btn-all-del:hover {
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

.swal2-confirm {
    background-color: #132d5c;
}
</style>