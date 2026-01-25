import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Crown, Shield, Skull, Sparkles, AlertTriangle, Play, Coins, Timer, Swords, Ticket } from "lucide-react"

export default function SekhemaGuidePage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            {/* Header / Navigation */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Link href="/" className="hover:text-amber-500 transition-colors">TOP</Link>
                        <span>/</span>
                        <span className="text-zinc-200">セケマの試練</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
                            <span className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
                                <Crown className="h-8 w-8 text-amber-500" />
                            </span>
                            セケマの試練 (Trial of Sekhemas)
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl">
                            アセンダンシークラス（上位職）を解放するための重要な試練。
                            仕組み、ボス攻略、おすすめの恩恵と対策を完全ガイド。
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-12">
                {/* Section 1: What is Sekhema's Trial? */}
                <section>
                    <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-xl text-white flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-amber-500" />
                                セケマの試練とは？
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-zinc-300 leading-relaxed">
                            <p>
                                セケマの試練は、Path of Exile 2において<strong>アセンダンシークラス（上位職）を選択・解放</strong>するためにクリアしなければならない試練です。
                            </p>
                            <ul className="list-disc list-inside space-y-1 ml-2 text-zinc-400">
                                <li><strong>形式:</strong> 8ラウンドの試練 × 1～4層（ジンのバリャのランクによる）</li>
                                <li><strong>システム:</strong> ツリー状のマップを進み、部屋ごとに「恩恵（バフ）」や「不幸（デバフ）」を獲得しながら進むローグライク形式。</li>
                                <li><strong>ライフ:</strong> 「名誉（Honor）」という独自のライフゲージが設定され、これが0になると失敗。</li>
                            </ul>
                            <div className="p-4 rounded-lg bg-amber-900/10 border border-amber-500/20 mt-4">
                                <h4 className="font-semibold text-amber-500 mb-1 flex items-center gap-2">
                                    <Shield className="h-4 w-4" />
                                    重要：名誉（Honor）システム
                                </h4>
                                <p className="text-sm text-zinc-400">
                                    試練中は通常のライフ/ESの代わりに「名誉」が耐久値となります。
                                    名誉は泉や商人でのみ回復可能。<strong>被弾を避けることが最重要</strong>となります。
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Section 2: How to Start */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Ticket className="h-6 w-6 text-amber-500" />
                        開始条件とアイテム
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-zinc-900/30 border-zinc-800">
                            <CardHeader>
                                <CardTitle className="text-lg text-zinc-200">入場アイテム：ジンのバリャ</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-zinc-400 text-sm">
                                    試練に挑戦するには<strong>「ジンのバリャ (Djinn Barya)」</strong>が必要です。
                                    レリックの祭壇にセットして使用します。
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-3 p-3 rounded bg-black/20 border border-zinc-800">
                                        <div className="bg-zinc-800 p-2 rounded text-zinc-400">
                                            <Swords className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">入手方法</p>
                                            <p className="text-xs text-zinc-500">
                                                Act 2「裏切り者の通路」ボス（バルバラ）ドロップ（初回）<br />
                                                以降はモンスタードロップや宝箱から入手。
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 rounded bg-black/20 border border-zinc-800">
                                        <div className="bg-zinc-800 p-2 rounded text-zinc-400">
                                            <AlertTriangle className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">仕様</p>
                                            <p className="text-xs text-zinc-500">
                                                クラフト不可（マジック化やレア化できない）。<br />
                                                ヴァールオーブ使用不可。消耗品です。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex flex-col gap-4">
                            <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-800">
                                <h3 className="font-semibold text-white mb-2">試練の種類</h3>
                                <ul className="space-y-2 text-sm text-zinc-400">
                                    <li className="flex items-center gap-2">
                                        <Timer className="h-4 w-4 text-zinc-500" />
                                        <span><strong>脱出の試練:</strong> 制限時間内に全ての結晶に触れる</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Timer className="h-4 w-4 text-zinc-500" />
                                        <span><strong>砂時計の試練:</strong> 一定時間生き残る</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Skull className="h-4 w-4 text-zinc-500" />
                                        <span><strong>儀式の試練:</strong> 全ての敵を倒す</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <AlertTriangle className="h-4 w-4 text-zinc-500" />
                                        <span><strong>挑戦の試練:</strong> トラップを避けてゴールへ</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Coins className="h-4 w-4 text-zinc-500" />
                                        <span><strong>聖杯の試練:</strong> 聖杯が満ちるまでレア敵を倒す</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Bosses */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Skull className="h-6 w-6 text-red-500" />
                        ボス情報
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                        {/* Boss 1 */}
                        <div className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-800">
                            <div className="text-xs text-zinc-500 mb-1">試練 1</div>
                            <h3 className="font-bold text-white mb-2">ラトルケージ</h3>
                            <div className="inline-flex items-center px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">
                                弱点: 冷気 (Cold)
                            </div>
                        </div>

                        {/* Boss 2 */}
                        <div className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-800">
                            <div className="text-xs text-zinc-500 mb-1">試練 2</div>
                            <h3 className="font-bold text-white mb-2">テラコッタのセンチネル</h3>
                            <div className="flex flex-wrap gap-1">
                                <div className="inline-flex items-center px-2 py-1 rounded bg-red-500/10 text-red-400 text-xs border border-red-500/20">
                                    弱点: 火 (Fire)
                                </div>
                                <div className="inline-flex items-center px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">
                                    冷気 (Cold)
                                </div>
                            </div>
                        </div>

                        {/* Boss 3 */}
                        <div className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-800">
                            <div className="text-xs text-zinc-500 mb-1">試練 3</div>
                            <h3 className="font-bold text-white mb-2">砂漠の母、アシャー</h3>
                            <div className="flex flex-wrap gap-1">
                                <div className="inline-flex items-center px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">
                                    弱点: 冷気 (Cold)
                                </div>
                                <div className="inline-flex items-center px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 text-xs border border-yellow-500/20">
                                    雷 (Lightning)
                                </div>
                            </div>
                        </div>

                        {/* Boss 4 */}
                        <div className="bg-zinc-900/40 p-4 rounded-xl border border-red-900/30">
                            <div className="text-xs text-red-400 mb-1">試練 4 (Pinnacle)</div>
                            <h3 className="font-bold text-white mb-2">時の王、ザロク</h3>
                            <div className="inline-flex items-center px-2 py-1 rounded bg-zinc-700/50 text-zinc-300 text-xs border border-zinc-600">
                                弱点なし
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Strategy Tips */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Sparkles className="h-6 w-6 text-amber-500" />
                        攻略のコツ・おすすめレリック
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Priority Stats */}
                        <Card className="md:col-span-2 bg-zinc-900/50 border-zinc-800">
                            <CardHeader>
                                <CardTitle className="text-lg text-white">優先すべきステータス・レリック</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between p-2 rounded bg-amber-500/10 border border-amber-500/20">
                                        <span className="font-semibold text-amber-200">名誉耐性 (Honor Resistance)</span>
                                        <span className="text-xs bg-black/40 px-2 py-1 rounded text-amber-500">最優先</span>
                                    </div>
                                    <p className="text-sm text-zinc-400 pl-2">
                                        まずは最優先で<strong>75%</strong>（上限）を目指しましょう。これがないと即死級のダメージを受けます。
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between p-2 rounded bg-blue-500/10 border border-blue-500/20">
                                        <span className="font-semibold text-blue-200">商人の選択肢追加</span>
                                        <span className="text-xs bg-black/40 px-2 py-1 rounded text-blue-400">重要</span>
                                    </div>
                                    <p className="text-sm text-zinc-400 pl-2">
                                        「ウサギの足」などが該当。良い恩恵を引く確率、悪い不幸を避ける確率を高めます。特にザロク戦のギミック対策アイテムを購入するために重要。
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div className="p-3 rounded bg-zinc-900 border border-zinc-800">
                                        <span className="block font-medium text-white mb-1">名誉最大値</span>
                                        <span className="text-xs text-zinc-500">事故死のリスクを減らす。</span>
                                    </div>
                                    <div className="p-3 rounded bg-zinc-900 border border-zinc-800">
                                        <span className="block font-medium text-white mb-1">移動速度</span>
                                        <span className="text-xs text-zinc-500">ザロク戦のギミック回避に有効。</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tips List */}
                        <Card className="bg-zinc-900/50 border-zinc-800">
                            <CardHeader>
                                <CardTitle className="text-lg text-white">立ち回りメモ</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm text-zinc-400">
                                <ul className="list-disc list-inside space-y-3">
                                    <li>
                                        <strong>レベルを上げて挑む:</strong><br />
                                        表示レベル(Lv22など)より体感難易度は高いです。無理せずレベルを上げてから再挑戦しましょう。
                                    </li>
                                    <li>
                                        <strong>危険な不幸を避ける:</strong><br />
                                        特に「ダメージを受けると即死」系や「回復無効」系は致命的。危険度★★★の不幸は絶対に避けましょう。
                                    </li>
                                    <li>
                                        <strong>得意な試練を選ぶ:</strong><br />
                                        ビルドによって得意・不得意があります。無理に苦手な試練を選ぶ必要はありません。
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Section 5: Rewards */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Crown className="h-6 w-6 text-yellow-500" />
                        クリア報酬
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-900 border border-zinc-800 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Sparkles className="h-24 w-24 text-yellow-500" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">アセンダンシーポイント</h3>
                            <p className="text-sm text-zinc-400 mb-4">
                                アセンダンシークラスのスキルポイントを獲得できます。
                            </p>
                            <ul className="space-y-1 text-sm text-zinc-500">
                                <li>試練1クリア: 1・2ポイント目</li>
                                <li>試練2クリア: 3・4ポイント目</li>
                                <li>試練3クリア: 5・6ポイント目</li>
                                <li>試練4クリア: 7・8ポイント目</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                            <h3 className="text-lg font-bold text-white mb-2">時知らずのジュエル</h3>
                            <p className="text-sm text-zinc-400">
                                セケマの試練限定のクラスタージュエル。
                                パッシブツリーのソケットに装着し、周辺ノードの効果を増幅させる強力なアイテム。
                                <br /><span className="text-xs text-zinc-500 mt-2 block">※クリア後の「古の宝箱」から入手</span>
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                            <h3 className="text-lg font-bold text-white mb-2">ボス限定ユニーク</h3>
                            <p className="text-sm text-zinc-400">
                                「時の王、ザロク」は固有のユニークアイテムをドロップします。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Reference Video */}
                <section className="mt-8 pt-8 border-t border-zinc-800">
                    <div className="flex items-center gap-2 mb-4">
                        <Play className="h-5 w-5 text-red-500" />
                        <h3 className="text-lg font-bold text-white">攻略参考動画</h3>
                    </div>
                    <div className="bg-black/40 rounded-xl overflow-hidden border border-zinc-800">
                        <div className="p-4">
                            <p className="text-sm text-zinc-400 mb-2">
                                実際の攻略の様子（レリック選択、試練の進行、ボス戦）を確認できます。
                            </p>
                            <a
                                href="https://innomaroom.hatenablog.com/entry/poe2-guide-trial-of-sekhemas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1 text-sm"
                            >
                                <BookOpen className="h-3 w-3" />
                                元記事：いのまるの秘密基地
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
