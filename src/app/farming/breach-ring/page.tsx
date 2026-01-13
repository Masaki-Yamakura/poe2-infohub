
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Sparkles, AlertCircle, ArrowRight, CheckCircle2, XCircle, Hammer, Coins, Gem } from "lucide-react"

export default function BreachRingCraftingPage() {
    return (
        <div className="flex flex-col gap-8 pb-10 max-w-5xl mx-auto">

            {/* Introduction Header */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-purple-400 font-semibold tracking-wide uppercase text-sm">
                    <Sparkles className="h-4 w-4" />
                    High-End Crafting Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    高額ブリーチ指輪クラフト <span className="text-zinc-500 text-3xl ml-2 font-normal">Breach Ring</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-3xl">
                    Archmageキャスター究極の指輪。「キャストスピード」と「マナ」を極限まで高める、
                    <span className="text-amber-400 font-bold mx-1">100 Divine Orb 超え</span>
                    を狙える高確率クラフト手法です。
                </p>
                <div className="flex gap-2 text-sm text-zinc-500">
                    <span>Target: Archmage Caster (Spark, Inquisitor, etc.)</span>
                </div>
            </div>

            {/* Preparation Section */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-800">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 text-purple-500 font-bold border border-purple-500/20">1</div>
                    <h2 className="text-2xl font-bold text-white">準備するもの (Preparation)</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-zinc-900/50 border-zinc-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-white">
                                <Hammer className="h-5 w-5 text-zinc-400" />
                                ベースアイテム (Base Item)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex items-center justify-between p-3 rounded bg-zinc-950 border border-zinc-800">
                                <span className="text-purple-300 font-medium">ブリーチの指輪 (Breach Ring)</span>
                                <Badge variant="outline" className="border-zinc-700 bg-zinc-900 text-amber-300 font-bold">ILvl 82+</Badge>
                            </div>
                            <p className="text-xs text-zinc-500 ml-1">
                                ※ブリーチ指輪は「コラプト状態」ですが、専用のクラフト手法でMODを変更可能です。
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-900/50 border-zinc-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-white">
                                <Gem className="h-5 w-5 text-amber-400" />
                                必須素材 (Materials)
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-300">
                                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500"></div>職媒の後期の御告げ (Omen of Amelioration)</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"></div>偉大なる後期の御告げ (Greater Omen of Amelioration)</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>結晶化の御告げ (Omen of Crystallization)</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-zinc-500"></div>サフィックス/プレフィックスの御告げ</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div>高貴のオーブ (Exalted Orb) - 完全/上級</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-200"></div>各種カタリスト (Prismatic, Neural, etc.)</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-300"></div>精神のパーフェクトエッセンス (Perfect Essence of Spirit)</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Step-by-Step Guide */}
            <section className="space-y-8">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-800">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 text-purple-500 font-bold border border-purple-500/20">2</div>
                    <h2 className="text-2xl font-bold text-white">クラフト手順 (Step-by-Step)</h2>
                </div>

                {/* Step 1 */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-zinc-200">
                        <Badge className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-zinc-700">STEP 1</Badge>
                        サフィックスの基礎作り (S1: Cast Speed)
                    </div>
                    <Card className="bg-zinc-900 border-zinc-800">
                        <CardContent className="pt-6">
                            <p className="mb-4 text-zinc-300">
                                まずはカオスオーブを連打（スパム）して、<span className="text-blue-400 font-bold">キャストスピード (Cast Speed)</span> を引きます。
                            </p>
                            <Alert className="bg-blue-950/20 border-blue-900/50 text-blue-200 mb-4">
                                <Sparkles className="h-4 w-4" />
                                <AlertTitle>Goal</AlertTitle>
                                <AlertDescription>
                                    キャストスピードが付くまでリロール。T1が理想ですが、妥協して最低ティアでもOK。
                                </AlertDescription>
                            </Alert>
                            <div className="text-sm text-zinc-500">
                                [Advice] 他のMODは無視して構いませんが、空きスロットがあると後の工程が楽になります。
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Step 2 */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-zinc-200">
                        <Badge className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-zinc-700">STEP 2</Badge>
                        属性耐性の固定 (S2: Resistances)
                        <span className="text-zinc-500 text-sm font-normal ml-auto">[01:42]</span>
                    </div>
                    <Card className="bg-zinc-900 border-zinc-800">
                        <CardContent className="pt-6">
                            <ol className="list-decimal list-inside space-y-3 text-zinc-300">
                                <li>
                                    <strong className="text-white">触媒 (Catalyst) を使用:</strong> 欲しい属性耐性に対応するカタリストを使用（例: 雷耐性が欲しければ雷のカタリスト）。
                                </li>
                                <li>
                                    <strong className="text-white">オーブと御告げをセット:</strong>
                                    <div className="mt-2 ml-4 p-3 bg-zinc-950 rounded border border-zinc-800 grid gap-2">
                                        <div className="flex justify-between border-b border-zinc-800 pb-2"><span>職媒の御告げ (Omen of Amelioration)</span></div>
                                        <div className="flex justify-between border-b border-zinc-800 pb-2"><span>サフィックスの御告げ (Omen of Suffixes)</span></div>
                                        <div className="flex justify-between text-amber-400"><span>高貴のオーブ：完全 (Exalted Orb)</span></div>
                                    </div>
                                </li>
                                <li>
                                    <strong className="text-white">実行:</strong> ランダムなサフィックスが「全属性耐性」と「特定属性耐性」のダブルティアMODに変化するのを狙います。
                                </li>
                            </ol>
                        </CardContent>
                    </Card>
                </div>

                {/* Step 3 */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-zinc-200">
                        <Badge className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-zinc-700">STEP 3</Badge>
                        最大マナ％の付与 (P1: Max Mana %)
                    </div>
                    <Card className="bg-zinc-900 border-zinc-800">
                        <CardContent className="pt-6">
                            <p className="mb-4 text-zinc-300">
                                不要なMODが1つ付いている状態で、以下の組み合わせを使用します。
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-zinc-950 rounded border border-zinc-800">
                                    <h4 className="font-bold text-blue-400 mb-2">投入アイテム</h4>
                                    <ul className="space-y-1 text-sm text-zinc-300">
                                        <li>結晶化の御告げ (Omen of Crystallization)</li>
                                        <li>精神のパーフェクトエッセンス (Perfect Essence of Spirit)</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-zinc-950 rounded border border-zinc-800 flex items-center justify-center">
                                    <div className="text-center">
                                        <ArrowRight className="h-6 w-6 mx-auto text-zinc-500 mb-2" />
                                        <span className="font-bold text-white">最大マナ増加 (%)</span>
                                        <div className="text-xs text-zinc-500">が確定で付与されます</div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Step 4 */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-zinc-200">
                        <Badge className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-zinc-700">STEP 4</Badge>
                        最大マナ実数値の付与 (P2: Flat Mana)
                        <span className="text-zinc-500 text-sm font-normal ml-auto">[02:46]</span>
                    </div>
                    <Card className="bg-zinc-900 border-zinc-800">
                        <CardContent className="pt-6">
                            <ol className="list-decimal list-inside space-y-3 text-zinc-300">
                                <li>
                                    <strong className="text-white">品質向上:</strong> <span className="text-purple-400">神経のカタリスト (Neural Catalyst)</span> を使用して、マナMODが付く確率を上げます。
                                </li>
                                <li>
                                    <strong className="text-white">神頼みクラフト:</strong>
                                    <div className="mt-2 ml-4 p-3 bg-zinc-950 rounded border border-zinc-800">
                                        <span className="text-zinc-400">職媒の御告げ</span> ＋ <span className="text-amber-400">高貴のオーブ：完全</span>
                                    </div>
                                </li>
                                <li>
                                    <strong className="text-white">結果:</strong> 高ティアのマナ（＋マナ実数値）が付くことを祈ります。
                                </li>
                            </ol>
                        </CardContent>
                    </Card>
                </div>

                {/* Step 5 */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-zinc-200">
                        <Badge className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-zinc-700">STEP 5</Badge>
                        仕上げ (Finish)
                    </div>
                    <Card className="bg-zinc-900 border-zinc-800">
                        <CardContent className="pt-6">
                            <p className="text-zinc-300 mb-4">
                                最後の空きプレフィックスを埋めます。
                            </p>
                            <ul className="space-y-2 text-sm text-zinc-300">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <span><strong>ライフ狙い:</strong> ライフの御告げ ＋ 高貴のオーブ（上級以上）</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                                    <span><strong>ダメージ狙い:</strong> 氷の御告げ（コメットビルド向け）など</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Recovery & Checklist */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-800">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 text-purple-500 font-bold border border-purple-500/20">3</div>
                    <h2 className="text-2xl font-bold text-white">リカバリーと最終チェック</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-zinc-900/50 border-zinc-800">
                        <CardHeader>
                            <CardTitle className="text-lg text-red-400 flex items-center gap-2">
                                <AlertCircle className="h-5 w-5" />
                                失敗した場合のリカバリー
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <p className="text-sm font-semibold text-white">不要なMODが付いた場合</p>
                                <p className="text-sm text-zinc-400">
                                    「消去のオーブ (Orb of Annulment)」を使用して、狙ったMOD以外を消去します。
                                    失敗して重要MODが消えた場合は、STEP 1または直前の工程からやり直しです。
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-semibold text-white">妥協ライン (Risk Hedge)</p>
                                <p className="text-sm text-zinc-400">
                                    最後のライフが付かず、マナと耐性だけが揃った状態でも、
                                    <span className="text-amber-400 font-bold mx-1">40〜50 Divine</span>
                                    程度で売れる可能性があります。無理に完璧を目指さず、一旦売って資金回収するのも賢い戦略です。
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-900/50 border-zinc-800">
                        <CardHeader>
                            <CardTitle className="text-lg text-green-400 flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5" />
                                販売前チェックリスト
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-zinc-300">
                                    <div className="bg-zinc-800 p-1 rounded text-zinc-400">1</div>
                                    <span>
                                        <strong>品質 (Quality):</strong> 神経のカタリスト等で<span className="text-white font-bold">40%（または20%+効果UP）</span>まで上げて、マナ値を最大化する。
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-300">
                                    <div className="bg-zinc-800 p-1 rounded text-zinc-400">2</div>
                                    <span>
                                        <strong>ディヴァイン:</strong> 最大マナ％の数値などが低い場合は、ディヴァインオーブで可変値を最大（例: 8%）まで粘る。
                                    </span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* 4. Reference Section */}
            <section className="space-y-4 pt-8 border-t border-zinc-800">
                <h2 className="text-xl font-bold text-zinc-400">参考動画 (Reference)</h2>
                <a
                    href="https://www.youtube.com/watch?v=IY3v75aLjhE"
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
                        <span className="text-white font-medium group-hover:text-red-400 transition-colors">YouTube: ブリーチ指輪クラフト解説</span>
                        <span className="text-sm text-zinc-500">このガイドの参考元</span>
                    </div>
                </a>
            </section>
        </div>
    )
}
