import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'essence-rates.json')

// Helper to ensure data file exists
function ensureDataFile() {
    if (!fs.existsSync(path.dirname(DATA_FILE_PATH))) {
        fs.mkdirSync(path.dirname(DATA_FILE_PATH), { recursive: true })
    }
    if (!fs.existsSync(DATA_FILE_PATH)) {
        fs.writeFileSync(DATA_FILE_PATH, JSON.stringify({}), 'utf-8')
    }
}

export async function GET() {
    try {
        ensureDataFile()
        const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8')
        const data = JSON.parse(fileContent)
        return NextResponse.json(data)
    } catch (error) {
        console.error('Error reading essence rates:', error)
        return NextResponse.json({}, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        ensureDataFile()
        fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(body, null, 2), 'utf-8')
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error saving essence rates:', error)
        return NextResponse.json({ error: 'Failed to save data' }, { status: 500 })
    }
}
