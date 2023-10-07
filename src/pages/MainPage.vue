<template>
    <div class="cards">
        <div v-for="card in getCards">
            <PrimaryCard
                    :price="card.price"
                    :id="card.id"
                    :title="card.title"
                    :descriptions="card.description"
                    :image-src="'../assets/CardDefault.svg'"
            />
        </div>
    </div>
    <div class="btn__wrap">
        <TheButton
            v-if="loadedCards.length !== getCards.length"
                class="pointer"
                :text="'Показать еще'"
                @click="incrementStep"
        />
    </div>
</template>
<script setup lang="ts">
import PrimaryCard from "@/components/CardsItems/PrimaryCard.vue";
import TheButton from "@/components/UIKit/TheButton.vue";
// import {ref} from "vue";
import {useStoreCards} from "@/store/Cards.ts";
import {storeToRefs} from "pinia";

const store = useStoreCards()
const { loadedCards, getCards} = storeToRefs(store)
const {requestCards, incrementStep } = store
if (!getCards.value.length) requestCards()
// storeData.requestCards()
// const cards = storeData.getCards
</script>
<style scoped>
.cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 7%;
    /*margin-bottom: 2%;*/
}
.btn__wrap {
    display: flex;
    justify-content: end;
}
</style>
