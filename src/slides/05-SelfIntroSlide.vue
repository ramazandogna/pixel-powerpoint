<script setup>
import Slide from '@/components/deck/Slide.vue'
import Flag from '@/components/pixel/Flag.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelSprite from '@/components/pixel/PixelSprite.vue'
import Vocab from '@/components/deck/Vocab.vue'
</script>

<template>
  <Slide>
    <div class="label"><PixelIcon name="me" /><Vocab word="自己紹介" /></div>
    <div class="content">
      <div class="me">
        <div class="me-card paper panel rv" style="--d:1">
          <div class="me-spr hop"><PixelSprite name="ramazan" :width="168" :height="252" /></div>
          <div class="flag me-flag"><Flag country="tr" /></div>
          <div class="me-name">ラマザン</div>
        </div>
        <div class="me-info">
          <div class="mi rv" style="--d:2">🎂 <ruby>26歳<rt>にじゅうろくさい</rt></ruby>です。トルコから<ruby>来<rt>き</rt></ruby>ました。</div>
          <div class="mi rv" style="--d:3">🎓 <ruby>大学<rt>だいがく</rt></ruby>でコンピューター<Vocab word="工学" />を<ruby>勉強<rt>べんきょう</rt></ruby>しました。</div>
          <div class="mi rv" style="--d:4">💻 <ruby>3年間<rt>さんねんかん</rt></ruby>、エンジニアとして<ruby>働<rt>はたら</rt></ruby>きました。</div>
          <div class="mi rv" style="--d:5">🗾 <ruby>今<rt>いま</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>で<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>しています。</div>
          <div class="dark panel rv" style="--d:6">
            <div class="big2">どうして<ruby>友<rt>とも</rt></ruby>だちにHENNGEを<br>すすめたのか…<span class="glowtxt">この<Vocab word="発表" />でわかります！</span></div>
          </div>
        </div>
      </div>
    </div>
  </Slide>
</template>
