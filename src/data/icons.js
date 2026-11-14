// 8×8 pixel icons used in slide labels. 'X' = currentColor, 'o' = white, '.' = empty.
export const ICONS = {
  "ask": [
    ".XXXXXX.",
    "XXoooXXX",
    "XXXXoXXX",
    "XXXoXXXX",
    "XXXXXXXX",
    ".XXoXXX.",
    "..XX....",
    ".X......"
  ],
  "bldg": [
    ".XXXXXX.",
    ".XoXXoX.",
    ".XXXXXX.",
    ".XoXXoX.",
    ".XXXXXX.",
    ".XoXXoX.",
    ".XXooXX.",
    "XXXooXXX"
  ],
  "book": [
    "XXXXXXXX",
    "XooXXooX",
    "XXXXXXXX",
    "XooXXooX",
    "XXXXXXXX",
    "XooXXooX",
    "XXXXXXXX",
    "...XX..."
  ],
  "bulb": [
    "..XXXX..",
    ".XXXXXX.",
    "XXoXXXXX",
    "XoXXXXXX",
    ".XXXXXX.",
    "..XXXX..",
    "..oooo..",
    "...XX..."
  ],
  "case": [
    "..XXXX..",
    "..X..X..",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXooXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "........"
  ],
  "clock": [
    "..XXXX..",
    ".XXoXXX.",
    "XXXoXXXX",
    "XXXoXXXX",
    "XXXoooXX",
    "XXXXXXXX",
    ".XXXXXX.",
    "..XXXX.."
  ],
  "globe": [
    "..XXXX..",
    ".XoXXoX.",
    "XooooooX",
    "XXoXXoXX",
    "XXoXXoXX",
    "XooooooX",
    ".XoXXoX.",
    "..XXXX.."
  ],
  "mail": [
    "........",
    "XXXXXXXX",
    "XoXXXXoX",
    "XXoXXoXX",
    "XXXooXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "........"
  ],
  "me": [
    "..XXXX..",
    "..XooX..",
    "..XXXX..",
    "...XX...",
    ".XXXXXX.",
    "XXXXXXXX",
    "X.XXXX.X",
    "..X..X.."
  ],
  "shield": [
    "XXXXXXXX",
    "XXXXXXoX",
    "XXXXXoXX",
    "XoXXoXXX",
    ".XooXXX.",
    ".XXoXXX.",
    "..XXXX..",
    "...XX..."
  ],
  "star": [
    "...XX...",
    "...XX...",
    "XXXXXXXX",
    ".XXXXXX.",
    "..XXXX..",
    ".XXXXXX.",
    ".XX..XX.",
    "X......X"
  ],
  "team": [
    "........",
    ".XX..XX.",
    ".XX..XX.",
    "........",
    "XXXX.XXX",
    "XXXX.XXX",
    "XXXX.XXX",
    "........"
  ],
  "yen": [
    "..XXXX..",
    ".XXXXXX.",
    "XoXXXXoX",
    "XXoXXoXX",
    "XooooooX",
    "XXXooXXX",
    ".XooooX.",
    "..XXXX.."
  ]
}

// Multi-colour pixel pictures (replace emoji on the slides). Characters map to PIC_PALETTE.
export const PIC_PALETTE = {
  k: '#2b2d42', w: '#ffffff', r: '#e4572e', o: '#f08a4b', y: '#ffd23f', b: '#3a86ff',
  g: '#2bb673', G: '#9aa3b2', D: '#5b6170', n: '#8d5a3b', p: '#ff8fab', s: '#ffd9b3',
  R: '#ea4335', B: '#4285f4', Y: '#fbbc05', E: '#34a853', L: '#cfe8ff', M: '#d8dfe8',
}

