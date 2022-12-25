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

watch(selectCard, (nV: GameDataType, oV: GameDataType) => {
  const result = compareCard(oV, nV)
  if (Object.keys(oV).length !== 0) {
    const oIndex = cardData.value.indexOf(oV)
    const nIndex = cardData.value.indexOf(nV)
    if (result.length === 0) {
      setTimeout(() => {

        if (oIndex !== -1 && nIndex !== -1) {
          cardData.value[oIndex] = { ...cardData.value[oIndex], isClick: false }
          cardData.value[nIndex] = { ...cardData.value[nIndex], isClick: false }
        }
        selectCard.value = {}
        // Reset temp value
      }, 500)
    } else {
      if (oIndex !== -1 && nIndex !== -1) {
        cardData.value[oIndex] = { ...cardData.value[oIndex], isCompare: true }
        cardData.value[nIndex] = { ...cardData.value[nIndex], isCompare: true }
      }
      selectCard.value = {}
    }
  }
})

</script>
<template>
  <div class="w-full h-full grid grid-cols-4 justify-center content-center">
    <Card v-for="item in cardData" :key="item.index" :data="item" @update="handleClick" />
  </div>
</template>
