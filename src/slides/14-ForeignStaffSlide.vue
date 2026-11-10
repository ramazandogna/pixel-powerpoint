<script setup>
import Slide from '@/components/deck/Slide.vue'
import CountUp from '@/components/deck/CountUp.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import Vocab from '@/components/deck/Vocab.vue'
import { useSlideSteps } from '@/composables/useSlideSteps.js'

const { frag } = useSlideSteps()
</script>

<template>
  <Slide :question="5">
    <div class="label"><PixelIcon name="globe" /><Vocab word="外国人" /><Vocab word="社員" /></div>
    <div class="content">
      <div class="intl">
        <div class="paper panel stat rv" style="--d:1">
          <div class="donut">
            <div class="dh">
              <div><CountUp :to="20" />%</div>
            </div>
          </div>
          <div class="cap dk"><ruby>全体<rt>ぜんたい</rt></ruby>の<Vocab word="外国籍" /><Vocab word="社員" />の<Vocab word="割合" /></div>
        </div>
        <div class="dark panel stat" :class="frag(1)">
          <div class="grid"><i v-for="cell in 100" :key="cell" :class="{ f: cell <= 88 }" :style="{ '--i': cell - 1 }"></i></div>
          <div class="huge glowtxt">なんと <CountUp :to="88" :at="1" />%</div>
          <div class="cap">エンジニアの<Vocab word="外国籍" /><Vocab word="社員" /></div>
        </div>
      </div>
      <div class="eng rv" style="--d:4">💬 <ruby>仕事<rt>しごと</rt></ruby>のコミュニケーション ＝ <b><ruby>英語<rt>えいご</rt></ruby></b> 🇬🇧</div>
      <div class="info" :class="frag(2)" style="text-align:center">➜ <ruby>日本語<rt>にほんご</rt></ruby>がまだ<ruby>上手<rt>じょうず</rt></ruby>じゃなくても、<ruby>働<rt>はたら</rt></ruby>けるかもしれません！</div>
    </div>
  </Slide>
</template>
