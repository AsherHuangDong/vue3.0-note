<template>
  <button @click="isOpen = true">打开</button>
  <h1>{{state.count}} * 2={{double}}</h1>
  <h2>{{ num }}</h2>
  <button @click="add">累加</button>
  <ul>
    <li v-for="item in arr">{{ item }}</li>
  </ul>
  <Teleport to="#foot-container">
    <div v-if="isOpen">
      <p>底部信息底部信息底部信息底部信息底部信息底部信息</p>
      <button @click="isOpen = false">取消</button>
    </div>
  </Teleport>
</template>
<script setup>
// reactive 负责复杂的数据结构，
// ref 可以将基本的数据结构包装成响应式。
import {reactive,computed,ref,onMounted} from 'vue';

const { state, arr, double } = userCount(1, 1);
const isOpen = ref(false);
const num = ref(2);

function add(){
  state.count++
  num.value += 10
  arr.push(arr.length + 1)
}

function userCount(count, n) {
  const state = reactive({
    count
  });
  const double = computed(() => state.count * 2);
  const arr = reactive(new Array(n).map((item, index) => index + 1));
  return { state, arr, double };
}

onMounted(() => {
  console.log('mounted');
});
</script>
