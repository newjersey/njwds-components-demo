"use client"
import { NjwdsAlert } from "@newjersey/njwds-components";

export default function ReactNjwdsWarningAlertServer() {
    return (
        <NjwdsAlert type="warning" header-text="Warning">
            <span>Lorem ipsum dolor sit amet, <a>consectetur adipiscing</a> elit, sed do eiusmod.</span >
        </NjwdsAlert>)
}