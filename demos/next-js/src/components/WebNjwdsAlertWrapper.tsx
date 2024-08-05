"use client"
import "@newjersey/njwds-components/packages/stencil-library/dist/components/njwds-alert";

export default function WebNjwdsWarningAlert() {
    return (
        <njwds-alert type="warning" header-text="Warning">
            <span>Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing</a> elit, sed do eiusmod.</span >
        </njwds-alert>)
}