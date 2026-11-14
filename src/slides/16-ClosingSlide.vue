<script setup>
import Slide from '@/components/deck/Slide.vue'
import HenngeLogo from '@/components/pixel/HenngeLogo.vue'
import PixelSprite from '@/components/pixel/PixelSprite.vue'
</script>

<template>
  <Slide variant="cover" qr>
    <div class="content">
      <div class="title-wrap">
        <div class="emb-big rv" style="--d:0"><HenngeLogo kind="wordmark" :width="520" :height="105" glow /></div>
        <h1 class="hero rv" style="--d:1">ありがとうございました！</h1>
        <div class="bubble center rv" style="--d:2"><ruby>何<rt>なに</rt></ruby>か<ruby>質問<rt>しつもん</rt></ruby>がありますか？</div>
        <div class="parade bow rv" style="--d:3"><span class="nm teacher"><em><ruby>杉浦<rt>すぎうら</rt></ruby><ruby>先生<rt>せんせい</rt></ruby></em><PixelSprite name="teacher" :width="84" :height="126" /></span><span class="nm"><em>ラマザン</em><PixelSprite name="ramazan" :width="84" :height="126" /></span><span class="nm"><em>スシュマ</em><PixelSprite name="sushma" :width="84" :height="126" /></span><span class="nm"><em>サンディープ</em><PixelSprite name="sandip" :width="84" :height="126" /></span><span class="nm"><em>リュウ</em><PixelSprite name="ryu" :width="84" :height="126" /></span></div>
      </div>
    </div>
  </Slide>
</template>
