"use client"

import { defineCustomElements } from "@newjersey/stencil-react-export/packages/stencil-library/loader"
import { useEffect } from "react"


export default function DefineCustomElementsLoader() {
    useEffect(() => {
        defineCustomElements()
    }, [])

    return <></>
}