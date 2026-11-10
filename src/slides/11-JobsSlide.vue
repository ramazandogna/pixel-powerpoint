<script setup>
import Slide from '@/components/deck/Slide.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import Vocab from '@/components/deck/Vocab.vue'
</script>

<template>
  <Slide :question="3">
    <div class="label"><PixelIcon name="case" /><Vocab word="職種" />と<ruby>働<rt>はたら</rt></ruby>き<ruby>方<rt>かた</rt></ruby></div>
    <div class="content">
      <div class="jobs">
        <div class="paper panel job rv" style="--d:1">
          <div class="jico">🤝</div>
          <div class="jt"><Vocab word="営業" /></div>
          <p>お<ruby>客<rt>きゃく</rt></ruby>さんに<ruby>会<rt>あ</rt></ruby>って、<br>サービスを<Vocab word="紹介" />する<ruby>仕事<rt>しごと</rt></ruby></p>
        </div>
        <div class="paper panel job rv" style="--d:2">
          <div class="jico">⌨️</div>
          <div class="jt">IT</div>
          <p>システムを<ruby>作<rt>つく</rt></ruby>ったり、<br><ruby>直<rt>なお</rt></ruby>したりする<ruby>仕事<rt>しごと</rt></ruby><br><small style="font-size:26px;color:var(--muted)">エンジニアは<ruby>英語<rt>えいご</rt></ruby>で<ruby>話<rt>はな</rt></ruby>します</small></p>
        </div>
      </div>
      <div class="week-wrap rv" style="--d:3">
        <div class="wk-title">🏠 <Vocab word="在宅勤務" />：<ruby>週<rt>しゅう</rt></ruby>に<ruby>2日<rt>ふつか</rt></ruby>　<small>（<ruby>例<rt>れい</rt></ruby>）</small></div>
        <div class="week">
          <div class="day ">
            <div class="dn">月</div>
            <div class="di">🏢</div>
          </div>
          <div class="day home">
            <div class="dn">火</div>
            <div class="di">🏠</div>
          </div>
          <div class="day ">
            <div class="dn">水</div>
            <div class="di">🏢</div>
          </div>
          <div class="day home">
            <div class="dn">木</div>
            <div class="di">🏠</div>
          </div>
          <div class="day ">
            <div class="dn">金</div>
            <div class="di">🏢</div>
          </div>
          <div class="day off">
            <div class="dn">土</div>
            <div class="di"><ruby>休<rt>やす</rt></ruby>み</div>
          </div>
          <div class="day off">
            <div class="dn">日</div>
            <div class="di"><ruby>休<rt>やす</rt></ruby>み</div>
          </div>
        </div>
        <div class="wnotes rv" style="--d:4"><span>🏢 <ruby>会社<rt>かいしゃ</rt></ruby>：<ruby>週<rt>しゅう</rt></ruby><ruby>3日<rt>みっか</rt></ruby></span><span>🏠 <ruby>家<rt>いえ</rt></ruby>：<ruby>週<rt>しゅう</rt></ruby><ruby>2日<rt>ふつか</rt></ruby></span><span>🚃 <ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>らない<ruby>日<rt>ひ</rt></ruby>があって<Vocab word="便利" />！</span><span>🎌 <ruby>土日<rt>どにち</rt></ruby>は<ruby>休<rt>やす</rt></ruby>み</span></div>
      </div>
    </div>
  </Slide>
</template>
