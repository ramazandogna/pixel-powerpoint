<script setup>
import Slide from '@/components/deck/Slide.vue'
import { SOURCE_ENTRY } from '@/data/vocabulary.js'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import Vocab from '@/components/deck/Vocab.vue'
import { useSlideSteps } from '@/composables/useSlideSteps.js'

const { frag } = useSlideSteps()
</script>

<template>
  <Slide :question="4">
    <div class="label"><PixelIcon name="yen" /><Vocab word="給料" /></div>
    <div class="content">
      <div class="bubble center rv sal-q" style="--d:1"><ruby>皆<rt>みな</rt></ruby>さん、<Vocab word="給料" />はいくらぐらいだと<ruby>思<rt>おも</rt></ruby>いますか？ 🤔</div>
      <div class="sal2" :class="frag(1)">
        <div class="sh"><Vocab word="平均年収" />（<ruby>1年<rt>いちねん</rt></ruby>の<ruby>給料<rt>きゅうりょう</rt></ruby>）</div>
        <div class="srow c1"><span class="sl">🇯🇵 <ruby>日本<rt>にほん</rt></ruby>の<Vocab word="平均" /></span>
          <div class="sbar"><i style="--w:46%"></i></div>
          <b>460<ruby>万円<rt>まんえん</rt></ruby></b></div>
        <div class="srow c2"><span class="sl">💻 IT<ruby>会社<rt>がいしゃ</rt></ruby>の<Vocab word="平均" /></span>
          <div class="sbar"><i style="--w:65%"></i></div>
          <b>650<ruby>万円<rt>まんえん</rt></ruby></b></div>
        <div class="srow c3"><span class="sl">⭐ HENNGE</span>
          <div class="sbar"><i style="--w:55%"></i></div>
          <b>550<ruby>万円<rt>まんえん</rt></ruby></b></div>
      </div>
      <div :class="frag(2)">
        <div class="sal-note">
          <div>👍 <ruby>日本<rt>にほん</rt></ruby>の<ruby>平均<rt>へいきん</rt></ruby>より<b><ruby>高<rt>たか</rt></ruby>い</b>！　でも、ITの<ruby>中<rt>なか</rt></ruby>では<b><ruby>普通<rt>ふつう</rt></ruby></b>ぐらい。</div>
          <div class="src2"><ruby>出典<rt>しゅってん</rt></ruby><span class="src-n">{{ SOURCE_ENTRY.n }}</span>：<ruby>国税庁<rt>こくぜいちょう</rt></ruby>（2023<ruby>年<rt>ねん</rt></ruby>）　📱 <ruby>興味<rt>きょうみ</rt></ruby>があったら、QRの<ruby>単語<rt>たんご</rt></ruby>リスト {{ SOURCE_ENTRY.n }}<ruby>番<rt>ばん</rt></ruby>を<ruby>見<rt>み</rt></ruby>てください。</div>
          <div class="src-link">🔗 <ruby>興味<rt>きょうみ</rt></ruby>がある<ruby>人<rt>ひと</rt></ruby>は、{{ SOURCE_ENTRY.n }}<ruby>番<rt>ばん</rt></ruby>のリンクから<ruby>元<rt>もと</rt></ruby>のデータを<ruby>見<rt>み</rt></ruby>ることができます。</div>
        </div>
      </div>
    </div>
  </Slide>
</template>
