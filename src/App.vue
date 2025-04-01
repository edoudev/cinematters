<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-col h-screen max-w-6xl mx-auto">
    <header class="flex flex-col items-center justify-center mb-4">
      <RouterLink to="/" class="select-none mx-4" draggable="false"
        ><img
          src="/assets/CINEMATTERS.png"
          alt="cinematters-logo"
          class="max-w-md w-full pb-4 pt-14"
          draggable="false"
      /></RouterLink>
      <div class="w-full flex justify-center">
        <nav
          class="flex py-4 px-4 space-x-12 text-2xl font-extrabold uppercase text-nowrap overflow-x-auto"
        >
          <RouterLink
            to="/reviews-and-analysis"
            class="hover:bg-neutral-950 duration-200 hover:text-amber-50 py-0.5 px-2 rounded-md"
            activeClass="bg-neutral-950 text-amber-50"
            >Reviews & Analysis</RouterLink
          >
          <RouterLink
            to="/collections"
            class="hover:bg-neutral-950 duration-200 hover:text-amber-50 py-0.5 px-2 rounded-md"
            activeClass="bg-neutral-950 text-amber-50"
            >Collections</RouterLink
          >
          <RouterLink
            to="/directors-focus"
            class="hover:bg-neutral-950 duration-200 hover:text-amber-50 py-0.5 px-2 rounded-md"
            activeClass="bg-neutral-950 text-amber-50"
            >Director's focus</RouterLink
          >
        </nav>
      </div>
    </header>
    <div class="py-12 px-4 flex-1">
      <RouterView />
    </div>
    <footer class="mt-2 px-4">
      <hr class="mx-auto w-xs rounded-md h-0.5 bg-neutral-950" />
      <p class="py-5">
        We’re Vickie and Sorenn, two students currently in our third and final
        year of a Bachelor’s degree in Cinéma et Audiovisuel studies at the
        University of Strasbourg. This website is the result of a collaborative
        project we developed as part of our English course Media Production,
        taught by our incredible teacher Jhon.<br /><br />We both share a deep
        passion for cinema; not just as entertainment, but as a powerful tool
        for storytelling, resistance, and representation. That’s why we decided
        to create this platform dedicated to engaged and inclusive films. Here,
        you’ll find reviews, collections, and spotlights on directors whose work
        highlights queer identities, feminism, racial justice, and political
        issues.<br /><br />We hope this space will help you discover films that
        matter, spark conversations, and make you feel a little more seen.
      </p>
    </footer>
  </div>
</template>
