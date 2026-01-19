import { Map, Target, Compass, Sparkles, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EndgamePage() {
    return (
        <div className="space-y-8 pb-20">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-indigo-950/50 border border-purple-500/20 p-8 md:p-12">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>

                <div className="relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-sm text-purple-200 mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>Path of Exile 2 ガイド</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-200 to-white mb-6">
                        エンドゲーム攻略ガイド
                    </h1>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                        Act（ストーリー）クリアおめでとうございます！<br />
                        ここからが本当の冒険、Path of Exile 2のエンドゲーム「アトラス」の始まりです。<br />
                        無限に広がる地図の世界を探索し、キャラクターを極限まで強化しましょう。
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="#first-goal"
                            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            最初の目標へ <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Left Column (Main Guide) */}
                <div className="md:col-span-2 space-y-8">

                    {/* Section 1: First Goal */}
                    <section id="first-goal" className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <Target className="w-6 h-6 text-amber-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-100">最初の目標：燃えるモノリス</h2>
                        </div>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-zinc-300 leading-relaxed">
                                エンドゲームに入ってまず目指すべき場所は、アトラス（地図）の中央付近にある重要なランドマーク、
                                <strong className="text-amber-400">「燃えるモノリス (Burning Monolith)」</strong>です。
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-zinc-300 mt-4">
                                <li>まずはアトラスを探索し、中央を目指して進みましょう。</li>
                                <li>道中で各地のボスを倒し、探索範囲を広げていくことが基本となります。</li>
                                <li>モノリスに到達し、攻略することで、さらなるエンドゲームコンテンツが解放されていきます。</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 2: Waystones */}
                    <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Map className="w-6 h-6 text-blue-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-100">基本アイテム：ウェイストーン</h2>
                        </div>
                        <div className="space-y-4 text-zinc-300">
                            <p>
                                前作の「マップ」にあたるアイテムが<strong className="text-blue-400">「ウェイストーン (Waystones)」</strong>です。
                                これを使用して異界へのポータルを開きます。
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                <div className="bg-black/40 p-4 rounded-lg border border-zinc-800">
                                    <h3 className="font-semibold text-zinc-200 mb-2">ティア (Tier)</h3>
                                    <p className="text-sm text-zinc-400">
                                        ウェイストーンにはティア（ランク）があります。ティアが高いほど敵は強力になりますが、得られる経験値やドロップ報酬も良くなります。
                                    </p>
                                </div>
                                <div className="bg-black/40 p-4 rounded-lg border border-zinc-800">
                                    <h3 className="font-semibold text-zinc-200 mb-2">レア化と強化</h3>
                                    <p className="text-sm text-zinc-400">
                                        「錬金術のオーブ (Orb of Alchemy)」などでレア化することで、アイテム数量やレア度が大幅にアップします。ただし敵も強くなるので注意！
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Tablets */}
                    <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-purple-500/10 rounded-lg">
                                <Sparkles className="w-6 h-6 text-purple-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-100">新システム：石板 (Tablets)</h2>
                        </div>
                        <p className="text-zinc-300 leading-relaxed">
                            PoE2からの新要素「石板」を使って、マップを自分好みにカスタマイズできます。
                            アトラスのインターフェースに石板をはめ込むことで、以下のような効果を得られます。
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-zinc-300 mt-4">
                            <li><span className="text-purple-400">特定のリーグ要素の出現</span>：ブリーチやデリリウムなど、特定コンテンツを確定で出現させる。</li>
                            <li><span className="text-purple-400">報酬の強化</span>：特定のアイテムドロップ率を上げたり、カレンシーを増やしたりする。</li>
                            <li><span className="text-purple-400">難易度調整</span>：敵を強化する代わりに報酬を増やすハイリスク・ハイリターンな石板も。</li>
                        </ul>
                        <div className="mt-4">
                            <Link href="/farming/tablet-crafting" className="text-sm text-purple-400 hover:text-purple-300 underline">
                                詳しい石板クラフトの方法はこちら &rarr;
                            </Link>
                        </div>
                    </section>

                    {/* Section 4: Atlas Passive Tree */}
                    <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-green-500/10 rounded-lg">
                                <Compass className="w-6 h-6 text-green-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-100">アトラスパッシブツリー</h2>
                        </div>
                        <p className="text-zinc-300 leading-relaxed">
                            マップをクリアしてボーナス目標を達成すると、アトラスパッシブポイントが手に入ります。
                            これを使って、エンドゲーム体験をさらにカスタマイズできます。
                        </p>
                        <div className="bg-green-900/10 border border-green-500/20 rounded-lg p-4 mt-4">
                            <p className="text-sm text-zinc-300">
                                <strong className="text-green-400">おすすめの振り方：</strong><br />
                                最初は「マップドロップ率」や「キラックミッション」関連を取得して、マップが途切れないようにするのが定石です。
                                その後、自分の好きなコンテンツ（エッセンス、ブリーチなど）に特化していきましょう。
                            </p>
                        </div>
                    </section>

                </div>

                {/* Right Column (Tips & Info) */}
                <div className="space-y-6">

                    {/* Preparation Card */}
                    <div className="bg-zinc-900/80 border border-red-500/30 rounded-xl p-5 sticky top-24">
                        <div className="flex items-center gap-2 mb-3 text-red-400">
                            <AlertTriangle className="w-5 h-5" />
                            <h3 className="font-bold">攻略の事前準備</h3>
                        </div>
                        <p className="text-sm text-zinc-400 mb-4">
                            エンドゲームの敵は強力です。マップに入る前に、以下のステータスを確認しましょう。
                        </p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                                <span className="text-zinc-300">
                                    <strong className="text-zinc-100">十分なライフ (HP):</strong><br />
                                    一撃死を防ぐため、Actクリア時よりもさらに高いライフが必要です。
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                                <span className="text-zinc-300">
                                    <strong className="text-zinc-100">属性耐性 (Resistances):</strong><br />
                                    火・氷・雷の耐性は<span className="text-amber-400">75% (MAX)</span>が必須です。カオス耐性もプラスにしておきましょう。
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Tips */}
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                        <h3 className="font-bold text-zinc-100 mb-3">知っ得メモ</h3>
                        <ul className="list-none space-y-3 text-sm text-zinc-400">
                            <li className="border-b border-zinc-800 pb-2">
                                <strong className="text-zinc-200 block mb-1">ブックマーク活用</strong>
                                よく行くマップや重要な場所はブックマークしておくと、移動がスムーズになります。
                            </li>
                            <li className="border-b border-zinc-800 pb-2">
                                <strong className="text-zinc-200 block mb-1">キラック (Kirac)</strong>
                                拠点のキラックからマップを購入できます。ミッションをこなすと品揃えが更新されます。
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
