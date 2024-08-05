import type { Metadata } from "next";
import DefineCustomElementsLoader from "@/components/DefineCustomElementsLoader";

export const metadata: Metadata = {
  title: "Next demo - defineCustomElements Example",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <DefineCustomElementsLoader />
      <body>{children}</body>
    </html>
  );
}
