"use client"

import { defineCustomElements } from "@newjersey/njwds-components/packages/stencil-library/loader"
import { useEffect } from "react"


export default function DefineCustomElementsLoader() {
    useEffect(() => {
        defineCustomElements()
    }, [])

    return <></>
}