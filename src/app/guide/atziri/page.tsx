import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Sparkles, AlertTriangle, Hammer, Coins, ArrowRight, CheckCircle2, Zap, BookOpen, ExternalLink, TrendingUp, Search, BarChart3, Clock, ShieldCheck, Landmark, LayoutGrid, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function AtziriFarmingPage() {
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
                                <Landmark className="h-8 w-8 text-red-500" />
                            </span>
                            アッツィリの神殿建築
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl">
                            「部屋の連結」と「効率的なマップ周回」で最大エネルギーとメダリオンを稼ぐ。
                            上級者向けの建築テクニックで爆発的な利益を狙うエンドコンテンツファーム。
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
                                <strong>「アッツィリの神殿（Atziri's Temple）」</strong>を建築し、完成した神殿を攻略、または高額な報酬部屋を狙うファームです。
                            </p>
                            <p>
                                最大の目標は、神殿の管理者であるボス<strong>「Xipocatl」</strong>を倒し、<strong>最大エネルギー（Max Energy）</strong>や<strong>メダリオンスロット</strong>の上限を解放することです。
                                また、適切な部屋を連結させることで、カレンシーや高価なクラフト素材を大量に入手可能です。
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <Badge variant="secondary" className="bg-red-500/10 text-red-400 hover:bg-red-500/20 border-red-500/20">高難易度</Badge>
                                <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 border-purple-500/20">要パズル思考</Badge>
                                <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-amber-500/20">エンドゲーム向け</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Requirements / Prep (Mini Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-red-500/10 rounded-full mb-3 text-red-500">
                                <Coins className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">必須アイテム</h3>
                            <p className="text-xs text-zinc-400">ユニーク石板「偉大なる計画」<br />(The Great Design)</p>
                        </div>
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-amber-500/10 rounded-full mb-3 text-amber-500">
                                <LayoutGrid className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">マップ</h3>
                            <p className="text-xs text-zinc-400">Tier 15 (6 Mods)<br />安定してEnergy確保</p>
                        </div>
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-blue-500/10 rounded-full mb-3 text-blue-500">
                                <Lightbulb className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">QoL</h3>
                            <p className="text-xs text-zinc-400">Light Radius (照度)<br />ビーコン発見に有利</p>
                        </div>
                    </div>
                </div>

                {/* Right: Profit Stats & Info (Sticky-ish) */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="bg-zinc-900/80 border-red-500/30 shadow-lg shadow-red-900/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <CardHeader>
                            <CardTitle className="text-lg text-zinc-200 flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-red-500" />
                                目標ステータス
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <div className="text-4xl font-bold text-red-400 tracking-tight">Max 60</div>
                                <div className="text-sm text-zinc-500 mt-1 flex items-center gap-1">
                                    <Zap className="h-3 w-3" />
                                    Energy (エネルギー)
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-400 tracking-tight">Max 6</div>
                                <div className="text-sm text-zinc-500 mt-1 flex items-center gap-1">
                                    <ShieldCheck className="h-3 w-3" />
                                    Medallion Slots (スロット)
                                </div>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-zinc-800/50">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <BarChart3 className="h-4 w-4" />
                                        <span>難易度</span>
                                    </div>
                                    <span className="font-medium text-red-400">★★★★☆ (Hard)</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <Coins className="h-4 w-4" />
                                        <span>投資コスト</span>
                                    </div>
                                    <span className="font-medium text-white">高 (High)</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="p-4 rounded-lg bg-red-900/10 border border-red-500/20 backdrop-blur-sm">
                        <h4 className="font-medium text-red-400 mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4" />
                            ポイント
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            「偉大なる計画」を使ってビーコンだけを回収し、ボスを倒さずに即帰還する回転率重視の戦略が基本です。
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
                        基本的な戦略フロー
                    </h2>
                    <div className="space-y-4">
                        {/* Step 1 */}
                        <div className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/60 transition-all group flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex w-12 h-12 rounded-xl bg-red-500/10 items-center justify-center text-red-500 flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                                <h3 className="font-bold text-xl">1</h3>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="md:hidden p-2 bg-red-500/10 rounded-lg text-red-500">
                                        <h3 className="font-bold">1</h3>
                                    </div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        マップと石板の準備
                                    </h3>
                                </div>
                                <div className="space-y-3 mt-3">
                                    <p className="text-zinc-400 text-sm">
                                        高回転でエネルギー（部屋の設置コスト）を稼ぐために、以下の準備を行います。
                                    </p>
                                    <div className="bg-black/30 p-3 rounded border border-zinc-800">
                                        <span className="text-red-300 font-bold block mb-1">石板: 偉大なる計画 (The Great Design)</span>
                                        <p className="text-xs text-zinc-400">
                                            効果: マップ内のビーコン（Beacon）をすべて起動すると、ボスを倒した扱いになりマップが完了する。<br />
                                            <span className="text-amber-500">注意:</span> ビーコン起動後、即座にポータルで帰還・次のマップへ行くことで時間を大幅に短縮できます。
                                        </p>
                                    </div>
                                    <div className="bg-black/30 p-3 rounded border border-zinc-800">
                                        <span className="text-purple-300 font-bold block mb-1">マップ: Tier 15 (6 Mods)</span>
                                        <p className="text-xs text-zinc-400">
                                            確実に2エネルギーを獲得するためにT15以上の6 Modマップを使用します。<br />
                                            8 Modマップは3エネルギーの可能性がありますが、コストと難易度が見合いません。
                                        </p>
                                    </div>
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
                                        神殿の建築（シミュレーター活用）
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-3">
                                    マップを周回して貯めたエネルギーを使い、部屋を配置・アップグレードしていきます。
                                </p>

                                <div className="space-y-4">
                                    <h4 className="font-bold text-white flex items-center gap-2 border-b border-zinc-700 pb-2">
                                        <Zap className="h-4 w-4 text-amber-500" />
                                        上級建築テクニック (Video 5:33~)
                                    </h4>

                                    <div className="grid gap-3">
                                        {/* Tech 1 */}
                                        <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                                            <span className="text-blue-400 font-bold block mb-1 text-sm">1. Spy - Barracks - Spy</span>
                                            <p className="text-xs text-zinc-400 leading-relaxed">
                                                スパイ(Spymaster)と兵舎(Barracks)を連結させる技。<br />
                                                兵舎の横に装備部屋を置いて「兵舎化」することで、本来置けないスパイを隣接させます。特定の並びを強制し、スパイをロックするのに使用。
                                            </p>
                                        </div>

                                        {/* Tech 2 */}
                                        <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                                            <span className="text-purple-400 font-bold block mb-1 text-sm">2. ロシア技術 (Russian Tech)</span>
                                            <p className="text-xs text-zinc-400 leading-relaxed">
                                                <span className="text-zinc-300">構成: Thaumaturgy - Corrupted Chamber - Thaumaturgy</span><br />
                                                生贄の間の隣にThaumaturgyを置き、錬金術化させて連結。安定させるにはロックが2〜3個必要になる高難度コンボ。
                                            </p>
                                        </div>

                                        {/* Tech 3 */}
                                        <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                                            <span className="text-red-400 font-bold block mb-1 text-sm">3. Forge - Golem - Forge</span>
                                            <p className="text-xs text-zinc-400 leading-relaxed">
                                                鍛冶場(Forge)とゴーレム部屋のコンボ。鍛冶場の横に装備部屋を置いて錬金術装備を使用し、ゴーレムをロックして不要な道を消す手法。
                                            </p>
                                        </div>

                                        {/* Rule */}
                                        <div className="bg-red-900/10 p-3 rounded-lg border border-red-500/20 mt-1">
                                            <span className="text-red-400 font-bold block mb-1 text-sm flex items-center gap-1">
                                                <AlertTriangle className="h-3 w-3" />
                                                重要：破壊の法則 (Destruction Rule)
                                            </span>
                                            <p className="text-xs text-zinc-300 leading-relaxed">
                                                一本道のチェーンは「先端」から破壊されますが、<strong>「ループ（両端が繋がった道）」ができると、どこから崩れるか予測不能</strong>になります。<br />
                                                意図しないループを作らないことが建築の最重要ルールです。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reference Section */}
                <section className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-zinc-400" />
                        参考リソース・シミュレーター
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <a
                            href="https://www.youtube.com/watch?v=sxotY0aiPCU"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900/80 transition-all group"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <ExternalLink className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">解説動画 (さぽりんご)</h3>
                                <p className="text-sm text-zinc-500">【PoE2】アッツィリの神殿建築ファーム2種解説</p>
                            </div>
                        </a>

                        <a
                            href="https://sulozor.github.io/#/atziri-temple"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900/80 transition-all group"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <LayoutGrid className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">Temple Simulator</h3>
                                <p className="text-sm text-zinc-500">Sulozor's GitHub IO (Planner)</p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}
