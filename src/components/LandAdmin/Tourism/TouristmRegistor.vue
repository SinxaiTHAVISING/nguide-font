<template>
    <h1 class="font-bold text-xl px-3">Tourism registration</h1>
    <div class="shadow-md mt-5 p-3">
        <h1> Tourism information</h1>
        <hr class="my-3">
        <form action="" method="post" @submit.prevent="register">
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Tourism type</label>
                </div>
                <div class="col-span-6 ...">
                    <select id="" name="tourisType" class="w-32 rounded-md border p-2" v-model="add.type">
                        <option value="" selected>Select Type</option>
                        <option value="2">Select Type2</option>
                        <option value="3">Select Type3</option>
                    </select>
                    <!-- <p v-if="typeError" class="text-red-500 text-sm mt-2">{{ typeError }}</p> -->
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Name of tourism attraction</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border rounded-md p-2"
                        placeholder="Please enter Name of tourism attraction" v-model="add.name">
                    <p v-if="errors.name" class="text-red text-sm mt-2">{{ errors.name }}</p>
                </div>
            </div>
            <!-- Address and Button -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 py-2">
                <div class="">
                    <label for="">address</label>
                </div>
                <div class="col-span-1 pt-2 ...">
                    <router-link to="/tourism/registor/map">
                        <button class="px-4 py-2  border  font-semibold rounded-lg shadow-md  w-60 text-sm btn-address">
                            Enter address
                        </button>
                    </router-link>
                </div>
                <div class="grid grid-cols-2 ml-36 sm:grid-cols-2 md:grid-cols-2">
                    <div class="w-28 mt-5">
                        <label for="">Lettitude</label>
                    </div>
                    <div class="w-28 ml-12">
                        <input class="mt-1 block w-80 rounded-md p-2 border" id="latitude" placeholder=""
                            name="lattitude" v-model="add.latitude" readonly>
                    </div>
                </div>
                <div class="grid grid-cols-2 lg:mx-72 md:mx-0 pl-12">
                    <div class="w-28 mt-5 ">
                        <label for="">Longtitude</label>
                    </div>
                    <div class="w-28 lg:ml-28">
                        <input class="mt-1 block w-96 rounded-md p-2 border" id="longtitude" placeholder=""
                            name="longtitude" v-model="add.longtitude" readonly>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full border rounded-md p-2" placeholder="Starting address"
                        v-model="add.address" readonly>
                    <p v-if="errors.address" class="text-red text-sm mt-2">{{ errors.address }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                </div>
                <div class="col-span-6 ...">
                    <input class="mt-1 block w-full  rounded-md border p-2"
                        placeholder="Detailed Address (Enter additional information)" v-model="add.addressDetail">
                    <p v-if="errors.addressDetail" class="text-red text-sm mt-2">{{ errors.addressDetail }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="image">Images</label>
                </div>
                <div class="col-span-6 ...">
                    <input type="file" id="getFile" class="block w-80 text-sm  rounded 
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-gray-600
                            hover:file:bg-gray-700" ref="fileInput" accept="image/*" @change="handleFileInput" multiple
                        reactive="files" />
                    <p v-if="errors.files" class="text-red-500 text-sm mt-2">{{ errors.files }}</p>
                    <p v-if="files.length > 5" class="text-red text-sm mt-2">
                        You can only upload up to 5 files.
                    </p>

                    <div v-if="files.length > 0" class="mt-4 grid grid-cols-5 gap-2">
                        <div v-for="(file, index) in files" :key="index"
                            class="relative w-full h-full  border border-gray-300 rounded-lg overflow-hidden">
                            <img :src="file.preview" :alt="file.name" class="object-cover w-full h-full" />
                            <button @click="removeFile(index, $event)"
                                class="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-md text-xs">
                                &times;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="image">Information</label>
                </div>
                <div class="col-span-6 relative mt-2 rounded-md shadow-sm flex-1 mb-4 lg:mb-0 lg:w-full">
                    <textarea id="comment" cols="" rows="8" class="w-full rounded-md mt-2 border p-2" maxlength="1000"
                        placeholder="Leave a comment about this page" v-model="add.info"></textarea>
                    <div class="absolute inset-y-0 right-0 flex items-end pb-3">
                        <span id="currency"
                            class="font-bold rounded-md border-0  py-0 pl-2 pr-7 text-gray-500 sm:text-sm">
                            {{ characterCount }}
                        </span>
                    </div>
                    <p v-if="errors.info" class="text-red text-sm mt-2">{{ errors.info }}</p>
                </div>
            </div>
            <div class="flex flex-col gap-4 lg:gap-6 p-4">
                <!-- Entrance Fee Section -->
                <div class="flex-none lg:w-44">
                    <label for="entranceFee" class="block text-sm font-semibold">Entrance Fee</label>
                    <button type="button" @click="addField"
                        class="mt-2 px-4 py-2 font-semibold rounded-lg shadow-md w-full sm:w-auto text-sm btn-add">
                        &plus; Add
                    </button>
                </div>

                <!-- Dynamic Input Fields Section -->
                <div v-for="(field, index) in fields" :key="index"
                    class="flex-1 flex flex-col lg:flex-row lg:gap-4 mt-4">
                    <div class="flex-1 mb-4 lg:mb-0 ">
                        <input id="detailedAddress" type="text" class="mt-2 block w-full rounded-md p-2 border"
                            placeholder="Please enter your option" v-model="field.option" />
                    </div>

                    <div class="relative mt-2 rounded-md shadow-sm flex-1 mb-4 lg:mb-0">
                        <input type="text" name="price" id="price" class="block w-full rounded-md p-2 border"
                            placeholder="Please enter specify amount" v-model="field.price">
                        <div class="absolute inset-y-0 right-0 flex items-center">
                            <span id="currency"
                                class="font-bold rounded-md border-0 py-0 pl-2 pr-7 text-gray-500 sm:text-sm">
                                USD
                            </span>
                        </div>
                    </div>
                    <!-- Trash Button -->
                    <div class="flex-none lg:w-20 lg:flex lg:justify-end">
                        <button @click="removeField(index)">
                            <Trash2 color="gray" :size="32" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="image">Display status on nGuide</label>
                </div>
                <div class="col-span-6 flex flex-row-2...">
                    <div class="form-control mr-24">
                        <input type="radio" class="radio rounded-lg mr-2 " name="show" v-model="add.dispalyStatus" />
                        <span class="label-text">visible</span>
                    </div>
                    <div class="form-control">
                        <input type="radio" class="radio rounded-lg mr-2" name="show" v-model="add.dispalyStatus" />
                        <span class="label-text">hidden</span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                </div>
                <div class="col-span-6 ...">
                    <p v-if="errors.dispalyStatus" class="text-red-500 text-sm mt-2">{{ errors.dispalyStatus }}</p>
                </div>
            </div>
            <div class="flex justify-center space-x-4 py-8">
                <router-link to="">
                    <button class="px-4 py-2 font-semibold rounded-lg border w-28 btn-cancel">
                        Cancel
                    </button>
                </router-link>
                <button id="deleteButton" class="px-4 py-2 font-semibold rounded-lg border w-28 btn-register"
                    @click.prevent="register()">
                    register
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { reactive, ref, computed } from 'vue';
import Swal from 'sweetalert2'; // Ensure SweetAlert2 is installed
import { Trash2 } from 'lucide-vue-next'; // Ensure lucide-vue-next is installed

// Define reactive state
const add = reactive({
    type: '',
    name: '',
    latitude: '',
    longitude: '', // Fixed typo from 'longtitude' to 'longitude'
    address: '',
    addressDetail: '',
    files: '',
    info: '',
    option: '',
    price: '',
    dispalyStatus: '' // Fixed typo from 'dispalyStatus' to 'displayStatus' if needed
});

const errors = reactive({
    name: '',
    address: '',
    addressDetail: '',
    files: '',
    info: '',
    type: '',
    dispalyStatus: '' // Fixed typo from 'dispalyStatus' to 'displayStatus' if needed
});

// Define methods
const register = async () => {
    // Reset error messages
    Object.keys(errors).forEach(key => errors[key] = '');

    // Basic validation checks
    if (add.name === '') {
        errors.name = 'The data is invalid or cannot be empty';
    }
    if (add.address === '') {
        errors.address = 'The data is invalid or cannot be empty';
    }
    if (add.addressDetail === '') {
        errors.addressDetail = 'The data is invalid or cannot be empty';
    }
    if (add.info === '') {
        errors.info = 'The data is invalid or cannot be empty';
    }
    const files = ref([]); // Using ref for managing files
    if (files.value === "") {
        errors.files = 'Please enter photo';
    }
    if (add.dispalyStatus === '') {
        errors.dispalyStatus = 'Please specify status';
    }
    if (Object.values(errors).every(error => error === '')) {
        try {
            const result = await Swal.fire({
                text: "Would you like to add more information",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "OK",
                cancelButtonText: "Cancel",
                confirmButtonColor: "#132d5c",
                cancelButtonColor: "#fff",
                customClass: {
                    actions: 'custom-actions' // Add custom class to the actions container
                }
            });

            if (result.isConfirmed) {
                await Swal.fire({
                    title: 'Successful',
                    icon: 'success',
                    timer: 3000,
                    willClose: () => {
                        // This function is called when the popup is about to close
                        window.location.reload(); // Reload the page
                    }
                });
            }
        } catch (error) {
            // Handle any unexpected failures here
            Swal.fire({
                icon: "error",
                title: "An error occurred and the data could not be added",
                text: error.message
            });
        }
    }
};

// File management
const files = ref([]); // Using ref for managing files
const handleFileInput = (event) => {
    const selectedFiles = Array.from(event.target.files);
    if (files.value.length + selectedFiles.length > 5) {
        Swal.fire({
            title: "You can upload a maximum of 5 files.",
            timer: 3000,
        });
        // Reset the file input after processing
        event.target.value = '';
        return;
    }

    selectedFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            files.value.push({
                name: file.name,
                preview: e.target.result,
            });
        };
        reader.readAsDataURL(file);
    });
    event.preventDefault();
};

const removeFile = (index, event) => {
    files.value.splice(index, 1);
    event.preventDefault();
};

// count text on textarea
// Maximum length for the textarea
const maxCommentLength = 1000;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const remainingCharacters = computed(() => maxCommentLength - add.info.length);

// Computed property to show current length and max length
const characterCount = computed(() => `${add.info.length}/${maxCommentLength}`);
const fields = ref([
    { option: '', price: '' } // Initialize with one set of fields if needed
])

function addField() {
    fields.value.push({ option: '', price: '' })
}

function removeField(index) {
    fields.value.splice(index, 1)
}

</script>
<style>
.btn-add {
    background-color: #667085;
    color: white;
}

.btn-address {
    background-color: #667085;
    color: white;
}

.btn-edit:hover {
    background-color: #667085;
    color: white;
}

.btn-cancel:hover {
    background-color: #667085;
    color: white;
}

.btn-register {
    background-color: #667085;
    color: white;
}

.btn-register:hover {
    background-color: #fff;
    color: black;
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