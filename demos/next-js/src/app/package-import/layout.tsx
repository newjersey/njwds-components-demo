import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next demo - package import example",
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
