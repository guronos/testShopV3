<template>
    <div>
      <div v-for="card in cardsInBasket" class="cards">
        <SecondaryCard
            :price="card.price"
            :id="card.id"
            :title="card.title"
            :descriptions="card.description"
            :imageSrc="'../assets/CardDefault.svg'"
        />
      </div>
    </div>
</template>
<script setup lang="ts">
import SecondaryCard from "@/components/CardsItems/SecondaryCard.vue";
import {useStoreCards} from "@/store/Cards.ts";
import {storeToRefs} from "pinia";

const {cardsInBasket} = storeToRefs(useStoreCards())
</script>
<style scoped>
.cards {
  margin-bottom: 22px;
}
</style>
