export type Article = {
  title: string;
  url: string;
  platform: "Qiita" | "note" | "Zenn" | "その他";
  date: string; // 例 "2026-07-15"
};

// 記事を公開したらここに追加するだけでトップページに「発信」セクションが現れる。
// 新しい順（上が最新）に並べる。
export const articles: Article[] = [
  // {
  //   title: "個人開発のiOSアプリがApp Store審査に3回却下されて学んだこと",
  //   url: "https://qiita.com/xxxx/items/xxxx",
  //   platform: "Qiita",
  //   date: "2026-07-20",
  // },
];
