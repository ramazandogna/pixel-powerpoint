<script setup>
import { computed } from 'vue'
import HenngeLogo from '@/components/pixel/HenngeLogo.vue'
import { useDeck } from '@/composables/useDeck.js'
import { CREDIT } from '@/data/site.js'

const props = defineProps({ page: { type: Number, required: true } })
const { state } = useDeck()
const label = computed(() => `${String(props.page).padStart(2, '0')} / ${state.total}`)
</script>

<template>
  <div class="foot"><span class="logo"><HenngeLogo kind="wordmark" :width="150" :height="30" /></span><span class="pgw"><a class="cred" :href="CREDIT.url" target="_blank" rel="noopener">powered by <b>{{ CREDIT.name }}</b></a><span class="pg">{{ label }}</span></span></div>
</template>
