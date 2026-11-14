<script setup>
import Slide from '@/components/deck/Slide.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelPic from '@/components/pixel/PixelPic.vue'
import PixelSprite from '@/components/pixel/PixelSprite.vue'
import Vocab from '@/components/deck/Vocab.vue'
import { useSlideSteps } from '@/composables/useSlideSteps.js'

const { frag } = useSlideSteps()
const TEAM = ['ramazan', 'sushma', 'sandip', 'ryu']
</script>

<template>
  <Slide>
    <div class="label"><PixelIcon name="star" />まとめ・<Vocab word="感想" /></div>
    <div class="content">
      <div class="sum">
        <div class="paper panel sc rv" style="--d:1"><PixelPic name="shield" class="bob" :size="72" />
          <div><Vocab word="安全" />を<Vocab word="守" />る<br><ruby>会社<rt>かいしゃ</rt></ruby></div>
        </div>
        <div class="paper panel sc rv" style="--d:2"><PixelPic name="house" class="bob" :size="72" />
          <div><ruby>働<rt>はたら</rt></ruby>きやすい<br><Vocab word="在宅勤務" />・イベント</div>
        </div>
        <div class="paper panel sc rv" style="--d:3"><PixelPic name="globe" class="bob" :size="72" />
          <div><Vocab word="外国人" />が<ruby>多<rt>おお</rt></ruby>い<br><ruby>英語<rt>えいご</rt></ruby>OK</div>
        </div>
      </div>
      <div class="sum-end">
        <div class="dark panel final" :class="frag(1)"><PixelSprite name="ramazan" :width="72" :height="108" />
          <p><ruby>私<rt>わたし</rt></ruby>はエンジニアなので、<br><span class="glowtxt">いつかこんな<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>いてみたいです！</span></p>
        </div>
        <div class="team-say" :class="frag(2)">
          <div class="say-bubble"><ruby>私<rt>わたし</rt></ruby>たちはHENNGEで<ruby>働<rt>はたら</rt></ruby>きたいです！</div>
          <div class="say-team"><span v-for="(m, i) in TEAM" :key="m" class="tspr" :style="{ animationDelay: `${i * 0.3}s` }"><PixelSprite :name="m" :width="56" :height="84" /></span></div>
        </div>
      </div>
    </div>
  </Slide>
</template>
