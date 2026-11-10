<script setup>
/** Mobile vocabulary list opened from the QR code. Type a number to find a word. */
import { computed, ref } from 'vue'
import Jp from '@/components/common/Jp.vue'
import { CREDIT } from '@/data/site.js'
import { SOURCE_ENTRY, VOCABULARY } from '@/data/vocabulary.js'

const ENTRIES = [...VOCABULARY, SOURCE_ENTRY]
const query = ref('')
const list = ref(null)

const matches = (entry) => !query.value || String(entry.n).includes(query.value)
const shownCount = computed(() => ENTRIES.filter(matches).length)

function onInput(event) {
  const digits = event.target.value.replace(/\D/g, '')
  event.target.value = digits
  query.value = digits
  if (digits && list.value.getBoundingClientRect().top < 0) list.value.scrollIntoView({ block: 'start' })
}
</script>

<template>
  <main>
    <h1>📖 <b>HENNGE</b> の<ruby>単語<rt>たんご</rt></ruby>リスト</h1>
    <div class="hint">
      <span>🇳🇵 शब्दको नम्बर लेख्नुहोस्</span>
      <span>🇨🇳 请输入单词编号</span>
      <span>🇲🇳 Үгийн дугаарыг бичнэ үү</span>
      <span>🇹🇷 Kelime numarasını yazın</span>
      <span>🇯🇵 <ruby>単語<rt>たんご</rt></ruby>の<ruby>番号<rt>ばんごう</rt></ruby>を<ruby>入<rt>い</rt></ruby>れてください</span>
    </div>
    <div class="search"><input id="q" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" :placeholder="`1 〜 ${ENTRIES.length}`" autocomplete="off" aria-label="単語の番号" @input="onInput" /></div>
    <div id="list" ref="list" class="list">
      <div v-for="entry in ENTRIES" v-show="matches(entry)" :key="entry.n" :class="['vc', { src: entry === SOURCE_ENTRY, hit: query && String(entry.n) === query }]" :data-n="entry.n">
        <span class="vn">{{ entry.n }}</span>
        <div class="vk"><ruby>{{ entry.word }}<rt>{{ entry.reading }}</rt></ruby>{{ entry.suffix }}</div>
        <div class="tr"><span>🇬🇧 {{ entry.en }}</span><span>🇨🇳 {{ entry.zh }}</span><span>🇳🇵 {{ entry.ne }}</span><span>🇹🇷 {{ entry.tr }}</span></div>
        <div v-if="entry === SOURCE_ENTRY" class="srcbox"><Jp :text="entry.title" /><br /><small>{{ entry.note }}</small><br /><a :href="entry.url" target="_blank" rel="noopener">{{ entry.urlLabel }}</a></div>
      </div>
    </div>
    <div id="empty" class="empty" :style="shownCount ? undefined : { display: 'block' }">🔍 ？</div>
    <footer class="credit">powered by <a :href="CREDIT.url" target="_blank" rel="noopener">{{ CREDIT.name }}</a></footer>
  </main>
</template>
