import { Hammer, Sparkles, Sword, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BuildPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-amber-500/10 rounded-full">
          <Hammer className="w-8 h-8 text-amber-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">ビルド</h1>
          <p className="text-zinc-400">Path of Exile 2のおすすめビルド紹介</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Doedre's Undoings Blood Mage Card */}
        <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors group flex flex-col">
          <CardHeader>
            <div className="flex items-start justify-between mb-2">
              <Badge variant="outline" className="border-red-500/50 text-red-400 bg-red-500/10">最強候補</Badge>
              <Sword className="w-5 h-5 text-zinc-500 group-hover:text-red-400 transition-colors" />
            </div>
            <CardTitle className="text-xl text-zinc-100 group-hover:text-amber-400 transition-colors">
              ドゥードリの災厄ブラッドメイジ
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Doedre's Undoings Blood Mage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 flex-1 flex flex-col">
            <div className="space-y-2 flex-1">
              <p className="text-sm text-zinc-400">
                1ボタンで画面全体を崩壊させる超広範囲・高火力ビルド。ピナクルボスも瞬殺可能。
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary" className="text-xs bg-zinc-800 text-zinc-400">1ボタン</Badge>
                <Badge variant="secondary" className="text-xs bg-zinc-800 text-zinc-400">高クリティカル</Badge>
                <Badge variant="secondary" className="text-xs bg-zinc-800 text-zinc-400">お手軽</Badge>
              </div>
            </div>

            <Button asChild className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 mt-4">
              <Link href="/build/doedre-blood-mage" className="flex items-center justify-between">
                詳細を見る
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Placeholder for future builds */}
        <div className="bg-zinc-900/20 border border-zinc-800/50 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4 border-dashed">
          <div className="p-4 bg-zinc-800/30 rounded-full">
            <Sparkles className="w-8 h-8 text-zinc-600" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-medium text-zinc-500">More Coming Soon</h3>
            <p className="text-sm text-zinc-600">
              新しいビルドを順次追加予定です
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
