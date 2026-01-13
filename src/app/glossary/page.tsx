import { Suspense } from "react"
import { GlossaryPage } from "@/components/glossary/GlossaryPage"

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GlossaryPage />
        </Suspense>
    );
}
