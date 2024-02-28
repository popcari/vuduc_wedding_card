<template>
  <Header></Header>
  <div class="body w-full absolute top-[70px]">
    <div class="section navbar w-full">
      <el-tabs
        v-model="activeName"
        class="demo-tabs"
        @tab-click="handleClick"
        stretch
        lazy
      >
        <el-tab-pane
          label="Home"
          name="first"
        >
          <template #label>
            <div class="custom-tabs-label flex items-center gap-1">
              <el-icon class="text-[#f6f6f6]"><calendar /></el-icon>
              <div class="hidden sm:block">Home</div>
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane
          label="About us"
          name="second"
        >
          <template #label>
            <div class="custom-tabs-label flex items-center gap-1">
              <el-icon class="text-[#f6f6f6]"><User /></el-icon>
              <div class="hidden sm:block">About us</div>
            </div>
          </template>
        </el-tab-pane>

        <el-tab-pane
          label="Date"
          name="third"
        >
          <template #label>
            <div class="custom-tabs-label flex items-center gap-1">
              <el-icon class="text-[#f6f6f6]"><Calendar /></el-icon>
              <div class="hidden sm:block">Calendar</div>
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane
          label="Location"
          name="fourth"
        >
          <template #label>
            <div class="custom-tabs-label flex items-center gap-1">
              <el-icon class="text-[#f6f6f6]"><LocationInformation /></el-icon>
              <div class="hidden sm:block">Location</div>
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane
          label="Contact"
          name="fifth"
        >
          <template #label>
            <div class="custom-tabs-label flex items-center gap-1">
              <el-icon class="text-[#f6f6f6]"><Phone /></el-icon>
              <div class="hidden sm:block">Contact</div>
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- date -->
    <div class="section date w-full relative">
      <img
        class="w-full h-auto xl:h-screen"
        src="./assets/background.jpeg"
        alt=""
      />
      <div
        class="absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] w-[90%] p-[10px] backdrop-blur-sm bg-white/30 rounded-md md:w-[60%] md:p-[40px_20px] lg:w-[50%] lg:p-[50px_0px]"
      >
        <p class="flex justify-center mb-4 lg:text-xl">
          Time to go for our happiest day
        </p>

        <div class="h-full flex justify-self-center justify-center">
          <vue3-flip-countdown
            deadline="2024-03-24 9:00:00"
            mainFlipBackgroundColor="#f6f6f6"
            secondFlipBackgroundColor="#fff"
            mainColor="#bb8956"
            secondFlipColor="#cda423"
          />
        </div>
      </div>
    </div>

    <div class="section carousel w-full">
      <div class="block text-center">
        <el-carousel
          trigger="click"
          height="700px"
          type="card"
          autoplay="false"
          interval="0"
        >
          <el-carousel-item
            v-for="item in carouselList"
            :key="item"
          >
            <img
              class="object-cover"
              :src="item.src"
              alt=""
            />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="section w-full"></div>
    <el-backtop
      :right="100"
      :bottom="100"
    />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import Header from './components/Header.vue';
  import { carouselList } from './constants/constants';
  import type { TabsPaneContext } from 'element-plus';
  import { Calendar, LocationInformation, User, Phone } from '@element-plus/icons-vue';


  const activeName = ref('first');
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
  };
</script>

<style scoped>
  .section {
    margin-bottom: 40px;
  }
  .date {
  }
  .demo-tabs > .el-tabs__item {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  /deep/.flip-clock {
    margin: 0 !important;
    width: fit-content;
  }
</style>
