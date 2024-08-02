import "@newjersey/stencil-react-export/packages/stencil-library/dist/components/njwds-alert"

function App() {
  return (
    <>
      <h1>Static Web Components Example</h1>

      <h2>Alert</h2>
      <njwds-alert type="warning">
        <b slot="header">Warning</b>
        <span>Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing</a> elit, sed do eiusmod.</span>
      </njwds-alert>
    </>
  )
}

export default App
