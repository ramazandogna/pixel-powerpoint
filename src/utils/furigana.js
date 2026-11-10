/**
 * Lightweight furigana markup used in data files.
 *
 *   会社[かいしゃ]       → <ruby>会社<rt>かいしゃ</rt></ruby>
 *   5日[いつか]          → digits directly before a bracket belong to the ruby base (counter readings)
 *   1996｜年[ねん]       → "｜" (full-width bar) marks where the ruby base starts explicitly
 */
const RUBY_PATTERN = /｜([^｜[\]]+)\[([ぁ-んー]+)\]|([一-龯々ヶ0-9０-９]+)\[([ぁ-んー]+)\]/g

/** @returns {Array<{ text: string } | { base: string, reading: string }>} */
export function parseFurigana(markup) {
  const segments = []
  let cursor = 0
  for (const match of markup.matchAll(RUBY_PATTERN)) {
    if (match.index > cursor) segments.push({ text: markup.slice(cursor, match.index) })
    segments.push({ base: match[1] ?? match[3], reading: match[2] ?? match[4] })
    cursor = match.index + match[0].length
  }
  if (cursor < markup.length) segments.push({ text: markup.slice(cursor) })
  return segments
}
