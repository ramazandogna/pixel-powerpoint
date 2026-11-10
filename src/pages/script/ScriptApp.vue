<script setup>
/** Speaker script + research questions for the team (two tabs, selected by URL hash). */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Jp from '@/components/common/Jp.vue'
import ScriptLine from '@/components/common/ScriptLine.vue'
import { QUESTIONS, findQuestion } from '@/data/questions.js'
import { SCRIPT_SECTIONS, TOTAL_SECONDS } from '@/data/script.js'
import { CREDIT } from '@/data/site.js'
import { TEAM } from '@/data/team.js'

const TABS = [
  { id: 'script', label: 'スクリプト' },
  { id: 'questions', label: '質問' },
]
const view = ref('script')
const fromHash = () => (location.hash.slice(1) === 'questions' ? 'questions' : 'script')
const onHashChange = () => (view.value = fromHash())

function select(id) {
  view.value = id
  try {
    history.replaceState(null, '', `#${id}`)
  } catch {
    /* file:// or sandboxed iframe */
  }
  window.scrollTo(0, 0)
}

const total = `${Math.floor(TOTAL_SECONDS / 60)}分${String(TOTAL_SECONDS % 60).padStart(2, '0')}秒`
const pad = (n) => String(n).padStart(2, '0')
const askerName = (number) => TEAM[findQuestion(number).asker].name

onMounted(() => {
  onHashChange()
  addEventListener('hashchange', onHashChange)
})
onBeforeUnmount(() => removeEventListener('hashchange', onHashChange))
</script>

<template>
  <main>
    <h1>HENNGE K.K</h1>
    <nav><a v-for="tab in TABS" :key="tab.id" :href="`#${tab.id}`" :data-v="tab.id" :class="{ on: view === tab.id }" @click.prevent="select(tab.id)">{{ tab.label }}</a></nav>
    <section id="v-script" :class="['view', { on: view === 'script' }]">
      <div class="legend"><span class="cue">▶</span> = 右矢印（→）を押す・click　｜　目安 合計 約{{ total }}</div>
      <template v-for="(section, i) in SCRIPT_SECTIONS" :key="i">
        <div class="sec"><span class="sn">{{ pad(i + 1) }}</span> <Jp :text="section.title" /> <span v-if="section.question" class="qtag">Q{{ section.question }} · {{ askerName(section.question) }}</span> <small>約{{ section.seconds }}秒</small></div>
        <ScriptLine v-for="(line, j) in section.lines" :key="j" :jp="line.jp" :en="line.en" />
      </template>
    </section>
    <section id="v-questions" :class="['view', { on: view === 'questions' }]">
      <div v-for="q in QUESTIONS" :key="q.number" class="card">
        <div class="num">Q{{ q.number }} · {{ TEAM[q.asker].name }}さんの質問</div>
        <div class="q"><Jp :text="q.question" /></div>
        <div class="en">{{ q.questionEn }}</div>
        <div class="a"><Jp :text="q.answer" /></div>
        <div class="en">{{ q.answerEn }}</div>
      </div>
    </section>
    <footer class="credit">powered by <a :href="CREDIT.url" target="_blank" rel="noopener">{{ CREDIT.name }}</a></footer>
  </main>
</template>
