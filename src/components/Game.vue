<script setup lang="ts">
import { reactive } from 'vue';
import LayoutGame from '@/components/layout/LayoutGame.vue';
import Cards from '@/components/Cards.vue'
import { generateData } from '../event-controller/generateData';
const initData = reactive(generateData(4, ["A", "B", "C", "D"]))

</script>

<template>
  <LayoutGame>
    <Cards />
  </LayoutGame>
</template>