<script setup>
import Slide from '@/components/deck/Slide.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelSprite from '@/components/pixel/PixelSprite.vue'
import Vocab from '@/components/deck/Vocab.vue'
</script>

<template>
  <Slide>
    <div class="label"><PixelIcon name="star" />まとめ・<Vocab word="感想" /></div>
    <div class="content">
      <div class="sum">
        <div class="paper panel sc rv" style="--d:1">
          <div class="si">🛡</div>
          <Vocab word="安全" />を<Vocab word="守" />る<br><ruby>会社<rt>かいしゃ</rt></ruby></div>
        <div class="paper panel sc rv" style="--d:2">
          <div class="si">🏠</div>
          <ruby>働<rt>はたら</rt></ruby>きやすい<br><Vocab word="在宅勤務" />・イベント</div>
        <div class="paper panel sc rv" style="--d:3">
          <div class="si">🌏</div>
          <Vocab word="外国人" />が<ruby>多<rt>おお</rt></ruby>い<br><ruby>英語<rt>えいご</rt></ruby>OK</div>
      </div>
      <div class="dark panel final rv" style="--d:5"><PixelSprite name="ramazan" :width="72" :height="108" />
        <p><ruby>私<rt>わたし</rt></ruby>もエンジニアなので、<br><span class="glowtxt">いつかこんな<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>いてみたいです！</span></p>
      </div>
    </div>
  </Slide>
</template>
