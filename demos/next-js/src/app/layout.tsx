import type { Metadata } from "next";
import "@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/css/styles.css";

export const metadata: Metadata = {
    title: "Next Demo - Home",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
