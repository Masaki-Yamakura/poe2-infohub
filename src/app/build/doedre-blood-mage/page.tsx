import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Brain,
    Flame,
    LayoutTemplate,
    MousePointerClick,
    Shield,
    Sword,
    Zap,
    Target,
    Sparkles,
    ExternalLink,
    Youtube // Note: lucide-react might not export Youtube, usually it does. If not we can use another icon. Checking lucide docs... it does export Youtube.
} from "lucide-react"
import Link from "next/link"

export default function DoedreBloodMageBuildPage() {
    return (
        <div className="container mx-auto py-8 space-y-8">
            {/* Header Section */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <Link href="/build" className="hover:text-zinc-200 transition-colors">ビルド一覧</Link>
                    <span>/</span>
                    <span className="text-zinc-200">ドゥードリの災厄ブラッドメイジ</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <Badge variant="outline" className="border-red-500/50 text-red-400 bg-red-500/10">1ボタン操作</Badge>
                            <Badge variant="outline" className="border-purple-500/50 text-purple-400 bg-purple-500/10">最強候補</Badge>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                            ドゥードリの災厄 ブラッドメイジ
                            <br />
                            (Doedre's Undoings Blood Mage)
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl">
                            1ボタンで画面全体を崩壊させる、Path of Exile 2 最強候補のビルド。
                            エレメンタルウィークネス(Elemental Weakness)を唱えるだけで、爆発とコメットが降り注ぎます。
                        </p>
                    </div>

                    <Button asChild className="bg-[#FF0000] hover:bg-[#CC0000] text-white shrink-0">
                        <a href="https://www.youtube.com/watch?v=YfjyUP43DDM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Youtube className="w-5 h-5" />
                            参照動画を見る
                        </a>
                    </Button>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column - Main Details */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Overview Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-zinc-200 flex items-center gap-2">
                            <LayoutTemplate className="w-6 h-6 text-indigo-400" />
                            ビルドの概要
                        </h2>
                        <Card className="bg-zinc-900/50 border-zinc-800">
                            <CardContent className="p-6 space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="p-4 rounded-lg bg-zinc-800/30 space-y-2">
                                        <div className="flex items-center gap-2 text-emerald-400">
                                            <MousePointerClick className="w-5 h-5" />
                                            <span className="font-semibold">圧倒的な利便性</span>
                                        </div>
                                        <p className="text-sm text-zinc-400">
                                            エレメンタルウィークネスを1回唱えるだけで、画面全体の敵が爆発し、自動的にコメットが降り注ぐ「1ボタン」ビルド。
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-zinc-800/30 space-y-2">
                                        <div className="flex items-center gap-2 text-red-400">
                                            <Flame className="w-5 h-5" />
                                            <span className="font-semibold">超高火力</span>
                                        </div>
                                        <p className="text-sm text-zinc-400">
                                            「血の魔術師(Blood Mage)」の特性で高いクリティカル率とダメージボーナスを獲得。ピナクルボスも瞬殺可能。
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Mechanics Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-zinc-200 flex items-center gap-2">
                            <Brain className="w-6 h-6 text-pink-400" />
                            ダメージメカニズム
                        </h2>
                        <div className="grid gap-4">
                            <Card className="bg-zinc-900/50 border-zinc-800">
                                <CardHeader>
                                    <CardTitle className="text-lg text-zinc-200 flex items-center gap-2">
                                        <span className="not-italic">🔮</span> ドゥードリの災厄 (Doedre's Undoings)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-zinc-400 space-y-2">
                                    <p>
                                        このサポートにより、呪いスキルが「カースドグラウンド(Cursed Ground)」を生成。
                                        敵が乗るか、呪いが終了・上書きされると<strong className="text-zinc-200">「ドゥードリのダークデザイン(Doedre's Dark Design)」</strong>という爆発が発生します。
                                    </p>
                                    <p className="text-sm bg-zinc-800/50 p-3 rounded border border-zinc-700/50">
                                        💡 この爆発は「スペル」扱いのため、ブラッドメイジの恩恵（ベースクリティカル率15%等）がすべて適用されます。
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-zinc-900/50 border-zinc-800">
                                <CardHeader>
                                    <CardTitle className="text-lg text-zinc-200 flex items-center gap-2">
                                        <span className="not-italic">🌊</span> スペルカスケード (Spell Cascade)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-zinc-400">
                                    <p>
                                        呪いを3連鎖させることで爆発範囲を重ねる「オーバーラップ(Overlap)」を活用。
                                        適切な範囲調整で、単体ターゲットに3回分の爆発を同時ヒットさせることが可能。
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-zinc-900/50 border-zinc-800">
                                <CardHeader>
                                    <CardTitle className="text-lg text-zinc-200 flex items-center gap-2">
                                        <span className="not-italic">📈</span> レベルスケーリング
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-zinc-400">
                                    <p>
                                        ダメージはスキルの「レベル」に大きく依存。動画ではレベル35〜36まで上げて基礎ダメージを劇的に向上させています。
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Setup Section */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold text-zinc-200 flex items-center gap-2">
                            <Sword className="w-6 h-6 text-amber-500" />
                            スキル構成と装備
                        </h2>

                        {/* Skill Setup */}
                        <div className="grid gap-6">
                            <Card className="bg-zinc-900/50 border-zinc-800">
                                <CardHeader>
                                    <CardTitle className="text-lg text-zinc-200 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="not-italic">🔥</span>
                                            メイン攻撃 (1ボタン操作)
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Badge variant="outline" className="text-red-400 border-red-500/30">共通リンク</Badge>
                                            <span className="font-semibold text-zinc-300">Elemental Weakness</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-400 bg-zinc-950/50 p-3 rounded-lg border border-zinc-800">
                                            <div className="flex items-center gap-2"><span className="text-zinc-600">•</span> ドゥードリの災厄 (Doedre's Undoings)</div>
                                            <div className="flex items-center gap-2"><span className="text-zinc-600">•</span> 迅速な呪い (Focused Curse)</div>
                                            <div className="flex items-center gap-2"><span className="text-zinc-600">•</span> スペルカスケード (Spell Cascade)</div>
                                            <div className="flex items-center gap-2"><span className="text-zinc-600">•</span> 効率化 (Efficiency)</div>
                                        </div>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-zinc-800">
                                        <div className="space-y-2">
                                            <Badge variant="secondary" className="bg-zinc-800 text-zinc-400 text-xs">中予算 (Mid Budget)</Badge>
                                            <ul className="space-y-1 text-sm text-zinc-400">
                                                <li className="flex items-center gap-2 text-red-300">
                                                    + ブラッドマジック (Blood Magic Support)
                                                </li>
                                                <li className="text-xs text-zinc-500 ml-4">
                                                    ※ マナコストをライフで支払うため
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space-y-2">
                                            <Badge variant="secondary" className="bg-purple-900/20 text-purple-300 text-xs">高予算 (Endgame)</Badge>
                                            <ul className="space-y-1 text-sm text-zinc-400">
                                                <li className="flex items-center gap-2 text-purple-300">
                                                    + 効果範囲拡大 (Magnified Area Support)
                                                </li>
                                                <li className="text-xs text-zinc-500 ml-4">
                                                    ※ 胴体防具でライフコスト化するため火力重視
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-zinc-900/50 border-zinc-800">
                                <CardHeader>
                                    <CardTitle className="text-lg text-zinc-200 flex items-center gap-2">
                                        <span className="not-italic">⚡</span> 自動攻撃 & 防御 (CoC / Aura)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <span className="font-medium text-zinc-300 block">Cast On Critical Hit (自動発動)</span>
                                        <div className="text-sm text-zinc-400 bg-zinc-950/50 p-3 rounded-lg border border-zinc-800 space-y-2">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="text-cyan-300">コメット (Comet)</span>
                                                <span className="text-zinc-600">|</span>
                                                <span className="text-orange-300">リビングボム (Living Bomb)</span>
                                            </div>
                                            <div className="text-xs text-zinc-500 border-t border-zinc-800/50 pt-2 flex flex-wrap gap-x-4 gap-y-1">
                                                <span>無限のエネルギー (Boundless Energy)</span>
                                                <span>スペルカスケード (Spell Cascade)</span>
                                                <span className="text-zinc-600">(Mid: アタルイ / End: ディアラ)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <span className="font-medium text-zinc-300 block">防御・オーラ</span>
                                        <ul className="space-y-2 text-sm text-zinc-400 pl-2">
                                            <li className="flex items-start gap-2">
                                                <Shield className="w-4 h-4 text-blue-500 mt-0.5" />
                                                <div>
                                                    <span className="text-zinc-200">アークティックアーマー (Arctic Armour)</span>
                                                    <p className="text-xs text-zinc-500">凍結(Frozen), 冷気マスタリー(Cold Mastery)などを併用して堅牢化</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Sparkles className="w-4 h-4 text-yellow-500 mt-0.5" />
                                                <div>
                                                    <span className="text-zinc-200">タイムオブニード (Time of Need)</span>
                                                    <p className="text-xs text-zinc-500">デバフ解除と回復。持続時間短縮で回転率アップ</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Equipment Highlights */}
                        <div className="mt-8">
                            <h3 className="text-lg font-medium text-zinc-200 border-b border-zinc-700 pb-2 mb-4">必須・推奨装備</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="p-4 bg-zinc-900/30 rounded-xl border border-zinc-800 space-y-3">
                                    <h4 className="font-semibold text-red-400 flex items-center gap-2">
                                        <Sword className="w-4 h-4" /> 武器 (スタッフ / ワンド)
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        全てのスキルレベル+ が最優先。
                                        加えて Critical Chance for Spells, Added Damage 等がついたレア武器をクラフト/購入する。
                                    </p>
                                </div>

                                <div className="p-4 bg-zinc-900/30 rounded-xl border border-zinc-800 space-y-3">
                                    <h4 className="font-semibold text-purple-400 flex items-center gap-2">
                                        <Shield className="w-4 h-4" /> アッツィリの栄耀 (Atziri's Splendour)
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        <span className="text-yellow-500 font-medium">高予算版の要。</span>
                                        コラプトジェムのマナコストをライフコストに変換する特性が必須。これにより<span className="text-zinc-200">ブラッドマジック(Blood Magic Support)を外して火力ジェムの「効果範囲拡大(Magnified Area)」を入れる</span>ことが可能になる。
                                    </p>
                                </div>

                                <div className="p-4 bg-zinc-900/30 rounded-xl border border-zinc-800 space-y-3">
                                    <h4 className="font-semibold text-indigo-400 flex items-center gap-2">
                                        <Brain className="w-4 h-4" /> バーテックス部族の仮面 (The Vertex )
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        全てのスキルレベルを+1する強力な兜。
                                        さらに<span className="text-zinc-200">ヴァール培養のオーブ(Cultivated Uniques)で (+1 All Skills)</span>を狙い、最終的に+4レベルを目指すことでダメージが跳ね上がる。
                                    </p>
                                </div>

                                <div className="p-4 bg-zinc-900/30 rounded-xl border border-zinc-800 space-y-3">
                                    <h4 className="font-semibold text-emerald-400 flex items-center gap-2">
                                        <Zap className="w-4 h-4" /> 魂を繋ぐ綱 長いベルト(Soul Tether)
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        エナジーシールド (Energy Shield)リーチを維持しつつ運用するベルト。
                                    </p>
                                </div>

                                <div className="p-4 bg-zinc-900/30 rounded-xl border border-zinc-800 space-y-3">
                                    <h4 className="font-semibold text-emerald-400 flex items-center gap-2">
                                        <Zap className="w-4 h-4" /> アミュレット
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        <span className="text-zinc-200">素早い代謝 (Fast Metabolism)</span>のアノイントが必須（ESリーチを機能させるため）。
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>

                {/* Right Column - Highlights & Video */}
                <div className="space-y-8">

                    {/* Video Card */}
                    <Card className="bg-zinc-900 overflow-hidden border-zinc-800">
                        <div className="aspect-video w-full bg-zinc-950 flex items-center justify-center relative group cursor-pointer">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/YfjyUP43DDM"
                                title="PoE 2 Build Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0"
                            />
                        </div>
                        <CardContent className="p-4">
                            <p className="text-xs text-zinc-500 text-center">
                                ※ 動きや詳細は動画で確認
                            </p>
                        </CardContent>
                    </Card>

                    {/* Mobalytics Links */}
                    <Card className="bg-zinc-900/50 border-zinc-800">
                        <CardHeader>
                            <CardTitle className="text-base text-zinc-200">Mobalytics リンク</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Button asChild variant="outline" className="w-full justify-between bg-zinc-950/50 border-zinc-800 hover:bg-zinc-900 hover:text-zinc-100 h-auto py-3">
                                <a href="https://mobalytics.gg/poe-2/builds/anthonys-vampire-queen?weaponSet=set1&ws-ngf5-f7d82102-7e77-4a44-ad24-33b67e8ae7bf=activeVariantId%2C14" target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-col items-start gap-1">
                                        <span className="font-medium text-blue-400">中予算 (Mid Budget)</span>
                                        <span className="text-[10px] text-zinc-500">Variant 14 - ブラッドマジック型</span>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-zinc-500" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="w-full justify-between bg-zinc-950/50 border-purple-900/30 hover:bg-purple-900/10 hover:text-purple-200 h-auto py-3">
                                <a href="https://mobalytics.gg/poe-2/builds/anthonys-vampire-queen?weaponSet=set1&ws-ngf5-f7d82102-7e77-4a44-ad24-33b67e8ae7bf=activeVariantId%2C13" target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-col items-start gap-1">
                                        <span className="font-medium text-purple-400">高予算 (High Budget)</span>
                                        <span className="text-[10px] text-zinc-500">Variant 13 - アッツィリの栄耀 胴型</span>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-purple-400" />
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Budget & Performance */}
                    <Card className="bg-gradient-to-br from-zinc-900 to-zinc-900 border-zinc-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-zinc-100">
                                <Sparkles className="w-5 h-5 text-yellow-500" />
                                予算とパフォーマンス
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-zinc-300">低/中予算構成 (Mid)</span>
                                    <Badge variant="secondary" className="bg-zinc-800 text-zinc-400">~85 神のオーブ</Badge>
                                </div>
                                <p className="text-xs text-zinc-500">
                                    Templeクリア、ボス秒殺可能。Blood Magic Supportを使用。
                                </p>
                            </div>

                            <div className="space-y-2 pt-4 border-t border-zinc-800">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-zinc-300">高予算構成 (Endgame)</span>
                                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">数千 神のオーブ</Badge>
                                </div>
                                <p className="text-xs text-zinc-500">
                                    アッツィリの栄耀 (Atziri's Splendour) + Cultivated バーテックス部族の仮面 (The Vertex )。最強。
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div >
        </div >
    )
}
