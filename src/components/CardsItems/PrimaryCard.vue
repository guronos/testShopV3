<template>
    <div class="card">
        <img class="card__image" :src="getImageSource(props.imageSrc)" alt="example">
        <div class="card__info">
            <div class="info-top">
                <div class="card__title">{{props.title}}</div>
                <div class="card__description">{{props.descriptions}}</div>
            </div>
            <div class="info_bottom">
                <div class="card__price">{{props.price}} {{props.currency}}</div>
                <div>
                    <div v-if="!validateCount">Товар закончился</div>
                    <div v-else>
                        <button v-if="props.inBasket"
                             @click="addBasket(props.id)">
                            +1
                        </button>
                        <BasketIcon v-else class="pointer hover"
                                    @click="addBasket(props.id)"
                        />
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import BasketIcon from "@/assets/BasketIcon.vue";
import {Card} from './propsInterfaces.ts'
import {useStoreCards} from "@/store/Cards.ts";
import {getPathImg} from "@/helpers";
import {computed} from "vue";
const props = withDefaults(defineProps<Card>(), {
    imageSrc: '@/assets/CardDefault.png',
    currency: '₽',
    inBasket: false
})
const store = useStoreCards()
const {addBasket} = store
const getImageSource = getPathImg
const validateCount = computed(() => {
    return props.handleCount && props.handleCount > 0;

})
</script>
<style scoped>
.card {
    width: 280px;
    height: 450px;
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 4px 4px 10px 0 #00000033;
    margin-bottom: 6%;
}
.card__image {
    width: 280px;
    height: 280px;
    border-radius: 10px 10px 0 0;
}
.card__info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 30%;
    justify-content: space-between;
}
.info_bottom {
    display: flex;
    justify-content: space-between;
}
.card__description {
    height: 5rem;
    overflow: auto;
}
</style>
<style>
.card__title {
    font-size: 24px;
    line-height: 28px;
    overflow: auto;
    max-height: 2rem;
}
.card__description {
    color: rgba(51, 51, 51, 0.50);
}
.card__price {
    font-size: 18px;
}
</style>
