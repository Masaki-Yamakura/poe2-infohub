import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coins, Flame, Map, Sword, Sparkles, Hammer } from "lucide-react"

export default function FarmingPage() {
    return (
        <div className="container py-8 mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
                <Sword className="h-8 w-8 text-amber-500" />
                <h1 className="text-3xl font-bold tracking-tight text-white">金策・ファーミングガイド</h1>
            </div>

            <p className="text-zinc-300 mb-8 text-lg">
                PoE2 における主要な金策方法（ファーミング）をまとめています。
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Strategy: Essence (From Video) */}
                <Card className="border-purple-500/20 bg-purple-500/5 col-span-full md:col-span-2 lg:col-span-1">
                    <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="h-5 w-5 text-purple-400" />
                            <Badge className="bg-purple-600 hover:bg-purple-700 text-white">低予算・安定</Badge>
                        </div>
                        <CardTitle className="text-white">エッセンスファーミング</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                            石板（Tablet）を活用してエッセンスを大量に収集する方法です。
                            詳細な手順や動画解説はこちら。
                        </p>
                        <Link
                            href="/farming/essence"
                            className="inline-flex items-center text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors"
                        >
                            詳細を見る・解説動画へ <Sparkles className="ml-1 h-3 w-3" />
                        </Link>
                    </CardContent>
                </Card>

                {/* Strategy: Breach Ring Crafting */}
                <Card className="border-amber-500/20 bg-amber-500/5 col-span-full md:col-span-2 lg:col-span-1">
                    <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                            <Hammer className="h-5 w-5 text-amber-500" />
                            <Badge className="bg-amber-600 hover:bg-amber-700 text-white">上級者向け・高利益</Badge>
                        </div>
                        <CardTitle className="text-white">ブリーチ指輪クラフト</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                            Archmageビルド向けの高額指輪を作成します。
                            100 Divine Orb超えを狙えるハイリスク・ハイリターンな手法。
                        </p>
                        <Link
                            href="/farming/breach-ring"
                            className="inline-flex items-center text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors"
                        >
                            詳細手順を見る <Sparkles className="ml-1 h-3 w-3" />
                        </Link>
                    </CardContent>
                </Card>

                {/* Strategy: Kulemak Invitation */}
                <Card className="border-red-500/20 bg-red-500/5 col-span-full md:col-span-2 lg:col-span-1">
                    <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                            <Sword className="h-5 w-5 text-red-500" />
                            <Badge className="bg-red-600 hover:bg-red-700 text-white">中級・ボス周回</Badge>
                        </div>
                        <CardTitle className="text-white">クーラマクの招待</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                            招待状を買ってボスを倒すだけの単純明快な金策。
                            1時間あたり15-25周でTimeless Jewelなどのレア泥を狙う。
                        </p>
                        <Link
                            href="/farming/kulemak"
                            className="inline-flex items-center text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors"
                        >
                            詳細を見る <Sparkles className="ml-1 h-3 w-3" />
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
