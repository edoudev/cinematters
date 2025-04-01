<script setup>
import CollectionsItem from "@/views/Collections/CollectionsItem.vue";

import images from "@/assets/data/images.json";
import collections from "@/assets/data/collections.json";

collections.forEach((collection) => {
  collection.movies.forEach((movie) => {
    movie.poster = images.find((img) => img.id === movie.poster_image_id);
  });
});
</script>

<template>
  <ul class="flex justify-center items-stretch flex-wrap gap-6">
    <CollectionsItem
      v-for="collection in collections"
      :key="collection.slug"
      :collection="collection"
    ></CollectionsItem>
  </ul>
</template>
