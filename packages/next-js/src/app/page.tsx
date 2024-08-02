
import ButtonWithCounter from "@/components/ButtonWithCounter";
import NjwdsWarningAlertServer from "@/components/NjwdsAlertServer";
import NjwdsBannerServer from "@/components/NjwdsBannerServer";
import ReactButtonWithCounter from "@/components/ReactButtonWithCounter";

export default function Home() {
  return (
    <main>
      <h1>React Exports Next</h1>
      <h2>Banner</h2>
      <h3>Static</h3>
      <njwds-banner></njwds-banner>
      <h3>React</h3>
      <NjwdsBannerServer />
      <h2>Alert</h2>
      <h3>Static</h3>
      <njwds-alert type="warning" headerText="Warning">
        <span>Lorem ipsum dolor sit amet, <a>consectetur adipiscing</a> elit, sed do eiusmod.</span >
      </njwds-alert>
      <h3>React</h3>
      <NjwdsWarningAlertServer />

      <h2>Button</h2>
      <h3>Static</h3>
      <ButtonWithCounter>Add to Count</ButtonWithCounter>
      <h3>React</h3>
      <ReactButtonWithCounter>Add to Count</ReactButtonWithCounter>
    </main>
  );
}