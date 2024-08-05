# Vanilla HTML Demo

## Running the example

Open `index.html` file in your browser or open it in a local development server (e.g. using the [VSCode Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).

## Adding styles

To add NJWDS styles, add a `<link>` tag referencing NJWDS stylesheet served on unpkg.

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/css/styles.css"
/>
```

## Adding web components

Add a `<script>` tag referencing the entry script served on unpkg.

```html
<script
  type="module"
  src="https://unpkg.com/@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/stencil-library.esm.js"
></script>
```

## Loading a specific version

If you would like to load a specific version of `njwds-components`, you can add a version number to the unpkg link.

```
https://unpkg.com/@newjersey/njwds-components@0.1.1/packages/stencil-library/dist/stencil-library/stencil-library.esm.js
```
