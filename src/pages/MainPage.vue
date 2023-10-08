<template>
    <div>
        <div class="cards">
            <TransitionGroup name="card-animation">
                <div v-for="card in getCards" :key="card.id">
                    <PrimaryCard
                            :price="card.price"
                            :id="card.id"
                            :title="card.title"
                            :descriptions="card.description"
                            :image-src="'../assets/CardDefault.svg'"
                            :handleCount="card.handleCount"
                            :inBasket="card.inBasket"
                    />
                </div>
            </TransitionGroup>
        </div>
        <div class="btn__wrap">
            <TheButton
                    v-if="loadedCards.length !== getCards.length"
                    class="pointer"
                    :text="'Показать еще'"
                    @click="incrementStep"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import PrimaryCard from "@/components/CardsItems/PrimaryCard.vue";
import TheButton from "@/components/UIKit/TheButton.vue";
import {useStoreCards} from "@/store/Cards.ts";
import {storeToRefs} from "pinia";

const store = useStoreCards()
const { loadedCards, getCards} = storeToRefs(store)
const {requestCards, incrementStep } = store
if (!getCards.value.length) requestCards()
</script>
<style scoped>
.btn__wrap {
    display: flex;
    justify-content: end;
}
.card-animation-enter-active {
    transition: all 0.5s ease;
}
.card-animation-enter-from {
    opacity: 0;
    transform: translateX(-100px);
}
.cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 7%;
}
</style>
