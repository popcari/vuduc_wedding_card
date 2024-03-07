<template>
  <Header></Header>
  <div class="body w-full absolute text-center top-[70px] px-4">
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
              <el-icon class="text-[#f6f6f6]"><HomeFilled /></el-icon>
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
    <!-- carousel -->
    <div class="section carousel w-full">
      <h2
        id="gallery"
        class="text-[40px] mb-4 lg:text-[50px] cursor-pointer"
      >
        <a href="#gallery"> Our gallery </a>
      </h2>
      <carousel
        wrapAround
        :items-to-show="1.5"
        :transition="1500"
        :autoplay="3000"
      >
        <slide
          v-for="item in carouselList"
          :key="item"
        >
          <img
            class="object-cover"
            :src="item.src"
            alt=""
          />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
    <!-- about us -->
    <div class="section about w-full">
      <h2
        id="about"
        class="text-[40px] mb-4 lg:text-[50px] cursor-pointer"
      >
        <a href="#about"> About us </a>
      </h2>
      <div class="flex flex-col gap-[10px]">
        <div class="groom text-xs lg:text-sm flex row">
          <div class="imageSection flex items-end">
            <img
              class="h-[250px] lg:h-[400px]"
              src="./assets/wedding_carousel_logo/img_10.jpg"
              alt=""
            />
            <div
              class="infoSection mb-[2%] p-2 backdrop-invert bg-white w-[250px] h-fit text-left ml-[-30px] rounded-lg shadow-lg"
            >
              <ul>
                <li>
                  <label class="font-semibold"
                    >Name: <span>Vũ Đình Đức</span></label
                  >
                </li>
                <li>
                  <label class="font-semibold"
                    >BOD: <span>11/01/1998</span></label
                  >
                </li>
                <li>
                  <label>
                    As you take this step into forever, may your days be filled
                    with love, your nights be filled with laughter, and your
                    hearts be forever intertwined
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bride text-xs lg:text-sm flex flex-row-reverse">
          <div class="imageSection flex items-end flex-row-reverse">
            <img
              class="h-[250px] lg:h-[400px]"
              src="./assets/wedding_carousel_logo/img_9.jpg"
              alt=""
            />
            <div
              class="infoSection mb-[2%] p-2 backdrop-invert bg-white w-[250px] h-fit mr-[-30px] text-right rounded-lg shadow-lg"
            >
              <ul>
                <li>
                  <label class="font-semibold"
                    >Name: <span>Nguyễn Thị Bái</span></label
                  >
                </li>
                <li>
                  <label class="font-semibold"
                    >BOD: <span>27/11/1998</span></label
                  >
                </li>
                <li>
                  <label>
                    To the radiant bride, may your marriage be as stunning as
                    you are today, filled with love, laughter, and a lifetime of
                    cherished moments
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- calendar -->
    <div class="section calendar w-full flex flex-col items-center">
      <h2
        id="calendar"
        class="text-[40px] mb-4 lg:text-[50px] cursor-pointer"
      >
        <a href="#calendar"> Calendar </a>
      </h2>
      <div class="calendar-group w-full md:w-[60%] lg:w-[40%]">
        <VCalendar
          view="monthly"
          :expanded="true"
          :attributes="attributes"
        />
      </div>
    </div>
    <el-backtop
      :right="30"
      :bottom="30"
    />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import Header from './components/Header.vue';
  import { carouselList } from './constants/constants';
  import type { TabsPaneContext } from 'element-plus';
  import {
    HomeFilled,
    Calendar,
    LocationInformation,
    User,
    Phone,
  } from '@element-plus/icons-vue';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

  const activeName = ref('first');
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
  };

  const attributes = ref([
    {
      // highlight: 'blue',
      dates: [new Date()],
      dot: true, // Boolean, String, Object
      highlight: {
        color: 'blue',
        fillMode: 'light',
      },
    },
    {
      highlight: 'red',
      dates: [new Date(2024, 2, 24)],
      popover: {
        label: 'Hope to see you at my wedding ceremony at 14:00 !',
        dot: 'red',
      },

      content: {
        style: {
          fontStyle: 'italic',
        },
      },
    },
  ]);
</script>

<style scoped>
  .section {
    margin-bottom: 40px;
  }

  .demo-tabs > .el-tabs__item {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }

  ul li {
    margin-bottom: 5px;
  }
  .my-calendar :deep(.vc-weekday-1, .vc-weekday-7) {
    color: #6366f1;
  }
</style>
