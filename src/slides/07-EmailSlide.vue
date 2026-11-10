<script setup>
import Slide from '@/components/deck/Slide.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelLock from '@/components/pixel/PixelLock.vue'
import Vocab from '@/components/deck/Vocab.vue'
import { useSlideSteps } from '@/composables/useSlideSteps.js'

const { frag } = useSlideSteps()
</script>

<template>
  <Slide>
    <div class="label"><PixelIcon name="mail" /><ruby>毎日<rt>まいにち</rt></ruby>のメール</div>
    <div class="content">
      <div class="qa">
        <div class="bubble rv" style="--d:1"><ruby>皆<rt>みな</rt></ruby>さん、<ruby>毎日<rt>まいにち</rt></ruby>メールを<ruby>使<rt>つか</rt></ruby>いますか？</div>
        <div class="bubble alt" :class="frag(1)">パスワードを<ruby>忘<rt>わす</rt></ruby>れたことがありますか？ 🙋</div>
        <div class="dark panel" :class="frag(2)">
          <div class="eyebrow">だから…</div>
          <div class="big2"><ruby>会社<rt>かいしゃ</rt></ruby>のメールや<Vocab word="情報" />は、とても<Vocab word="大切" />です。<br><span class="glowtxt"><Vocab word="安全" />に<Vocab word="守" />らなければなりません。</span></div>
        </div>
        <div class="chips" :class="frag(3)"><span>⚠ あぶないもの</span><span>🦠 ウイルス<small>パソコンを<ruby>壊<rt>こわ</rt></ruby>す<ruby>悪<rt>わる</rt></ruby>いプログラム</small></span><span>🎣 にせのメール<small><ruby>本物<rt>ほんもの</rt></ruby>みたいな、うそのメール</small></span><span>🔑 パスワードを<ruby>盗<rt>ぬす</rt></ruby>まれる<small><ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>が、あなたのパスワードを<ruby>使<rt>つか</rt></ruby>う</small></span></div>
      </div>
      <div class="lock2 rv" style="--d:3"><PixelLock />
        <div class="lock-cap">🔒 <ruby>安全<rt>あんぜん</rt></ruby></div>
      </div>
    </div>
  </Slide>
</template>
