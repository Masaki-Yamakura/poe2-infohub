import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft, Hammer, Sparkles, AlertTriangle, Skull, Ghost, Eye, TrendingUp, Target, ExternalLink, BookOpen, Search, Coins, ArrowRight, Zap, Clock, BarChart3, ShieldCheck } from "lucide-react"

export default function TabletCraftingPage() {
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
                                <Hammer className="h-8 w-8 text-amber-500" />
                            </span>
                            石板クラフト
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl">
                            知識を武器に高利益を狙う。特定の先人の石板（Precursor Tablet）を安く仕入れ、価値あるモッドを付けて売却・運用する戦略的ファーミング。
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
                                闇雲に石板をクラフトするのではなく、<strong>特定のベース石板（ブリーチ, アビス, 監督者）</strong>を購入し、それぞれに付く「当たりモッド」を狙ってクラフトします。
                            </p>
                            <p>
                                完成品は高額で取引されるほか、自分で周回してさらに大きな利益を出すことも可能です。マップ周回のようなアクション要素よりも、知識とマーケットリサーチが重要になる金策です。
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 border-purple-500/20">ブリーチ / 裂け目</Badge>
                                <Badge variant="secondary" className="bg-green-500/10 text-green-400 hover:bg-green-500/20 border-green-500/20">アビス / 淵</Badge>
                                <Badge variant="secondary" className="bg-red-500/10 text-red-400 hover:bg-red-500/20 border-red-500/20">監督者</Badge>
                                <Badge variant="outline" className="text-zinc-400 border-zinc-700">クラフト</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Requirements / Prep (Mini Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-amber-500/10 rounded-full mb-3 text-amber-500">
                                <Search className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">ベース石板</h3>
                            <p className="text-xs text-zinc-400">ノーマル / マジック品を購入</p>
                        </div>
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-blue-500/10 rounded-full mb-3 text-blue-500">
                                <Coins className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">通貨</h3>
                            <p className="text-xs text-zinc-400">改変のオーブ / 増強のオーブ</p>
                        </div>
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-indigo-500/10 rounded-full mb-3 text-indigo-500">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">知識</h3>
                            <p className="text-xs text-zinc-400">当たりModの把握</p>
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
                                <div className="text-4xl font-bold text-amber-400 tracking-tight">Very High</div>
                                <div className="text-sm text-zinc-500 mt-1 flex items-center gap-1">
                                    <ShieldCheck className="h-3 w-3" />
                                    リスク低・高リターン
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
                                    <span className="font-medium text-white">低〜中</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <Clock className="h-4 w-4" />
                                        <span>所要時間</span>
                                    </div>
                                    <span className="font-medium text-white">数秒〜数分/個</span>
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
                            石板の種類によって付くサフィックスが決まっています。「どの石板でどのモッドを狙うか」を間違えないようにしましょう。
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
                                        ベース石板を購入
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed">
                                    トレードサイト等で、対象となる石板（ノーマル/マジック）を安価で購入します。アイテムレベルは高い方が良いですが、まずは価格重視でOK。
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
                                        モッドを狙ってリロール
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed">
                                    <strong>変成のオーブ / 改変のオーブ</strong> を使用。マジック状態で有効なサフィックスが付くまでリロールします。
                                </p>
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
                                        販売 or 使用
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed">
                                    良いモッドが1つで合格、2つで大成功。完成品を高値で売るか、自分で使ってさらなる報酬を得ましょう。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Target Mods Cards */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded bg-zinc-800 text-zinc-300 text-sm">2</span>
                        狙い目の石板と当たりMod
                    </h2>

                    <div className="grid gap-6">
                        {/* Breach Card */}
                        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-colors">
                            <div className="p-1 bg-purple-500/10 border-b border-purple-500/20 flex items-center justify-between px-4">
                                <span className="text-xs font-bold text-purple-400 tracking-wider uppercase">ブリーチ石板の狙い目</span>
                                <Ghost className="h-4 w-4 text-purple-500" />
                            </div>
                            <div className="p-6 md:flex gap-8 items-start">
                                <div className="md:w-1/3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-purple-950 rounded-lg text-purple-400">
                                            <Ghost className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">ブリーチの先人の石板</h3>
                                    </div>
                                    <p className="text-zinc-400 text-sm mb-4">
                                        ブリーチストーンの破片やボスへのアクセスを増やすのが目的。安定した需要があります。
                                    </p>
                                </div>
                                <div className="md:w-2/3 bg-black/40 rounded-lg p-4 border border-zinc-800">
                                    <h4 className="text-sm font-semibold text-purple-300 mb-3 flex items-center gap-2">
                                        <Target className="h-4 w-4" />
                                        狙うべき当たり サフィックス
                                    </h4>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        <div className="flex items-start gap-2 text-sm text-zinc-300">
                                            <span className="text-purple-500 mt-1">●</span>
                                            <span><strong>Breach Splinters</strong><br /><span className="text-xs text-zinc-500">マップのブリーチモンスターがドロップするブリーチスプリンターの数量が(15—30)%増加する</span></span>
                                        </div>
                                        <div className="flex items-start gap-2 text-sm text-zinc-300">
                                            <span className="text-purple-500 mt-1">●</span>
                                            <span><strong>Additional Breach</strong><br /><span className="text-xs text-zinc-500">マップは(X—X)%の確率でブリーチが追加でX個出現する</span></span>
                                        </div>
                                        <div className="flex items-start gap-2 text-sm text-zinc-300 col-span-2">
                                            <span className="text-purple-500 mt-1">●</span>
                                            <span>Magic Monsters in Breaches <span className="text-xs text-zinc-500 ml-1">(マップのブリーチがスポーンするマジックモンスターが(40—70)%増加する)</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Abyss Card */}
                        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border border-green-500/20 overflow-hidden group hover:border-green-500/40 transition-colors">
                            <div className="p-1 bg-green-500/10 border-b border-green-500/20 flex items-center justify-between px-4">
                                <span className="text-xs font-bold text-green-400 tracking-wider uppercase">アビス石板の狙い目</span>
                                <Skull className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="p-6 md:flex gap-8 items-start">
                                <div className="md:w-1/3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-green-950 rounded-lg text-green-400">
                                            <Skull className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">アビスの先人の石板</h3>
                                    </div>
                                    <p className="text-zinc-400 text-sm mb-4">
                                        モンスター数を増やして経験値やドロップを稼ぐ、または深淵（Depths）へのアクセスを狙います。
                                    </p>
                                </div>
                                <div className="md:w-2/3 bg-black/40 rounded-lg p-4 border border-zinc-800">
                                    <h4 className="text-sm font-semibold text-green-300 mb-3 flex items-center gap-2">
                                        <Target className="h-4 w-4" />
                                        狙うべき当たり Suffix
                                    </h4>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        <div className="flex items-start gap-2 text-sm text-zinc-300">
                                            <span className="text-green-500 mt-1">●</span>
                                            <span><strong>Additional Monsters</strong><br /><span className="text-xs text-zinc-500">追加モンスター</span></span>
                                        </div>
                                        <div className="flex items-start gap-2 text-sm text-zinc-300">
                                            <span className="text-green-500 mt-1">●</span>
                                            <span><strong>Chance for Depths</strong><br /><span className="text-xs text-zinc-500">マップのアビスがアビスの深淵に繋がる確率が(10—20)%増加する</span></span>
                                        </div>
                                        <div className="flex items-start gap-2 text-sm text-zinc-300 col-span-2">
                                            <span className="text-green-500 mt-1">●</span>
                                            <span>Rare Monsters from Abyss <span className="text-xs text-zinc-500 ml-1">(マップのアビスの穴からレアモンスターが追加で(1—2)体スポーンする)</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Overseer Card */}
                        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border border-red-500/20 overflow-hidden group hover:border-red-500/40 transition-colors">
                            <div className="p-1 bg-red-500/10 border-b border-red-500/20 flex items-center justify-between px-4">
                                <span className="text-xs font-bold text-red-400 tracking-wider uppercase">監督者石板の狙い目</span>
                                <Eye className="h-4 w-4 text-red-500" />
                            </div>
                            <div className="p-6 md:flex gap-8 items-start">
                                <div className="md:w-1/3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-red-950 rounded-lg text-red-400">
                                            <Eye className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">監督者の先人の石板</h3>
                                    </div>
                                    <p className="text-zinc-400 text-sm mb-4">
                                        マップボスのドロップを強化します。特にウェイストーン維持やレアアイテム狙いに有効です。
                                    </p>
                                </div>
                                <div className="md:w-2/3 bg-black/40 rounded-lg p-4 border border-zinc-800">
                                    <h4 className="text-sm font-semibold text-red-300 mb-3 flex items-center gap-2">
                                        <Target className="h-4 w-4" />
                                        狙うべき当たり サフィックス
                                    </h4>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        <div className="flex items-start gap-2 text-sm text-zinc-300">
                                            <span className="text-red-500 mt-1">●</span>
                                            <span><strong>Boss drops Waystone</strong><br /><span className="text-xs text-zinc-500">マップボスがドロップするウェイストーンの数量が(18—30)%増加する</span></span>
                                        </div>
                                        <div className="flex items-start gap-2 text-sm text-zinc-300">
                                            <span className="text-red-500 mt-1">●</span>
                                            <span><strong>Boss drops Currency</strong><br /><span className="text-xs text-zinc-500">ボスが通貨をドロップ</span></span>
                                        </div>
                                        <div className="flex items-start gap-2 text-sm text-zinc-300 col-span-2">
                                            <span className="text-red-500 mt-1">●</span>
                                            <span>Item Rarity from Boss <span className="text-xs text-zinc-500 ml-1">(マップボスのドロップするアイテムのレアリティが(35—60)%増加する)</span></span>
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
                        参考リソース
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <a
                            href="https://www.youtube.com/watch?v=GQwwifg6re4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900/80 transition-all group"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <ExternalLink className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">YouTube 解説動画</h3>
                                <p className="text-sm text-zinc-500">【poe2】稼ぎ解説『簡単に神が稼げる　石板クラフト解説』</p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}
