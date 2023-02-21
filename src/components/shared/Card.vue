<script setup lang="ts">
const props = defineProps<{
  data: GameDataType;
}>();
const emits = defineEmits<{
  (e: "update", data: GameDataType): void;
}>();

const handleClick = (): void => {
  props.data.isClick = true;
  emits("update", props.data);
};
</script>

<template>
  <div
    class="relative w-[120px] h-[140px] border border-gray-400 ease-in-out custom-preserve-3d duration-1000"
    @click="handleClick"
  >
    <div
      class="absolute w-full h-full flex justify-center items-center bg-gray-600 backface-hidden"
    />

    <div
      class="absolute w-full h-full flex justify-center items-center"
      :class="{ 'custom-rotate-y-180 backface-hidden': data.isClick }"
    >
      {{ data.content }}
    </div>
  </div>
</template>
