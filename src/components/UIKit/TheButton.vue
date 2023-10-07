<template>
<button class="btn">{{props.text}}</button>
</template>
<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: false,
        default: 'Создать'
    }
})

</script>
<style scoped>
.btn {
    font-size: 16px;
    max-width: 142px;
    max-height: 25px;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 4px 0 #00000040;
    border-radius: 4px;
    color: #6A6A6A;
    background-color: #FFFFFF;
    border: none;
}
</style>
