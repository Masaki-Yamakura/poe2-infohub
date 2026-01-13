import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Sparkles, AlertCircle, ArrowRight, CheckCircle2, XCircle, Hammer, Coins, X } from "lucide-react"
import Image from "next/image"

export default function EssenceFarmingPage() {
    return (
        <div className="flex flex-col gap-8 pb-10 max-w-5xl mx-auto">

            {/* 1. Introduction Header */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-amber-500 font-semibold tracking-wide uppercase text-sm">
                    <Sparkles className="h-4 w-4" />
                    Money Making Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    エッセンス金策 <span className="text-zinc-500 text-3xl ml-2 font-normal">Essence Farming</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-3xl">
                    初心者から中級者におすすめ！低難易度で高効率。
                    <span className="text-amber-400 font-bold mx-1">10マップ平均 4〜5 Divine</span>
                    の安定した収益が見込める鉄板ファームです。
                </p>
            </div>

            {/* 2. Setup Section */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-800">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20">1</div>
                    <h2 className="text-2xl font-bold text-white">準備: マップと石板</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-zinc-900/50 border-zinc-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-white">
                                <Hammer className="h-5 w-5 text-blue-400" />
                                ウェイストーンの加工 (Waystone)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ul className="space-y-2 text-zinc-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                    <span>必ず<strong className="text-white">6つのMOD</strong>を付ける（アルケミ＋高品質オーブ）</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertCircle className="h-5 w-5 text-amber-500 shrink-0" />
                                    <span>レアリティが高いもの（例: 60%超）や「レアモンスター追加」MODが付いたものは、自分で回らずに<strong className="text-amber-400">売却</strong>を推奨。</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-900/50 border-zinc-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-white">
                                <Coins className="h-5 w-5 text-yellow-400" />
                                タブレット設定 (Tablets)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800">
                                <p className="font-semibold text-white mb-2">おすすめ構成</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                                        <span className="text-zinc-300">エッセンス追加 x3</span>
                                        <Badge variant="outline" className="text-blue-400 border-blue-900 bg-blue-950/30">必須</Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-zinc-300">リチュアル (Ritual) x1</span>
                                        <Badge variant="outline" className="text-amber-400 border-amber-900 bg-amber-950/30">推奨</Badge>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-zinc-400">
                                ※「マップにエッセンスが追加で1個出現する」効果を重ねます。
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* 3. Atlas Tree Section */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-800">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20">2</div>
                    <h2 className="text-2xl font-bold text-white">アトラスパッシブツリー</h2>
                </div>





                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 cursor-zoom-in hover:border-amber-500/50 transition-colors group">
                                    <Image
                                        src="/atlas_passive_tree.png"
                                        alt="Atlas Passive Tree for Essence Farming"
                                        fill
                                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                                            <Sparkles className="h-3 w-3" />
                                            クリックで拡大
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-[90vw] w-full max-h-[90vh] p-0 bg-transparent border-none shadow-none">
                                <DialogTitle className="sr-only">Atlas Passive Tree Zoom</DialogTitle>
                                <div className="relative w-full h-[80vh]">
                                    <Image
                                        src="/atlas_passive_tree.png"
                                        alt="Atlas Passive Tree for Essence Farming"
                                        fill
                                        className="object-contain"
                                        quality={100}
                                    />
                                    <DialogClose className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors border border-white/20 z-50 ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                        <X className="h-6 w-6" />
                                        <span className="sr-only">閉じる</span>
                                    </DialogClose>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h3 className="font-semibold text-white flex items-center gap-2">
                                <Badge className="bg-red-900 text-red-200 hover:bg-red-800">必須 (Mandatory)</Badge>
                            </h3>
                            <ul className="text-sm text-zinc-300 space-y-1 list-disc list-inside ml-1">
                                <li>エッセンス関連ノード全て</li>
                                <li className="text-amber-400 font-bold">エネルギーに満ちた共鳴 (Crystal Resonance)</li>
                            </ul>
                            <p className="text-xs text-zinc-500 mt-1">
                                ※ボスがエッセンスを持つようになり、報酬が劇的に向上します。
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-white flex items-center gap-2">
                                <Badge className="bg-blue-900 text-blue-200 hover:bg-blue-800">推奨 (Recommended)</Badge>
                            </h3>
                            <ul className="text-sm text-zinc-300 space-y-1 list-disc list-inside ml-1">
                                <li>エコロジカルシフト (Ecological Shift)</li>
                                <li>石板の効果UPノード</li>
                                <li>石板のドロップ数量UPノード</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Execution Guide */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-800">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20">3</div>
                    <h2 className="text-2xl font-bold text-white">実践: バールオーブの判断基準</h2>
                </div>

                <Alert className="bg-red-950/20 border-red-900/50 text-red-200">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>重要</AlertTitle>
                    <AlertDescription>
                        エッセンスに遭遇したら、以下の基準でバールオーブ (Vaal Orb) を使うか判断してください。
                    </AlertDescription>
                </Alert>

                <div className="overflow-hidden rounded-xl border border-zinc-800">
                    <Table>
                        <TableHeader className="bg-zinc-900">
                            <TableRow>
                                <TableHead className="w-[150px] text-zinc-400">アクション</TableHead>
                                <TableHead className="text-zinc-400">条件</TableHead>
                                <TableHead className="text-zinc-400">狙い</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="bg-amber-950/10 hover:bg-amber-950/20">
                                <TableCell className="font-bold text-amber-400 flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4" />
                                    使う！
                                </TableCell>
                                <TableCell className="text-zinc-200">
                                    以下のいずれにも該当<span className="text-red-400 font-bold">しない</span>場合:
                                    <ul className="list-disc list-inside mt-1 text-zinc-400 text-xs">
                                        <li>「戦闘(Battle)」「迅速(Swiftness)」「魔法(Magic)」のPerfect</li>
                                        <li>「破滅(Ruin)」「絢爛(Splendor)」のGreater</li>
                                    </ul>
                                </TableCell>
                                <TableCell className="text-zinc-300">
                                    Tierアップグレード or レアエッセンスへの変化
                                </TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-zinc-900/50">
                                <TableCell className="font-bold text-zinc-400 flex items-center gap-2">
                                    <XCircle className="h-4 w-4" />
                                    使わない
                                </TableCell>
                                <TableCell className="text-zinc-200">
                                    すでに高価値なエッセンス（上記）が含まれている場合
                                </TableCell>
                                <TableCell className="text-zinc-300">
                                    破壊（コラプト失敗）のリスク回避
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </section>

            {/* 5. Post-Processing */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-800">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20">4</div>
                    <h2 className="text-2xl font-bold text-white">整理とリロール (3対1交換)</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <Card className="bg-zinc-900/50 border-zinc-800">
                        <CardHeader>
                            <CardTitle className="text-lg text-purple-400">Perfect Essence</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <p className="text-sm text-zinc-300">
                                    <span className="text-white font-bold">リロール対象:</span><br />
                                    「戦闘」「迅速」「魔法」<span className="text-red-400">以外</span>はすべてリロールしてOK。
                                </p>
                                <p className="text-xs text-zinc-500 border-t border-zinc-800 pt-2 mt-2">
                                    ※人気不人気が激しいため、高値で売れるTop3のみを残して他は変換します。
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-900/50 border-zinc-800">
                        <CardHeader>
                            <CardTitle className="text-lg text-blue-400">Greater Essence</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <p className="text-sm text-zinc-300">
                                    <span className="text-white font-bold">そのまま売る:</span> 「迅速」「破滅」など<br />
                                    <span className="text-white font-bold">リロール推奨:</span> 「命令」「マナ」「被ダメージ追加」などの不人気品
                                </p>
                                <div className="bg-blue-950/30 p-2 rounded border border-blue-900/50 text-xs text-blue-200 mt-2">
                                    <Sparkles className="h-3 w-3 inline mr-1" />
                                    TIPS: 耐性、クリティカル、物理、スピード系は需要が高いです。PoE.ninjaで相場確認を！
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* 5. Reference Section */}
            <section className="space-y-4 pt-8 border-t border-zinc-800">
                <h2 className="text-xl font-bold text-zinc-400">参考動画 (Reference)</h2>
                <a
                    href="https://www.youtube.com/watch?v=EEl1Kv6PjJw&t=349s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900 transition-all group"
                >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-600 text-white shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-medium group-hover:text-red-400 transition-colors">YouTube: エッセンス金策解説動画</span>
                        <span className="text-sm text-zinc-500">このガイドの参考元</span>
                    </div>
                </a>
            </section>

        </div>
    )
}
