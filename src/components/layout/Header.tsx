import Link from "next/link"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center container mx-auto px-4">
                <div className="mr-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold sm:inline-block text-xl tracking-tight bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
                            Path of Exile 2 Info Hub
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
