<script setup>
import Slide from '@/components/deck/Slide.vue'
import CountUp from '@/components/deck/CountUp.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import Vocab from '@/components/deck/Vocab.vue'
</script>

<template>
  <Slide :question="1">
    <div class="label"><PixelIcon name="bldg" /><ruby>会社<rt>かいしゃ</rt></ruby>について</div>
    <div class="content">
      <div class="timeline">
        <div class="tl-line">
        </div>
        <div class="tl rv" style="--d:1">
          <div class="yr">1996</div>
          <div class="dot">
          </div>
          <div class="tlc"><ruby>11月<rt>じゅういちがつ</rt></ruby><ruby>5日<rt>いつか</rt></ruby><br><Vocab word="設立" /><br><small><ruby>名前<rt>なまえ</rt></ruby>は「HDE」</small></div>
        </div>
        <div class="tl rv" style="--d:3">
          <div class="yr">2019</div>
          <div class="dot">
          </div>
          <div class="tlc"><ruby>今<rt>いま</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby><br>「HENNGE」に<br><Vocab word="変" />わりました<br><small><ruby>同<rt>おな</rt></ruby>じ<ruby>年<rt>とし</rt></ruby>に<Vocab word="上場" /></small></div>
        </div>
        <div class="tl rv" style="--d:5">
          <div class="yr">2026</div>
          <div class="dot now">
          </div>
          <div class="tlc"><ruby>今<rt>いま</rt></ruby><br><small><ruby>日本<rt>にほん</rt></ruby>と<ruby>海外<rt>かいがい</rt></ruby>で<br>サービス<ruby>中<rt>ちゅう</rt></ruby></small></div>
        </div>
      </div>
      <div class="facts">
        <div class="dark panel rv" style="--d:6">
          <div class="eyebrow">だいたい</div>
          <div class="huge glowtxt"><CountUp :to="30" /><ruby>年<rt>ねん</rt></ruby></div>
          <div class="cap"><ruby>前<rt>まえ</rt></ruby>にできました</div>
        </div>
        <div class="paper panel rv" style="--d:7">
          <div class="eyebrow dk"><Vocab word="本社" /></div>
          <div class="big2">📍 <ruby>東京<rt>とうきょう</rt></ruby>・<ruby>渋谷<rt>しぶや</rt></ruby></div>
        </div>
      </div>
    </div>
  </Slide>
</template>
