<script setup>
import { ref } from "vue";

import BlurHashImage from "@/components/BlurHashImage.vue";

import directors from "@/assets/data/directors.json";
import images from "@/assets/data/images.json";

directors.forEach((director) => {
  director.photo = images.find((img) => img.id === director.photo_id);

  director.enhancedContent = director.content.map((content) => {
    if (typeof content === "string") {
      return content;
    }

    return {
      image: images.find((img) => img.id === content.image_id),
      caption: content.caption,
    };
  });
});

const selectedDirector = ref(0);
</script>

<template>
  <div class="flex justify-center items-center flex-col">
    <ul class="flex gap-8">
      <li
        v-for="(director, index) in directors"
        @click="selectedDirector = index"
        class="flex flex-col items-center px-3 duration-200 cursor-pointer shadow-md pt-6 rounded-md"
        :class="
          selectedDirector === index ? 'bg-neutral-950' : 'hover:bg-black/5'
        "
      >
        <BlurHashImage
          :blurhash="director.photo.blurhash"
          :key="director.photo.index"
          :width="director.photo.width"
          :height="director.photo.height"
          :src="'/assets/' + director.photo.src"
          containerClass="object-cover w-32"
        />
        <h4
          class="font-bold text-2xl py-2 duration-200"
          :class="
            selectedDirector === index ? 'text-amber-50' : 'text-neutral-950'
          "
        >
          {{ director.name }}
        </h4>
      </li>
    </ul>
    <div class="mt-8 flex flex-col items-center gap-4">
      <template v-for="content in directors[selectedDirector].enhancedContent">
        <p
          v-if="typeof content === 'string'"
          class="text-lg text-justify first:indent-8"
          v-html="content"
        ></p>
        <div v-else class="flex flex-col items-center gap-0.5">
          <BlurHashImage
            :blurhash="content.image.blurhash"
            :key="content.image.index"
            :width="content.image.width"
            :height="content.image.height"
            :src="'/assets/' + content.image.src"
            containerClass="object-cover w-96"
          />
          <span class="text-lg text-center">
            {{ content.caption }}
          </span>
        </div>
      </template>
    </div>
  </div>
</template>
