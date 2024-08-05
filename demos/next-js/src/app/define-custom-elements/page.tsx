import NjwdsAlertWrapper from "@/components/ReactNjwdsAlertWrapper"; import WebNjwdsWarningAlert from "@/components/WebNjwdsAlertWrapper";
;
import Link from "next/link";

export default function DefineCustomElementsPage() {
    return (
        <>
            <header>
                <nav>
                    <Link href="/">Back home</Link>
                </nav>
            </header>
            <main>
                <h1>Next demo - defineCustomElements Example</h1>
                <h2>Alert Component</h2>
                <h3>Static</h3>
                <njwds-alert type="warning">
                    <span
                    >Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing</a> elit, sed
                        do eiusmod.
                    </span>
                </njwds-alert>
                <h3>React</h3>
                <NjwdsAlertWrapper />
            </main>
        </>
    )
}