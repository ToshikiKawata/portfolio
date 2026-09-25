export type Article = {
  title: string;
  url: string;
  platform: "Qiita" | "note" | "Zenn" | "その他";
  date: string; // 例 "2026-07-15"
};

// 記事を公開したらここに追加するだけでトップページに「発信」セクションが現れる。
// 新しい順（上が最新）に並べる。
export const articles: Article[] = [
  {
    title: "WIN5の\"組み合わせ爆発\"を防ぎたくて、買い目計算ツールを作った話",
    url: "https://note.com/tkawatadev/n/nb8a8a25f2408",
    platform: "note",
    date: "2026-07-17",
  },
  {
    title:
      "スマホアプリ開発未経験のSEが、AIと3週間でiPhoneアプリをApp Storeに公開するまで",
    url: "https://note.com/tkawatadev/n/n8eda7b80f5d9",
    platform: "note",
    date: "2026-07-15",
  },
];
