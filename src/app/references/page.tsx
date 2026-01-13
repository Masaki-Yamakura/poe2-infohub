"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ExternalLink, Plus, Bookmark, Trash2, Globe, Pencil, AlertTriangle } from "lucide-react"
import { toast } from "sonner"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

type ReferenceSite = {
    id: string
    title: string
    url: string
    description: string
    isDefault?: boolean
}

const DEFAULT_REFERENCES: ReferenceSite[] = [
    {
        id: "official",
        title: "Path of Exile 2 公式サイト",
        url: "https://pathofexile2.com/",
        description: "公式の最新情報、ニュース、アナウンスはこちら。",
        isDefault: true
    },
    {
        id: "poe2db",
        title: "PoE2DB",
        url: "https://poe2db.tw/",
        description: "アイテム、クエスト、スキルなどの詳細なデータベース。",
        isDefault: true
    },
    {
        id: "maxroll",
        title: "Maxroll.gg (PoE2)",
        url: "https://maxroll.gg/poe2",
        description: "ビルドガイド、ティアリスト、攻略記事が充実しています。",
        isDefault: true
    }
]

export default function ReferencesPage() {
    const [references, setReferences] = useState<ReferenceSite[]>([])
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [newSite, setNewSite] = useState({ title: "", url: "", description: "" })
    const [editingId, setEditingId] = useState<string | null>(null)

    // Delete Confirmation State
    const [deleteTarget, setDeleteTarget] = useState<ReferenceSite | null>(null)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

    // Load from LocalStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem("user_references")
        if (saved) {
            try {
                const parsed = JSON.parse(saved)
                if (parsed.length === 0) {
                    setReferences(DEFAULT_REFERENCES)
                } else {
                    setReferences(parsed)
                }
            } catch (e) {
                setReferences(DEFAULT_REFERENCES)
            }
        } else {
            setReferences(DEFAULT_REFERENCES)
        }
    }, [])

    // Save to LocalStorage whenever terms change
    useEffect(() => {
        if (references.length > 0) {
            localStorage.setItem("user_references", JSON.stringify(references))
        }
    }, [references])

    const handleSaveSite = () => {
        if (!newSite.url) {
            toast.error("URLは必須です")
            return
        }

        try {
            new URL(newSite.url)
        } catch (_) {
            toast.error("有効なURLを入力してください (例: https://example.com)")
            return
        }

        if (editingId) {
            // Update existing
            setReferences(prev => prev.map(ref =>
                ref.id === editingId
                    ? { ...ref, title: newSite.title || newSite.url, url: newSite.url, description: newSite.description }
                    : ref
            ))
            toast.success("サイト情報を更新しました")
        } else {
            // Add new
            const siteToAdd: ReferenceSite = {
                id: Date.now().toString(),
                title: newSite.title || newSite.url, // Fallback to URL if no title
                url: newSite.url,
                description: newSite.description,
                isDefault: false
            }
            setReferences(prev => [...prev, siteToAdd])
            toast.success("参考サイトを追加しました")
        }

        setNewSite({ title: "", url: "", description: "" })
        setEditingId(null)
        setIsDialogOpen(false)
    }

    const handleEdit = (site: ReferenceSite) => {
        setNewSite({
            title: site.title,
            url: site.url,
            description: site.description
        })
        setEditingId(site.id)
        setIsDialogOpen(true)
    }

    const handleDeleteClick = (site: ReferenceSite) => {
        setDeleteTarget(site)
        setIsDeleteDialogOpen(true)
    }

    const executeDelete = () => {
        if (deleteTarget) {
            setReferences(prev => prev.filter(ref => ref.id !== deleteTarget.id))
            toast.success("削除しました")
            setIsDeleteDialogOpen(false)
            setDeleteTarget(null)
        }
    }

    const openAddDialog = () => {
        setNewSite({ title: "", url: "", description: "" })
        setEditingId(null)
        setIsDialogOpen(true)
    }

    return (
        <div className="container py-8 mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-3">
                    <Bookmark className="h-8 w-8 text-amber-500" />
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-white">参考サイト</h1>
                        <p className="text-zinc-300">役立つツールや攻略サイトのリンク集</p>
                    </div>
                </div>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button
                            className="bg-amber-600 hover:bg-amber-700 text-white"
                            onClick={openAddDialog}
                        >
                            <Plus className="mr-2 h-4 w-4" /> サイトを追加
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-zinc-900 border-zinc-800 text-zinc-100">
                        <DialogHeader>
                            <DialogTitle className="text-white">
                                {editingId ? "サイト情報を編集" : "参考サイトを追加"}
                            </DialogTitle>
                            <DialogDescription className="text-zinc-400">
                                ブックマークしておきたいサイトのURLと説明を入力してください。
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="title" className="text-zinc-200">サイト名 (任意)</Label>
                                <Input
                                    id="title"
                                    placeholder="例: PoE wiki"
                                    value={newSite.title}
                                    onChange={(e) => setNewSite({ ...newSite, title: e.target.value })}
                                    className="bg-black/40 border-zinc-700 text-white"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="url" className="text-zinc-200">URL <span className="text-red-500">*</span></Label>
                                <Input
                                    id="url"
                                    placeholder="https://..."
                                    value={newSite.url}
                                    onChange={(e) => setNewSite({ ...newSite, url: e.target.value })}
                                    className="bg-black/40 border-zinc-700 text-white"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="desc" className="text-zinc-200">説明・メモ</Label>
                                <Textarea
                                    id="desc"
                                    placeholder="ビルド参考用など"
                                    value={newSite.description}
                                    onChange={(e) => setNewSite({ ...newSite, description: e.target.value })}
                                    className="bg-black/40 border-zinc-700 text-white"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">キャンセル</Button>
                            <Button onClick={handleSaveSite} className="bg-amber-600 hover:bg-amber-700 text-white">
                                {editingId ? "更新する" : "追加する"}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                {/* Delete Confirmation Dialog */}
                <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                    <DialogContent className="bg-zinc-900 border-zinc-800 text-zinc-100">
                        <DialogHeader>
                            <DialogTitle className="text-white flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-red-500" />
                                サイトの削除
                            </DialogTitle>
                            <DialogDescription className="text-zinc-400">
                                本当に「{deleteTarget?.title}」を削除してもよろしいですか？<br />
                                この操作は取り消せません。
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="gap-2 sm:gap-0">
                            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)} className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">キャンセル</Button>
                            <Button onClick={executeDelete} className="bg-red-600 hover:bg-red-700 text-white">削除する</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {references.map((site) => (
                    <Card key={site.id} className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900 transition-colors group relative">
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start gap-2">
                                <div className="flex items-center gap-2">
                                    <Globe className="h-4 w-4 text-zinc-500" />
                                    <a
                                        href={site.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-lg text-amber-500 hover:underline hover:text-amber-400 truncate max-w-[300px] block"
                                    >
                                        {site.title}
                                    </a>
                                </div>
                                {!site.isDefault && (
                                    <div className="flex flex-col gap-1 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-7 w-7 text-zinc-400 hover:text-white hover:bg-zinc-800"
                                            title="編集"
                                            onClick={() => handleEdit(site)}
                                        >
                                            <Pencil className="h-3.5 w-3.5" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-7 w-7 text-zinc-400 hover:text-red-400 hover:bg-zinc-800"
                                            title="削除"
                                            onClick={() => handleDeleteClick(site)}
                                        >
                                            <Trash2 className="h-3.5 w-3.5" />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-zinc-300 mb-4 line-clamp-2 h-[40px]">
                                {site.description || "説明なし"}
                            </p>
                            <a
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-zinc-500 flex items-center gap-1 hover:text-zinc-300 break-all"
                            >
                                <ExternalLink className="h-3 w-3 shrink-0" />
                                {site.url}
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {references.length === 0 && (
                <div className="text-center py-12 text-zinc-500">
                    参考サイトが登録されていません。
                </div>
            )}
        </div>
    )
}
