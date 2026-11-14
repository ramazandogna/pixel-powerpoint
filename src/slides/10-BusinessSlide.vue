<script setup>
import Slide from '@/components/deck/Slide.vue'
import HenngeLogo from '@/components/pixel/HenngeLogo.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelPic from '@/components/pixel/PixelPic.vue'
import Vocab from '@/components/deck/Vocab.vue'
import { useSlideSteps } from '@/composables/useSlideSteps.js'

const { frag } = useSlideSteps()
</script>

<template>
  <Slide :question="2">
    <div class="label"><PixelIcon name="shield" /><Vocab word="事業内容" /></div>
    <div class="content">
      <div class="flow rv" style="--d:1">
        <div class="node"><PixelPic name="laptop" class="bob" :size="56" />
          <div>パソコン・スマホ</div>
        </div>
        <div class="arrow"><i></i></div>
        <div class="node hub"><HenngeLogo kind="mark" :width="80" :height="80" glow />
          <div><HenngeLogo kind="wordmark" :width="150" :height="30" /></div>
        </div>
        <div class="arrow"><i></i></div>
        <div class="node"><PixelPic name="gmail" class="bob" :size="56" />
          <div>クラウド・メール</div>
        </div>
        <div class="bad"><PixelPic name="virus" class="wiggle" :size="56" /><b>✕</b></div>
      </div>
      <div class="dark panel big-panel rv" style="--d:2">
        <!-- one line per step: the reader (サンディープ) presses → before each sentence -->
        <div class="eyebrow">クラウドセキュリティのサービス（Cloud Security Service）「HENNGE One」</div>
        <ul class="pts">
          <li class="pt" :class="frag(1)"><PixelPic name="gmail" class="pt-ic" :size="40" /><span><ruby>会社<rt>かいしゃ</rt></ruby>のメールや<Vocab word="情報" />を<Vocab word="安全" />に<Vocab word="守" />ります。</span></li>
          <li class="pt" :class="frag(2)"><PixelPic name="house" class="pt-ic" :size="40" /><span><ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>外<rt>そと</rt></ruby>からも、<Vocab word="安全" />にログインできます。</span></li>
          <li class="pt" :class="frag(3)"><PixelPic name="key" class="pt-ic" :size="22" /><span><ruby>1回<rt>いっかい</rt></ruby>のログインで、いろいろなクラウドサービスが<ruby>使<rt>つか</rt></ruby>えます。</span></li>
          <li class="pt" :class="frag(4)"><PixelPic name="globe" class="pt-ic" :size="40" /><span><ruby>日本<rt>にほん</rt></ruby>だけでなく、<Vocab word="海外" />にも<Vocab word="提供" />しています。</span></li>
        </ul>
      </div>
    </div>
  </Slide>
</template>
