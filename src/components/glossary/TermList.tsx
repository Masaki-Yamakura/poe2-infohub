import { Term } from "@/types"
import { TermCard } from "./TermCard"

interface TermListProps {
    terms: Term[]
}

export function TermList({ terms }: TermListProps) {
    if (terms.length === 0) {
        return (
            <div className="text-center py-12 text-zinc-300">
                用語が見つかりません。最初の一つを追加してみましょう！
            </div>
        )
    }

    // Sort terms by Japanese name
    const sortedTerms = [...terms].sort((a, b) => a.name.localeCompare(b.name, 'ja'))

    return (
        <div className="flex flex-col gap-4">
            {sortedTerms.map((term) => (
                <TermCard key={term.id} term={term} />
            ))}
        </div>
    )
}
