<script setup>
import Slide from '@/components/deck/Slide.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import Vocab from '@/components/deck/Vocab.vue'
</script>

<template>
  <Slide :question="4">
    <div class="label"><PixelIcon name="clock" /><ruby>働<rt>はたら</rt></ruby>く<ruby>時間<rt>じかん</rt></ruby>とイベント</div>
    <div class="content">
      <div class="hours paper panel rv" style="--d:1">
        <div class="hl">🕙 <ruby>午前<rt>ごぜん</rt></ruby><ruby>10時<rt>じゅうじ</rt></ruby> 〜 <ruby>午後<rt>ごご</rt></ruby><ruby>7時<rt>しちじ</rt></ruby></div>
        <div class="hbar"><i v-for="hour in 24" :key="hour" :class="{ on: hour > 10 && hour <= 19 }"></i></div>
        <div class="hlabels"><span>0</span><span>6</span><span>12</span><span>18</span><span>24</span></div>
        <div class="hnotes"><span>☕ <ruby>朝<rt>あさ</rt></ruby>がゆっくり</span><span>🌙 <Vocab word="残業" />：あるけど、あまり<ruby>長<rt>なが</rt></ruby>くない</span><span>🎌 <ruby>土日<rt>どにち</rt></ruby>は<ruby>休<rt>やす</rt></ruby>み</span><span>⏱ <ruby>1日<rt>いちにち</rt></ruby> <ruby>約<rt>やく</rt></ruby><ruby>8時間<rt>はちじかん</rt></ruby>（<ruby>休<rt>やす</rt></ruby>み<ruby>1時間<rt>いちじかん</rt></ruby>）</span></div>
      </div>
      <div class="dark panel event rv" style="--d:2">
        <div class="eyebrow">COMING UP NEXT <small style="color:#8fd3f0">（<ruby>例<rt>れい</rt></ruby>）</small></div>
        <div class="evt">🎉 <ruby>社内<rt>しゃない</rt></ruby>イベント</div>
        <p>イベントがたくさんあって、<Vocab word="社員" />どうしが<ruby>仲<rt>なか</rt></ruby>よくなれそうです！</p>
        <div class="mini-week"><span>月</span><span>火</span><span class="ev">水🎉</span><span>木</span><span class="ev">金🍕</span></div>
      </div>
    </div>
  </Slide>
</template>
