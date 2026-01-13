"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle, Loader2 } from "lucide-react"

interface AddTermDialogProps {
    onAddTerm: (term: string) => void
    isResearching: boolean
}

export function AddTermDialog({ onAddTerm, isResearching }: AddTermDialogProps) {
    const [open, setOpen] = useState(false)
    const [termName, setTermName] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!termName.trim()) return
        onAddTerm(termName)
        setTermName("")
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="gap-2 bg-amber-600 hover:bg-amber-700 text-white">
                    <PlusCircle className="h-4 w-4" />
                    用語を追加
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>新しい用語を追加</DialogTitle>
                    <DialogDescription className="text-zinc-300">
                        用語名を入力してください。自動的に定義と詳細を調査します。
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="term-name" className="text-right text-zinc-200">
                                用語
                            </Label>
                            <Input
                                id="term-name"
                                value={termName}
                                onChange={(e) => setTermName(e.target.value)}
                                placeholder="例: Spirit"
                                className="col-span-3"
                                autoFocus
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={isResearching || !termName.trim()}>
                            {isResearching ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    調査中...
                                </>
                            ) : (
                                "用語集に追加"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
