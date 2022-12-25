<script setup lang="ts">
import { compareCard } from '../event-controller/compareCard';
import { ref, watch } from 'vue'
import Card from '@/components/shared/Card.vue';
const props = defineProps<{
  data: GameDataType[]
}>()
const cardData = ref(props.data)
const selectCard = ref<{}>({})

const handleClick = (data: object) => selectCard.value = data

watch(selectCard, (nV, oV) => {
  const result = compareCard(oV, nV)
  if (Object.keys(oV).length !== 0) {
    if (result.length === 0) {
      selectCard.value = {}
    } else {
      console.log(result)
    }

  }
})

</script>
<template>
  <div class="w-full h-full grid grid-cols-4 justify-center content-center">
    <Card v-for="item in cardData" :key="item.index" :data="item" @update="handleClick" />
  </div>
</template>
