<script setup>
import Slide from '@/components/deck/Slide.vue'
import HenngeLogo from '@/components/pixel/HenngeLogo.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelSprite from '@/components/pixel/PixelSprite.vue'
import Vocab from '@/components/deck/Vocab.vue'
import { useSlideSteps } from '@/composables/useSlideSteps.js'

const { frag } = useSlideSteps()
</script>

<template>
  <Slide>
    <div class="label"><PixelIcon name="bulb" />なぜHENNGE？</div>
    <div class="content">
      <div class="why">
        <div class="why-l">
          <p class="txt rv" style="--d:1"><ruby>私<rt>わたし</rt></ruby>はエンジニアなので、<br>セキュリティとクラウドに<Vocab word="興味" />があります。</p>
          <p class="txt rv" style="--d:2">それで、HENNGEに<ruby>出会<rt>であ</rt></ruby>いました。<br>HENNGEは、これがとても<b class="glowtxt"><ruby>上手<rt>じょうず</rt></ruby></b>です。</p>
          <p class="txt rv" style="--d:3">だから、<b>HENNGE<Vocab word="株式会社" /></b>について<Vocab word="調" />べはじめました。</p>
          <div class="bubble" :class="frag(1)">この<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いたことがありますか？</div>
        </div>
        <div class="why-r rv" style="--d:4"><HenngeLogo kind="mark" :width="170" :height="170" glow />
          <div class="logo-txt"><HenngeLogo kind="wordmark" :width="420" :height="85" glow /></div>
          <div class="speech"><PixelSprite name="ramazan" :width="72" :height="108" /><span>この<ruby>会社<rt>かいしゃ</rt></ruby>です！</span></div>
        </div>
      </div>
    </div>
  </Slide>
</template>
