<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
</script>
<template>
        <div class="container  mt-5 p-3 shadow-md h-screen ...">
            <div class="flex ...">
                <div class="flex-none w- h-14 ...">
                    <h1 class="font-bold text-xl">OP List</h1>
                </div>
                <div class="grow h-14 ...">
                </div>
                <div class="flex-none w-32 h-14 mr-8 ...">
                    <RouterLink to="">
                        <button
                            class="px-4 py-2 font-semibold rounded-lg shadow-md text-[#fff] bg-[#667085] w-40">
                            Regiter OP
                        </button>
                    </RouterLink>
                </div>
            </div>
            <div class="container">
                <table class="table-auto">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name of person responsible</th>
                            <th>ID</th>
                            <th>Name land of company</th>
                            <th>Registration date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <router-link to="/manage/operation">
                            <tr>
                                <td>1</td>
                                <td>Lockyer</td>
                                <td>1961</td>
                                <td>Auto land</td>
                                <td>12-08-2024</td>
                            </tr>
                        </router-link>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="p-5 lg:px-6 border-t border-gray-100 dark:border-slate-800">
            <div class="join flex justify-center items-center space-x-2">
                <button
                    class="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-l-md hover:bg-gray-300 focus:ring-2 focus:ring-indigo-500">
                    <ChevronLeft />
                </button>
                <button class="join-item btn">1</button>
                <button class="join-item btn btn-active">2</button>
                <button class="join-item btn">3</button>
                <button class="join-item btn">4</button>
                <button
                    class="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-r-md hover:bg-gray-300 focus:ring-2 focus:ring-indigo-500">
                    <ChevronRight />
                </button>

            </div>
        </div>
</template>

<style></style>