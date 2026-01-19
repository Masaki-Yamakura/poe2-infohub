"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Coins, RotateCcw, ArrowUpDown, ArrowUp, ArrowDown, Edit2, Check, X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

// Standard Essence Base Names
const STANDARD_ESSENCES = [
    "肉体", // Body
    "精神", // Mind
    "強化", // Enhancement
    "擦傷", // Abrasion
    "火炎", // Flames
    "氷", // Ice
    "電気", // Electricity
    "破滅", // Ruin
    "戦闘", // Battle
    "魔法", // Sorcery
    "迅速", // Haste
    "無限", // Infinite
    "断熱",
    "解凍",
    "接地",
    "敏速",
    "絢爛",
    "命令",
    "探求"
]

// Special Essences (Single Tier)
const SPECIAL_ESSENCES = [
    "ヒステリーのエッセンス",
    "錯乱のエッセンス",
    "戦慄のエッセンス",
    "狂気のエッセンス",
    "深淵のエッセンス",
]

type EssenceEntry = {
    id: string
    name: string
    isSpecial: boolean
}

// v3 data structure
type EssenceData = {
    stackSize: string // Number of Essences
    price: string // Number of Exalted Orbs
    lastUpdated: string // Formatted string yyyy/mm/dd hh:mm
}

type SortConfig = {
    key: 'name' | 'ratio' | 'unitPrice' | 'date'
    direction: 'asc' | 'desc'
} | null

type EditState = {
    stackSize: string
    price: string
}

// Generate the full list of essence entries
const generateEssenceList = (): EssenceEntry[] => {
    const list: EssenceEntry[] = []

    // Add Standard Essences (Greater & Perfect)
    STANDARD_ESSENCES.forEach((base) => {
        list.push({
            id: `${base}_greater`,
            name: `${base}のグレーターエッセンス`,
            isSpecial: false,
        })
        list.push({
            id: `${base}_perfect`,
            name: `${base}のパーフェクトエッセンス`,
            isSpecial: false,
        })
    })

    // Add Special Essences
    SPECIAL_ESSENCES.forEach((name) => {
        list.push({
            id: name,
            name: name,
            isSpecial: true,
        })
    })

    return list
}

const ESSENCE_LIST = generateEssenceList()

