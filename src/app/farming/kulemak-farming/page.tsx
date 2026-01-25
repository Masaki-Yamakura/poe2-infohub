import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Skull, Coins, Timer, AlertTriangle, BookOpen, ExternalLink, TrendingUp, Search, BarChart3, Clock, ShieldCheck, Flame, Swords, Zap, Info, Sparkles } from "lucide-react"

export default function KulemakFarmingPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            {/* Header / Navigation */}
            <div className="mb-8">
                <Link
                    href="/farming"
                    className="inline-flex items-center text-sm text-zinc-400 hover:text-amber-500 transition-colors mb-4 group"
                >
                    <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                    金策一覧に戻る
                </Link>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
                            <span className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
                                <Skull className="h-8 w-8 text-amber-500" />
                            </span>
                            クーラマクの招待
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl">
                            中〜上級者向けボス周回。交換所で招待状を購入し、Timeless Jewelや高額ユニークの一発ドロップを狙いつつ、回転率で稼ぐスタイル。
                        </p>
                    </div>
                </div>
            </div>

            {/* Top Section: Overview & Stats Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

                {/* Left: Quick Summary & Key Features */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl text-white">
                                <Sparkles className="h-5 w-5 text-amber-500" />
                                概要
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-zinc-200 leading-relaxed">
                            <p>
                                「クレマックの招待状（Kulemak's Invitation）」を購入し、ひたすらボスを倒し続けるシンプルな金策です。
                            </p>
                            <p>
                                準備が簡単でメカニクスも単純ですが、ある程度のビルドパワー（ボス火力）が求められます。失敗しても招待状は無くならないため、ゾンビアタック気味での攻略も可能です。
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <Badge variant="secondary" className="bg-red-500/10 text-red-400 hover:bg-red-500/20 border-red-500/20">ボス・ラスト（ボスの錆）</Badge>
                                <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-amber-500/20">振れ幅が大きい / ハイバリアンス</Badge>
                                <Badge variant="secondary" className="bg-zinc-500/10 text-zinc-400 hover:bg-zinc-500/20 border-zinc-500/20">簡単なセットアップ</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Requirements / Prep (Mini Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-amber-500/10 rounded-full mb-3 text-amber-500">
                                <Search className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">招待状</h3>
                            <p className="text-xs text-zinc-400">取引所 (エクスチェンジ)で購入</p>
                        </div>
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-red-500/10 rounded-full mb-3 text-red-500">
                                <Swords className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">火力</h3>
                            <p className="text-xs text-zinc-400">ボス瞬殺推奨</p>
                        </div>
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-blue-500/10 rounded-full mb-3 text-blue-500">
                                <Coins className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">資金</h3>
                            <p className="text-xs text-zinc-400">中 (買い付け)</p>
                        </div>
                    </div>
                </div>

                {/* Right: Profit Stats & Info (Sticky-ish) */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="bg-zinc-900/80 border-amber-500/30 shadow-lg shadow-amber-900/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <CardHeader>
                            <CardTitle className="text-lg text-zinc-200 flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-amber-500" />
                                期待収益
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <div className="text-4xl font-bold text-amber-400 tracking-tight">15-25 Div/h</div>
                                <div className="text-sm text-zinc-500 mt-1 flex items-center gap-1">
                                    <Flame className="h-3 w-3 text-red-500" />
                                    上振れあり (運要素)
                                </div>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-zinc-800/50">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <BarChart3 className="h-4 w-4" />
                                        <span>難易度</span>
                                    </div>
                                    <span className="font-medium text-white">★★★☆☆ (Boss)</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <Coins className="h-4 w-4" />
                                        <span>初期投資</span>
                                    </div>
                                    <span className="font-medium text-white">中 (Medium)</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <ShieldCheck className="h-4 w-4" />
                                        <span>安定性</span>
                                    </div>
                                    <span className="font-medium text-zinc-300">中 (Medium)</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="p-4 rounded-lg bg-blue-900/10 border border-blue-500/20 backdrop-blur-sm">
                        <h4 className="font-medium text-blue-400 mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4" />
                            ポイント
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            1周1-2分の「高速周回」が前提の時給設計です。ボスを瞬殺できる火力が必要です。手持ちの不要な石板を売って資金にするのも手です。
                        </p>
                    </div>
                </div>
            </div>


            {/* Main Content Sections */}
            <div className="space-y-12">

                {/* Step Flow (Vertical List) */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded bg-zinc-800 text-zinc-300 text-sm">1</span>
                        具体的な手順
                    </h2>
                    <div className="space-y-4">
                        {/* Step 1 */}
                        <div className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/60 transition-all group flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex w-12 h-12 rounded-xl bg-amber-500/10 items-center justify-center text-amber-500 flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                                <h3 className="font-bold text-xl">1</h3>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="md:hidden p-2 bg-amber-500/10 rounded-lg text-amber-500">
                                        <h3 className="font-bold">1</h3>
                                    </div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        招待状を購入
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-3">
                                    取引所 (エクスチェンジ)で「クレマックの招待状（Kulemak's Invitation）」を購入します。まとめて買うのが効率的。目安: 27個/1Div 程度。
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/60 transition-all group flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex w-12 h-12 rounded-xl bg-amber-500/10 items-center justify-center text-amber-500 flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                                <h3 className="font-bold text-xl">2</h3>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="md:hidden p-2 bg-amber-500/10 rounded-lg text-amber-500">
                                        <h3 className="font-bold">2</h3>
                                    </div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        イベント進行
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-3">
                                    エリアに入り指示に従って進みます。最後は「指輪を返す」選択肢を選び、ボス戦へ。
                                </p>
                                <div className="p-3 bg-zinc-950 rounded border border-zinc-800 text-sm text-zinc-400">
                                    <Info className="h-3 w-3 inline mr-1 text-blue-400" />
                                    指輪のMod選択はランダムでOK。時間効率優先で進めます。
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/60 transition-all group flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex w-12 h-12 rounded-xl bg-amber-500/10 items-center justify-center text-amber-500 flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                                <h3 className="font-bold text-xl">3</h3>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="md:hidden p-2 bg-amber-500/10 rounded-lg text-amber-500">
                                        <h3 className="font-bold">3</h3>
                                    </div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        ボス討伐 & ドロップ回収
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-3">
                                    ボスを倒し、ドロップを確認。タイムレスジュエルや可能性のシャードなどを拾って即離脱。これを高速で繰り返します。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reference Section */}
                <section className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-zinc-400" />
                        参考リソース
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <a
                            href="https://www.youtube.com/watch?v=8D9u6pyq7EM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900/80 transition-all group"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <ExternalLink className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">YouTube 解説動画</h3>
                                <p className="text-sm text-zinc-500">周回手法の具体的な流れを確認</p>
                            </div>
                        </a>

                        <a
                            href="https://www.reddit.com/r/pathofexile2builds/comments/1nps3gl/start_farming_kulemak_invitations_if_youre/?tl=ja"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-900/80 transition-all group"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600/20 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                <BookOpen className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors">Reddit スレッド</h3>
                                <p className="text-sm text-zinc-500">効率やドロップ報告などの情報</p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}
