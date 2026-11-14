<script setup>
import Slide from '@/components/deck/Slide.vue'
import { SOURCE_ENTRY } from '@/data/vocabulary.js'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelPic from '@/components/pixel/PixelPic.vue'
import Vocab from '@/components/deck/Vocab.vue'
import { useSlideSteps } from '@/composables/useSlideSteps.js'

const { frag } = useSlideSteps()
</script>

<template>
  <Slide :question="4">
    <div class="label"><PixelIcon name="yen" /><Vocab word="給料" /></div>
    <div class="content">
      <div class="bubble center rv sal-q" style="--d:1"><ruby>皆<rt>みな</rt></ruby>さん、<Vocab word="給料" />はいくらぐらいだと<ruby>思<rt>おも</rt></ruby>いますか？</div>
      <div class="sal2">
        <div class="sh rv" style="--d:2"><Vocab word="平均年収" />（<ruby>1年<rt>いちねん</rt></ruby>の<ruby>給料<rt>きゅうりょう</rt></ruby>）</div>
        <div class="srow c1" :class="frag(1)"><span class="sl"><ruby>日本<rt>にほん</rt></ruby>の<Vocab word="平均" /></span>
          <div class="sbar"><i style="--w:46%"></i></div>
          <b>460<ruby>万円<rt>まんえん</rt></ruby></b></div>
        <div class="srow c3" :class="frag(2)"><span class="sl"><PixelPic name="star" :size="30" />HENNGE</span>
          <div class="sbar"><i style="--w:55%"></i></div>
          <b>550<ruby>万円<rt>まんえん</rt></ruby></b></div>
        <div class="srow c2" :class="frag(3)"><span class="sl">IT<ruby>会社<rt>がいしゃ</rt></ruby>の<Vocab word="平均" /></span>
          <div class="sbar"><i style="--w:65%"></i></div>
          <b>650<ruby>万円<rt>まんえん</rt></ruby></b></div>
      </div>
      <div class="sal-notes">
        <div class="sal-note up" :class="frag(1)"><PixelPic name="happy" class="bob" :size="36" />HENNGEは<ruby>日本<rt>にほん</rt></ruby>の<ruby>平均<rt>へいきん</rt></ruby>より<b>ずっと<ruby>高<rt>たか</rt></ruby>い</b>！</div>
        <div class="sal-note down" :class="frag(3)"><PixelPic name="sad" class="shake" :size="36" />でも、ITの<ruby>平均<rt>へいきん</rt></ruby>より<b><ruby>低<rt>ひく</rt></ruby>い</b>…</div>
      </div>
      <div class="src-link" :class="frag(3)"><PixelIcon name="book" />くわしく<ruby>見<rt>み</rt></ruby>たい<ruby>人<rt>ひと</rt></ruby>は、<span class="src-n">{{ SOURCE_ENTRY.n }}</span><ruby>番<rt>ばん</rt></ruby>のリンクへ<small>（<ruby>国税庁<rt>こくぜいちょう</rt></ruby> 2023）</small></div>
    </div>
  </Slide>
</template>
