<template>
    <div class="card">
        <div class="card__remove pointer">
            <img src="@/assets/close.svg">
        </div>
        <img class="card-img" src="@/assets/CardDefault.svg">
        <div class="card__info">
            <div class="info-top">
                <div class="card__title">{{props.title}}</div>
                <div class="card__description">{{props.descriptions}}</div>
            </div>
            <div class="info_bottom">
                <div class="card__price">{{props.price}} {{props.currency}}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {Card} from './propsInterfaces.ts'

const props = withDefaults(defineProps<Card>(), {
    imageSrc: '@/assets/CardDefault.png',
    currency: '₽'
})
</script>
<style scoped>
.card {
    position: relative;
    width: 500px;
    height: 200px;
    /*border-radius: 10px;*/
    background-color: #FFFFFF;
    box-shadow: 4px 4px 10px 0 #00000033;
    display: flex;
}
.card__remove {
    position: absolute;
    top: 1%;
    right: 1%;
}
.card-img {
    width: 200px;
    height: 200px;
}
.card__info {
    padding: 20px;
    /*width: 300px;*/
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-between;
}
.info_bottom {
    display: flex;
    justify-content: space-between;
}
</style>
