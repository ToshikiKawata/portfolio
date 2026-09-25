export type ArchNode = { name: string; detail?: string };
export type Architecture = {
  layers: { nodes: ArchNode[] }[];
  arrows: (string | null)[]; // layers間の矢印ラベル（layers.length - 1 個）
  note?: string;
};

export type Project = {
  slug: string;
  name: string;
  status: string;
  statusColor: string;
  icon: string | null;
  description: string;
  progress: number;
  tech: string[];
  links: { label: string; href: string }[];
  ended?: boolean; // 開発終了したプロジェクト（ゲージのアニメーションを止める）
  disclaimer?: string;
  history?: { date: string; text: string }[];
  features?: string[];
  stackDetail?: { title: string; items: string[] }[];
  architecture?: Architecture;
};

export const projects: Project[] = [
  {
    slug: "typedex",
    name: "Typedex",
    status: "公開中",
    statusColor: "bg-green-500/15 text-green-600 dark:text-green-400",
    icon: "/icons/typedex.png",
    description:
      "いわゆるMBTI系の16タイプ性格分類で友達を「集めて」相性を分析できる、中高生向けのスマホアプリ（iOS / Android）。企画・デザイン・開発・ストア申請までを一人で担当。",
    progress: 100,
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/jp/app/id6781932071",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.kyaradex.app",
      },
    ],
    disclaimer:
      "※MBTIは関連団体の登録商標です。Typedexは独自の16タイプ分類を用いた非公式アプリで、公式のMBTI検査とは関係ありません。",
    features: [
      "16の性格タイプ（MBTI系の4文字コード）で友達を図鑑にコレクション（4×4グリッド・コンプリート演出つき）",
      "自分と友達のタイプから相性を分析",
      "図鑑スナップ・相性・自分カードの3種類のシェア画像を生成",
      "LINE連携で友達追加と機種変更時のデータ引き継ぎ",
    ],
    stackDetail: [
      {
        title: "モバイルアプリ",
        items: [
          "React Native (Expo)",
          "TypeScript",
          "EAS Build / EAS Update（審査を経ないOTA配信）",
        ],
      },
      {
        title: "バックエンド",
        items: ["Supabase（匿名認証 / PostgreSQL / Row Level Security）"],
      },
      {
        title: "招待・サポートWeb",
        items: ["Next.js（Vercelでホスティング）"],
      },
      {
        title: "外部連携",
        items: ["LINE Platform（LIFF）"],
      },
    ],
    architecture: {
      layers: [
        {
          nodes: [
            { name: "iOS / Androidアプリ", detail: "React Native / Expo" },
            { name: "招待・サポートWeb", detail: "Next.js / Vercel" },
          ],
        },
        {
          nodes: [
            { name: "Supabase", detail: "匿名認証・PostgreSQL・RLS" },
            { name: "LINE Platform", detail: "LIFF（友達追加・引き継ぎ）" },
          ],
        },
      ],
      arrows: [null],
      note: "アプリの更新はEAS UpdateによるOTA配信に対応し、JS部分はストア審査を経ずに配信できる。",
    },
    history: [
      {
        date: "2026.06",
        text: "開発着手。TestFlightで実機検証を重ねて審査提出。",
      },
      {
        date: "2026.06.30",
        text: "初回審査で却下（3件の指摘）。サポートページ新設・権限文言の具体化・初回保存バグの修正で対応。",
      },
      {
        date: "2026.07.02",
        text: "再提出が同日中に審査通過、App Store公開。",
      },
      {
        date: "2026.07.07",
        text: "UIを全面刷新したv1.0.1を公開。Android版のクローズドテストを開始。",
      },
      {
        date: "2026.08.01",
        text: "12人以上・14日間のクローズドテストを経て、Android版をGoogle Playで一般公開。",
      },
      {
        date: "2026.09",
        text: "v1.0.2を公開。LINE連携のサーバー側検証やデータ保護を強化し、ストアの掲載情報も改善。",
      },
    ],
  },
  {
    slug: "snake-ninja",
    name: "Snake Ninja",
    status: "公開中",
    statusColor: "bg-green-500/15 text-green-600 dark:text-green-400",
    icon: "/icons/snake-ninja.png",
    description:
      "画面をスラッシュして蛇を切りまくる、60秒のカジュアルアクションゲーム。ゲームエンジンを使わずCanvas 2Dで開発し、同じコードをWeb版とiOSアプリとして公開している。",
    progress: 100,
    tech: ["TypeScript", "Canvas 2D", "Capacitor"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/jp/app/snake-ninja/id6792037509",
      },
      { label: "ブラウザで遊ぶ", href: "https://snake-cut-game.vercel.app" },
    ],
    features: [
      "スワイプのスラッシュで蛇を切断。切られた蛇片はそれぞれ動き続ける",
      "60秒のスコアアタック（コンボ・ハイスコア）",
      "斬ると減点になるカエルと、出会った蛇を記録する図鑑",
      "ゲームエンジン・描画ライブラリなしのCanvas 2D直描画",
    ],
    stackDetail: [
      {
        title: "ゲーム本体",
        items: ["TypeScript", "Canvas 2D API"],
      },
      {
        title: "ビルド",
        items: ["Vite"],
      },
      {
        title: "配信",
        items: ["Web版：Vercel", "iOSアプリ：Capacitor（App Store）"],
      },
    ],
    architecture: {
      layers: [
        {
          nodes: [
            { name: "ゲーム本体", detail: "TypeScript + Canvas 2D" },
          ],
        },
        {
          nodes: [
            { name: "Web版", detail: "Vercelで配信" },
            { name: "iOSアプリ", detail: "Capacitorでラップ → App Store" },
          ],
        },
      ],
      arrows: ["同じコードから両方に配信"],
      note: "ゲームエンジンや描画ライブラリを使わず、Canvas 2Dに直接描画している。1つのコードからWeb版とiOSアプリの両方を配信する構成。",
    },
    history: [
      {
        date: "2026.07",
        text: "「蛇を切る」だけの試作から開発開始（旧称：Slash Rush）。",
      },
      {
        date: "2026.07.19",
        text: "スクリーンショット・掲載文・プライバシーポリシーを揃えてApp Storeへ審査提出。",
      },
      {
        date: "2026.07.22",
        text: "App Storeで公開。続けて開始画面の追加や、ノッチ・ホームインジケーターを避ける表示調整を実施。",
      },
    ],
  },
  {
    slug: "yabusame",
    name: "ヤブサメ",
    status: "公開中",
    statusColor: "bg-green-500/15 text-green-600 dark:text-green-400",
    icon: null,
    description:
      "競馬WIN5の買い目を、人気順位の合計や人気帯ごとの頭数といった条件で絞り込むWebツール。開催ごとの出走馬データを管理画面から登録して公開している。",
    progress: 100,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    links: [{ label: "Webサイト", href: "https://win5-filter.vercel.app" }],
    features: [
      "WIN5（5レースの1着をすべて当てる馬券）で選んだ馬の全組み合わせを、人気順位の合計と人気帯（上位・中位・穴）ごとの頭数で絞り込み",
      "条件を変えると、点数・購入金額・まとめ買い用の買い目がブラウザ上で即座に更新",
      "開催ごとの出走馬と単勝人気を管理画面から登録・公開。過去の開催も選んで振り返れる",
    ],
    stackDetail: [
      {
        title: "フロントエンド",
        items: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      },
      {
        title: "バックエンド",
        items: ["Supabase（PostgreSQL / 認証 / Row Level Security）"],
      },
      {
        title: "ホスティング",
        items: ["Vercel"],
      },
    ],
    architecture: {
      layers: [
        {
          nodes: [{ name: "Vercel", detail: "Next.jsのページを配信" }],
        },
        {
          nodes: [
            { name: "公開ページ", detail: "絞り込みはブラウザ内で計算" },
            { name: "管理画面", detail: "開催データの登録・公開" },
          ],
        },
        {
          nodes: [{ name: "Supabase", detail: "PostgreSQL・認証・RLS" }],
        },
      ],
      arrows: [null, "公開キーで直接アクセス"],
      note: "組み合わせの絞り込みはブラウザ内で完結させている。データベースへはブラウザから公開キーで直接アクセスし、誰でも閲覧できる一方で、更新できるのは許可した管理者だけになるようRow Level Securityで制御している。",
    },
    history: [
      {
        date: "2026.06",
        text: "自分で使う買い目計算ツールとして開発開始。",
      },
      {
        date: "2026.07.16",
        text: "Webサービスとして公開。",
      },
      {
        date: "2026.07.19",
        text: "Supabaseを導入し、管理画面から開催データを登録・公開する運用へ移行。",
      },
    ],
  },
  {
    slug: "kensui-map",
    name: "懸垂マップ",
    status: "公開中",
    statusColor: "bg-green-500/15 text-green-600 dark:text-green-400",
    icon: "/icons/kensui-map.svg",
    description:
      "全国の懸垂できる公園を地図で探して、巡って、記録するWebサイト。OpenStreetMapのオープンデータから全国1,574か所を収録し、最寄りのアメダスの観測から「いまのバーの状態」も表示する。",
    progress: 100,
    tech: ["Next.js", "TypeScript", "MapLibre GL", "OpenStreetMap"],
    links: [{ label: "Webサイト", href: "https://kensui-map.vercel.app" }],
    features: [
      "鉄棒・雲梯・平行棒を「何ができるか」で4分類（懸垂／雲梯／ディップス／斜め懸垂）して地図に表示",
      "最寄りのアメダスの最新観測から、濡れ・冷え・積雪・強風・日没後といった「いまのバーの状態」を推定",
      "懸垂手帳：回数の記録、スポットの近くで押せる現地スタンプ、都道府県の制覇マップ（記録は端末内のみ）",
      "都道府県・市区町村・スポットごとの静的ページ（約1,870ページ）で検索からの流入に対応",
    ],
    stackDetail: [
      {
        title: "フロントエンド",
        items: [
          "Next.js（全ページ静的生成）",
          "TypeScript",
          "Tailwind CSS",
          "MapLibre GL（地図表示）",
        ],
      },
      {
        title: "データ",
        items: [
          "OpenStreetMap（ODbL）",
          "気象庁アメダスの観測データ",
          "国土地理院（住所・地名検索）",
        ],
      },
      {
        title: "ホスティング",
        items: ["Vercel"],
      },
    ],
    architecture: {
      layers: [
        {
          nodes: [
            {
              name: "データ生成スクリプト",
              detail: "OpenStreetMapの器具データを分類・公園ごとに集約",
            },
          ],
        },
        {
          nodes: [
            { name: "Next.js（静的生成）", detail: "約1,870ページ・Vercelで配信" },
          ],
        },
        {
          nodes: [
            {
              name: "地図（MapLibre GL）",
              detail: "ブラウザで表示・手帳は端末内に保存",
            },
            { name: "気象庁アメダス", detail: "最新観測からバーの状態を判定" },
          ],
        },
      ],
      arrows: ["スポットのJSONをリポジトリで管理", null],
      note: "サーバーやデータベースを持たない静的サイト。スポットのデータはビルド時に取得せず、スクリプトで作ったJSONをリポジトリで管理している。天気はブラウザから気象庁の観測データを直接読み、懸垂の記録は端末内にだけ保存する。",
    },
    history: [
      {
        date: "2026.09.24",
        text: "先行サイトを調査したうえで開発開始。手作業で集められた先行サイトのデータは使わず、オープンデータを土台にする方針を決定。",
      },
      {
        date: "2026.09.25",
        text: "Webサイトとして公開。",
      },
    ],
  },
  {
    slug: "kakeibo",
    name: "kakeibo",
    status: "非公開運用中",
    statusColor: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
    icon: "/icons/kakeibo.png",
    description:
      "パートナーと二人で使う共有家計簿アプリ。レシートを撮影するとClaude APIが品目と金額を自動で読み取って記帳する。自分たちで毎日使いながら改善を続けている。",
    progress: 90,
    tech: ["React Native", "Expo", "Supabase", "Claude API"],
    links: [],
    features: [
      "レシートを撮影するとAIが品目・金額を読み取って自動記帳",
      "パートナーと二人でリアルタイムに家計を共有",
      "合言葉ベースのシンプルな共有セットアップ",
    ],
    stackDetail: [
      {
        title: "モバイルアプリ",
        items: ["React Native (Expo)", "TypeScript"],
      },
      {
        title: "バックエンド",
        items: ["Supabase（認証 / PostgreSQL）"],
      },
      {
        title: "AI",
        items: ["Claude API（レシート画像の解析）"],
      },
    ],
    architecture: {
      layers: [
        {
          nodes: [
            { name: "モバイルアプリ", detail: "React Native / Expo" },
          ],
        },
        {
          nodes: [
            { name: "Supabase", detail: "認証・PostgreSQL" },
            { name: "Claude API", detail: "レシート画像解析" },
          ],
        },
      ],
      arrows: [null],
      note: "二人のデバイスがSupabaseを介して同じ家計データを共有する。",
    },
  },
  {
    slug: "the-bronze-rolls",
    name: "THE BRONZE ROLLS",
    status: "開発中",
    statusColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    icon: null,
    description:
      "愛犬と一緒に、青銅の鋳造迷路から脱出する三人称ホラーゲーム。Steam（Windows）での販売を目指し、ゲームエンジンGodotで開発中。",
    progress: 60,
    tech: ["Godot", "GDScript"],
    links: [],
    features: [
      "名前を付けた愛犬を呼ぶ・撫でる・匂いを追わせることで進む、犬との協力が核の探索",
      "松明で道を照らすほど敵に見つかりやすくなる、明かりと危険の駆け引き",
      "制御プレートと囚われた銅像を探して抜ける、4つの区画",
      "日本語・英語の表示切り替え",
    ],
    stackDetail: [
      {
        title: "ゲーム本体",
        items: ["Godot 4.7（Forward+レンダラー）", "GDScript"],
      },
      {
        title: "品質管理",
        items: [
          "自動検証スクリプト（ヘッドレス検査＋実描画チェック）",
          "30分間の連続描画による性能測定",
        ],
      },
      {
        title: "配信",
        items: ["Steam（Windows）で販売予定"],
      },
    ],
    architecture: {
      layers: [
        {
          nodes: [{ name: "ゲーム本体", detail: "Godot 4.7 / GDScript" }],
        },
        {
          nodes: [
            { name: "ヘッドレス検査", detail: "保存・入力・ゲーム進行" },
            { name: "実描画チェック", detail: "実際の画面を撮影し数値で判定" },
          ],
        },
        {
          nodes: [{ name: "Windows版", detail: "Steamで販売予定" }],
        },
      ],
      arrows: ["変更ごとに自動検証", "合格後にビルド"],
      note: "画面を出さないヘッドレス実行ではシェーダーの不具合が見えないため、実際に描画した画面も数値で判定している。検査が本当に失敗を検出できるかも、わざと壊して確かめてから使う。",
    },
    history: [
      {
        date: "2026.07.25",
        text: "企画書を作成し、30秒で遊べる試作を実装。ゲームエンジンにGodotを選定。",
      },
      {
        date: "2026.08.14",
        text: "製品版の開発を開始。4つの区画からなる短編ホラーとして構成を決定。",
      },
      {
        date: "2026.09",
        text: "Mac上での技術検証（保存・性能・日英表示など）が完了。通しプレイの計測とWindows版の準備を進めている。",
      },
    ],
  },
  {
    slug: "ringdom",
    name: "RINGDOM",
    status: "開発終了",
    statusColor: "bg-zinc-500/15 text-zinc-600 dark:text-zinc-400",
    icon: "/icons/ringdom.png",
    description:
      "ポーカーの判断ミスをAIが添削する上達ログ。プレイしたハンドを記録するとAIコーチが評価し、記録が貯まるほど自分の弱点（リーク）が見えてくる。2度のiOS審査却下を経て開発終了（Web版は公開中）。",
    progress: 70,
    ended: true,
    tech: ["React Native", "Expo", "TypeScript", "Claude API"],
    links: [{ label: "Webアプリ (v1)", href: "https://ringdom.vercel.app" }],
    features: [
      "ハンド記録 — 着席順から手番を自動算出し、全プレイヤーのアクションを時系列で入力",
      "AI添削 — グレード評価・EV影響・代替案つきでAIコーチが添削",
      "リーク分析 — 記録が10件貯まると解放。繰り返している悪いクセを横断抽出",
      "補助ツール — モンテカルロ法のエクイティ計算機・9-max対応レンジ表",
      "添削結果の9:16シェアカード生成",
    ],
    stackDetail: [
      {
        title: "モバイルアプリ",
        items: [
          "React Native (Expo) + expo-router",
          "TypeScript",
          "ローカルファースト保存（記録データは端末内）",
        ],
      },
      {
        title: "API",
        items: ["Vercel Edge Functions（プロンプトとAPIキーはサーバー側で管理）"],
      },
      {
        title: "AI",
        items: ["Claude API（添削・リーク分析）"],
      },
      {
        title: "インフラ",
        items: ["Upstash Redis（匿名デバイスID単位のレート制限）", "EAS Build"],
      },
    ],
    architecture: {
      layers: [
        {
          nodes: [
            {
              name: "モバイルアプリ",
              detail: "React Native / Expo（記録は端末内に保存）",
            },
          ],
        },
        {
          nodes: [{ name: "API", detail: "Vercel Edge Functions" }],
        },
        {
          nodes: [
            { name: "Claude API", detail: "添削・リーク分析" },
            { name: "Upstash Redis", detail: "利用回数制限" },
          ],
        },
      ],
      arrows: ["アプリトークン + 匿名デバイスID", null],
      note: "プロンプトとAPIキーをアプリに持たせず、すべてサーバー側で管理する構成。利用回数はデバイス単位で制限し、コストを制御している。",
    },
    history: [
      {
        date: "v1",
        text: "Web技術（Capacitor）でWeb / iOS / Androidの3プラットフォーム対応版を開発。Web版を公開（現在も稼働中）。",
      },
      {
        date: "2026.06-07",
        text: "iOS App Storeの審査に挑戦するも却下。Webをラップした構成がネイティブアプリとしての品質基準に届かなかった。",
      },
      {
        date: "2026.07",
        text: "却下を機に方針転換し、React Nativeでゼロから再構築するv2が爆誕。AIコーチ機能を一新し、実機テストまで完了。",
      },
      {
        date: "2026.07.19",
        text: "v2で再挑戦するも、iOS審査で再び却下。再々提出はリスクが上回ると判断し、開発終了を決断（Web版v1は公開したまま）。ネイティブ再構築・サーバー側AI連携・レート制限設計の経験は次のプロジェクトに引き継ぐ。",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
