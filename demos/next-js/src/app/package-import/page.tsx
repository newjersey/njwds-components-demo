import WebNjwdsWarningAlert from "@/components/WebNjwdsAlertWrapper";
import Link from "next/link";

export default function PackageImportPage() {
    return (
        <>
            <header>
                <nav>
                    <Link href="/">Back home</Link>
                </nav>
            </header>
            <main>
                <h1>Next demo - package import example</h1>
                <h2>Alert Component</h2>
                <h3>Static</h3>
                <WebNjwdsWarningAlert />
            </main>
        </>
    )
}