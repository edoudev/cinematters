import { createApp } from "vue";
import { createWebHashHistory, createRouter } from "vue-router";

import "./style.css";
import App from "./App.vue";

import ReviewsAndAnalysisView from "@/views/ReviewsAndAnalysisView.vue";
import HomeView from "@/views/HomeView.vue";
import CollectionsIndex from "@/views/Collections/Index.vue";
import CollectionShow from "@/views/Collections/Show.vue";
import DirectorsFocusView from "@/views/DirectorsFocusView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/reviews-and-analysis", component: ReviewsAndAnalysisView },
  {
    path: "/collections",
    children: [
      { path: "", name: "collection", component: CollectionsIndex },
      {
        path: "/collections/:slug",
        name: "collection-show",
        component: CollectionShow,
        props: true,
      },
    ],
  },
  { path: "/directors-focus", component: DirectorsFocusView },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

createApp(App).use(router).mount("#app");
