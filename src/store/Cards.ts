import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {pseudoResponse} from "@/store/pseudoResponse.ts";
import {Card} from "@/store/interfaces";

const URL = 'https://api.platovcorp.site/product.json'

export const useStoreCards = defineStore('cards', () => {
    const loadedCards = ref<Card[]>([])
    const cardsInBasket = ref<Card[]>([])
    const step = ref<number>(1)
    const quantityCardsOnStep = 4
    const getCards = computed(():Card[] => loadedCards.value.slice(0, step.value * quantityCardsOnStep))
    const getCardsInBasket = computed(():Card[] => cardsInBasket.value)

    async function requestCards ():Promise<void> {
        try {
            const rawData:Response = await fetch(`${URL}`);
            loadedCards.value = await rawData.json();
        } catch (e: any) {
            console.log('Ошибка', e.message || e)
            loadedCards.value = pseudoResponse
        }
    }
    function incrementStep ():void {
        step.value += 1
    }
    function addBasket (cardId: string):void {
        loadedCards.value.some((i: Card):boolean => {
            if (i.id === cardId) {
                cardsInBasket.value.push(i)
                return true
            }
            return false
        })
    }
    function removeCardInBasket (cardId:string):void {
        cardsInBasket.value.some((i:Card, idx:number):boolean => {
            if (i.id === cardId) {
                cardsInBasket.value.splice(idx, 1)
                return true
            }
            return false
        })
    }
    return { loadedCards, cardsInBasket, step, getCards, getCardsInBasket, requestCards, incrementStep, addBasket, removeCardInBasket }
})
