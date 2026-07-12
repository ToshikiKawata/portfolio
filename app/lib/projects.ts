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
  disclaimer?: string;
  history?: { date: string; text: string }[];
  features?: string[];
  stackDetail?: { title: string; items: string[] }[];
  architecture?: Architecture;
  concept?: string[];
};

export const projects: Project[] = [
  {
    slug: "typedex",
    name: "Typedex",
    status: "公開中",
    statusColor: "bg-green-500/15 text-green-600 dark:text-green-400",
    icon: "/icons/typedex.png",
    description:
      "いわゆるMBTI系の16タイプ性格分類で友達を「集めて」相性を分析できる、中高生向けのiOSアプリ。企画・デザイン・開発・App Store申請までを一人で担当。",
    progress: 100,
    tech: ["React Native", "Expo", "TypeScript"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/jp/app/id6781932071",
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
            { name: "iOSアプリ", detail: "React Native / Expo" },
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
        text: "UIを全面刷新したv1.0.1を公開。Android版はクローズドテスト運用中。",
      },
    ],
  },
  {
    slug: "ringdom",
    name: "RINGDOM",
    status: "v2 開発中",
    statusColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    icon: "/icons/ringdom.png",
    description:
      "ポーカーの判断ミスをAIが添削する上達ログ。プレイしたハンドを記録するとAIコーチが評価し、記録が貯まるほど自分の弱点（リーク）が見えてくる。",
    progress: 70,
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
        date: "2026.07-",
        text: "却下を機に方針転換し、React Nativeでゼロから再構築するv2が爆誕。AIコーチ機能を一新して実機テストまで完了、ストア公開へ再挑戦中。",
      },
    ],
  },
  {
    slug: "yabusame",
    name: "ヤブサメ",
    status: "公開準備中",
    statusColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    icon: null,
    description:
      "競馬WIN5の買い目を人気合計・人気帯の条件で絞り込むフィルターツール。フリーミアム型のWebアプリとして公開準備中。",
    progress: 80,
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    links: [],
    features: [
      "WIN5（5レースの1着をすべて当てる馬券）の買い目候補を、人気合計・人気帯の条件で機械的に絞り込み",
      "条件を変えるとブラウザ上で即時に結果へ反映",
      "無料＋有料機能のフリーミアム型で公開予定",
    ],
    stackDetail: [
      {
        title: "フロントエンド",
        items: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      },
      {
        title: "ホスティング",
        items: ["Vercel（公開準備中）"],
      },
    ],
    architecture: {
      layers: [
        {
          nodes: [
            { name: "ブラウザ", detail: "絞り込みロジックを実行" },
          ],
        },
        {
          nodes: [{ name: "Vercel", detail: "Next.jsを静的配信" }],
        },
      ],
      arrows: ["静的配信"],
      note: "サーバーやデータベースを持たず、ロジックはすべてクライアントサイドで完結するシンプルな構成。",
    },
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
    slug: "slash-rush",
    name: "Slash Rush",
    status: "開発中",
    statusColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    icon: null,
    description:
      "画面をスラッシュして蛇を切断していく60秒の2Dアクションゲーム。Canvasベースで、短時間で遊べる暇つぶしゲームとして開発中。",
    progress: 40,
    tech: ["TypeScript", "Canvas 2D"],
    links: [],
    features: [
      "タップで蛇をピン留め、スワイプのスラッシュで切断する直感操作",
      "60秒のスコアアタック形式",
      "ゲームエンジン・依存ライブラリなしのCanvas 2D直描画",
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
        title: "モバイル展開",
        items: ["Capacitor（iOS / Android展開を視野）"],
      },
    ],
    architecture: {
      layers: [
        {
          nodes: [
            { name: "ゲーム本体", detail: "TypeScript + Canvas 2D（ブラウザ）" },
          ],
        },
        {
          nodes: [
            { name: "iOS / Androidアプリ", detail: "Capacitorでラップ（展開予定）" },
          ],
        },
      ],
      arrows: ["Capacitor"],
    },
  },
  {
    slug: "eishot",
    name: "エイショット",
    status: "構想中",
    statusColor: "bg-zinc-500/15 text-zinc-600 dark:text-zinc-400",
    icon: null,
    description:
      "「遺影 × ショット」の造語。堅苦しくなりがちな遺影を、元気なうちにカジュアルに撮って家族と共有できるサービスの構想。",
    progress: 15,
    tech: ["企画段階"],
    links: [],
    concept: [
      "「遺影は亡くなってから慌てて選ぶもの」という常識を変え、元気なうちに自分らしい一枚をカジュアルに残す文化をつくりたい",
      "撮影ガイドと家族への共有機能を中心に検討中",
      "技術構成はモバイルアプリ（React Native想定）＋クラウドストレージを想定",
    ],
  },
  {
    slug: "muscle-map",
    name: "筋トレアプリ（仮）",
    status: "構想中",
    statusColor: "bg-zinc-500/15 text-zinc-600 dark:text-zinc-400",
    icon: null,
    description:
      "トレーニングメニューの自動生成に加えて、部位ごとの超回復・放置状態を人体マップの色（赤→緑→青）で直感的に可視化するアプリの構想。",
    progress: 10,
    tech: ["企画段階"],
    links: [],
    concept: [
      "部位ごとの「超回復中 → 回復済み → 放置」を、人体マップの色（赤 → 緑 → 青）という1本の時間軸で表現するのがコアアイデア",
      "「今日どこを鍛えるべきか」がアプリを開いた瞬間に分かるUIを目指す",
      "トレーニングメニューの自動生成と組み合わせて検討中（モバイルアプリ想定）",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
