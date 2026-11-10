<script setup>
/** Card with the QR code that opens the vocabulary list on phones. */
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import QrCode from '@/components/pixel/QrCode.vue'
import { WORDS_PAGE } from '@/data/site.js'

defineProps({ corner: { type: String, required: true, validator: (v) => ['tr', 'bl'].includes(v) } })
</script>

<template>
  <a :class="['qrbox', corner]" :href="WORDS_PAGE" target="_blank" rel="noopener"><QrCode /><span><PixelIcon name="book" /><ruby>単語<rt>たんご</rt></ruby>リスト</span></a>
</template>
