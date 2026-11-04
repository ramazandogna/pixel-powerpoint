I'm giving you a single-file HTML presentation (attached). Read the code first, then wait for my edit requests. Do not rewrite from scratch; make targeted edits and keep everything below intact.

CONTEXT
This is a 7-minute Japanese-language classroom presentation about the company HENNGE K.K. (cloud security, Tokyo). I'm Ramazan (26, Turkish, computer engineering graduate, 3 years as a professional engineer), the team leader. Audience: classmates at a Japanese language school, all JLPT N4 or above. The slides are projected on a classroom board; I read from a script, so all Japanese must stay at N4 level.

FORMAT
- Single self-contained HTML file, 1600x900 stage scaled to fit the window (letterboxed), no scrolling.
- 15 full-screen slides in one SPA (no reloads). Navigation: Right/Space/PageDown/Enter = next, Left = previous, N = speaker notes, F = fullscreen, Home/End, touch swipe, on-screen buttons, URL hash #s1..#s15.
- Slide transition: page turns to the right (3D rotateY with perspective).
- Some content is revealed step by step on click (.frag elements); next-click reveals the next fragment before changing slide.
- Countdown-style timer (T resets, starts at first slide change) with a 7:00 target in the notes panel.
- Animations replay about every 9 seconds (bar charts, donut, 100-cell grid, counters, hours bar) and characters hop periodically.

VISUAL THEME
Pixel-art "cork board" look: tan cork background with dot pattern, brown wooden frame, cream paper labels tilted slightly, black panels with orange glowing text, pixel font DotGothic16 (Google Fonts) with Hiragino/Noto Sans JP fallback. Orange (#f2a93b) accent, red (#c8442b) highlights. Large text for classroom readability.

FURIGANA RULE
Every kanji uses <ruby>kanji<rt>reading</rt></ruby>. Keep this on any new text.

VOCABULARY SYSTEM
20 hard words are highlighted (orange translucent background via ::before) with a small red numbered badge on the top/bottom-right via ::after using data-n. Numbers are assigned in order of first appearance and stay the same everywhere. The last slide (単語リスト) lists all 20 words with furigana and English meaning. I print numbered vocab slips for classmates and say "check slip number N". Words: 発表, 株式会社, 情報, 安全, 興味, 設立, 本社, 事業内容, 提供, 海外, 職種, 営業, 紹介, 在宅勤務, 平均年収, 残業, 社員, 外国籍, 割合, 感想.

TEAM (pixel characters drawn as inline SVG rects, 12-wide grids)
- Ramazan (me): leader, Turkish flag, orange shirt
- Sushma-san: short cute Nepali girl, dark skin, pink outfit, small red hair clip
- Sandip-san: handsome Nepali boy, dark skin, navy jacket
- Ryu-san: Chinese boy with short plain black hair (no crown), green shirt
Flags drawn as inline SVG at top-right of each square character card (all cards equal size). Names under characters; names also above heads on the final slide.

LOGO
The real HENNGE logo is an uploaded SVG path (mark + wordmark), embedded inline with fill=currentColor in orange. Used on cover, "why HENNGE" slide, business-flow diagram, final slide, and the footer of every slide. Don't substitute a fake logo.

SLIDES (in order)
1. Cover: はじめまして！ / HENNGEの発表へようこそ！, logo, 4 characters parading, sparkles
2. Team: slogans (4 countries one team; why Japan; why HENNGE) + 4 character cards
3. 自己紹介: me (26, Turkey, computer engineering degree, 3 years as engineer) + teaser "why I recommended HENNGE to my friends, you'll learn in this presentation"
4. お願い: "ask me anytime if you don't understand; I sometimes speak fast, say ゆっくり; happy to explain many times"
5. Email warm-up: questions to the audience (use email daily? forgot a password?) then "protect company info safely"
6. なぜHENNGE: I'm an engineer, interested in security; logo; "have you heard this company name?"
7. 会社について: timeline 1996 (founded Nov 5, former name HDE) -> 2019 (renamed HENNGE) -> now; about 30 years ago (counter); HQ Shibuya, Tokyo
8. 事業内容: animated flow diagram (devices -> HENNGE -> cloud/email, blocked attacker), 3 bullets, cloud security
9. 職種と働き方: Sales vs IT descriptions + weekly calendar with 2 remote days (labeled as example)
10. 給料: audience guess question, then reveal average yearly income about 5.5M yen, bar chart vs Japan average (about 4.6M, NTA 2023), note "this is an average, varies by person"
11. 働く時間とイベント: 10:00-19:00 24-hour bar, overtime exists but not long, weekends off, many company events
12. 外国人社員: donut 20% foreign employees, 100-cell grid 88% of engineers foreign, English used at work
13. まとめ・感想: 3 summary cards + "I'd like to work at a company like this someday"
14. ありがとうございました: Q&A prompt, characters bow, names above heads
15. 単語リスト: 20 vocab cards (not part of the spoken presentation)

SPEAKER NOTES
Each slide has notes (toggle with N): the exact N4 Japanese script lines with furigana, plus blue stage directions in Turkish (where to pause, when to ask the audience, when to click, when to bow), and a target duration in seconds.

UNVERIFIED FACTS (please keep flagged if you touch them)
Former name HDE, rename in 2019, HQ in Shibuya, Japan average income 4.6M yen. Home-work days in the calendar are an example.

HOW I'LL WORK
I'll send edit requests one by one (I may write them in Turkish). Output only the changed parts or the full updated file when asked. Keep it a single HTML file, keep the furigana, vocab badges, notes and animations working.