<script setup>
import Slide from '@/components/deck/Slide.vue'
import CountUp from '@/components/deck/CountUp.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelPic from '@/components/pixel/PixelPic.vue'
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
      <div class="facts2">
        <div class="journey rv" style="--d:6">
          <div class="jrow"><s class="jn old">HDE</s><i class="jarr"></i><span class="jn hot">HENNGE</span></div>
          <div class="jw"><PixelPic name="globe" class="spin" :size="38" /><span><ruby>世界<rt>せかい</rt></ruby>へ</span><small><ruby>日本<rt>にほん</rt></ruby>・<ruby>台湾<rt>たいわん</rt></ruby>など</small></div>
        </div>
        <div class="fact dark panel rv" style="--d:7">
          <PixelPic name="cake30" class="cake" :size="150" />
          <div class="frow"><div class="eyebrow">だいたい</div><div class="big2 glowtxt"><CountUp :to="30" /><ruby>年<rt>ねん</rt></ruby></div></div>
        </div>
        <div class="fact paper panel rv" style="--d:8">
          <PixelPic name="skyline" class="skyline" :size="150" />
          <div class="frow"><div class="eyebrow dk"><Vocab word="本社" /></div><div class="big2"><ruby>東京<rt>とうきょう</rt></ruby>・<b class="shibuya"><ruby>渋谷<rt>しぶや</rt></ruby></b></div></div>
        </div>
      </div>
    </div>
  </Slide>
</template>
