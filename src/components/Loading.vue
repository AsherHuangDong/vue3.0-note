<template>
    <h1>加载中{{ loading }}</h1>
</template>
<script setup>
import { ref, onUnmounted  } from 'vue'
let loading = ref('')
let i = 0
let arr = ['.', '..', '...']
let timer = setInterval(() => {
    loading.value = arr[i]
    i = (i + 1) % 3
}, 350);
onUnmounted(() => {
    clearInterval(timer)
});
</script>