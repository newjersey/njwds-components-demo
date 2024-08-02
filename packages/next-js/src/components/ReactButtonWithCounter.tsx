"use client"

import { NjwdsButton } from "@newjersey/stencil-react-export";
import { useState, type ReactNode } from "react";

export default function ReactButtonWithCounter(props: { children: ReactNode }) {
    const [count, setCount] = useState(0)

    return (
        <span>
            <NjwdsButton onClick={() => setCount(count + 1)}>{props.children}</NjwdsButton>
            <span>Count: {count} </span>
        </span>)
}