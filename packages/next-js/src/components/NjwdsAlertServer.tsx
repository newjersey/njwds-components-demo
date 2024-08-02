"use client"
import { NjwdsAlert } from "@newjersey/stencil-react-export";

export default function NjwdsWarningAlertServer() {
    return (
        <NjwdsAlert type="warning" header-text="Warning">
            <span>Lorem ipsum dolor sit amet, <a>consectetur adipiscing</a> elit, sed do eiusmod.</span >
        </NjwdsAlert>)
}