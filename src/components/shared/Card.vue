<script setup lang="ts">
const props = defineProps<{
  data: GameDataType
}>()
const emits = defineEmits<{
  (e: 'update', data: object): void
}>()

const handleClick = (): void => {
  props.data.isClick = true
  emits('update', props.data)
}


</script>

<template>
  <div class="w-[100px] h-[100px] flex justify-center items-center border border-gray-400" @click="handleClick">
    <!-- Status True -->
    <div v-if="data.isClick">{{ data.content }}</div>
    <!-- Status False -->
    <div v-else class="bg-gray-600"></div>
  </div>
</template>