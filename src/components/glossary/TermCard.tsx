import { Term } from "@/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TermCardProps {
    term: Term
}

export function TermCard({ term }: TermCardProps) {
    return (
        <Card className="hover:shadow-lg transition-shadow duration-200 border-muted-foreground/20">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-amber-500">{term.name}</CardTitle>
                    <Badge variant="outline" className="text-xs text-amber-400 bg-amber-950/30 border-amber-500/30">
                        {term.category}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-zinc-100 leading-relaxed">
                    {term.definition}
                </p>
                {term.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {term.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0 text-zinc-300 border-zinc-700">
                                #{tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
