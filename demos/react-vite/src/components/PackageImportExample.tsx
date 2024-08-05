import "@newjersey/njwds-components/packages/stencil-library/dist/components/njwds-alert";

export default function PackageImportExample() {
    return (
        <>
            <h1>React (vite) demo - package import example</h1>
            <h2>Alert Component</h2>
            <h3>Static</h3>
            <njwds-alert type="warning">
                <span
                >Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing</a> elit, sed
                    do eiusmod.
                </span>
            </njwds-alert>
        </>
    )
}