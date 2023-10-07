<template>
<div class="main">
  <NavBar/>
<router-view/>
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
</style>
