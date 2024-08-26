<script setup>
import { useSidebarStore } from '@/stores/sidebar'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { ArrowLeft } from 'lucide-vue-next'
import { LayoutGrid, CableCar, NotebookPen, ChevronDown, MessageSquare, IdCard, Building2  } from 'lucide-vue-next';
const target = ref(null)

const sidebarStore = useSidebarStore()

onClickOutside(target, () => {
  sidebarStore.isSidebarOpen = false
});

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

</script>

<template>
  <aside
    class="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0"
    :class="{
      'translate-x-0': sidebarStore.isSidebarOpen,
      '-translate-x-full': !sidebarStore.isSidebarOpen
    }" ref="target">
    <!-- SIDEBAR HEADER -->
    <div class="flex items-center justify-between gap-2 px-6 py-1 lg:py-">
      <router-link to="/">
        <img src="@/assets/images/logo/logoNg.png" alt="Logo" />

      </router-link>

      <button class="block lg:hidden" @click="sidebarStore.isSidebarOpen = false">
        <ArrowLeft class="fill-current" fill="none" />
      </button>
    </div>
    <!-- SIDEBAR HEADER -->

    <div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <!-- Sidebar Menu -->
      <ul class="space-y-2 font-medium text-white p-2">
        <li>
          <routerLink :to="{ name: 'LandDashboard' }"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <LayoutGrid />
            <span class="ms-3">Dashboard</span>
          </routerLink>
        </li>
        <li
          class="relative flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <router-link to=""
            class="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <NotebookPen />
            <span class="ms-3">Management quotation</span>
          </router-link>
          <ChevronDown class="lg:ml-3 md:ml-2 cursor-pointer" :class="{ 'rotate-180': isOpen }" @click="toggleMenu" />
          <ul v-show="isOpen" class="absolute mt-2 w-48 overflow-auto z-10"
            :style="{ top: '100%' }">
            <li class="p-2">Quotation Waiting</li>
            <li class="p-2">Quotation Writing</li>
            <li class="p-2">Completed Quitation</li>
            <li class="p-2">Confirmed Quotation</li>
            <li class="p-2">Cancel</li>
            <li class="p-2">Check Quotation</li>
          </ul>
        </li>
        <li :class="{ 'pt-60': isOpen }">
          <router-link to=""
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <MessageSquare />
            <span class="ms-3">Chatting</span>
          </router-link>
        </li>
        <li>
          <router-link to=""
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <Building2  />
            <span class="ms-3">Land company management</span>
          </router-link>
        </li>
        <li
          class="relative flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <router-link to=""
            class="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <NotebookPen />
            <span class="ms-3">My information</span>
          </router-link>
          <!-- <ChevronDown class="lg:ml-3 md:ml-2 cursor-pointer" :class="{ 'rotate-180': infoOpen }" @click="toggleInfo" />
          <ul v-show="infoOpen" class="absolute mt-2 w-48 overflow-auto z-10"
            :style="{ top: '100%' }">
            <li class="p-2">Manage my info</li>
            <li class="p-2">Manage my land</li>
          </ul> -->
        </li>
        <li>
          <router-link to="/admin/list"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <IdCard />
            <span class="ms-3">Administrator manage</span>
          </router-link>
        </li>
      </ul>
      <!-- Sidebar Menu -->
    </div>
  </aside>
</template>

<style>
ul {
  transition: opacity 0.3s ease;
}
ul[style*="display: none"] {
  opacity: 0;
}
ul[style*="display: block"] {
  opacity: 1;
}
</style>
