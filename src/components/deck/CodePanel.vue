<script setup>
/** Decorative code-editor card: a JS object describing the presenter. Typing is CSS-only. */
const lines = [
  [['k', 'const'], ['i', ' ramazan '], ['p', '= {']],
  [['i', '  age'], ['p', ': '], ['n', '26'], ['p', ',']],
  [['i', '  country'], ['p', ': '], ['s', '"Türkiye"'], ['p', ',']],
  [['i', '  major'], ['p', ': '], ['s', '"Computer Eng."'], ['p', ',']],
  [['i', '  experience'], ['p', ': '], ['s', '"3 years"'], ['p', ',']],
  [['p', '};']],
]
const len = (l) => l.reduce((n, [, t]) => n + t.length, 0)
</script>

<template>
  <div class="code-panel" aria-hidden="true">
    <div class="cp-bar"><i /><i /><i /><span>ramazan.js</span></div>
    <div class="cp-body">
      <div v-for="(l, i) in lines" :key="i" class="cp-row" :class="{ 'cp-hot': i === 4 }">
        <b class="cp-no">{{ i + 1 }}</b>
        <span class="cp-line" :style="{ '--n': len(l) + 1, '--l': i }">
          <template v-for="([c, t], j) in l" :key="j"><span :class="`t-${c}`">{{ t }}</span></template>
          <em v-if="i === 5" class="cp-cur" />
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-panel{width:420px;box-sizing:border-box;background:#1c1f26;border:5px solid #e4572e;border-radius:12px;box-shadow:6px 6px 0 #000;overflow:hidden;font-family:"DotGothic16",monospace;font-size:22px;line-height:30px;color:#fff;text-align:left}
.cp-bar{display:flex;align-items:center;gap:8px;height:34px;padding:0 12px;background:#3d4250}
.cp-bar i{width:12px;height:12px;background:#e4572e}
.cp-bar i:nth-child(2){background:#f08a4b}
.cp-bar i:nth-child(3){background:#fff}
.cp-bar span{margin-left:10px;font-size:18px;line-height:1;color:#9aa0ad}
.cp-body{padding:30px 0 6px}
.cp-row{display:flex;border-left:4px solid transparent;white-space:pre}
.cp-row.cp-hot{background:rgba(240,138,75,.18);border-left-color:#f08a4b}
.cp-no{width:34px;padding-right:12px;box-sizing:content-box;text-align:right;font-weight:400;color:#6b6f7a}
.cp-line{display:block;overflow:hidden;white-space:pre;padding-left:4px}
.t-k{color:#f08a4b}.t-i{color:#ffd3b0}.t-n{color:#7ee0a0}.t-s{color:#ffd166}.t-p{color:#9aa0ad}
.cp-row:first-child .t-i{color:#fff}
.cp-cur{display:none}
@media (prefers-reduced-motion:no-preference){
  .cp-cur{display:inline-block;width:.6em;height:1em;vertical-align:-2px;background:#f08a4b}
  :global(.slide.active) .cp-cur{animation:cpblink 1s steps(2) infinite}
}
:global(.slide.active) .cp-line{animation:cptype .25s steps(var(--n)) both;animation-delay:calc(var(--l)*.25s + .9s)}
@keyframes cptype{from{width:0}to{width:calc(var(--n)*1ch)}}
@keyframes cpblink{0%,100%{opacity:1}50%{opacity:0}}
</style>
