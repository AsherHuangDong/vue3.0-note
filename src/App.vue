<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <ul>
    <FragmentDemo :data="[5, 3, 1, 6, 9, 4, 2, 8]" />
  </ul>
  <h1>Suspense</h1>
  <Suspense>
    <template #default>
      <AsyncComponent :timeout="3000" />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
  <NewSlot>
    <div>lllllll</div>
    <template #one="{ name }">
      <p>Hello1 {{ one }}</p>
    </template>
    <template #two="{ name }">
      <p>Hello2 {{ two }}</p>
    </template>
    <template #three="{ name }">
      <p>Hello3 {{ three }}</p>
    </template>
  </NewSlot>
</template>

<script setup>

import { ref } from '@vue/reactivity'

import HelloWorld from './components/HelloWorld.vue'
import FragmentDemo from './components/FragmentDemo.vue'
import AsyncComponent from './components/AsyncComponent.vue'
import Loading from './components/Loading.vue'
import NewSlot from './components/NewSlot.vue'

const one = 'one', two = 'two', three = 'three';
</script>
