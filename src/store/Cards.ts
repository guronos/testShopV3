import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {pseudoResponse} from "@/store/pseudoResponse.ts";
import {Card} from "@/store/interfaces";

const URL = 'https://api.platovcorp.site/product.json'

export const useStoreCards = defineStore('cards', () => {
    const loadedCards = ref<Card[]>([])
    const cardsInBasket = ref({})
    const step = ref(1)
    const quantityCardsOnStep = 4
    const getCards = computed(() => loadedCards.value.slice(0, step.value * quantityCardsOnStep))
    const getCardsInBasket = computed(() => cardsInBasket.value)

    async function requestCards () {
        try {
            const rawData = await fetch(`${URL}`);
            loadedCards.value = await rawData.json();
        } catch (e: any) {
            console.log('Ошибка', e.message || e)
            loadedCards.value = pseudoResponse
        }
    }
    function incrementStep () {
        step.value += 1
    }
    return { loadedCards, cardsInBasket, step, getCards, getCardsInBasket, requestCards, incrementStep }
})
