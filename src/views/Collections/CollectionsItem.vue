<script setup>
import { RouterLink } from "vue-router";

import BlurHashImage from "@/components/BlurHashImage.vue";

const props = defineProps({
  collection: {
    type: Object,
    required: true,
  },
});

const movies = [...props.collection.movies]
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);
</script>

<template>
  <li
    class="shadow-md select-none transition-all duration-200 border-2 rounded-md border-neutral-950 group w-lg"
  >
    <RouterLink
      :to="'/collections/' + collection.slug"
      class="flex flex-col items-center justify-between h-full"
      draggable="false"
    >
      <h3
        class="px-8 py-2 text-2xl font-semibold bg-neutral-950 rounded-b-md text-amber-50"
      >
        {{ collection.name }}
      </h3>
      <ul class="flex p-6 w-fit h-fit">
        <li
          v-for="(movie, index) in movies"
          :key="movie.poster"
          class="h-60 first:ml-0 -ml-28 group-hover:-ml-24 transition-all duration-200"
          :style="{ marginTop: `${index}rem` }"
        >
          <BlurHashImage
            :blurhash="movie.poster.blurhash"
            :src="'/assets/' + movie.poster.src"
            :alt="movie.poster.alt"
            :width="movie.poster.width"
            :height="movie.poster.height"
            container-class="object-cover h-60 duration-200 rounded-md shadow-lg group-hover:grayscale-75"
          />
        </li>
        <li
          v-if="collection.movies.length > 4"
          class="h-60 flex justify-center items-center w-38 mt-16 -ml-28 bg-neutral-900 rounded-md shadow-lg z-10"
        >
          <h3 class="text-amber-50 text-xl font-bold">
            +{{ collection.movies.length - 5 }} more
          </h3>
        </li>
      </ul>
    </RouterLink>
  </li>
</template>
