
<template>
    <h1 class="font-bold text-xl px-3">Administrator</h1>
    <div class="container shadow-md  mt-2 p-3 ...">
        <div class="">
            <h2 class="pb-3 ">Land Company Register</h2>
        </div>
        <hr class="pb-3">
        <form action="" method="post">
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Name of person responsible</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" placeholder="" v-model="add.name">
                    <p v-if="errors.name" class="text-red text-sm mt-2">{{ errors.name }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">ID</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="text" placeholder="" v-model="add.id">
                    <p v-if="errors.id" class="text-red text-sm mt-2">{{ errors.id }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Password</label>
                </div>
                <div class="col-span-6 ...">
                    <input type="password" class="mt-1 block w-full border p-2  rounded-md" placeholder=""  v-model="add.password">
                    <p v-if="errors.password" class="text-red text-sm mt-2">{{ errors.password }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Email</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="email" placeholder="" value=""  v-model="add.email">
                    <p v-if="errors.email" class="text-red text-sm mt-2">{{ errors.email }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Name land company</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="text" placeholder="" value=""  v-model="add.nameland">
                    <p v-if="errors.nameland" class="text-red text-sm mt-2">{{ errors.tel }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Name of land Company representive</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="text" placeholder="" value=""  v-model="add.representive">
                    <p v-if="errors.representive" class="text-red text-sm mt-2">{{ errors.representive }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">address</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md " type="text" placeholder="" value=""  v-model="add.address">
                    <p v-if="errors.address" class="text-red text-sm mt-2">{{ errors.address }}</p>

                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Land Conpany Area</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md " type="text" placeholder="" value="" v-model="add.area">
                    <p v-if="errors.area" class="text-red text-sm mt-2">{{ errors.area }}</p>

                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone namber 1</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md " type="tel" placeholder="" value="" v-model="add.tel">
                    <p v-if="errors.tel" class="text-red text-sm mt-2">{{ errors.tel }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Phone namber 2</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="tel" placeholder="" value="" v-model="add.tel2">
                    <p v-if="errors.tel2" class="text-red text-sm mt-2">{{ errors.tel2 }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 py-2">
                <div class="...">
                    <label for="">Land company Code</label>
                </div>
                <div class="col-span-6 ...">
                    <input class="border p-2 mt-1 block w-full  rounded-md" type="text" placeholder="" value="" v-model="add.code">
                    <p v-if="errors.code" class="text-red text-sm mt-2">{{ errors.code }}</p>
                </div>
            </div>
            <div class="flex justify-center space-x-4 py-8 mt-5">
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
import apiClient from '@/../services/apiClient';
import { useRouter } from 'vue-router'
const router = useRouter()

// Define reactive state
const add = reactive({
    name: '',
    id: '',
    password: '',
    email: '',
    nameland:'',
    representive:'',
    address:'',
    area:'',
    tel: '',
    tel2: '',
    code:''
});

const errors = reactive({
    name: '',
    id: '',
    password: '',
    email: '',
    nameland:'',
    representive:'',
    address:'',
    area:'',
    tel: '',
    tel2: '',
    code:''
});

// Define methods
const register = async () => {
  // Reset error messages
  Object.keys(errors).forEach(key => errors[key] = '');

  // List of fields that require validation
  const requiredFields = [
    'name', 'id', 'password', 'email', 'nameland', 'representive',
    'address', 'area', 'tel', 'tel2', 'code'
  ];

  // Perform validation
  requiredFields.forEach(field => {
    if (!add[field]) {
      errors[field] = 'The data is invalid or cannot be empty';
    }
  });

  // If there are no errors, proceed
  if (Object.values(errors).every(error => error === '')) {
    try {
      const result = await Swal.fire({
        text: "Do you want to save?",
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
        // Uncomment and configure the API call as needed
        // const response = await apiClient.post('/account/auth/signup/admin', {
        //   username: add.id,
        //   passwordHash: add.password,
        //   adm_name: add.name,
        //   adm_phone: add.tel,
        //   adm_addr: add.area
        // });

        console.log(response); // Remove this once the API is active

        await Swal.fire({
          title: 'Successful',
          icon: 'success',
          timer: 3000,
        });

        await router.push('/admin/list');
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "An error occurred and the data could not be added",
        text: error.message
      });
    }
  }
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
</style>