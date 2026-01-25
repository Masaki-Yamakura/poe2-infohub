"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, Sword, Tag, Sparkles, Bookmark, Hammer, Map, ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { getAllTags } from "@/lib/data"

export function Sidebar() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentTag = searchParams.get('tag')
    const availableTags = getAllTags()
    const [isGuideOpen, setIsGuideOpen] = useState(pathname.includes('/guide') || true) // Default open or closed? Let's default open for visibility or check path.

    // Helper to determine active class
    // Text color is CONSTANT (zinc-200), only hover/active makes it white.
    // Background only appears on Active.
    const getLinkClass = (path: string) => cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200",
        "text-zinc-200 hover:text-white hover:bg-zinc-800/80", // Lighter default text, higher contrast hover bg
        pathname === path && !currentTag
            ? "bg-amber-900/40 text-white border-l-2 border-amber-500 rounded-l-none" // Active State
            : ""
    )

    // Auto-open guide if current path is one of the children
    // We can use an effect or just initialize state lazily if we want perfectly correct SSR rehydration, 
    // but for valid client interaction, relying on initial state being true or effectively checked is fine.
    // Let's just default to true for now as it's a main feature, or make it toggleable.

    // Actually, let's keep it simple. Collapse if not active? 
    // Better UX: If I am on a sub-page, it should be open.
    // If I click the header, it toggles.

    return (
        <div className="fixed top-16 left-0 bottom-0 z-30 hidden w-64 border-r border-zinc-800 bg-black/90 md:block lg:w-72 overflow-y-auto">
            <div className="flex flex-col gap-2 h-full">
                <div className="flex h-14 items-center border-b border-zinc-800 px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-200">
                        <BookOpen className="h-6 w-6 text-amber-500" />
                        <span className="">メニュー</span>
                    </Link>
                </div>
                <ScrollArea className="flex-1">
                    <div className="flex-1 py-4">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-1">

                            <Link
                                href="/"
                                className={getLinkClass("/")}
                            >
                                <BookOpen className="h-4 w-4" />
                                TOP
                            </Link>

                            <Link
                                href="/build"
                                className={getLinkClass("/build")}
                            >
                                <Hammer className="h-4 w-4" />
                                ビルド (Build)
                            </Link>

                            {/* Build Sub-navigation */}
                            {pathname.startsWith("/build") && (
                                <div className="ml-12 flex flex-col gap-1 mb-2 border-l border-zinc-800 pl-2">
                                    <Link
                                        href="/build/doedre-blood-mage"
                                        className={cn(
                                            "flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                                            pathname === "/build/doedre-blood-mage"
                                                ? "text-amber-500 bg-amber-900/20 font-medium"
                                                : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                                        )}
                                    >
                                        <div className="w-3 h-3 rounded-full border border-red-500/50 bg-red-500/20 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                        </div>
                                        ドゥードリの災厄 (Blood Mage)
                                    </Link>
                                </div>
                            )}

                            {/* Strategy Guides Group */}
                            <button
                                onClick={() => setIsGuideOpen(!isGuideOpen)}
                                className={cn(
                                    "flex items-center justify-between w-full gap-3 rounded-lg px-3 py-2 transition-all duration-200",
                                    "text-zinc-200 hover:text-white hover:bg-zinc-800/80"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <Map className="h-4 w-4" />
                                    <span>攻略ガイド</span>
                                </div>
                                {isGuideOpen ? (
                                    <ChevronDown className="h-4 w-4 text-zinc-500" />
                                ) : (
                                    <ChevronRight className="h-4 w-4 text-zinc-500" />
                                )}
                            </button>

                            {isGuideOpen && (
                                <div className="flex flex-col gap-1">
                                    <div className="ml-5 space-y-1 border-l border-zinc-800 pl-2">
                                        <Link
                                            href="/guide/endgame"
                                            className={getLinkClass("/guide/endgame")}
                                        >
                                            <Sparkles className="h-3 w-3" />
                                            エンドゲーム
                                        </Link>

                                        <Link
                                            href="/guide/atziri"
                                            className={getLinkClass("/guide/atziri")}
                                        >
                                            <div className="w-3 h-3 rounded-sm bg-red-500/20 border border-red-500 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                            </div>
                                            アッツィリの神殿
                                        </Link>

                                        <Link
                                            href="/guide/sekhema"
                                            className={getLinkClass("/guide/sekhema")}
                                        >
                                            <div className="w-3 h-3 rounded-sm bg-yellow-500/20 border border-yellow-500 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                            </div>
                                            セケマの試練
                                        </Link>
                                    </div>
                                </div>
                            )}

                            <Link
                                href="/farming"
                                className={getLinkClass("/farming")}
                            >
                                <Sword className="h-4 w-4" />
                                金策・ファーミング (Money Making)
                            </Link>

                            {/* Farming Sub-navigation (Logic unchanged, visual tweak if needed) */}
                            {pathname.startsWith("/farming") && (
                                <div className="ml-12 flex flex-col gap-1 mb-2 border-l border-zinc-800 pl-2">
                                    <Link
                                        href="/farming/tablet-crafting-farming"
                                        className={cn(
                                            "flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                                            pathname === "/farming/tablet-crafting-farming"
                                                ? "text-amber-500 bg-amber-900/20 font-medium"
                                                : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                                        )}
                                    >
                                        <div className="w-3 h-3 rounded-full border border-cyan-500/50 bg-cyan-500/20 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                                        </div>
                                        石板クラフト (Tablet)
                                    </Link>
                                    <Link
                                        href="/farming/essence-farming"
                                        className={cn(
                                            "flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                                            pathname === "/farming/essence-farming"
                                                ? "text-amber-500 bg-amber-900/20 font-medium"
                                                : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                                        )}
                                    >
                                        <Sparkles className="w-3 h-3" />
                                        エッセンス (Essence)
                                    </Link>
                                    <Link
                                        href="/farming/breach-ring-farming"
                                        className={cn(
                                            "flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                                            pathname === "/farming/breach-ring-farming"
                                                ? "text-amber-500 bg-amber-900/20 font-medium"
                                                : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                                        )}
                                    >
                                        <div className="w-3 h-3 rounded-full border border-purple-500/50 bg-purple-500/20 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                        </div>
                                        ブリーチ指輪 (Breach Ring)
                                    </Link>
                                    <Link
                                        href="/farming/kulemak-farming"
                                        className={cn(
                                            "flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                                            pathname === "/farming/kulemak-farming"
                                                ? "text-amber-500 bg-amber-900/20 font-medium"
                                                : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                                        )}
                                    >
                                        <div className="w-3 h-3 rounded-full border border-red-500/50 bg-red-500/20 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                        </div>
                                        クーラマクの招待 (Kulemak)
                                    </Link>
                                    <Link
                                        href="/farming/sekhema-farming"
                                        className={cn(
                                            "flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                                            pathname === "/farming/sekhema-farming"
                                                ? "text-amber-500 bg-amber-900/20 font-medium"
                                                : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                                        )}
                                    >
                                        <div className="w-3 h-3 rounded-full border border-yellow-500/50 bg-yellow-500/20 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                        </div>
                                        セケマファーミング (Sekhema)
                                    </Link>
                                </div>

                            )}

                            <Link
                                href="/glossary"
                                className={getLinkClass("/glossary")}
                            >
                                <BookOpen className="h-4 w-4" />
                                用語集 (Glossary)
                            </Link>

                            {/* Tags Sub-navigation */}
                            {pathname === "/glossary" && (
                                <div className="ml-12 flex flex-col gap-1 mb-2 border-l border-zinc-800 pl-2">
                                    {availableTags.map(tag => (
                                        <Link
                                            key={tag}
                                            href={`/glossary?tag=${tag}`}
                                            className={cn(
                                                "flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                                                currentTag === tag
                                                    ? "text-amber-500 bg-amber-900/20 font-medium"
                                                    : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                                            )}
                                        >
                                            <Tag className="w-3 h-3" />
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                            )}

                            <Link
                                href="/references"
                                className={getLinkClass("/references")}
                            >
                                <Bookmark className="h-4 w-4" />
                                参考サイト (References)
                            </Link>


                        </nav>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}