export const PICS = {
  gmail: ['RR........RY', 'BRRwwwwwwRRE', 'BwRRwwwwRRwE', 'BwwRRwwRRwwE', 'BwwwRRRRwwwE', 'BwwwwRRwwwwE', 'BwwwwwwwwwwE', 'BwwwwwwwwwwE', 'BBwwwwwwwwEE'],
  lock: ['..kkkkkk..', '.kk....kk.', '.k......k.', '.k......k.', 'oooooooooo', 'oyyyyyyyyo', 'oyyykkyyyo', 'oyyykkyyyo', 'oyyyykyyyo', 'oyyyyyyyyo', 'oooooooooo'],
  virus: ['g...g...g', '.g.ggg.g.', '..ggggg..', '.gkgggkg.', 'ggggggggg', '.gggkggg.', '..ggggg..', '.g.ggg.g.', 'g...g...g'],
  fish: ['..bbbb...b', '.bbbbbb.bb', 'bbkbbbbbbb', 'bbbbbbbbbb', '.bbbbbb.bb', '..bbbb...b'],
  key: ['.yyy......', 'y...yyyyyy', 'y...yyyyyy', '.yyy...y.y'],
  cake: ['..r..r..r.', '..y..y..y.', '.pppppppp.', '.pwpwpwpw.', '.pppppppp.', '.nnnnnnnn.', 'nnnnnnnnnn'],
  cap: ['....kk....', '..kkkkkk..', 'kkkkkkkkkk', '..kkkkkky.', '..kkkkk.y.', '...kkk..y.', '........yy'],
  laptop: ['.kkkkkkkk.', '.kbbbbbbk.', '.kbwbbbbk.', '.kbbbbbbk.', '.kkkkkkkk.', 'GGGGGGGGGG', '.GGGGGGGG.'],
  house: ['....rr....', '...rrrr...', '..rrrrrr..', '.rrrrrrrr.', 'rrrrrrrrrr', '.wwwwwwww.', '.wbbwwnnw.', '.wbbwwnnw.', '.wwwwwnnw.'],
  office: ['.GGGGGGGG.', '.GLLGGLLG.', '.GGGGGGGG.', '.GLLGGLLG.', '.GGGGGGGG.', '.GLLGGLLG.', '.GGGnnGGG.', 'GGGGnnGGGG'],
  train: ['.gggggggg.', 'gLLLggLLLg', 'gLLLggLLLg', 'gggggggggg', 'gyggggggyg', 'gggggggggg', '.kk....kk.'],
  coffee: ['..G..G....', '...G..G...', 'wwwwwwwww.', 'wnnnnnnnww', 'wwwwwwww.w', 'wwwwwwwwww', '.wwwwwww..', 'GGGGGGGGG.'],
  moon: ['..yyy...', '.yy.....', 'yy......', 'yy......', 'yy......', 'yyy...y.', '.yyyyyy.', '..yyyy..'],
  party: ['......y..r', '..r..y....', '....b..r..', 'oo....y...', 'ooo..r....', 'oooo......', 'ooooo.....', 'oooooo....'],
  sad: ['..bbbb..', '.bbbbbb.', 'bbkbbkbb', 'bbbbbbbb', 'bbbkkbbb', 'bbkbbkbb', '.bbbbbb.', '..bbbb..'],
  happy: ['..yyyy..', '.yyyyyy.', 'yykyykyy', 'yyyyyyyy', 'yykyykyy', 'yyykkyyy', '.yyyyyy.', '..yyyy..'],
  chat: ['bbbbbbbbbb', 'bwwwwwwwwb', 'bwkkwkkwwb', 'bwwwwwwwwb', 'bbbbbbbbbb', '..bb......', '.b........'],
  pin: ['..rrrr..', '.rrrrrr.', 'rrrwwrrr', 'rrrwwrrr', '.rrrrrr.', '..rrrr..', '...rr...', '...rr...'],
  shield: ['.oooooooo.', 'oyyyyyyyyo', 'oyyyykyyyo', 'oyyykkkyyo', 'oyyyykyyyo', '.oyyyyyyo.', '..oyyyyo..', '...oooo...'],
  globe: ['..bbbb..', '.bggbbb.', 'bgggbbgb', 'bbggbbgb', 'bbbgbggb', 'bbbbbggb', '.bbbbbb.', '..bbbb..'],
  star: ['....y....', '....y....', '...yyy...', 'yyyyyyyyy', '.yyyyyyy.', '..yyyyy..', '.yyy.yyy.', 'yy.....yy'],
  yen: ['..oooo..', '.oyyyyo.', 'oykyykyo', 'oyykkyyo', 'oykkkkyo', 'oyykkyyo', '.oyyyyo.', '..oooo..'],
  clock: ['..kkkk..', '.kwwwwk.', 'kwwkwwwk', 'kwwkwwwk', 'kwwkkkwk', 'kwwwwwwk', '.kwwwwk.', '..kkkk..'],
  cake30: ['.......y....y.......', '.......o....o.......', '......rrr..rrr......', '........r..r.r......', '......rrr..r.r......', '........r..r.r......', '......rrr..rrr......', '.wwwwwwwwwwwwwwwwww.', 'pppppppppppppppppppp', 'ppypppbppypppbpppypp', 'pppppppppppppppppppp', 'wwwwwwwwwwwwwwwwwwww', 'nnnnnnnnnnnnnnnnnnnn', 'nnnnnnnnnnnnnnnnnnnn', 'nnnnnnnnnnnnnnnnnnnn', '.GGGGGGGGGGGGGGGGGG.'],
  skyline: ['.......o..................', '.......o..................', '......ooo.................', '......owo.........ooooo...', '.....ooooo......ooooooooo.', '.....owwwo.....ooooooooooo', '....ooooooo....owoowwwowww', '....oyyyyyo....wwoowowowow', '....ooooooo....owoowowowww', '.....oo.oo.....owoowowooow', '....oo...oo....wwwowwwowww', '....ow...wo....ooooooooooo', '...oo.....oo...DLLLLLLLLLD', '...ow.....wo...ooooooooooo', '..ooooooooooo..DLLLLLLLLLD', '..oo.......oo..ooooooooooo', '..ow.......wo..DLLLLLLLLLD', '.oo.........oo.DDDDnnnDDDD', 'wwkkwwkkwwkkwwkkwwkkwwkkww', 'kkwwkkwwkkwwkkwwkkwwkkwwkk'],
}
