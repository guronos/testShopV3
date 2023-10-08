<template>
    <div v-if="cardsInBasket.length"
         class="cards"
    >
        <TransitionGroup name="card-animation">
          <div v-for="card in cardsInBasket"
               class="cards"
               :key="card.basketId"
          >
            <SecondaryCard
                :price="card.price"
                :id="card.id"
                :basketId="card.basketId"
                :title="card.title"
                :descriptions="card.description"
                :imageSrc="'/CardDefault.svg'"
            />
          </div>
        </TransitionGroup>
    </div>
    <div v-else class="basket__void">
        Корзина пуста
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
.basket__void {
    height: 200px;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(68, 64, 64, 0.66);
}
.card-animation-leave-active {
    transition: all 0.5s ease;
}
.card-animation-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
@media screen and (max-width: 1470px) {
    .cards {
        margin-left: 1%;
    }
}
</style>
