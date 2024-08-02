"use client";
import { useState, type ReactNode } from "react";

export default function ButtonWithCounter(props: { children: ReactNode }) {
    const [count, setCount] = useState(0)

    return (
        <span>
            <njwds-button onClick={() => setCount(count + 1)}>{props.children}</njwds-button>
            <span>Count: {count} </span>
        </span>)
}