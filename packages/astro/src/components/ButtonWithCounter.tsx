import { defineCustomElements, NjwdsButton } from "@newjersey/stencil-react-export";
import { useState, type ReactNode } from "react";

// defineCustomElements()

export default function ButtonWithCounter({ children }: { children: ReactNode }) {
    const [count, setCount] = useState(0)

    return (
        <span>
            <NjwdsButton onClick={() => setCount(count + 1)}>{children}</NjwdsButton>
            <span>Count: {count} </span>
        </span>)
}