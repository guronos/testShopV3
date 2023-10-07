<template>
  <div class="nav-bar">
      <router-link to="/">
    <LogoSVG/>
      </router-link>
    <div class="nav-bar_links">
        <router-link to="/"><span :class="{selected: currentRoute.name === 'MainPage'}">Главная</span></router-link>
        <router-link to="/basket"><span :class="{selected: currentRoute.name === 'BasketPage'}">Корзина</span></router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import LogoSVG from "@/assets/LogoSVG.vue";
import {useRoute} from "vue-router";

const currentRoute = useRoute()

</script>
<style scoped>
.nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5% 1.5% 3% 1.5%;
}
.nav-bar_links {
    display: flex;
    gap: 10px;
}
.selected {
    color: #BA967D;
}
</style>
