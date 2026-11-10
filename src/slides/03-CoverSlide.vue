<script setup>
import Slide from '@/components/deck/Slide.vue'
import HenngeLogo from '@/components/pixel/HenngeLogo.vue'
import PixelSprite from '@/components/pixel/PixelSprite.vue'
import Vocab from '@/components/deck/Vocab.vue'
</script>

<template>
  <Slide variant="cover" qr>
    <div class="content">
      <div class="title-wrap">
        <div class="tag rv" style="--d:0"><Vocab word="企業研究" />　<Vocab word="発表" /></div>
        <div class="emb-big rv" style="--d:1"><HenngeLogo kind="mark" :width="120" :height="120" glow /></div>
        <h1 class="hero rv" style="--d:2">はじめまして！</h1>
        <h2 class="hero2 rv" style="--d:3"><span class="glowtxt">HENNGE</span>の<Vocab word="発表" />へ<br>ようこそ！</h2>
        <div class="sub rv" style="--d:4">HENNGE<Vocab word="株式会社" />　｜　2026<ruby>年<rt>ねん</rt></ruby><ruby>11月<rt>じゅういちがつ</rt></ruby></div>
        <div class="parade rv" style="--d:5"><span class="bob" style="--b:0"><PixelSprite name="ramazan" :width="84" :height="126" /></span><span class="bob" style="--b:1"><PixelSprite name="sushma" :width="84" :height="126" /></span><span class="bob" style="--b:2"><PixelSprite name="sandip" :width="84" :height="126" /></span><span class="bob" style="--b:3"><PixelSprite name="ryu" :width="84" :height="126" /></span></div>
      </div>
      <div class="sparkles"><i style="--x:8%;--y:20%"></i><i style="--x:88%;--y:16%"></i><i style="--x:14%;--y:78%"></i><i style="--x:84%;--y:72%"></i><i style="--x:50%;--y:8%"></i><i style="--x:70%;--y:40%"></i></div>
    </div>
  </Slide>
</template>
