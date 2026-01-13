"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, Sword, Tag, Sparkles, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"
import { getAllTags } from "@/lib/data"

export function Sidebar() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentTag = searchParams.get('tag')
    const availableTags = getAllTags()

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
                                href="/farming"
                                className={cn(getLinkClass("/farming"), "ml-4")}
                            >
                                <Sword className="h-4 w-4" />
                                金策・ファーミング (Money Making)
                            </Link>

                            {/* Farming Sub-navigation */}
                            {pathname.startsWith("/farming") && (
                                <div className="ml-12 flex flex-col gap-1 mb-2 border-l border-zinc-800 pl-2">
                                    <Link
                                        href="/farming/essence"
                                        className={cn(
                                            "flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                                            pathname === "/farming/essence"
                                                ? "text-amber-500 bg-amber-900/20 font-medium"
                                                : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                                        )}
                                    >
                                        <Sparkles className="w-3 h-3" />
                                        エッセンス (Essence)
                                    </Link>
                                    <Link
                                        href="/farming/breach-ring"
                                        className={cn(
                                            "flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                                            pathname === "/farming/breach-ring"
                                                ? "text-amber-500 bg-amber-900/20 font-medium"
                                                : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                                        )}
                                    >
                                        <div className="w-3 h-3 rounded-full border border-purple-500/50 bg-purple-500/20 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                        </div>
                                        ブリーチ指輪 (Breach Ring)
                                    </Link>
                                </div>
                            )}

                            <Link
                                href="/glossary"
                                className={cn(getLinkClass("/glossary"), "ml-4")}
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
                                className={cn(getLinkClass("/references"), "ml-4")}
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
