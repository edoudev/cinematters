<script setup>
import { ref, computed, onMounted } from "vue";
import { decodeBlurHash } from "fast-blurhash";

const props = defineProps({
  src: { type: String, required: true },
  alt: String,
  blurhash: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  containerClass: { type: String, default: "" },
});

const canvas = ref(null);
const isLoaded = ref(false);

const aspectRatio = computed(() => props.width / props.height);

const blurhashPixels = computed(() => ({
  width: 32,
  height: Math.round(32 / aspectRatio.value),
}));

const containerStyle = computed(() => ({
  aspectRatio: aspectRatio.value,
}));

onMounted(() => {
  if (!props.blurhash || !canvas.value) return;
  const pixels = decodeBlurHash(
    props.blurhash,
    blurhashPixels.value.width,
    blurhashPixels.value.height
  );
  const ctx = canvas.value.getContext("2d");
  const imageData = ctx.createImageData(
    blurhashPixels.value.width,
    blurhashPixels.value.height
  );
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
});
</script>

<template>
  <div
    ref="container"
    class="relative rounded-md"
    :class="containerClass"
    :style="containerStyle"
  >
    <canvas
      ref="canvas"
      class="absolute inset-0 w-full h-full rounded-md object-cover transition-opacity duration-300"
      :class="{ 'opacity-0': isLoaded }"
      :width="blurhashPixels.width"
      :height="blurhashPixels.height"
    />

    <img
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover rounded-md"
      :class="{ 'opacity-0': !isLoaded }"
      @load="isLoaded = true"
    />
  </div>
</template>
