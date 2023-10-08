import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {pseudoResponse} from "@/store/pseudoResponse.ts";
import {Card, CardBasket, CardResponse} from "@/store/interfaces";

const URL = 'https://api.platovcorp.site/product.json'
const quantityCardsOnStep = 4

export const useStoreCards = defineStore('cards', () => {
    const loadedCards = ref<Card[] | []>([])
    const cardsInBasket = ref<CardBasket[]>([])
    const step = ref<number>(1)
    const getCards = computed<Card[]>(():Card[] => loadedCards.value.slice(0, step.value * quantityCardsOnStep))
    const getCardsInBasket = computed<CardBasket[]>(():CardBasket[] => cardsInBasket.value)

    async function requestCards ():Promise<void> {

        const mutateData = (data:CardResponse[]):Card[] => {
            const newArr:Card[] = Object.assign([], data)
            newArr.forEach(i => {
                i.handleCount = Number(i.count)
                i.inBasket = false
            })
            return newArr
        }

        try {
            const rawData:Response = await fetch(`${URL}`,
                {
                    method: 'GET'
                });
            const jsonData:CardResponse[] = await rawData.json();
            loadedCards.value = mutateData(jsonData)
        } catch (e: any) {
            console.error('Ошибка запроса карточек товаров', e.message || e)
            loadedCards.value = mutateData(pseudoResponse)
        }
    }
    function incrementStep ():void {
        step.value += 1
    }
    function addBasket (cardId: string):void {
        loadedCards.value.some((i: Card):boolean => {
            if (i.id === cardId) {
                i.inBasket = true
                if (i.handleCount) i.handleCount -= 1
                const order:CardBasket = Object.assign({}, i)
                order.basketId = i.id + String(i.handleCount)
                cardsInBasket.value.push(order)
                return true
            }
            return false
        })
    }
    function removeCardInBasket (cardId:string):void {
        cardsInBasket.value.some((i:CardBasket, idx:number):boolean => {
            if (i.basketId === cardId) {
                cardsInBasket.value.splice(idx, 1)
                loadedCards.value.some((mainCard:Card):true | void => {
                    if (mainCard.id === i.id) {
                        if (mainCard.handleCount >= 0) mainCard.handleCount += 1
                        if (mainCard.handleCount === Number(mainCard.count)) mainCard.inBasket = false
                        return true
                    }
                })
                if (i.basketId) i.basketId = ''
                return true
            }
            return false
        })
    }
    return { loadedCards, cardsInBasket, step, getCards, getCardsInBasket, requestCards, incrementStep, addBasket, removeCardInBasket }
})
