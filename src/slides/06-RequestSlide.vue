<script setup>
import Slide from '@/components/deck/Slide.vue'
import PixelIcon from '@/components/pixel/PixelIcon.vue'
import PixelSprite from '@/components/pixel/PixelSprite.vue'
import Vocab from '@/components/deck/Vocab.vue'
</script>

<template>
  <Slide>
    <div class="label"><PixelIcon name="ask" />お<ruby>願<rt>ねが</rt></ruby>い</div>
    <div class="content">
      <div class="qa">
        <div class="bubble rv" style="--d:1">わからないところがあったら、<br>いつでも<ruby>聞<rt>き</rt></ruby>いてください。</div>
        <div class="bubble alt rv" style="--d:3"><ruby>私<rt>わたし</rt></ruby>はときどき<ruby>速<rt>はや</rt></ruby>く<ruby>話<rt>はな</rt></ruby>してしまいます。<br>🐢「ゆっくり」と<ruby>言<rt>い</rt></ruby>ってください。</div>
        <div class="dark panel rv" style="--d:5">
          <div class="big2 glowtxt"><ruby>何回<rt>なんかい</rt></ruby>でも、よろこんで<Vocab word="説明" />します！</div>
        </div>
      </div>
      <div class="lock rv" style="--d:6"><PixelSprite name="ramazan" :width="108" :height="162" /></div>
    </div>
  </Slide>
</template>
