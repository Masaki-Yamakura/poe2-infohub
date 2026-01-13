export interface Term {
    id: string
    name: string
    englishName: string
    definition: string
    category: "Mechanic" | "Item" | "Passive" | "Skill" | "Boss" | "Other"
    tags: string[]
    createdAt: string
}
