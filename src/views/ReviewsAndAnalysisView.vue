<script setup>
import BlurHashImage from "@/components/BlurHashImage.vue";

import images from "@/assets/data/images.json";
import reviews from "@/assets/data/reviews.json";

reviews.forEach(
  (review) =>
    (review.poster = images.find((img) => img.id === review.poster_image_id))
);
</script>

<template>
  <ul class="flex flex-col">
    <template v-for="(review, index) in reviews">
      <li
        class="flex flex-col md:flex-row gap-8"
        :class="index % 2 ? 'md:flex-row-reverse' : ''"
      >
        <BlurHashImage
          :src="'/assets/' + review.poster.src"
          :alt="review.poster.alt"
          :width="review.poster.width"
          :height="review.poster.height"
          :blurhash="review.poster.blurhash"
          :container-class="'w-70 shrink-0 ' + (index % 2 ? 'self-end' : '')"
        />

        <div>
          <h2 class="text-3xl">
            <b class="font-extrabold">{{ review.title }}</b>
            <span class="font-bold">
              (<b class="extrabold">{{ review.year }}</b
              >)</span
            >
            by
            <b class="font-semibold">{{ review.director }}</b>
          </h2>
          <p class="mt-2 text-lg text-justify" v-html="review.content"></p>
          <div class="flex justify-end items-center px-8 mt-4">
            <div class="h-1 w-8 mr-4 bg-neutral-950"></div>
            <span class="font-bold text-xl">{{ review.review_by }}</span>
          </div>
        </div>
      </li>
      <li v-if="index !== reviews.length - 1" class="py-12">
        <hr class="h-1 max-w-5xl mx-auto rounded-md bg-neutral-800" />
      </li>
    </template>
  </ul>
</template>
