import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Skull, Coins, Timer, AlertTriangle } from "lucide-react"

export default function KulemakFarmingPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-8">
                <Link
                    href="/farming"
                    className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors mb-4"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    金策一覧に戻る
                </Link>
                <div className="flex items-center gap-3 mb-4">
                    <Skull className="h-8 w-8 text-amber-500" />
                    <h1 className="text-3xl font-bold text-white">クーラマクの招待 (Kulemak's Invitation)</h1>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Badge className="bg-amber-600">中級者～上級者</Badge>
                    <Badge variant="outline" className="text-zinc-300 border-zinc-700">ボス周回</Badge>
                    <Badge variant="outline" className="text-zinc-300 border-zinc-700">時給 15-25 divine</Badge>
                </div>
            </div>

            <div className="grid gap-6">
                {/* Overview Card */}
                <Card className="border-zinc-800 bg-zinc-900/50">
                    <CardHeader>
                        <CardTitle className="text-xl text-white flex items-center gap-2">
                            <Timer className="w-5 h-5 text-amber-500" />
                            概要
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-zinc-300">
                        <p>
                            交換所（Exchange）で「クーラマクの招待（Kulemak's Invitation）」を購入し、ひたすらボスを倒し続けるシンプルな金策です。
                            Timeless Jewelや高額なUniqueアイテムの一発ドロップを狙いつつ、回転率で稼ぎます。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-black/40 p-4 rounded-lg border border-zinc-800">
                                <h3 className="text-amber-400 font-bold mb-2">メリット</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>準備が簡単（招待状を買うだけ）</li>
                                    <li>メカニクスが単純（ボスを倒すだけ）</li>
                                    <li>失敗しても再挑戦可能（招待状は失われない）</li>
                                    <li>Timeless Jewel等の高額品が狙える</li>
                                </ul>
                            </div>
                            <div className="bg-black/40 p-4 rounded-lg border border-zinc-800">
                                <h3 className="text-red-400 font-bold mb-2">デメリット/注意点</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>ある程度のビルドパワーが必要（ボス瞬殺推奨）</li>
                                    <li>完全に運要素が絡む（ドロップの振れ幅がある）</li>
                                    <li>初期投資が必要（招待状の購入費）</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Preparation */}
                <Card className="border-zinc-800 bg-zinc-900/50">
                    <CardHeader>
                        <CardTitle className="text-xl text-white flex items-center gap-2">
                            <Coins className="w-5 h-5 text-amber-500" />
                            準備するもの
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-zinc-300">
                        <div className="space-y-2">
                            <h3 className="font-bold text-white">1. クーラマクの招待（Kulemak's Invitation）</h3>
                            <p className="text-sm">
                                Exchangeで購入します。目安価格は 27個で 1 Divine 程度（または 1個 12-15 Exalted Orb）。
                                まとめて購入することをお勧めします。
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-white">2. ビルドの火力</h3>
                            <p className="text-sm">
                                効率を出すにはボスを1秒未満で倒せる火力が理想です。
                                ただし、死亡してもデスペナルティのみで招待状はロストしないため、ゾンビアタック気味でも周回自体は可能です（時給は落ちます）。
                            </p>
                        </div>
                        <div className="bg-amber-900/20 border border-amber-900/50 p-4 rounded-lg flex items-start gap-3 mt-4">
                            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                            <div className="text-sm">
                                <span className="font-bold text-amber-400">資金不足の場合のヒント:</span>
                                <br />
                                手持ちのタブレット（Tablets）を確認し、アイテム数量（Quantity）が +6以上のものを売却すると、初期投資の資金を作れます。
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Procedure */}
                <Card className="border-zinc-800 bg-zinc-900/50">
                    <CardHeader>
                        <CardTitle className="text-xl text-white">手順・周回方法</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 text-zinc-300">
                        <div className="relative pl-8 border-l-2 border-zinc-800 space-y-8">
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 font-bold text-white">1</div>
                                <h3 className="font-bold text-white mb-2">招待状を使用する</h3>
                                <p className="text-sm">Map Device等から招待状を使用し、魂の井戸に入場します。</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 font-bold text-white">2</div>
                                <h3 className="font-bold text-white mb-2">手順を進める</h3>
                                <p className="text-sm mb-2">
                                    エリア内で指示に従い進めます。最後に「指輪を返す（give the ring back）」ような選択肢まで進めることで、最高レベルのボスと戦うことができます。
                                </p>
                                <p className="text-xs text-zinc-400">
                                    ※リングのMod選択については、特にこだわりがなければランダムで問題ありません。Modを厳選してリング自体を売る戦略もありますが、時間効率を重視するなら無視して進めるのが現在の主流です。
                                </p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 font-bold text-white">3</div>
                                <h3 className="font-bold text-white mb-2">ボスを倒してドロップ回収</h3>
                                <p className="text-sm">
                                    倒したらドロップを確認します。Timeless Jewelが出れば当たりです。
                                    その他、有用なBaseアイテムやChance Shard（確定ドロップ）なども拾います。
                                </p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 font-bold text-white">4</div>
                                <h3 className="font-bold text-white mb-2">繰り返し</h3>
                                <p className="text-sm">
                                    テンポよく周回します。慣れれば 1時間あたり 20～25周 可能です。
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* References */}
                <div className="grid md:grid-cols-2 gap-4">
                    <Link href="https://www.youtube.com/watch?v=8D9u6pyq7EM" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full h-auto py-4 border-zinc-700 hover:bg-zinc-800 hover:text-white justify-start">
                            <ExternalLink className="w-4 h-4 mr-2 shrink-0" />
                            <div className="text-left">
                                <div className="font-bold">参考動画 (YouTube)</div>
                                <div className="text-xs text-zinc-400 font-normal">周回手法の解説動画</div>
                            </div>
                        </Button>
                    </Link>
                    <Link href="https://www.reddit.com/r/pathofexile2builds/comments/1nps3gl/start_farming_kulemak_invitations_if_youre/?tl=ja" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full h-auto py-4 border-zinc-700 hover:bg-zinc-800 hover:text-white justify-start">
                            <ExternalLink className="w-4 h-4 mr-2 shrink-0" />
                            <div className="text-left">
                                <div className="font-bold">参考スレッド (Reddit)</div>
                                <div className="text-xs text-zinc-400 font-normal">効率やドロップ報告など</div>
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
