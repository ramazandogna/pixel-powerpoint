<script setup>
import Slide from '@/components/deck/Slide.vue'
import PixelPic from '@/components/pixel/PixelPic.vue'
import Vocab from '@/components/deck/Vocab.vue'
</script>

<template>
  <Slide variant="cover guide" qr>
    <div class="content">
      <div class="title-wrap">
        <div class="tag rv" style="--d:0"><PixelPic name="chat" :size="34" /><ruby>単語<rt>たんご</rt></ruby>リストの<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby></div>
        <h1 class="hero2 rv" style="--d:1">わからない<ruby>言葉<rt>ことば</rt></ruby>があったら…</h1>
        <div class="gsteps">
          <div class="gs rv" style="--d:2"><b>1</b>
            <div class="gi"><PixelPic name="laptop" class="bob" :size="80" /></div>
            <p>QRコードを<br><ruby>読<rt>よ</rt></ruby>んでください</p>
          </div>
          <div class="gs rv" style="--d:3"><b>2</b>
            <div class="gi"><PixelPic name="star" class="bob" :size="80" /></div>
            <p><ruby>言葉<rt>ことば</rt></ruby>の<ruby>番号<rt>ばんごう</rt></ruby>を<br><ruby>見<rt>み</rt></ruby>てください</p>
          </div>
          <div class="gs rv" style="--d:4"><b>3</b>
            <div class="gi"><PixelPic name="key" class="bob" :size="40" /></div>
            <p><ruby>番号<rt>ばんごう</rt></ruby>を<ruby>入<rt>い</rt></ruby>れると<br><ruby>意味<rt>いみ</rt></ruby>がわかります</p>
          </div>
        </div>
        <div class="gex rv" style="--d:5"><ruby>例<rt>れい</rt></ruby>：これは<Vocab word="発表" />です。　➜　「2」を<ruby>入<rt>い</rt></ruby>れてください！</div>
      </div>
    </div>
  </Slide>
</template>
