<script setup lang="ts">
import { ref } from "vue";
import Card from "@/components/shared/Card.vue";

const props = defineProps<{
  data: GameDataType[];
}>();

const emits = defineEmits<{
  (e: "resetData", status: boolean): void;
  (e: "updateData", status: any): void;
}>();

const selectData = ref<GameDataType[]>([]);

const handleClick = (data: GameDataType) => {
  selectData.value = [...selectData.value, data];
  if (selectData.value.length === 2) {
    emits("updateData", selectData.value);
    selectData.value.length = 0;
  }
};
</script>
<template>
  <div class="w-full h-full grid grid-cols-4 justify-center content-center">
    <Card v-for="item in data" :key="item.index" :data="item" @update="handleClick" />
  </div>
</template>
