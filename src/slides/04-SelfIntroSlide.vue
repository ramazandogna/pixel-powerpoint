<script setup>
import Slide from '@/components/deck/Slide.vue'
import Flag from '@/components/pixel/Flag.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelPic from '@/components/pixel/PixelPic.vue'
import PixelSprite from '@/components/pixel/PixelSprite.vue'
import CodePanel from '@/components/deck/CodePanel.vue'
import Vocab from '@/components/deck/Vocab.vue'
</script>

<template>
  <Slide>
    <div class="label"><PixelIcon name="me" /><Vocab word="早口" /><Vocab word="自己紹介" /></div>
    <div class="content">
      <div class="me">
        <div class="me-card paper panel rv" style="--d:1">
          <div class="me-spr hop"><PixelSprite name="ramazan" :width="168" :height="252" /></div>
          <div class="flag me-flag"><Flag country="tr" /></div>
          <div class="me-name">ラマザン</div>
        </div>
        <div class="me-info">
          <div class="mi rv" style="--d:2"><PixelPic name="cake" class="bob" :size="40" /><ruby>26歳<rt>にじゅうろくさい</rt></ruby>・トルコから<ruby>来<rt>き</rt></ruby>ました。</div>
          <div class="mi rv" style="--d:3"><PixelPic name="cap" class="bob" :size="40" /><ruby>大学<rt>だいがく</rt></ruby>でコンピューター<Vocab word="工学" />。</div>
          <div class="mi rv" style="--d:4"><PixelPic name="laptop" class="bob" :size="40" />エンジニアとして<ruby>3年<rt>さんねん</rt></ruby><ruby>働<rt>はたら</rt></ruby>きました。</div>
          <div class="me-code rv" style="--d:6"><CodePanel /></div>
          <div class="dark panel rv" style="--d:5">
            <div class="big2"><ruby>働<rt>はたら</rt></ruby>くのにとてもいい<ruby>会社<rt>かいしゃ</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>って、<br><ruby>友<rt>とも</rt></ruby>だちに<span class="glowtxt">HENNGEをすすめました！</span></div>
          </div>
        </div>
      </div>
    </div>
  </Slide>
</template>

<style scoped>
.me-info{display:grid;grid-template-columns:1fr 420px;column-gap:32px;align-items:start}
.me-info > .mi{grid-column:1;font-size:34px;padding-block:13.5px}
.me-info > .me-code{grid-column:2;grid-row:1 / 4;align-self:end;margin-bottom:-8px}
.me-info > .dark{grid-column:1 / -1}
</style>
