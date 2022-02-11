<template>
    <quick :data="left" v-if="left.length"></quick>
    <li>{{flag}}</li>
    <quick :data="right" v-if="right.length"></quick>
</template>
<script setup>
import quick from './FragmentDemo.vue';

const props = defineProps({
    data: Array,
});
let flag = props.data[0];
let left = [];
let right = [];

props.data.slice(1).forEach(v => {
    v > flag ? right.push(v) : left.push(v);
});

console.log('left: ', left, 'flag: ', flag, 'right: ', right);
</script>

