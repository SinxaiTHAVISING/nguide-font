<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderArea from '@/components/Header/HeaderArea.vue'
import SidebarAreaOP from '@/components/Sidebar/SidebarAreaOP.vue'

// Access the current route
const route = useRoute()

// Condition to disable the sidebar
const isDisabled = computed(() => route.path === '/op/change/password')
</script>

<template>
  <!-- ===== Page Wrapper Start ===== -->
  <div class="flex h-screen overflow-hidden">
    <!-- ===== Sidebar Start ===== -->
    <SidebarAreaOP :class="{ 'pointer-events-none opacity-50': isDisabled }" />
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
