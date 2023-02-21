<script setup lang="ts">
import { ref, watch, onUnmounted } from "vue";
import LayoutGame from "@/components/layout/LayoutGame.vue";
import Cards from "@/components/Cards.vue";
import { generateData } from "../event-controller/generateData";
import { compareCard } from "@/event-controller/compareCard";
const initData = ref<GameDataType[]>(generateData(4, ["A", "B", "C", "D"]));

const resetGame = (): void => {
  const resetGame = generateData(4, ["A", "B", "C", "D"]);
  initData.value = resetGame;
};

const handleData = (data: GameDataType[]): void => {
  initData.value = compareCard(initData.value, data);
};

const stopWatchRenderData = watch(initData.value, (nV, oV) => {
  if (initData.value.filter((item) => item.isCompare === false).length === 0) resetGame();
});
onUnmounted(stopWatchRenderData);
</script>

<template>
  <LayoutGame>
    <Cards :data="initData" @resetData="resetGame" @updateData="handleData" />
  </LayoutGame>
</template>
