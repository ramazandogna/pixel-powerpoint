/**
 * Turn a pixel bitmap (array of equal-length strings) into rect descriptors.
 * Every character except '.' is a filled pixel; `palette` maps characters to colours.
 *
 * @param {string[]} rows
 * @param {Record<string, string>} palette
 * @param {number} [offsetY=0] vertical offset added to every pixel
 * @returns {{ x: number, y: number, fill: string }[]}
 */
export function bitmapToPixels(rows, palette, offsetY = 0) {
  const pixels = []
  rows.forEach((row, y) => {
    ;[...row].forEach((char, x) => {
      if (char !== '.') pixels.push({ x, y: y + offsetY, fill: palette[char] })
    })
  })
  return pixels
}
