import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Activity, Shield, Coins, AlertTriangle, BookOpen, ExternalLink, TrendingUp, Search, BarChart3, Clock, ShieldCheck, Flame, Skull, Zap, Sparkles } from "lucide-react"

export default function SekhemaFarmingPage() {
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
                            <span className="p-2 bg-red-500/10 rounded-lg border border-red-500/20">
                                <Activity className="h-8 w-8 text-red-500" />
                            </span>
                            セケマの試練
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl">
                            PoE2最高峰の金策の一つ。適切なレリック構成を整えることで、安定して時給30 Divine前後の収益が見込めるレリック周回戦略。
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
                                「セケマの試練（Trial of Sekhema）」を周回し、高額なレリックやユニーク指輪を狙います。
                            </p>
                            <p>
                                初期投資として約30 Divine（レリック代）が必要ですが、安定性は非常に高く、8日間で3700 Divine以上稼いだ報告もある強力なファームです。
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-amber-500/20">High Profit</Badge>
                                <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20">Relic Farming</Badge>
                                <Badge variant="secondary" className="bg-zinc-500/10 text-zinc-400 hover:bg-zinc-500/20 border-zinc-500/20">Mid-High ティア</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Requirements / Prep (Mini Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-blue-500/10 rounded-full mb-3 text-blue-500">
                                <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">Magic Relics</h3>
                            <p className="text-xs text-zinc-400">Honor系 x3 (必須)</p>
                        </div>
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-amber-500/10 rounded-full mb-3 text-amber-500">
                                <Coins className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">初期投資</h3>
                            <p className="text-xs text-zinc-400">~30 Divine</p>
                        </div>
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-red-500/10 rounded-full mb-3 text-red-500">
                                <AlertTriangle className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">NG Affliction</h3>
                            <p className="text-xs text-zinc-400">知識が必須</p>
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
                                <div className="text-4xl font-bold text-amber-400 tracking-tight">~30 Div/h</div>
                                <div className="text-sm text-zinc-500 mt-1 flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    継続的な収益
                                </div>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-zinc-800/50">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <BarChart3 className="h-4 w-4" />
                                        <span>難易度</span>
                                    </div>
                                    <span className="font-medium text-white">★★★☆☆ (知識)</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <Coins className="h-4 w-4" />
                                        <span>初期投資</span>
                                    </div>
                                    <span className="font-medium text-white">高 (High)</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <ShieldCheck className="h-4 w-4" />
                                        <span>安定性</span>
                                    </div>
                                    <span className="font-medium text-green-400">非常に高い</span>
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
                            レリック資産を購入して運用する投資型の金策です。参入障壁（初期費用）が高い分、ライバルが少なく安定して稼げます。
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
                            <div className="hidden md:flex w-12 h-12 rounded-xl bg-blue-500/10 items-center justify-center text-blue-500 flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                <h3 className="font-bold text-xl">1</h3>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="md:hidden p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                        <h3 className="font-bold">1</h3>
                                    </div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        必須レリックの準備
                                    </h3>
                                </div>
                                <div className="space-y-3 mt-3">
                                    <p className="text-zinc-400 leading-relaxed">
                                        アンフォラ（Amphora）スロットに、以下の魔法レリック（Magic Relic）を3本（縦3マス）セットします。
                                    </p>
                                    <div className="bg-blue-950/20 p-4 rounded-lg border border-blue-900/50">
                                        <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300">
                                            <li><span className="text-white font-bold">名誉耐性 (Honor Resistance)</span> <span className="text-zinc-500 text-xs ml-2">例: +40%</span></li>
                                            <li><span className="text-white font-bold">名誉の最大値増加 (Increased Maximum Honor)</span> <span className="text-zinc-500 text-xs ml-2">例: +36%</span></li>
                                        </ul>
                                    </div>
                                    <p className="text-xs text-zinc-500">想定コスト: ~10 Divine / 本 (相場によります)</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/60 transition-all group flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex w-12 h-12 rounded-xl bg-red-500/10 items-center justify-center text-red-500 flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                                <h3 className="font-bold text-xl">2</h3>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="md:hidden p-2 bg-red-500/10 rounded-lg text-red-500">
                                        <h3 className="font-bold">2</h3>
                                    </div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        NG不遇 (Affliction) の回避
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-3">
                                    以下のAfflictionは攻略難易度を跳ね上げるため、<strong>絶対に出現させない、または選択しない</strong>ように注意します。
                                </p>
                                <div className="p-3 bg-red-950/30 rounded border border-red-900/50 text-red-200 text-sm font-semibold">
                                    <Skull className="h-4 w-4 inline mr-2" />
                                    獲得した時に追加でランダムな不幸を獲得する
                                    <div className="text-xs font-normal text-red-400 mt-1 opacity-80">(Gain an additional random affliction when gaining an affliction)</div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/60 transition-all group flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex w-12 h-12 rounded-xl bg-blue-500/10 items-center justify-center text-blue-500 flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                <h3 className="font-bold text-xl">3</h3>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="md:hidden p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                        <h3 className="font-bold">3</h3>
                                    </div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        周回と報酬獲得
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-3">
                                    NG不幸を避けつつ、報酬の良い部屋を選択して進みます。最後にボスを倒して、レリックやユニークアイテムを持ち帰ります。
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
                            href="https://www.youtube.com/watch?v=MpKlZaWOFVI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900/80 transition-all group"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <ExternalLink className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">YouTube 解説動画</h3>
                                <p className="text-sm text-zinc-500">【PoE2】白煙【HAKUEN】のセケマ攻略</p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}
