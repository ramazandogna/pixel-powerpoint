<script setup>
import Slide from '@/components/deck/Slide.vue'
import CountUp from '@/components/deck/CountUp.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelPic from '@/components/pixel/PixelPic.vue'
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
        <div class="dark panel stat right-q">
          <div class="rq" :class="frag(1)"><PixelPic name="laptop" class="bob" :size="40" />IT・エンジニアリングでは、<br>HENNGEの<Vocab word="外国人" />の<Vocab word="割合" />は<br>どのくらいだと<ruby>思<rt>おも</rt></ruby>いますか？</div>
          <div class="rchart" :class="frag(2)">
            <div class="grid"><i v-for="cell in 100" :key="cell" :class="{ f: cell <= 88 }" :style="{ '--i': cell - 1 }"></i></div>
            <div class="huge glowtxt">なんと <CountUp :to="88" :at="2" />%</div>
          </div>
        </div>
      </div>
      <div class="eng" :class="frag(3)"><PixelPic name="chat" class="bob" :size="40" /><ruby>仕事<rt>しごと</rt></ruby>のコミュニケーションは<b><ruby>英語<rt>えいご</rt></ruby></b> → <b class="big-en"><ruby>英語<rt>えいご</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>ける！</b></div>
    </div>
  </Slide>
</template>
