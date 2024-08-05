# Astro Demo

## How to run the example

1. Make sure you're in the `demos/astro` directory.
2. Run `npm install`
3. Run `npm run dev`

A full example of how to use both web and React components can be found in [`src/pages/index.astro`](https://github.com/newjersey/njwds-components-demo/blob/main/demos/astro/src/pages/index.astro).

## Using styles

Whether you want to use NJWDS web or React components, add styles by importing the NJWDS stylesheet into the front matter for every Astro page.

```astro
---
import "@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/css/styles.css";
---
```

The CSS import has been placed in [`src/layouts/Layout.astro`](https://github.com/newjersey/njwds-components-demo/blob/main/demos/astro/src/layouts/Layout.astro) in this example. Each Astro page can then be wrapped in a `<Layout>` component so the styles are accessible on all pages.

## Using web components

There are two options for importing web components in Astro:

1. Adding a component-specific package import
2. Registering all components using `defineCustomElements()`

### Adding a component-specific package import

Import the specific component you want within a`<script>` tag in the `.astro` file. This allows you to easy colocate the component import with its usage.

```astro
<script>
  import "@newjersey/njwds-components/packages/stencil-library/dist/components/njwds-alert";
</script>
```

An example usage be found in [src/pages/package-import.astro](https://github.com/newjersey/njwds-components-demo/blob/main/demos/astro/src/layouts/Layout.astro) (see the page on the dev server at http://localhost:4321/package-import).

### Registering web components using `defineCustomElements`

Alternatively, you can make all web components accessible at once by calling `defineCustomElements()` within a `<script>` tag.

```HTML
    <script>
      import { defineCustomElements } from "@newjersey/njwds-components/packages/stencil-library/loader";
      defineCustomElements();
    </script>
```

Like the global stylesheet, the script has been added to [`src/layouts/Layout.astro`](https://github.com/newjersey/njwds-components-demo/blob/main/demos/astro/src/layouts/Layout.astro) so it can easily made accessible to each page.

**Note:** This will also make all React components available. Therefore, if you would like to use both React and web components within your project, using `defineCustomElements` may be preferred.

## Using React components

To use React components, first register all NJWDS components using `definCustomElements` as described in the section above.

### Load assets

To load assets, copy the `img` folder from `/node_modules/@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/img` into the `public` folder.

### Importing components

To import a specific React component, add an import statement from `@newjersey/njwds-components` in the front matter of an `.astro` file.

```astro
---
import { NjwdsAlert, NjwdsBanner } from "@newjersey/njwds-components";
---
```

### Adding the `client:only` directive

Since the React component's underlying web component has to run client-side, always add the `client:only` directive when using an NJWDS React component within an Astro component.

```html
<NjwdsBanner client:only="react" />
```

If you're using an NJWDS React component that's nested within other React component(s), you must add the `client:only` directive to the top-level React component that is imported into the `.astro` file.
