import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Sparkles, AlertTriangle, Hammer, Gem, ArrowRight, CheckCircle2, AlertCircle, BookOpen, ExternalLink, TrendingUp, Search, Coins, Zap, BarChart3, Clock, ShieldCheck, Flame } from "lucide-react"

export default function BreachRingCraftingPage() {
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
                            <span className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                <Gem className="h-8 w-8 text-purple-500" />
                            </span>
                            高額ブリーチ指輪
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl">
                            Archmageキャスター究極の指輪。「キャストスピード」と「マナ」を極限まで高める、100 神のオーブ超えを狙える高確率クラフト手法。
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
                                <strong>ブリーチリング</strong> は本来コラプト状態でドロップしますが、特定のアイテムを使用することでMODを変更可能です。
                            </p>
                            <p>
                                「職媒の御告げ」や「結晶化の御告げ」を駆使して、通常では到達できない最強クラスのマナ・指輪を作成します。成功すれば一攫千金ですが、失敗のリスクも伴うハイリスク・ハイリターンな金策です。
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 border-purple-500/20">アーチメイジ</Badge>
                                <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20">マナスタック</Badge>
                                <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-amber-500/20">クラフト / 製作</Badge>
                                <Badge variant="outline" className="text-zinc-400 border-zinc-700">レイトゲーム / 終盤</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Requirements / Prep (Mini Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-purple-500/10 rounded-full mb-3 text-purple-500">
                                <Hammer className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">Breach Ring</h3>
                            <p className="text-xs text-zinc-400">アイテムレベル (iLvl) 82+ (84推奨)</p>
                        </div>
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-blue-500/10 rounded-full mb-3 text-blue-500">
                                <Coins className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">御告げ (Omens)</h3>
                            <p className="text-xs text-zinc-400">御告げ (オーメン / 予兆)</p>
                        </div>
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-amber-500/10 rounded-full mb-3 text-amber-500">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">高貴なオーブ</h3>
                            <p className="text-xs text-zinc-400">完全・上級</p>
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
                                <div className="text-4xl font-bold text-amber-400 tracking-tight">ジャックポット / 大当たり</div>
                                <div className="text-sm text-zinc-500 mt-1 flex items-center gap-1">
                                    <Flame className="h-3 w-3 text-red-500" />
                                    100 Divine+ 狙い
                                </div>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-zinc-800/50">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <BarChart3 className="h-4 w-4" />
                                        <span>難易度</span>
                                    </div>
                                    <span className="font-medium text-white">★★★★☆ (知識)</span>
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
                                        <span>リスク</span>
                                    </div>
                                    <span className="font-medium text-red-400">高 (Gamble)</span>
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
                            失敗時の損失も大きいため、資金に余裕がある（100 Divine以上）場合に挑戦することをお勧めします。
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
                            <div className="hidden md:flex w-12 h-12 rounded-xl bg-purple-500/10 items-center justify-center text-purple-500 flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                                <h3 className="font-bold text-xl">1</h3>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="md:hidden p-2 bg-purple-500/10 rounded-lg text-purple-500">
                                        <h3 className="font-bold">1</h3>
                                    </div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        サフィックスの基礎 (キャストスピード)
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-3">
                                    カオスオーブを連打して、<span className="text-blue-400 font-bold">キャストスピード</span> を引きます。ティアは妥協してもOKですが、空きスロットがあると楽です。
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/60 transition-all group flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex w-12 h-12 rounded-xl bg-purple-500/10 items-center justify-center text-purple-500 flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                                <h3 className="font-bold text-xl">2</h3>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="md:hidden p-2 bg-purple-500/10 rounded-lg text-purple-500">
                                        <h3 className="font-bold">2</h3>
                                    </div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        属性耐性の固定 (耐性)
                                    </h3>
                                </div>
                                <div className="text-zinc-400 leading-relaxed space-y-2">
                                    <p>以下の手順で、ランダムなSuffixを強力な耐性MODに変化させます。</p>
                                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                                        <li>欲しい耐性の<strong>カタリスト</strong>を使用（例: 雷耐性なら雷カタリスト）</li>
                                        <li><span className="text-white">職媒の御告げ</span> + <span className="text-white">サフィックスの御告げ</span> + <span className="text-amber-400">高貴なオーブ：完全</span> をセットして使用</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/60 transition-all group flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex w-12 h-12 rounded-xl bg-purple-500/10 items-center justify-center text-purple-500 flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                                <h3 className="font-bold text-xl">3</h3>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="md:hidden p-2 bg-purple-500/10 rounded-lg text-purple-500">
                                        <h3 className="font-bold">3</h3>
                                    </div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        最大マナ %
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-3">
                                    <strong>結晶化の御告げ</strong> + <strong>精神のパーフェクトエッセンス</strong> を使用。これで「最大マナ増加(%)」が確定で付与されます。
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/60 transition-all group flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex w-12 h-12 rounded-xl bg-purple-500/10 items-center justify-center text-purple-500 flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                                <h3 className="font-bold text-xl">4</h3>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="md:hidden p-2 bg-purple-500/10 rounded-lg text-purple-500">
                                        <h3 className="font-bold">4</h3>
                                    </div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        マナ固定値
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-3">
                                    <span className="text-purple-400">神経のカタリスト</span>で品質を上げ、<span className="text-white">職媒の御告げ</span> + <span className="text-amber-400">高貴なオーブ：完全</span> で最後の祈りを捧げます。高ティアのマナ実数値が付けば完成です。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Profit / Recovery Analysis */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded bg-zinc-800 text-zinc-300 text-sm">2</span>
                        リカバリーと販売戦略
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Recovery Card */}
                        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border border-red-500/20 overflow-hidden group hover:border-red-500/40 transition-colors">
                            <div className="p-1 bg-red-500/10 border-b border-red-500/20 flex items-center justify-between px-4">
                                <span className="text-xs font-bold text-red-400 tracking-wider uppercase">リスク管理</span>
                                <AlertTriangle className="h-4 w-4 text-red-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    失敗時のリカバリー
                                </h3>
                                <div className="space-y-4 text-sm text-zinc-300">
                                    <p>
                                        不要なMODがついた場合は、<strong>消去のオーブ</strong> で削除を試みます。
                                    </p>
                                    <div className="bg-red-950/30 p-3 rounded border border-red-900/50">
                                        <p className="text-xs text-red-300">
                                            ※重要MOD（Cast Speedなど）が消えてしまった場合は、STEP 1 または直前の工程からやり直しになります。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Selling Card */}
                        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border border-blue-500/20 overflow-hidden group hover:border-blue-500/40 transition-colors">
                            <div className="p-1 bg-blue-500/10 border-b border-blue-500/20 flex items-center justify-between px-4">
                                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">販売戦略</span>
                                <Coins className="h-4 w-4 text-blue-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    販売・妥協ライン
                                </h3>
                                <div className="space-y-4 text-sm text-zinc-300">
                                    <p>
                                        最後のライフが付かず、マナと耐性だけが揃った状態でも、<span className="text-amber-400 font-bold">40〜50 Divine</span> 程度で売れる可能性があります。
                                    </p>
                                    <p>
                                        無理に完璧を目指さず、一旦売って資金回収するのも賢い戦略です。
                                    </p>
                                </div>
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
                            href="https://www.youtube.com/watch?v=IY3v75aLjhE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900/80 transition-all group"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <ExternalLink className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">YouTube 解説動画</h3>
                                <p className="text-sm text-zinc-500">【PoE2】1個100div越えの最強指輪の作り方【Path of exile2】</p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}
