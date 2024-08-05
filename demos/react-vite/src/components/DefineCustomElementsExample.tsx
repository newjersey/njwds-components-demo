import { defineCustomElements, NjwdsAlert } from "@newjersey/njwds-components"
import { useEffect } from "react"

export default function DefineCustomElementsExample() {
    useEffect(() => {
        defineCustomElements()
    })

    return (
        <>
            <h1>React (vite) demo - defineCustomElements Example</h1>
            <h2>Alert Component</h2>
            <h3>Static</h3>
            <njwds-alert type="warning">
                <span
                >Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing</a> elit, sed
                    do eiusmod.
                </span>
            </njwds-alert>
            <h3>React</h3>
            <NjwdsAlert type="warning">
                <span
                >Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing</a> elit, sed
                    do eiusmod.
                </span>
            </NjwdsAlert>
        </>
    )
}