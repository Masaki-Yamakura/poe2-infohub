import Link from "next/link"
import { BookOpen, Sword, Bookmark, ArrowRight, Sparkles, Hammer } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 md:p-12">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Path of Exile 2 <span className="text-amber-500">Info Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl">
            PoE2のエンドゲーム攻略、最強ビルド、効率的な金策、そして網羅的な用語集。
            旅人たちのための総合情報サイトへようこそ。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/endgame"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium transition-colors"
            >
              <Sparkles className="h-5 w-5" />
              エンドゲーム攻略
            </Link>
            <Link
              href="/build"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-medium transition-colors border border-zinc-700"
            >
              <Hammer className="h-5 w-5" />
              おすすめビルド
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Endgame Card */}
        <Link href="/endgame" className="group">
          <Card className="h-full bg-zinc-900/50 border-zinc-800 transition-all duration-300 hover:border-amber-500/50 hover:bg-zinc-900 hover:shadow-lg hover:shadow-amber-900/10">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-amber-500/10 p-3 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                <Sparkles className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-white group-hover:text-amber-500 transition-colors">エンドゲーム (Endgame)</CardTitle>
              <CardDescription className="text-zinc-400">
                マップ攻略、ボス戦闘、アトラスパッシブなど、エンドゲームコンテンツの完全ガイド。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-zinc-500 group-hover:text-amber-500/80 transition-colors">
                攻略情報を見る <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Farming Card */}
        <Link href="/farming" className="group">
          <Card className="h-full bg-zinc-900/50 border-zinc-800 transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-900 hover:shadow-lg hover:shadow-blue-900/10">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-blue-500/10 p-3 text-blue-500 group-hover:bg-blue-500 group-hover:text-black transition-colors">
                <Sword className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">金策・ファーミング</CardTitle>
              <CardDescription className="text-zinc-400">
                効率的な通貨の稼ぎ方、ファーミング戦略、Atlas Passiveガイド。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-zinc-500 group-hover:text-blue-400/80 transition-colors">
                稼ぎ方を学ぶ <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Build Card */}
        <Link href="/build" className="group">
          <Card className="h-full bg-zinc-900/50 border-zinc-800 transition-all duration-300 hover:border-orange-500/50 hover:bg-zinc-900 hover:shadow-lg hover:shadow-orange-900/10">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-orange-500/10 p-3 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                <Hammer className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">ビルド (Builds)</CardTitle>
              <CardDescription className="text-zinc-400">
                初心者向けから上級者向けまで、強力なおすすめビルドを紹介。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-zinc-500 group-hover:text-orange-400/80 transition-colors">
                ビルドを探す <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Glossary Card */}
        <Link href="/glossary" className="group">
          <Card className="h-full bg-zinc-900/50 border-zinc-800 transition-all duration-300 hover:border-yellow-500/50 hover:bg-zinc-900 hover:shadow-lg hover:shadow-yellow-900/10">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-yellow-500/10 p-3 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                <BookOpen className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-white group-hover:text-yellow-500 transition-colors">用語集 (Glossary)</CardTitle>
              <CardDescription className="text-zinc-400">
                PoE2の専門用語、メカニクス、略語などを日本語・英語で解説。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-zinc-500 group-hover:text-yellow-500/80 transition-colors">
                用語を検索・登録する <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* References Card */}
        <Link href="/references" className="group">
          <Card className="h-full bg-zinc-900/50 border-zinc-800 transition-all duration-300 hover:border-emerald-500/50 hover:bg-zinc-900 hover:shadow-lg hover:shadow-emerald-900/10">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-emerald-500/10 p-3 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                <Bookmark className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-white group-hover:text-emerald-400 transition-colors">参考サイト</CardTitle>
              <CardDescription className="text-zinc-400">
                PoE2に関する便利なツール、公式情報、コミュニティサイトへのリンク集。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-zinc-500 group-hover:text-emerald-400/80 transition-colors">
                リンク集を見る <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent Updates or Tips Placeholder */}
      <section className="mt-4 border-t border-zinc-800 pt-8">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-5 w-5 text-amber-500" />
          <h2 className="text-2xl font-bold text-white">Latest Updates</h2>
        </div>
        <div className="rounded-xl bg-zinc-900/30 border border-zinc-800/50 p-6">
          <ul className="space-y-2 text-zinc-400">
            <li className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">NEW</span>
              <span>「ビルド」ページを追加しました。おすすめビルド情報を近日公開予定！</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 border border-blue-500/20">UPDATE</span>
              <span>「エンドゲーム」ページを公開しました。マップ＆ボス攻略の基礎を掲載。</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-500 border border-zinc-700">INFO</span>
              <span>用語集に新しい用語を追加しました。</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
