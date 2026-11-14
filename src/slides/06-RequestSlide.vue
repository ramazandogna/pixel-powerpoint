<script setup>
import Slide from '@/components/deck/Slide.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelPic from '@/components/pixel/PixelPic.vue'
import PixelSprite from '@/components/pixel/PixelSprite.vue'
import Vocab from '@/components/deck/Vocab.vue'
</script>

<template>
  <Slide>
    <div class="label"><PixelIcon name="ask" />お<ruby>願<rt>ねが</rt></ruby>い</div>
    <div class="content req-grid">
      <div class="qa">
        <div class="bubble rv" style="--d:1">わからないところがあったら、<br>いつでも<ruby>聞<rt>き</rt></ruby>いてください。</div>
        <div class="bubble alt rv" style="--d:3"><ruby>私<rt>わたし</rt></ruby>はときどき<ruby>速<rt>はや</rt></ruby>く<ruby>話<rt>はな</rt></ruby>してしまいます。<br>「ゆっくり」と<ruby>言<rt>い</rt></ruby>ってください。</div>
        <div class="paper panel listen rv" style="--d:4"><PixelPic name="chat" class="bob" :size="44" /><div>わからないところも、よく<ruby>聞<rt>き</rt></ruby>いてください。<br><small><ruby>日本語<rt>にほんご</rt></ruby>がわかるようになって、HENNGEのこともわかるようになります。</small></div></div>
      </div>
      <div class="rcol rv" style="--d:5">
        <div class="lock"><PixelSprite name="ramazan" :width="135" :height="203" /></div>
        <div class="dark panel callout"><div class="big2 glowtxt"><ruby>何回<rt>なんかい</rt></ruby>でも、<br>よろこんで<br><Vocab word="説明" />します！</div></div>
      </div>
    </div>
  </Slide>
</template>
