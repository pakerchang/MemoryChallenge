<script setup lang="ts">
import { ref, onUnmounted, watch } from "vue";

const props = defineProps<{
  data: GameDataType[];
}>();

const emits = defineEmits<{
  (e: "updateData", status: any): void;
}>();

const selectData = ref<GameDataType[]>([]);

const handleClick = (data: GameDataType, idx: number) => {
  props.data[idx].isClick = true;
  selectData.value = [...selectData.value, data];
};
const stopWatchSelectData = watch(selectData, () => {
  if (selectData.value.length === 2) {
    setTimeout(() => {
      emits("updateData", selectData.value);
      selectData.value.length = 0;
    }, 400);
  }
});

onUnmounted(stopWatchSelectData);
</script>
<template>
  <div class="w-full grid grid-cols-4 gap-3 place-items-center custom-perspective">
    <div
      v-for="(item, idx) in data"
      :key="item.index"
      :data="item"
      @click="handleClick(item, idx)"
      class="w-[120px] h-[140px] border border-gray-400"
      :class="{
        'ease-in-out custom-preserve-3d duration-1000 custom-rotate-y-180': item.isClick,
      }"
    >
      <div
        v-if="!item.isClick"
        class="w-full h-full flex justify-center items-center bg-gray-600 backface-hidden"
      />

      <div
        v-else
        class="w-full h-full flex justify-center items-center custom-rotate-y-180 backface-hidden"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>
