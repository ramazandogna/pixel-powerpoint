<script setup>
import Slide from '@/components/deck/Slide.vue'
import Flag from '@/components/pixel/Flag.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelPic from '@/components/pixel/PixelPic.vue'
import Vocab from '@/components/deck/Vocab.vue'
import PixelSprite from '@/components/pixel/PixelSprite.vue'
</script>

<template>
  <Slide>
    <div class="label"><PixelIcon name="team" /><ruby>私<rt>わたし</rt></ruby>たちのチーム</div>
    <div class="content">
      <div class="slogans">
        <div class="slogan big rv" style="--d:1"><PixelPic name="globe" class="spin" :size="44" /><ruby>3つ<rt>みっつ</rt></ruby>の<ruby>国<rt>くに</rt></ruby>から<ruby>1つ<rt>ひとつ</rt></ruby>のチーム</div>
        <div class="slogan-row">
          <div class="slogan q rv" style="--d:2">なぜ<ruby>日本<rt>にほん</rt></ruby>？</div>
          <div class="slogan q rv" style="--d:3">なぜHENNGE？<small><Vocab word="発表" />の<ruby>最後<rt>さいご</rt></ruby>にわかります</small></div>
        </div>
      </div>
      <div class="team">
        <div class="tcard rv">
          <div class="flag"><Flag country="tr" /></div>
          <div class="tspr"><PixelSprite name="ramazan" :width="120" :height="180" /></div>
          <div class="tname">ラマザン</div>
          <div class="tsub">リーダー</div>
        </div>
        <div class="tcard rv">
          <div class="flag"><Flag country="np" /></div>
          <div class="tspr"><PixelSprite name="sushma" :width="120" :height="180" /></div>
          <div class="tname">スシュマ</div>
          <div class="tsub">メンバー</div>
        </div>
        <div class="tcard rv">
          <div class="flag"><Flag country="np" /></div>
          <div class="tspr"><PixelSprite name="sandip" :width="120" :height="180" /></div>
          <div class="tname">サンディープ</div>
          <div class="tsub">メンバー</div>
        </div>
        <div class="tcard rv">
          <div class="flag"><Flag country="cn" /></div>
          <div class="tspr"><PixelSprite name="ryu" :width="120" :height="180" /></div>
          <div class="tname">リュウ</div>
          <div class="tsub">メンバー</div>
        </div>
      </div>
    </div>
  </Slide>
</template>
