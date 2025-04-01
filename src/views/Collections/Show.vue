<script setup>
import BlurHashImage from "@/components/BlurHashImage.vue";

import collections from "@/assets/data/collections.json";
import images from "@/assets/data/images.json";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const collection = collections.find(
  (collection) => collection.slug === props.slug
);

collection.movies.forEach((movie) => {
  movie.poster = images.find((image) => image.id === movie.poster_image_id);
});
</script>

<template>
  <div class="flex items-center flex-col flex-1">
    <h2
      class="bg-neutral-950 my-8 py-2 text-3xl font-bold px-12 rounded-md text-amber-50"
    >
      {{ collection.name }}
    </h2>
    <ul class="py-4 flex flex-col items">
      <template v-for="(movie, index) in collection.movies">
        <li class="flex">
          <BlurHashImage
            :blurhash="movie.poster.blurhash"
            :src="'/assets/' + movie.poster.src"
            :alt="movie.poster.alt"
            :width="movie.poster.width"
            :height="movie.poster.height"
            container-class="object-cover h-70 rounded-md shadow-lg"
          />
          <div class="py-2 px-4">
            <h3 class="font-semibold text-2xl">{{ movie.title }}</h3>
            <p class="mt-2 text-xl" v-html="movie.content"></p>
          </div>
        </li>
        <li v-if="index !== collection.movies.length - 1" class="py-8 mx-8">
          <hr class="h-1 max-w-5xl mx-auto rounded-md bg-neutral-800" />
        </li>
      </template>
    </ul>
  </div>
</template>
