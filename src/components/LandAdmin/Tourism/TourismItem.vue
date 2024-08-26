<template>
        <div class="flex  items-center p-3">
            <div class="flex-auto w-full md:w-auto h-14">
                <h1 class="font-bold text-xl">Tourism Items</h1>
            </div>
            <div class="">
                <router-link to="/tourism/registor">
                    <button
                        class="px-4 py-2 font-semibold rounded-lg shadow-md w-full md:w-56 btn-regis">
                        Tourism Registration
                    </button>
                </router-link>
            </div>
        </div>

        <div class="shadow-md my-3 p-5">
            <h1 class="text-lg">Search for tourism</h1>
            <hr class="my-2">
            <form action="" method="get">
                <div class="flex flex-wrap items-center">
                    <div class="flex-none w-full md:w-36">
                        <select name="categories" id="" class="rounded-md w-full p-2 border border-black">
                            <option value="" selected>All</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    </div>
                    <div class="mx-0 md:mx-5 mt-3 md:mt-0">
                        <input type="text" name="search" id="" class="rounded-md w-full md:w-80 p-2 border border-black"
                            placeholder="Please enter your search term">
                    </div>
                    <div class="w-full md:w-auto mt-3 md:mt-0 md:ml-5 ">
                        <button
                            class="px-4 py-2 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-800 w-full md:w-auto"
                            type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <div class="shadow-md mt-5 p-5 h-screen">
            <div class="flex ...">
                <div class="flex-none w- h-14 ...">
                    <h1 class=" text-xl">Total 10 items</h1>
                </div>
                <div class="grow h-14 ...">
                </div>
                <div class="flex-none w-32 h-14 mr-24 ...">
                    <select name="listTable" id="" class="rounded-md">
                        <option value="">1item</option>
                        <option value="">2item</option>
                        <option value="">3item</option>
                        <option value="">4item</option>
                        <option value="">5item</option>
                        <option value="">6item</option>
                        <option value="">7item</option>
                        <option value="">8item</option>
                        <option value="">9item</option>
                        <option value="">10item</option>
                    </select>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th class="text-center px-4 py-2"><input id="comments" name="comments" type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"></th>
                            <th class="text-center px-4 py-2">No</th>
                            <th class="text-center px-4 py-2">Tourism type</th>
                            <th class="text-center px-4 py-2">Item name</th>
                            <th class="text-center px-4 py-2">Status</th>
                            <th class="text-center px-4 py-2">Registration date</th>
                            <th class="text-center px-4 py-2" colspan="2">Management</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                            <td class="px-4 py-2 text-center">
                                <input id="comments" name="comments" type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                            </td>
                            <td class="px-4 py-2 text-center">1</td>
                            <td class="px-4 py-2 text-center">Lorem ipsum dolor sit amet.</td>
                            <td class="px-4 py-2 text-center">Lorem, ipsum.</td>
                            <td class="px-4 py-2 text-center">Y</td>
                            <td class="px-4 py-2 text-center">{{ Date() }}</td>
                            <td class="px-4 py-2 text-center">
                                <button
                                    class="px-4 py-2 border-2 font-semibold rounded-lg shadow-md w-20 btn-edit">
                                    Edit
                                </button>
                            </td>
                            <td class="px-4 py-2 text-center">
                                <button
                                    class="px-4 py-2 border-2 font-semibold rounded-lg shadow-md w-20 btn-del"
                                    @click="alertConfirm()">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button class="px-4 py-2  border-2 font-semibold rounded-lg shadow-md w-20 mt-3 btn-all-del"
                @click="alertConfirm()">
                Delete
            </button>
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
import Swal from 'sweetalert2'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
const alertConfirm = () => {
    Swal.fire({
        text: "Do you went to delete the data",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#fff",
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
    }).catch((error) => {
        // Handle any unexpected failures here
        Swal.fire({
            icon: "error",
            title: "An error occurred and the data could not be delete",
            text: error.message
        });
    });
}
</script>
<style>
.btn-regis{
    background-color:#667085;
    color:white
}
.btn-edit:hover{
    background-color: #667085;
    color: white;
}
.btn-del:hover{
    background-color: #667085;
    color: white;
}
.btn-all-del:hover{
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