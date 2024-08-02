# Astro Demo

## How to run the example

1. Make sure you're in the `demos/astro` directory.
2. Run `npm install`
3. Run `npm run dev`

## How to use njwds-components in Astro

### General setup

Whether you want to use NJWDS web or React components, do the following steps.

#### Register web components

Add the following script element to each Astro page.

```HTML
    <script>
      import { defineCustomElements } from "@newjersey/stencil-react-export/packages/stencil-library/loader";
      defineCustomElements();
    </script>
```

In this example, the script has been added to `src/layouts/Layout.astro`, which
we can wrap each Astro page in.

#### Import styles

Add styles by importing the NJWDS stylesheet into the front matter for every Astro page.

```ts
---
import "@newjersey/stencil-react-export/packages/stencil-library/dist/stencil-library/css/styles.css";
---
```

Like the `defineCustomElements` script, the CSS import has been placed in `src/layouts/Layout.astro` in this example.

### React Components

NJWDS React components can be imported from `@newjersey/stencil-react-export`

```ts
---
import { NjwdsAlert, NjwdsBanner } from "@newjersey/stencil-react-export";
---
```

When using an NJWDS React component within an Astro component, make sure to add the `client:only` directive.

```html
<NjwdsBanner client:only="react" />
```

A full example of how to use both web and React components can be found in `src/pages/index.astro`.