export function EssenceRateTable() {
    // State: { [essenceId]: EssenceData }
    const [data, setData] = useState<Record<string, EssenceData>>({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [sortConfig, setSortConfig] = useState<SortConfig>(null)

    // Dialog state
    const [isResetDialogOpen, setIsResetDialogOpen] = useState(false)

    // Track which row is currently being edited.
    const [editState, setEditState] = useState<Record<string, EditState>>({})

    // Initial load from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/essence-rates')
                if (response.ok) {
                    const result = await response.json()
                    setData(result)
                }
            } catch (error) {
                console.error('Failed to fetch rates', error)
            } finally {
                setIsLoaded(true)
            }
        }
        fetchData()
    }, [])

    // Function to save data to API
    const saveToApi = async (newData: Record<string, EssenceData>) => {
        try {
            await fetch('/api/essence-rates', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newData)
            })
        } catch (error) {
            console.error('Failed to save rates', error)
        }
    }

    const formatCurrentDate = () => {
        const now = new Date()
        return `${now.getFullYear()}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
    }

    const startEditing = (id: string, currentData?: EssenceData) => {
        setEditState(prev => ({
            ...prev,
            [id]: {
                stackSize: currentData?.stackSize || "",
                price: currentData?.price || ""
            }
        }))
    }

    const cancelEditing = (id: string) => {
        setEditState(prev => {
            const next = { ...prev }
            delete next[id]
            return next
        })
    }

    const saveEditing = async (id: string) => {
        const state = editState[id]
        if (state) {
            const newData = {
                ...data,
                [id]: {
                    stackSize: state.stackSize,
                    price: state.price,
                    lastUpdated: formatCurrentDate()
                }
            }
            setData(newData)
            await saveToApi(newData)
            cancelEditing(id)
        }
    }

    const handleInputChange = (id: string, field: keyof EditState, value: string) => {
        setEditState(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                [field]: value
            }
        }))
    }

    const executeReset = async () => {
        try {
            setData({})
            setEditState({})
            await saveToApi({})
            setIsResetDialogOpen(false)
        } catch (e) {
            console.error("Reset failed:", e)
        }
    }

    const handleSort = (key: 'name' | 'ratio' | 'unitPrice' | 'date') => {
        setSortConfig((current) => {
            if (current?.key === key) {
                return current.direction === 'asc'
                    ? { key, direction: 'desc' }
                    : null
            }
            return { key, direction: 'asc' }
        })
    }

    const calculateUnitPrice = (stackSize: string, price: string): number => {
        const s = parseFloat(stackSize)
        const p = parseFloat(price)
        if (isNaN(s) || isNaN(p) || s === 0) return 0
        return p / s
    }

    const sortedList = useMemo(() => {
        let sortableItems = [...ESSENCE_LIST]
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                const dataA = data[a.id]
                const dataB = data[b.id]

                if (sortConfig.key === 'name') {
                    if (a.name < b.name) return sortConfig.direction === 'asc' ? -1 : 1
                    if (a.name > b.name) return sortConfig.direction === 'asc' ? 1 : -1
                    return 0
                } else if (sortConfig.key === 'unitPrice') {
                    const unitPriceA = calculateUnitPrice(dataA?.stackSize || "0", dataA?.price || "0")
                    const unitPriceB = calculateUnitPrice(dataB?.stackSize || "0", dataB?.price || "0")
                    if (unitPriceA < unitPriceB) return sortConfig.direction === 'asc' ? -1 : 1
                    if (unitPriceA > unitPriceB) return sortConfig.direction === 'asc' ? 1 : -1
                    return 0
                } else if (sortConfig.key === 'date') {
                    const dateA = dataA?.lastUpdated || ""
                    const dateB = dataB?.lastUpdated || ""
                    if (dateA < dateB) return sortConfig.direction === 'asc' ? -1 : 1
                    if (dateA > dateB) return sortConfig.direction === 'asc' ? 1 : -1
                    return 0
                }
                return 0
            })
        }
        return sortableItems
    }, [data, sortConfig])

    const getSortIcon = (columnKey: 'name' | 'ratio' | 'unitPrice' | 'date') => {
        if (sortConfig?.key !== columnKey) return <ArrowUpDown className="h-3 w-3 ml-1 text-zinc-600" />
        if (sortConfig.direction === 'asc') return <ArrowUp className="h-3 w-3 ml-1 text-amber-500" />
        return <ArrowDown className="h-3 w-3 ml-1 text-amber-500" />
    }

    if (!isLoaded) {
        return <div className="p-4 text-center text-zinc-500">Loading...</div>
    }

    return (
        <>
            <Card className="bg-zinc-900/50 border-zinc-800">
                <CardHeader className="flex flex-row items-center justify-between py-4">
                    <CardTitle className="flex items-center gap-2 text-lg text-white">
                        <Coins className="h-5 w-5 text-amber-500" />
                        エッセンス相場表 (Exalted Orb)
                    </CardTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsResetDialogOpen(true)}
                        className="text-zinc-500 hover:text-red-400 h-8"
                    >
                        <RotateCcw className="h-3 w-3 mr-1" />
                        一括リセット
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border border-zinc-800 overflow-hidden text-sm">
                        <Table>
                            <TableHeader className="bg-zinc-900">
                                <TableRow>
                                    <TableHead
                                        className="text-zinc-400 w-[35%] cursor-pointer hover:bg-zinc-800/50 transition-colors h-10"
                                        onClick={() => handleSort('name')}
                                    >
                                        <div className="flex items-center">
                                            エッセンス名
                                            {getSortIcon('name')}
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-zinc-400 w-[25%] text-right h-10">
                                        <div className="flex items-center justify-end">
                                            交換比率 (ex : エッセンス)
                                        </div>
                                    </TableHead>
                                    <TableHead
                                        className="text-zinc-400 w-[15%] text-right cursor-pointer hover:bg-zinc-800/50 transition-colors h-10"
                                        onClick={() => handleSort('unitPrice')}
                                    >
                                        <div className="flex items-center justify-end">
                                            単価 (ex/個)
                                            {getSortIcon('unitPrice')}
                                        </div>
                                    </TableHead>
                                    <TableHead
                                        className="text-zinc-400 w-[15%] text-right cursor-pointer hover:bg-zinc-800/50 transition-colors h-10"
                                        onClick={() => handleSort('date')}
                                    >
                                        <div className="flex items-center justify-end">
                                            最終更新
                                            {getSortIcon('date')}
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-zinc-400 w-[10%] text-center h-10">操作</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sortedList.map((essence) => {
                                    const currentData = data[essence.id]
                                    const isEditing = editState[essence.id] !== undefined
                                    const currentStack = currentData?.stackSize || ""
                                    const currentPrice = currentData?.price || ""
                                    const currentDate = currentData?.lastUpdated || "---"
                                    const unitPrice = calculateUnitPrice(currentStack, currentPrice)

                                    return (
                                        <TableRow key={essence.id} className="border-zinc-800 hover:bg-zinc-800/30">
                                            <TableCell className={`font-medium py-2 ${essence.isSpecial ? "text-amber-200" : "text-zinc-300"}`}>
                                                {essence.name}
                                            </TableCell>
                                            <TableCell className="text-right py-2">
                                                {isEditing ? (
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Input
                                                            type="number"
                                                            value={editState[essence.id].price}
                                                            onChange={(e) => handleInputChange(essence.id, 'price', e.target.value)}
                                                            className="w-16 text-right h-8 bg-zinc-900 border-zinc-700 focus:border-amber-500"
                                                            step="0.01"
                                                            min="0"
                                                            placeholder="Ex"
                                                            autoFocus
                                                        />
                                                        <span className="text-zinc-500">:</span>
                                                        <Input
                                                            type="number"
                                                            value={editState[essence.id].stackSize}
                                                            onChange={(e) => handleInputChange(essence.id, 'stackSize', e.target.value)}
                                                            className="w-16 text-right h-8 bg-zinc-900 border-zinc-700 focus:border-amber-500"
                                                            step="1"
                                                            min="1"
                                                            placeholder="個数"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="text-zinc-300 font-mono">
                                                        {currentStack && currentPrice ? (
                                                            <span>
                                                                <span className="text-amber-400">{parseFloat(currentPrice)}ex</span> : <span className="text-zinc-400">{currentStack}個</span>
                                                            </span>
                                                        ) : (
                                                            <span className="text-zinc-600">---</span>
                                                        )}
                                                    </div>
                                                )}
                                            </TableCell>
                                            <TableCell className="text-right py-2">
                                                {unitPrice > 0 ? (
                                                    <span className={`inline-block px-2 py-0.5 rounded-md font-mono text-xs ${unitPrice >= 100 ? "bg-orange-500/20 text-orange-200 border border-orange-500/30 font-bold" :
                                                            unitPrice >= 50 ? "bg-green-500/20 text-green-200 border border-green-500/30 font-bold" :
                                                                unitPrice >= 10 ? "bg-blue-500/20 text-blue-200 border border-blue-500/30 font-bold" :
                                                                    "text-amber-200/70"
                                                        }`}>
                                                        @ {unitPrice.toFixed(2)}
                                                    </span>
                                                ) : (
                                                    <span className="text-zinc-600">---</span>
                                                )}
                                            </TableCell>
                                            <TableCell className="text-right text-zinc-500 text-xs font-mono py-2">
                                                {currentDate}
                                            </TableCell>
                                            <TableCell className="text-center py-2">
                                                {isEditing ? (
                                                    <div className="flex items-center justify-center gap-1">
                                                        <Button
                                                            size="icon"
                                                            variant="ghost"
                                                            className="h-7 w-7 text-green-500 hover:text-green-400 hover:bg-green-500/10"
                                                            onClick={() => saveEditing(essence.id)}
                                                        >
                                                            <Check className="h-4 w-4" />
                                                        </Button>
                                                        <Button
                                                            size="icon"
                                                            variant="ghost"
                                                            className="h-7 w-7 text-red-500 hover:text-red-400 hover:bg-red-500/10"
                                                            onClick={() => cancelEditing(essence.id)}
                                                        >
                                                            <X className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="h-7 w-7 text-zinc-500 hover:text-amber-400 hover:bg-zinc-800"
                                                        onClick={() => startEditing(essence.id, currentData)}
                                                    >
                                                        <Edit2 className="h-3 w-3" />
                                                    </Button>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card >

            <Dialog open={isResetDialogOpen} onOpenChange={setIsResetDialogOpen}>
                <DialogContent className="bg-zinc-900 border-zinc-800">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-white">
                            <AlertTriangle className="h-5 w-5 text-red-500" />
                            リセットの確認
                        </DialogTitle>
                        <DialogDescription className="text-zinc-400">
                            入力されたすべての価格データと更新日時を消去します。<br />
                            この操作は取り消せません。本当によろしいですか？
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsResetDialogOpen(false)} className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">
                            キャンセル
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={executeReset}
                            className="bg-red-600 hover:bg-red-700 text-white border border-red-500"
                        >
                            リセット実行
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
