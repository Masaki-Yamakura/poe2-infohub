import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const { term } = await request.json()

        // Simulate Processing Delay
        await new Promise(resolve => setTimeout(resolve, 2000))

        // Mock Intelligence logic based on term keywords
        let category = "Other"
        let tags = ["New"]
        let definition = `${term} の定義が自動生成されました。`
        let englishName = term

        const lowerTerm = term.toLowerCase()

        if (lowerTerm.includes("gem") || lowerTerm.includes("support")) {
            category = "Item"
            tags = ["Skill Gem", "Support"]
            definition = "スキルを付与したり、既存のスキルを変更したりするジェム。"
            englishName = "Skill Gem"
        } else if (lowerTerm.includes("boss") || lowerTerm.includes("lord")) {
            category = "Boss"
            tags = ["Enemy", "Unique"]
            definition = "キャンペーンやマップで遭遇する強力なユニークな敵。"
            englishName = "Boss"
        } else if (lowerTerm.includes("damage") || lowerTerm.includes("life")) {
            category = "Mechanic"
            tags = ["Stat"]
            definition = "キャラクターの生存や攻撃力に影響を与える主要なメカニクス。"
            englishName = "Stat"
        }

        return NextResponse.json({
            term,
            englishName,
            definition,
            category,
            tags
        })

    } catch (error) {
        return NextResponse.json(
            { error: "Failed to process term" },
            { status: 500 }
        )
    }
}
