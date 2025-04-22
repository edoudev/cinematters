<script setup>
import { ref, onMounted } from "vue";

import BlurHashImage from "@/components/BlurHashImage.vue";

import framesList from "@/assets/data/frames.json";
import images from "@/assets/data/images.json";

const frameIndex = ref(0);
const frames = framesList.sort(() => Math.random() - 0.5);

const shots = frames.map((frame) =>
  images.find((image) => image.id === frame.image_id)
);

const percent = ref(0);

onMounted(() => {
  setInterval(() => {
    if (percent.value >= 100) {
      frameIndex.value = (frameIndex.value + 1) % frames.length;

      percent.value = 0;
    } else {
      percent.value++;
    }
  }, 50);
});
</script>

<template>
  <div class="flex items-center justify-center">
    <figure
      class="bg-neutral-950 text-amber-50 relative pt-1.5 px-1.5 rounded-md"
    >
      <div
        class="absolute z-10 w-6 h-6 rounded-full top-3 right-3"
        :style="`background: conic-gradient(transparent ${percent}%, black 0%)`"
      ></div>
      <div class="relative w-sm h-48 sm:w-xl sm:h-72 md:w-3xl md:h-96">
        <div
          v-for="(shot, index) in shots"
          class="absolute top-0 left-0 duration-1000 transition-opacity ease-in-out"
          :class="frameIndex === index ? 'opacity-100' : 'opacity-0'"
        >
          <BlurHashImage
            :blurhash="shot.blurhash"
            :key="shot.index"
            :width="shot.width"
            :height="shot.height"
            :src="'/assets/' + shot.src"
            containerClass="object-cover w-sm h-48 sm:w-xl sm:h-72 md:w-3xl md:h-96"
          />
        </div>
      </div>
      <figcaption class="text-center leading-none">
        <b class="text-lg font-extrabold">{{ frames[frameIndex].title }}</b>
        ({{ frames[frameIndex].year }})
        <span class="text-sm whitespace-nowrap">
          <span
            >by
            <b class="font-semibold">{{ frames[frameIndex].author }}</b></span
          >
        </span>
      </figcaption>
    </figure>
  </div>
</template>
