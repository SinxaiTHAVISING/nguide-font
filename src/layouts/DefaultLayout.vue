<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import HeaderArea from '@/components/Header/HeaderArea.vue'
import SidebarArea from '@/components/Sidebar/SidebarArea.vue'
// Access the current route
const route = useRoute()
// chack type
const userType = ref(null);
const id = ref(null)
function getLocal() {
  const data = JSON.parse(localStorage.getItem('responeData'))
  userType.value = data.usertype;
  id.value = data.uid // Assuming 'username' should be stored in id
  // console.log(id.value)
}
onMounted(() => {
  getLocal();
})
// Condition to disable the sidebar
const opDisabled = computed(() => route.path === `/op/change/password/${id.value}`)
const landDisabled = computed(() => route.path === `/land/change/password/${id.value}`)
const adminDisabled = computed(() => route.path === `/admin/change/password/${id.value}`)
</script>

<template>
  <!-- ===== Page Wrapper Start ===== -->
  <div class="flex h-screen overflow-hidden">
    <!-- ===== Sidebar Start ===== -->
    <SidebarArea v-if="userType === 3" :class="{ 'pointer-events-none opacity-50': opDisabled }" />
    <SidebarArea v-if="userType === 2" :class="{ 'pointer-events-none opacity-50': landDisabled }" />
    <SidebarArea v-if="userType === 1" :class="{ 'pointer-events-none opacity-50': adminDisabled }" />
    <!-- ===== Sidebar End ===== -->

    <!-- ===== Content Area Start ===== -->
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-white text-black">
      <!-- ===== Header Start ===== -->
      <HeaderArea />
      <!-- ===== Header End ===== -->

      <!-- ===== Main Content Start ===== -->
      <main>
        <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-5">
          <slot></slot>
        </div>
      </main>
      <!-- ===== Main Content End ===== -->
    </div>
  </div>
  <!-- ===== Page Wrapper End ===== -->
</template>
