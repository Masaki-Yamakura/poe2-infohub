import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { ArrowLeft, Sparkles, AlertTriangle, Hammer, Coins, ArrowRight, CheckCircle2, Zap, BookOpen, ExternalLink, TrendingUp, Search, BarChart3, Clock, ShieldCheck, Flame, X, Activity, Scale, Info } from "lucide-react"
import Image from "next/image"
import { EssenceRateTable } from "@/components/farming/EssenceRateTable"

export default function EssenceFarmingPage() {
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
                            <span className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                <Zap className="h-8 w-8 text-blue-500" />
                            </span>
                            エッセンス金策
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl">
                            初心者から中級者におすすめ。低難易度で高効率、10マップ平均4〜5 Divineの安定した収益が見込める鉄板ファーム。
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
                                マップに登場する「エッセンス」持ちのモンスターを倒し、クラフト素材を集めるシンプルな金策です。
                            </p>
                            <p>
                                <strong>ヴァールオーブ（Vaal Orb）</strong>を適切に使用してエッセンスの価値を高めるのがポイント。即金性が高く（リキッドしやすい）、安定して稼げるため、リーグ初期から終盤まで人気があります。
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20">安定した利益</Badge>
                                <Badge variant="secondary" className="bg-green-500/10 text-green-400 hover:bg-green-500/20 border-green-500/20">低投資</Badge>
                                <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-amber-500/20">初心者向け</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Requirements / Prep (Mini Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-blue-500/10 rounded-full mb-3 text-blue-500">
                                <Hammer className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">ウェイストーン</h3>
                            <p className="text-xs text-zinc-400">レア化（6 Mods）</p>
                        </div>
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-amber-500/10 rounded-full mb-3 text-amber-500">
                                <Search className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">タブレット</h3>
                            <p className="text-xs text-zinc-400">エッセンス x3 (推奨)</p>
                        </div>
                        <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-red-500/10 rounded-full mb-3 text-red-500">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">通貨</h3>
                            <p className="text-xs text-zinc-400">Vaal Orb (必須)</p>
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
                                <div className="text-4xl font-bold text-amber-400 tracking-tight">4-5 Div</div>
                                <div className="text-sm text-zinc-500 mt-1 flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    per 10 Maps (目安)
                                </div>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-zinc-800/50">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <BarChart3 className="h-4 w-4" />
                                        <span>難易度</span>
                                    </div>
                                    <span className="font-medium text-white">★☆☆☆☆ (Easy)</span>
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
                            ヴァールオーブを使う判断だけで時給が大きく変わります。「使うべきエッセンス」を覚えましょう。
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
                                        準備（マップ・石板・ツリー）
                                    </h3>
                                </div>
                                <div className="space-y-3 mt-3">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="bg-black/30 p-3 rounded border border-zinc-800">
                                            <span className="text-blue-300 font-bold block mb-1">ウェイストーン</span>
                                            <p className="text-xs text-zinc-400">レア化して6 Mods以上にする。レアリティが高すぎるものは自分で回らず売却推奨。</p>
                                        </div>
                                        <div className="bg-black/30 p-3 rounded border border-zinc-800">
                                            <span className="text-amber-300 font-bold block mb-1">タブレット</span>
                                            <p className="text-xs text-zinc-400">エッセンス x3 (必須) + リチュアル x1 (推奨)</p>
                                        </div>
                                    </div>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors bg-zinc-800/50 px-3 py-2 rounded-lg border border-zinc-700 hover:border-zinc-600 w-full sm:w-auto">
                                                <Activity className="h-4 w-4" />
                                                アトラスパッシブツリーを確認 (推奨ノード)
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-[90vw] w-full max-h-[90vh] p-0 bg-transparent border-none shadow-none">
                                            <DialogTitle className="sr-only">アトラスパッシブツリー拡大</DialogTitle>
                                            <div className="relative w-full h-[80vh]">
                                                <Image
                                                    src="/atlas_passive_tree.png"
                                                    alt="アトラスパッシブツリー for Essence Farming"
                                                    fill
                                                    className="object-contain"
                                                    quality={100}
                                                />
                                                <DialogClose className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors border border-white/20 z-50">
                                                    <X className="h-6 w-6" />
                                                </DialogClose>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/60 transition-all group flex flex-col md:flex-row gap-6 items-start">
                            <div className="hidden md:flex w-12 h-12 rounded-xl bg-blue-500/10 items-center justify-center text-blue-500 flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                <h3 className="font-bold text-xl">2</h3>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="md:hidden p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                        <h3 className="font-bold">2</h3>
                                    </div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        実践（ヴァールオーブの使用）
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-3">
                                    エッセンスに遭遇したら、中身を確認します。「ティアアップ」や「高額エッセンスへの変化」を狙ってヴァールオーブを使います。
                                </p>
                                <div className="p-3 bg-red-900/10 rounded border border-red-900/30 text-sm text-red-200">
                                    <AlertTriangle className="h-3 w-3 inline mr-1" />
                                    判断基準は下部の「攻略詳細」セクションを参照してください。
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
                                        整理とリロール
                                    </h3>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-3">
                                    集めたエッセンスを整理します。不人気な種類は、ハーベストクラフト等の「3対1交換」で人気エッセンスにリロールして価値を高めます。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Strategy Details (Vaal Orb Guide) */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded bg-zinc-800 text-zinc-300 text-sm">2</span>
                        攻略詳細
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Use Vaal */}
                        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border border-green-500/20 overflow-hidden group hover:border-green-500/40 transition-colors">
                            <div className="p-1 bg-green-500/10 border-b border-green-500/20 flex items-center justify-between px-4">
                                <span className="text-xs font-bold text-green-400 tracking-wider uppercase">Action: Use Vaal</span>
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white mb-3">ヴァールオーブを使うべき時</h3>
                                <p className="text-sm text-zinc-400 mb-4">
                                    以下の「当たりエッセンス」が<strong>含まれていない</strong>場合に使用します。
                                </p>
                                <div className="space-y-3">
                                    <div className="bg-black/40 p-3 rounded border border-zinc-800">
                                        <span className="text-red-300 font-bold block text-xs uppercase mb-1">当たりエッセンス（これらが無ければ使う）</span>
                                        <ul className="list-disc pl-4 text-sm text-zinc-300 space-y-1">
                                            <li><span className="text-white">パーフェクト:</span> 戦闘, 迅速, 魔法</li>
                                            <li><span className="text-white">グレーター:</span> 破滅, 絢爛</li>
                                        </ul>
                                    </div>
                                    <p className="text-xs text-zinc-500">
                                        目的: Tierアップグレード、またはコラプト限定レアエッセンスへの変化を狙う。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Don't Use Vaal */}
                        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border border-red-500/20 overflow-hidden group hover:border-red-500/40 transition-colors">
                            <div className="p-1 bg-red-500/10 border-b border-red-500/20 flex items-center justify-between px-4">
                                <span className="text-xs font-bold text-red-400 tracking-wider uppercase">Action: Save</span>
                                <X className="h-4 w-4 text-red-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white mb-3">使ってはいけない時</h3>
                                <p className="text-sm text-zinc-400 mb-4">
                                    すでに「当たりエッセンス」（左記リスト）が含まれている場合。
                                </p>
                                <div className="bg-black/40 p-3 rounded border border-zinc-800">
                                    <p className="text-sm text-zinc-300">
                                        すでに価値が高い状態です。ヴァールオーブを使って破壊（価値低下）するリスクを避けるため、そのまま確保します。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trade Rate Table */}
                    <div className="mt-8">
                        <EssenceRateTable />
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
                            href="https://www.youtube.com/watch?v=EEl1Kv6PjJw&t=349s"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900/80 transition-all group"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <ExternalLink className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">YouTube 解説動画</h3>
                                <p className="text-sm text-zinc-500">【PoE2】エッセンス金策解説動画</p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}
