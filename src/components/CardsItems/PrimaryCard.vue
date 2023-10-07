<template>
    <div class="card">
        <img class="card__image" :src="getImageSource(props.imageSrc)">
        <div class="card__info">
            <div class="info-top">
                <div class="card__title">{{props.title}}</div>
                <div class="card__description">{{props.descriptions}}</div>
            </div>
            <div class="info_bottom">
                <div class="card__price">{{props.price}} {{props.currency}}</div>
                <BasketIcon class="pointer hover"
                    @click="addBasket(props.id)"
                />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import BasketIcon from "@/assets/BasketIcon.vue";
import {Card} from './propsInterfaces.ts'
import {useStoreCards} from "@/store/Cards.ts";
import {getPathImg} from "@/helpers";
const props = withDefaults(defineProps<Card>(), {
    imageSrc: '@/assets/CardDefault.png',
    currency: '₽'
})
const store = useStoreCards()
const {addBasket} = store
const getImageSource = getPathImg
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
}
.card__description {
    color: rgba(51, 51, 51, 0.50);
}
.card__price {
    font-size: 18px;
}
</style>
