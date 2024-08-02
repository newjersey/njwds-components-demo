import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@newjersey/stencil-react-export/packages/stencil-library/dist/stencil-library/css/styles.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
