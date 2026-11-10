<script setup>
import Slide from '@/components/deck/Slide.vue'
import HenngeLogo from '@/components/pixel/HenngeLogo.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import Vocab from '@/components/deck/Vocab.vue'
</script>

<template>
  <Slide :question="2">
    <div class="label"><PixelIcon name="shield" /><Vocab word="事業内容" /></div>
    <div class="content">
      <div class="flow rv" style="--d:1">
        <div class="node">💻📱
          <div>パソコン・スマホ</div>
        </div>
        <div class="arrow"><i></i></div>
        <div class="node hub"><HenngeLogo kind="mark" :width="80" :height="80" glow />
          <div><HenngeLogo kind="wordmark" :width="150" :height="30" /></div>
        </div>
        <div class="arrow"><i></i></div>
        <div class="node">☁️✉️
          <div>クラウド・メール</div>
        </div>
        <div class="bad"><span>👾</span><b>✕</b></div>
      </div>
      <div class="dark panel big-panel rv" style="--d:2">
        <div class="eyebrow">クラウドセキュリティのサービス「HENNGE One」</div>
        <ul class="pts">
          <li><ruby>会社<rt>かいしゃ</rt></ruby>のメールや<Vocab word="情報" />を<Vocab word="安全" />に<Vocab word="守" />ります。</li>
          <li><ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>外<rt>そと</rt></ruby>からも、<Vocab word="安全" />にログインできます。</li>
          <li><ruby>1回<rt>いっかい</rt></ruby>のログインで、いろいろなクラウドサービスが<ruby>使<rt>つか</rt></ruby>えます。</li>
          <li><ruby>日本<rt>にほん</rt></ruby>だけでなく、<Vocab word="海外" />にも<Vocab word="提供" />しています。</li>
        </ul>
      </div>
    </div>
  </Slide>
</template>
