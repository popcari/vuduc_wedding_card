<template>
  <div
    class="px-4 w-full h-[70px] flex items-center justify-center gap-4 bg-[#fffaf3]"
  >
    <div
      class="satisfy-font text-[14px] flex justify-end lg:text-[24px] text-[#bb9c6a]"
    >
      {{ groomName }}
    </div>
    <img
      class="h-full backdrop-blur-sm"
      src="../assets/header_logo.png"
      alt=""
    />
    <div
      class="satisfy-font text-[14px] flex justify-start lg:text-[24px] text-[#bb9c6a]"
    >
      {{ brideName }}
    </div>
  </div>
</template>
<script setup lang="ts">
  const groomName = 'Vũ Đình Đức';
  const brideName = 'Nguyễn Thị Bái';
</script>
<style scoped></style>
