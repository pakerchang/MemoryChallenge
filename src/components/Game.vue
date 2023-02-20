<script setup lang="ts">
import LayoutGame from "@/components/layout/LayoutGame.vue";
import Cards from "@/components/Cards.vue";
import { generateData } from "../event-controller/generateData";
const initData = generateData(4, ["A", "B", "C", "D"]);
</script>

<template>
  <LayoutGame>
    <Cards :data="initData" />
  </LayoutGame>
</template>