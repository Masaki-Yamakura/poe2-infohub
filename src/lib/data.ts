import { Term } from "@/types"

export const MOCK_TERMS: Term[] = [
    {
        id: "1",
        name: "スピリット (Spirit)",
        englishName: "Spirit",
        definition: "永続的なミニオンやバフによって予約されるリソース。ほとんどのオーラ効果のマナ予約を置き換える。",
        category: "Mechanic",
        tags: ["Resource", "Reservation"],
        createdAt: new Date().toISOString()
    },
    {
        id: "2",
        name: "アンカットジェム (Uncut Gem)",
        englishName: "Uncut Gem",
        definition: "対応するレベルの任意のスキルジェムに変換できるアイテム。ドロップとして入手可能。",
        category: "Item",
        tags: ["Currency", "Skill Gem"],
        createdAt: new Date().toISOString()
    },
    {
        id: "3",
        name: "ドッジロール (Dodge Roll)",
        englishName: "Dodge Roll",
        definition: "全クラスで使用可能な移動メカニクス。アニメーション中は無敵フレームを提供する。",
        category: "Mechanic",
        tags: ["Movement", "Defense"],
        createdAt: new Date().toISOString()
    },
    {
        id: "4",
        name: "ゴールド (Gold)",
        englishName: "Gold",
        definition: "ギャンブルやベンダーでの購入に使用されるトレード不可能な通貨。自動的に収集される。",
        category: "Item",
        tags: ["Currency", "Gold"],
        createdAt: new Date().toISOString()
    },
    {
        id: "5",
        name: "コア不安定化装置 (Core Destabiliser)",
        englishName: "Core Destabiliser",
        definition: "ブリーチ・リーグにおいて、ブリーチを閉じる、またはボスを出現させるために操作するオブジェクト。",
        category: "Mechanic",
        tags: ["Breach", "League Mechanic"],
        createdAt: new Date().toISOString()
    },
    {
        id: "6",
        name: "ヴァールインフューザー (Vaal Infuser)",
        englishName: "Vaal Infuser",
        definition: "マーシャル武器、キャスター武器またはアーマーの品質を向上させる。20%以上の品質をもたせることができるが、一定確率でアイテムをコラプト化する。",
        category: "Currency",
        tags: ["Fate of the Vaal", "Quality", "Corruption"],
        createdAt: new Date().toISOString()
    },
    {
        id: "7",
        name: "アーキテクトオーブ (Architects Orb)",
        englishName: "Architects Orb",
        definition: "コラプト状態の装備品またはジュエルアイテムを予測不可能に変化させるか、または破壊する。",
        category: "Currency",
        tags: ["Fate of the Vaal", "Corruption", "Crafting"],
        createdAt: new Date().toISOString()
    },
    {
        id: "8",
        name: "古代のインフューザー (Ancient Infuser)",
        englishName: "Ancient Infuser",
        definition: "先人の石板を予測不可能に変化させる。",
        category: "Currency",
        tags: ["Fate of the Vaal", "Crafting"],
        createdAt: new Date().toISOString()
    },
    {
        id: "9",
        name: "抽出のオーブ (Orb of Extraction)",
        englishName: "Orb of Extraction",
        definition: "装備品アイテムを破壊し、それにソケットされているオーグメントを取り戻す。",
        category: "Currency",
        tags: ["Fate of the Vaal", "Socket", "Crafting"],
        createdAt: new Date().toISOString()
    },
    {
        id: "10",
        name: "コラプトの結晶 (Crystallised Corruption)",
        englishName: "Crystallised Corruption",
        definition: "コラプト状態のスキルジェムを予測不可能に変化させるか、または破壊する。",
        category: "Currency",
        tags: ["Fate of the Vaal", "Gem", "Corruption"],
        createdAt: new Date().toISOString()
    },
    {
        id: "11",
        name: "ヴァール培養のオーブ (Vaal Cultivation Orb)",
        englishName: "Vaal Cultivation Orb",
        definition: "コラプト状態のヴァールユニークを変化させ、最大2個のモッドを置き換える。他の種類のユニークアイテムは代わりに同じアイテムクラスのランダムなユニークアイテムに変化し、コラプト状態になる。",
        category: "Currency",
        tags: ["Fate of the Vaal", "Unique", "Crafting"],
        createdAt: new Date().toISOString()
    },
    {
        id: "12",
        name: "キポラトルの命題 (Quipolatls Thesis)",
        englishName: "Quipolatls Thesis",
        definition: "古代のソウルコア。すべての古代のオーグメントは共有制限1を持つ。",
        category: "Item",
        tags: ["Fate of the Vaal", "Soul Core"],
        createdAt: new Date().toISOString()
    },
    {
        id: "13",
        name: "ジクアニの命題 (Jiquanis Thesis)",
        englishName: "Jiquanis Thesis",
        definition: "古代のソウルコア。すべての古代のオーグメントは共有制限1を持つ。",
        category: "Item",
        tags: ["Fate of the Vaal", "Soul Core"],
        createdAt: new Date().toISOString()
    },
    {
        id: "14",
        name: "グアテリッツィの命題 (Guatelitzis Thesis)",
        englishName: "Guatelitzis Thesis",
        definition: "古代のソウルコア。すべての古代のオーグメントは共有制限1を持つ。",
        category: "Item",
        tags: ["Fate of the Vaal", "Soul Core"],
        createdAt: new Date().toISOString()
    },
    {
        id: "15",
        name: "シタクアロトルの命題 (Citaqualotls Thesis)",
        englishName: "Citaqualotls Thesis",
        definition: "古代のソウルコア。すべての古代のオーグメントは共有制限1を持つ。",
        category: "Item",
        tags: ["Fate of the Vaal", "Soul Core"],
        createdAt: new Date().toISOString()
    },
    {
        id: "16",
        name: "ヴァールサイフォナー (Vaal Siphoner)",
        englishName: "Vaal Siphoner",
        definition: "ヴァールサイフォナーを持つアイテムは、完了するために一定回数のキルを必要とする。完了すると、アイテムのランダムなモッドのティアがダウングレードされ、他のモッドの数値が向上する。",
        category: "Item",
        tags: ["Fate of the Vaal", "Mechanic"],
        createdAt: new Date().toISOString()
    },
    {
        id: "17",
        name: "物理ダメージ (Physical Damage)",
        englishName: "Physical Damage",
        definition: "物理ダメージは5つあるダメージ属性の1つである。最も一般的なダメージ属性で耐性ではなく唯一アーマーで軽減される。",
        category: "Mechanic",
        tags: ["Damage Type", "Physical"],
        createdAt: new Date().toISOString()
    },
    {
        id: "18",
        name: "火ダメージ (Fire Damage)",
        englishName: "Fire Damage",
        definition: "火ダメージは5種類あるダメージ属性の1種である。火耐性により軽減される。火ダメージヒットは、与えたダメージに基づいて可燃性を付与し、そのデバフは発火確率を付与する。",
        category: "Mechanic",
        tags: ["Damage Type", "Fire", "Elemental"],
        createdAt: new Date().toISOString()
    },
    {
        id: "19",
        name: "冷気ダメージ (Cold Damage)",
        englishName: "Cold Damage",
        definition: "冷気ダメージは5種類あるダメージ属性の1種である。冷気耐性により軽減される。冷気ダメージのヒットは冷却を付与し、凍結を蓄積するが、ヘビースタンを蓄積することができない。",
        category: "Mechanic",
        tags: ["Damage Type", "Cold", "Elemental"],
        createdAt: new Date().toISOString()
    },
    {
        id: "20",
        name: "雷ダメージ (Lightning Damage)",
        englishName: "Lightning Damage",
        definition: "雷ダメージは5種類あるダメージ属性の1種である。雷耐性により軽減される。雷ダメージのヒットは一定確率で感電を付与し、その確率は与えた雷ダメージ量に基づく。",
        category: "Mechanic",
        tags: ["Damage Type", "Lightning", "Elemental"],
        createdAt: new Date().toISOString()
    },
    {
        id: "21",
        name: "混沌ダメージ (Chaos Damage)",
        englishName: "Chaos Damage",
        definition: "混沌ダメージは5種類あるダメージ属性の1種である。混沌耐性により軽減される。受けたダメージ量の二倍のエナジーシールドを取り除く。",
        category: "Mechanic",
        tags: ["Damage Type", "Chaos"],
        createdAt: new Date().toISOString()
    },
    {
        id: "22",
        name: "アーマー (Armour)",
        englishName: "Armour",
        definition: "アーマーはヒットによるダメージを軽減する。デフォルトでは、アーマーは物理ダメージにだけ適用される。ダメージ軽減率はヒットダメージの大きさに比例しており、ヒットダメージが小さいほどより効果的に軽減できる。",
        category: "Stat",
        tags: ["Defense", "Physical"],
        createdAt: new Date().toISOString()
    },
    {
        id: "23",
        name: "回避力 (Evasion)",
        englishName: "Evasion",
        definition: "回避力は敵のヒットによるダメージを無効化する確率を付与し、ヒットをそもそも受けなくする。最終的な回避率は攻撃者の命中力にも依存している。",
        category: "Stat",
        tags: ["Defense"],
        createdAt: new Date().toISOString()
    },
    {
        id: "24",
        name: "エナジーシールド (Energy Shield)",
        englishName: "Energy Shield",
        definition: "エナジーシールドは代わりにダメージを受けることでライフを保護する。短い時間エナジーシールドを失わなければ、エナジーシールドは高速でリチャージする。混沌ダメージは二倍のエナジーシールドを取り除く。",
        category: "Stat",
        tags: ["Defense"],
        createdAt: new Date().toISOString()
    },
    {
        id: "25",
        name: "ブロック (Block)",
        englishName: "Block",
        definition: "敵からのストライクまたは投射物をブロックすることで完全にダメージを防ぐことができる。ブロックしたヒットからもスタンを受ける。",
        category: "Mechanic",
        tags: ["Defense", "Block"],
        createdAt: new Date().toISOString()
    },
    {
        id: "26",
        name: "出血 (Bleeding)",
        englishName: "Bleeding",
        definition: "出血は、状態異常の一種で、物理継続ダメージを与え、デフォルトで5秒間持続する。出血によるダメージはエナジーシールドをバイパスする。移動中の対象には追加ダメージを与える。",
        category: "Mechanic",
        tags: ["Ailment", "Physical", "DoT"],
        createdAt: new Date().toISOString()
    },
    {
        id: "27",
        name: "発火 (Ignite)",
        englishName: "Ignite",
        definition: "発火は、状態異常の一種で、火継続ダメージを与え、デフォルトで4秒間持続する。",
        category: "Mechanic",
        tags: ["Ailment", "Fire", "DoT", "Elemental"],
        createdAt: new Date().toISOString()
    },
    {
        id: "28",
        name: "冷却 (Chill)",
        englishName: "Chill",
        definition: "冷却は、状態異常の一種で、影響を受けた対象を減速させる。",
        category: "Mechanic",
        tags: ["Ailment", "Cold", "Elemental", "Debuff"],
        createdAt: new Date().toISOString()
    },
    {
        id: "29",
        name: "凍結 (Freeze)",
        englishName: "Freeze",
        definition: "凍結は、状態異常の一種で、対象の行動を完全に停止させる。冷気ダメージによって引き起こされる。",
        category: "Mechanic",
        tags: ["Ailment", "Cold", "Elemental", "CC"],
        createdAt: new Date().toISOString()
    },
    {
        id: "30",
        name: "感電 (Shock)",
        englishName: "Shock",
        definition: "感電は、状態異常の一種で、対象が受けるダメージを増加させる。雷ダメージによって引き起こされる。",
        category: "Mechanic",
        tags: ["Ailment", "Lightning", "Elemental", "Debuff"],
        createdAt: new Date().toISOString()
    },
    {
        id: "31",
        name: "毒 (Poison)",
        englishName: "Poison",
        definition: "毒は、状態異常の一種で、混沌継続ダメージを与え、デフォルトで2秒間持続する。毒のダメージはエナジーシールドをバイパスする。スタック可能。",
        category: "Mechanic",
        tags: ["Ailment", "Chaos", "DoT"],
        createdAt: new Date().toISOString()
    },
    {
        id: "32",
        name: "筋力 (Strength)",
        englishName: "Strength",
        definition: "筋力は、アーマーを付与するほとんどの防具、および近接武器や近接スキルを装備するために必要な能力値である。筋力1ごとにライフ+2を付与する。",
        category: "Stat",
        tags: ["Attribute", "Strength"],
        createdAt: new Date().toISOString()
    },
    {
        id: "33",
        name: "器用さ (Dexterity)",
        englishName: "Dexterity",
        definition: "器用さは、回避力を付与するほとんどの防具、およびさまざまな遠距離武器や遠距離スキルを装備するために必要な能力値である。器用さ1ごとに命中力+8を付与する。",
        category: "Stat",
        tags: ["Attribute", "Dexterity"],
        createdAt: new Date().toISOString()
    },
    {
        id: "34",
        name: "知性 (Intelligence)",
        englishName: "Intelligence",
        definition: "知性は、エナジーシールドを付与するほとんどの防具、およびさまざまなスペル武器やスペルスキルを装備するために必要な能力値である。知性1ごとにマナ+2を付与する。",
        category: "Stat",
        tags: ["Attribute", "Intelligence"],
        createdAt: new Date().toISOString()
    },
    {
        id: "35",
        name: "命中力 (Accuracy)",
        englishName: "Accuracy",
        definition: "命中力はアタックで対象をヒットできるかの計算に使用され、その命中確率を決定するために対象の回避力と照合される。距離によるペナルティが存在する。",
        category: "Stat",
        tags: ["Offense", "Attack"],
        createdAt: new Date().toISOString()
    },
    {
        id: "36",
        name: "ヘビースタン (Heavy Stun)",
        englishName: "Heavy Stun",
        definition: "ヘビースタンは対象のスタンバーが満たされた時に発生し、その現在行っているアクションは妨害され、短時間行動できなくさせる。",
        category: "Mechanic",
        tags: ["Mechanic", "CC"],
        createdAt: new Date().toISOString()
    }
]

export const getAllTags = () => {
    const tags = new Set<string>()
    MOCK_TERMS.forEach(term => {
        term.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
}
