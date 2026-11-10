<script setup>
/** "Q1 スシュマさんの質問" card shown on the slide that answers a research question. */
import { computed } from 'vue'
import Jp from '@/components/common/Jp.vue'
import PixelSprite from '@/components/pixel/PixelSprite.vue'
import { findQuestion } from '@/data/questions.js'
import { TEAM } from '@/data/team.js'

const props = defineProps({ number: { type: Number, required: true } })
const question = computed(() => findQuestion(props.number))
const askerName = computed(() => TEAM[question.value.asker].name)
</script>

<template>
  <div class="qtag"><div class="qs"><PixelSprite :name="question.asker" :width="46" :height="69" /></div><div class="qt"><div class="qh"><b>Q{{ number }}</b>{{ askerName }}さんの<ruby>質問<rt>しつもん</rt></ruby></div><div class="qq"><Jp :text="question.short" /></div></div></div>
</template>
