// The five research questions. Each team member owns one or more of them;
// the deck shows a <QuestionTag> on the slide that answers it.
export const QUESTIONS = [
  {
    "number": 1,
    "asker": "sushma",
    "short": "会社[かいしゃ]はいつ作[つく]られましたか？",
    "question": "会社[かいしゃ]はいつ作[つく]られましたか。設立[せつりつ]されたときは？",
    "questionEn": "When was the company founded?",
    "answer": "会社[かいしゃ]は1996｜年[ねん]11月[じゅういちがつ]5日[いつか]に設立[せつりつ]されました。だいたい30年[さんじゅうねん]前[まえ]です。",
    "answerEn": "Founded Nov 5, 1996. About 30 years ago."
  },
  {
    "number": 2,
    "asker": "sandip",
    "short": "どんな仕事[しごと]をしていますか？",
    "question": "どんな仕事[しごと]をしていますか。事業内容[じぎょうないよう]は？",
    "questionEn": "What does the company do?",
    "answer": "HENNGEは、クラウドセキュリティのサービスを提供[ていきょう]しています。会社[かいしゃ]のメールや情報[じょうほう]を安全[あんぜん]に守[まも]るためのシステムを作[つく]っています。また、会社[かいしゃ]の人[ひと]が安全[あんぜん]にインターネットを使[つか]えるようにしています。日本[にほん]だけでなく、海外[かいがい]にもサービスを提供[ていきょう]しています。",
    "answerEn": "Cloud security: protecting company email and info, safe internet use, Japan and overseas."
  },
  {
    "number": 3,
    "asker": "ramazan",
    "short": "どんな仕事[しごと]がありますか？",
    "question": "どんな仕事[しごと]がありますか。職種[しょくしゅ]は？",
    "questionEn": "What jobs are there?",
    "answer": "営業[えいぎょう]の仕事[しごと]とITの仕事[しごと]があります。営業[えいぎょう]とITのチームは、週[しゅう]に2日[ふつか]家[いえ]で働[はたら]くことができます。",
    "answerEn": "Sales and IT; 2 remote days a week."
  },
  {
    "number": 4,
    "asker": "ramazan",
    "short": "給料[きゅうりょう]・働[はたら]く時間[じかん]・残業[ざんぎょう]は？",
    "question": "給料[きゅうりょう]はいくらですか。働[はたら]く時間[じかん]はどうですか。残業[ざんぎょう]がありますか。勤務条件[きんむじょうけん]は？",
    "questionEn": "Salary, hours, overtime, conditions?",
    "answer": "給料[きゅうりょう]は、年間[ねんかん]550万円[ごひゃくごじゅうまんえん]です。働[はたら]く時間[じかん]は午前[ごぜん]10時[じゅうじ]から午後[ごご]7時[しちじ]までです。残業[ざんぎょう]もありますが、あまり長[なが]くないです。土曜日[どようび]と日曜日[にちようび]は休[やす]みです。それに、会社[かいしゃ]のイベントがたくさんあって、楽[たの]しそうです。",
    "answerEn": "¥5.5M/year, 10–7, short overtime, weekends off, many events."
  },
  {
    "number": 5,
    "asker": "ryu",
    "short": "外国人[がいこくじん]も働[はたら]いていますか？",
    "question": "外国人[がいこくじん]も働[はたら]いていますか。",
    "questionEn": "Do foreigners work there?",
    "answer": "あります。外国籍社員[がいこくせきしゃいん]の割合[わりあい]は20%で、そして、エンジニアの外国籍比率[がいこくせきひりつ]は88%に達[たっ]しています。また、仕事[しごと]でのコミュニケーションには、英語[えいご]が使[つか]われています。",
    "answerEn": "Yes. 20% of staff, 88% of engineers. English used at work."
  }
]

export function findQuestion(number) {
  const question = QUESTIONS.find((q) => q.number === number)
  if (!question) throw new Error(`Unknown question: Q${number}`)
  return question
}
