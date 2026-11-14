<script setup>
import Slide from '@/components/deck/Slide.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelPic from '@/components/pixel/PixelPic.vue'
import PixelSprite from '@/components/pixel/PixelSprite.vue'
import Vocab from '@/components/deck/Vocab.vue'
import { useSlideSteps } from '@/composables/useSlideSteps.js'

const { frag } = useSlideSteps()
const DAYS = ['月', '火', '水', '木', '金']
const HOME = ['火', '木']
</script>

<template>
  <Slide :question="3">
    <div class="label"><PixelIcon name="case" /><Vocab word="職種" />と<ruby>働<rt>はたら</rt></ruby>き<ruby>方<rt>かた</rt></ruby></div>
    <div class="content">
      <div class="jobs-head rv" style="--d:1">HENNGEで<ruby>働<rt>はたら</rt></ruby>くには、<b class="glowtxt">2つ</b>の<ruby>道<rt>みち</rt></ruby>があります</div>
      <div class="jobs">
        <div class="paper panel job2 rv" style="--d:2">
          <div class="job-sprs"><PixelSprite name="sushma" :width="64" :height="96" /><PixelSprite name="sandip" :width="64" :height="96" /></div>
          <div>
            <div class="jt"><Vocab word="営業" /></div>
            <p>お<ruby>客<rt>きゃく</rt></ruby>さんに<ruby>会<rt>あ</rt></ruby>って、サービスを<Vocab word="紹介" />する</p>
          </div>
        </div>
        <div class="paper panel job2 rv" style="--d:3">
          <div class="job-sprs"><PixelSprite name="ryu" :width="64" :height="96" /><PixelSprite name="ramazan" :width="64" :height="96" /></div>
          <div>
            <div class="jt">IT</div>
            <p>システムを<ruby>作<rt>つく</rt></ruby>ったり、<ruby>直<rt>なお</rt></ruby>したりする<br><small>エンジニアは<ruby>英語<rt>えいご</rt></ruby>で<ruby>話<rt>はな</rt></ruby>します</small></p>
          </div>
        </div>
      </div>
      <div class="wk2">
        <div class="week-wrap rv" style="--d:4">
          <div class="wk-title"><PixelPic name="house" :size="36" /><Vocab word="在宅勤務" />：<ruby>週<rt>しゅう</rt></ruby>に<b class="hl2"><ruby>2日<rt>ふつか</rt></ruby></b><small>（<ruby>例<rt>れい</rt></ruby>）</small></div>
          <div class="week">
            <div v-for="d in DAYS" :key="d" class="day" :class="{ home: HOME.includes(d) }">
              <div class="dn">{{ d }}</div>
              <PixelPic :name="HOME.includes(d) ? 'house' : 'office'" class="bob" :size="38" />
            </div>
            <div class="weekend">
              <div><ruby>土曜日<rt>どようび</rt></ruby></div>
              <div><ruby>日曜日<rt>にちようび</rt></ruby></div>
              <small><ruby>休<rt>やす</rt></ruby>み</small>
            </div>
          </div>
        </div>
        <div class="train-card slide-r" :class="frag(1)">
          <PixelPic name="train" class="ride" :size="64" />
          <div>
            <div class="tc-big"><ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>らない<ruby>日<rt>ひ</rt></ruby>がある</div>
            <div class="tc-sub">→ とても<Vocab word="便利" />！</div>
          </div>
        </div>
      </div>
    </div>
  </Slide>
</template>
