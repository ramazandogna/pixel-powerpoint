<script setup>
import Slide from '@/components/deck/Slide.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelLock from '@/components/pixel/PixelLock.vue'
import PixelPic from '@/components/pixel/PixelPic.vue'
import Vocab from '@/components/deck/Vocab.vue'
import { useSlideSteps } from '@/composables/useSlideSteps.js'

const { frag } = useSlideSteps()
</script>

<template>
  <Slide>
    <div class="label"><PixelIcon name="mail" /><ruby>毎日<rt>まいにち</rt></ruby>のメール</div>
    <div class="content">
      <div class="qa">
        <div class="bubble with-pic rv" style="--d:1"><PixelPic name="gmail" class="bob" :size="52" /><ruby>皆<rt>みな</rt></ruby>さん、<ruby>毎日<rt>まいにち</rt></ruby>メールを<ruby>使<rt>つか</rt></ruby>いますか？</div>
        <div class="bubble alt with-pic" :class="frag(1)">
          <span class="pw-field"><PixelPic name="lock" class="shake" :size="44" /><span class="pw-dots">＊＊＊＊</span><b class="pw-q">？</b></span>
          <span>パスワードを<ruby>忘<rt>わす</rt></ruby>れますか？<small class="me-too"><ruby>私<rt>わたし</rt></ruby>はよく<ruby>忘<rt>わす</rt></ruby>れます…</small></span>
        </div>
        <div class="dark panel" :class="frag(2)">
          <div class="eyebrow">だから…</div>
          <div class="big2"><ruby>会社<rt>かいしゃ</rt></ruby>のメールや<Vocab word="情報" />は、とても<Vocab word="大切" />です。<br><span class="glowtxt"><Vocab word="安全" />に<Vocab word="守" />らなければなりません。</span></div>
        </div>
        <div class="chips threats" :class="frag(3)">
          <span class="th-head"><PixelIcon name="shield" />あぶないもの</span>
          <span><PixelPic name="virus" class="wiggle" :size="40" /><span class="tx"><b>ウイルス（Virus）</b><small>パソコンを<ruby>壊<rt>こわ</rt></ruby>す<ruby>悪<rt>わる</rt></ruby>いプログラム</small></span></span>
          <span><PixelPic name="fish" class="wiggle" :size="34" /><span class="tx"><b>にせのメール（Phishing）</b><small><ruby>本物<rt>ほんもの</rt></ruby>みたいな、うそのメール</small></span></span>
          <span><PixelPic name="key" class="wiggle" :size="26" /><span class="tx"><b>パスワードを<ruby>盗<rt>ぬす</rt></ruby>まれる（Password Theft）</b><small><ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>が、あなたのパスワードを<ruby>使<rt>つか</rt></ruby>う</small></span></span>
        </div>
      </div>
      <div class="lock2 rv" style="--d:3"><PixelLock />
        <div class="lock-cap"><ruby>安全<rt>あんぜん</rt></ruby></div>
      </div>
    </div>
  </Slide>
</template>
