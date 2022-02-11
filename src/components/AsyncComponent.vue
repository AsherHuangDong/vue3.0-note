<template>
    <h1>一个异步组件</h1>
</template>
<script setup>
function sleep(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const props = defineProps({
    timeout: String
});
await sleep(props.timeout);
</script>