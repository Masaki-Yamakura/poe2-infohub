"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Term } from "@/types"
import { TermList } from "./TermList"
import { AddTermDialog } from "./AddTermDialog"
import { MOCK_TERMS } from "@/lib/data"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function GlossaryPage() {
    const [terms, setTerms] = useState<Term[]>(MOCK_TERMS)
    const [isResearching, setIsResearching] = useState(false)
    const searchParams = useSearchParams()
    const router = useRouter()

    const selectedTag = searchParams.get('tag')
    const displayedTerms = selectedTag
        ? terms.filter(term => term.tags.includes(selectedTag))
        : terms


    const handleAddTerm = async (termName: string) => {
        setIsResearching(true)

        // Optimistic UI update
        const tempId = Date.now().toString()
        const newTerm: Term = {
            id: tempId,
            name: termName,
            englishName: "", // Will be populated by research
            definition: "定義を調査しています...",
            category: "Other",
            tags: ["Pending"],
            createdAt: new Date().toISOString()
        }

        setTerms([newTerm, ...terms])
        toast("調査を開始しました", {
            description: `"${termName}" の情報を検索しています...`
        })

        try {
            // Call API
            const response = await fetch("/api/research", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ term: termName })
            })

            if (!response.ok) throw new Error("Research API failed")

            const data = await response.json()
            const researchedTerm: Term = {
                ...newTerm,
                id: tempId, // keep same ID for now or use server ID
                englishName: data.englishName || "",
                definition: data.definition || "定義が見つかりませんでした。",
                category: data.category || "Other",
                tags: data.tags || []
            }

            setTerms(prev => prev.map(t => t.id === tempId ? researchedTerm : t))
            toast("調査完了", {
                description: `"${termName}" を用語集に追加しました。`
            })

        } catch (error) {
            console.error("Research failed", error)
            toast.error("調査失敗", {
                description: "情報の取得に失敗しました。"
            })
            // Optionally remove the failed term or mark as error
            setTerms(prev => prev.map(t => t.id === tempId ? { ...t, definition: "定義の取得に失敗しました。", tags: ["Error"] } : t))
        } finally {
            setIsResearching(false)
        }
    }

    return (
        <div className="container py-8 mx-auto px-4">
            <section className="space-y-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2 text-white">
                            用語集
                        </h1>
                        <p className="text-zinc-200 max-w-[700px]">
                            Path of Exile 2 の用語、メカニクス、アイテムの情報を網羅しています。
                        </p>
                        {selectedTag && (
                            <div className="flex items-center gap-2 mt-4">
                                <span className="text-sm text-amber-500 font-medium bg-amber-900/20 px-3 py-1 rounded-full border border-amber-500/30">
                                    タグ: {selectedTag}
                                </span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 px-2 text-zinc-400 hover:text-white"
                                    onClick={() => router.push('/')}
                                >
                                    <X className="w-4 h-4 mr-1" />
                                    解除
                                </Button>
                            </div>
                        )}
                    </div>
                    <AddTermDialog onAddTerm={handleAddTerm} isResearching={isResearching} />
                </div>

                <TermList terms={displayedTerms} />
            </section>
        </div>
    )
}
