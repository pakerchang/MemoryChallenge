<script setup lang="ts">
import { ref, watch, onUnmounted } from "vue";
import { compareCard } from "@/event-controller/compareCard";
import Card from "@/components/shared/Card.vue";

const props = defineProps<{
  data: GameDataType[];
}>();

const cardData = ref(props.data);
const selectData = ref<GameDataType[]>([]);

const handleClick = (data: GameDataType) => {
  selectData.value = [...selectData.value, data];
};

const stopWatchSelectData = watch(selectData, (nV, oV) => {
  if (nV.length === 2) {
    cardData.value = compareCard(cardData.value, nV);
    selectData.value.length = 0;
  }
});

onUnmounted(stopWatchSelectData);
</script>
<template>
  <div class="w-full h-full grid grid-cols-4 justify-center content-center">
    <Card v-for="item in cardData" :key="item.index" :data="item" @update="handleClick" />
  </div>
</template>
