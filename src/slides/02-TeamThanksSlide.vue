<script setup>
import Slide from '@/components/deck/Slide.vue'
import Flag from '@/components/pixel/Flag.vue'
import PixelSprite from '@/components/pixel/PixelSprite.vue'
import { useSlideSteps } from '@/composables/useSlideSteps.js'

const { frag } = useSlideSteps()
</script>

<template>
  <Slide variant="cover intro" qr>
    <div class="content">
      <div class="title-wrap">
        <div class="tag rv" style="--d:0">スペシャルサンクス</div>
        <h1 class="hero rv" style="--d:1">チームのみんな、ありがとう！</h1>
        <div class="thx-wrap">
          <div class="thx np" :class="frag(1)">
            <div class="flag"><Flag country="np" /></div>
            <div class="tspr"><PixelSprite name="sushma" :width="120" :height="180" /></div>
            <div class="tname">スシュマさん</div>
            <div class="say">ありがとう！<small>धन्यवाद！</small></div>
          </div>
          <div class="thx np np2" :class="frag(2)">
            <div class="flag"><Flag country="np" /></div>
            <div class="tspr"><PixelSprite name="sandip" :width="120" :height="180" /></div>
            <div class="tname">サンディープさん</div>
            <div class="say">ありがとう！<small>धन्यवाद！</small></div>
          </div>
          <div class="thx cn" :class="frag(3)">
            <div class="flag"><Flag country="cn" /></div>
            <div class="tspr"><PixelSprite name="ryu" :width="120" :height="180" /></div>
            <div class="tname">リュウさん</div>
            <div class="say">ありがとう！<small>谢谢！</small></div>
          </div>
        </div>
        <div class="thx-msg" :class="frag(4)"><ruby>一緒<rt>いっしょ</rt></ruby>にがんばってくれて、ありがとう！ 🙇</div>
      </div>
      <div class="sparkles"><i style="--x:8%;--y:30%"></i><i style="--x:90%;--y:50%"></i><i style="--x:20%;--y:85%"></i><i style="--x:75%;--y:88%"></i><i style="--x:50%;--y:6%"></i></div>
    </div>
  </Slide>
</template>
