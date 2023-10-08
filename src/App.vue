<template>
<div class="main">
  <NavBar/>
        <router-view v-slot="{Component}">
            <Transition name="fade" mode="out-in">
                <component :is="Component"/>
            </Transition>
        </router-view>
</div>
</template>
<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>
<style scoped>
.main {
  max-width: 1440px;
  margin: 0 auto;
}
.fade-enter-active {
    transition: all 0.3s ease-out;
}

.fade-leave-active {
    transition: all 0.3s ease-in;
}
.fade-enter-from {
    transform: translateX(-200px);
    opacity: 0;
}
.fade-leave-to {
    transform: translateX(200px);
    opacity: 1;
}
</style>
